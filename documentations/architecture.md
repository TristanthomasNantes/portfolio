# Portfolio PHP — articulation technique

Site de test mono-page en PHP sans framework.

## Fichiers

| Fichier | Rôle |
|---------|------|
| `index.php` | Page unique (hero, à propos, projets, contact) |
| `contact.php` | Traitement POST du formulaire |
| `style.css` | Styles mutualisés |
| `includes/bootstrap.php` | Session, CSRF, échappement HTML, flash |
| `includes/projects.php` | Données projets (tableau PHP) |
| `storage/` | Logs contact (accès web bloqué via `.htaccess`) |

## Flux contact

1. `index.php` génère un token CSRF en session.
2. `contact.php` n’accepte que `POST`, vérifie CSRF (`hash_equals`), valide nom / email / message.
3. En mode test, le message est append dans `storage/contact.log` (pas d’envoi mail).
4. Redirection vers `index.php#contact` avec message flash.

## Sécurité (basique)

- `declare(strict_types=1)`
- Échappement XSS via `e()` (`htmlspecialchars`)
- CSRF sur le formulaire
- Cookies session `httponly` + `SameSite=Lax`
- Validation longueur + `filter_var` email
- Logs hors lecture web (`storage/.htaccess`)

## Lancer en local

```bash
php -S localhost:8080 -t .
```

Ouvrir http://localhost:8080
