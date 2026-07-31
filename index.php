<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/bootstrap.php';
require_once __DIR__ . '/includes/projects.php';

$pageTitle = 'Tristan Thomas — Portfolio';
$csrfToken = csrf_token();
$flash = get_flash();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de Tristan Thomas — développeur web.">
    <title><?= e($pageTitle) ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="site-header">
        <a class="logo" href="#top">Tristan Thomas</a>
        <nav class="nav" aria-label="Navigation principale">
            <a href="#about">À propos</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main id="top">
        <section class="hero">
            <div class="hero-content">
                <p class="hero-brand">Tristan Thomas</p>
                <h1>Développeur web</h1>
                <p class="hero-lead">Sites et apps PHP simples, propres et maintenables.</p>
                <div class="hero-actions">
                    <a class="btn btn-primary" href="#projects">Voir les projets</a>
                    <a class="btn btn-ghost" href="#contact">Me contacter</a>
                </div>
            </div>
        </section>

        <section id="about" class="section about">
            <div class="section-inner">
                <h2>À propos</h2>
                <p>Portfolio de test en PHP. Stack légère : pages serveur, CSS mutualisé, formulaire sécurisé (CSRF + validation).</p>
            </div>
        </section>

        <section id="projects" class="section projects">
            <div class="section-inner">
                <h2>Projets</h2>
                <p class="section-lead">Quelques exemples pour valider le rendu.</p>
                <ul class="project-list">
                    <?php foreach ($projects as $project): ?>
                        <li class="project-item">
                            <h3><?= e($project['title']) ?></h3>
                            <p><?= e($project['description']) ?></p>
                            <p class="project-stack"><?= e($project['stack']) ?></p>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </section>

        <section id="contact" class="section contact">
            <div class="section-inner">
                <h2>Contact</h2>
                <p class="section-lead">Envoie un message de test — rien n’est envoyé en prod, juste une validation locale.</p>

                <?php if ($flash !== null): ?>
                    <p class="flash flash-<?= e($flash['type']) ?>" role="status"><?= e($flash['message']) ?></p>
                <?php endif; ?>

                <form class="contact-form" action="contact.php" method="post" novalidate>
                    <input type="hidden" name="csrf_token" value="<?= e($csrfToken) ?>">

                    <label for="name">Nom</label>
                    <input type="text" id="name" name="name" maxlength="100" required autocomplete="name">

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" maxlength="150" required autocomplete="email">

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" maxlength="2000" required></textarea>

                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <p>&copy; <?= date('Y') ?> Tristan Thomas — portfolio de test</p>
    </footer>
</body>
</html>
