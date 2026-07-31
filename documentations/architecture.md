# Portfolio Next.js — articulation technique

Site portfolio mono-page en Next.js (App Router), prêt pour Vercel.

## Fichiers

| Fichier | Rôle |
|---------|------|
| `src/app/page.tsx` | Page unique (hero, à propos, projets, contact) |
| `src/app/layout.tsx` | Layout, fonts, metadata |
| `src/app/style.css` | Styles mutualisés |
| `src/app/api/contact/route.ts` | Route Handler POST du formulaire |
| `src/components/ContactForm.tsx` | Formulaire client (fetch + états) |
| `src/components/images-badge-demo-2.tsx` | Demo Aceternity Images Badge (hero) |
| `src/components/ui/images-badge.tsx` | Composant Images Badge (shadcn/Aceternity) |
| `src/data/projects.ts` | Données projets |
| `src/app/globals.css` | Tailwind + tokens shadcn |
| `src/app/style.css` | Styles portfolio mutualisés |

## Flux contact

1. `ContactForm` envoie un JSON vers `POST /api/contact`.
2. L’API refuse les corps invalides, valide nom / email / message.
3. Champ honeypot `company` : si rempli → succès feint (anti-bot).
4. Mode test : log serveur, pas d’envoi mail.

## Sécurité (basique)

- Validation longueur + format email côté serveur
- Honeypot anti-spam
- Pas d’exécution de HTML utilisateur (React échappe par défaut)
- Pas de secrets dans le code

## Scripts

```bash
npm run dev    # http://localhost:3000
npm run build
npm start
```

## Vercel

- **Framework Preset** : Next.js
- **Build Command** : `next build` (défaut)
- **Output Directory** : laisser vide (géré par Next.js)
- **Install Command** : `npm install` (défaut)
