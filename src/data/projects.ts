export type Project = {
  title: string;
  description: string;
  stack: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Next.js",
    description:
      "Ce site : App Router, CSS centralisé, formulaire contact via Route Handler.",
    stack: "Next.js · TypeScript · CSS",
  },
  {
    title: "API légère",
    description: "Exemple fictif d’endpoints JSON pour un outil interne.",
    stack: "Node · REST",
  },
  {
    title: "Dashboard admin",
    description: "Exemple fictif de back-office avec auth et CRUD.",
    stack: "Next.js · PostgreSQL",
  },
];
