import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#top">
          Tristan Thomas
        </a>
        <nav className="nav" aria-label="Navigation principale">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-brand">Tristan Thomas</p>
            <h1>Développeur web</h1>
            <p className="hero-lead">
              Sites et apps Next.js simples, propres et maintenables.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Voir les projets
              </a>
              <a className="btn btn-ghost" href="#contact">
                Me contacter
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-inner">
            <h2>À propos</h2>
            <p>
              Portfolio en Next.js (App Router). Stack légère : page serveur,
              CSS mutualisé, formulaire contact via Route Handler sécurisé.
            </p>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-inner">
            <h2>Projets</h2>
            <p className="section-lead">
              Quelques exemples pour valider le rendu.
            </p>
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.title} className="project-item">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-inner">
            <h2>Contact</h2>
            <p className="section-lead">
              Envoie un message de test — validation côté API, pas d’envoi mail
              en prod pour l’instant.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {year} Tristan Thomas — portfolio</p>
      </footer>
    </>
  );
}
