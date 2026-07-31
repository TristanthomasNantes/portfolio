<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php#contact');
    exit;
}

$token = $_POST['csrf_token'] ?? null;
if (!csrf_is_valid(is_string($token) ? $token : null)) {
    set_flash('error', 'Session expirée. Réessaie.');
    header('Location: index.php#contact');
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || mb_strlen($name) > 100) {
    set_flash('error', 'Nom invalide.');
    header('Location: index.php#contact');
    exit;
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 150) {
    set_flash('error', 'Email invalide.');
    header('Location: index.php#contact');
    exit;
}

if ($message === '' || mb_strlen($message) > 2000) {
    set_flash('error', 'Message invalide.');
    header('Location: index.php#contact');
    exit;
}

// Mode test : pas d'envoi mail, on logue localement (hors webroot idéalement en prod).
$logDir = __DIR__ . '/storage';
if (!is_dir($logDir)) {
    mkdir($logDir, 0750, true);
}

$entry = sprintf(
    "[%s] %s <%s>%s%s%s",
    date('c'),
    $name,
    $email,
    PHP_EOL,
    $message,
    PHP_EOL . str_repeat('-', 40) . PHP_EOL
);

file_put_contents($logDir . '/contact.log', $entry, FILE_APPEND | LOCK_EX);

set_flash('success', 'Message enregistré (mode test).');
header('Location: index.php#contact');
exit;
