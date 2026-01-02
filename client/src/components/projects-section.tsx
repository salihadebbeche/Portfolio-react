// src/sections/projects-section.tsx
import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 2,
    title: "Lab 2: Git & GitHub",
    description:
      "Ce laboratoire a pour objectif d’initier les étudiants à l’utilisation de Git comme système de gestion de versions et à la publication de projets sur GitHub/GitLab.",
    techStack: ["Git", "GitHub / GitLab", "Terminal / Git Bash"],
    githubUrl: "https://github.com/salihadebbeche/caw-labs/tree/lab2-setup",
  },
  {
    id: 3,
    title: "Lab 3: Node.js et NPM",
    description:
      "Ce lab présente les bases de Node.js et l’utilisation de NPM à travers des scripts JavaScript exécutés côté serveur",
    techStack: ["JavaScript", "Node.js", "NPM"],
    githubUrl: "https://github.com/salihadebbeche/caw-labs/tree/lab7-setup/lab3",
    
  },
  {
    id: 4,
    title: "Lab 4: JavaScript avec Jest",
    description:
      "Ce lab introduit les tests unitaires en JavaScript en utilisant Jest afin de vérifier la fiabilité et le bon fonctionnement des fonctions.",
    techStack: ["JavaScript", "Node.js", "NPM", "Jest"],
    githubUrl:
      "https://github.com/salihadebbeche/caw-labs/tree/lab4-setup/Lab4_Jest",
  },
  {
    id: 5,
    title: "Lab 5: ReactJS",
    description:
      "Ce lab permet de découvrir les composants React et la gestion des événements, des états et des props à travers des exercices pratiques",
    techStack: ["JavaScript (ES6)", "ReactJS", "JSX", "Node.js & NPM"],
    githubUrl:
      "https://github.com/salihadebbeche/caw-labs/tree/lab5-setup/lab5-react",
    
  },
  {
    id: 7,
    title: "Lab 7: Kanban Board",
    description:
      "Une application Kanban inspirée de Trello permettant de gérer des tâches selon différents états.",
    techStack: ["React.js", "Vite", "CSS / CSS Framework"],
    githubUrl:
      "https://github.com/salihadebbeche/caw-labs/tree/lab7-setup/kanban-board",
    
  },
  {
    id: 8,
    title: "PFE Licence (Système de pointage)",
    description:
      "Ce projet vise à développer une application web de pointage permettant de gérer la présence des utilisateurs de manière sécurisée et organisée.",
    techStack: ["PHP", "MySQL", "HTML / CSS / JavaScript"],
    githubUrl:
      "https://github.com/salihadebbeche/pfe-licence",
    
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 section-fade">
      {/* Fond dev (gradient + grille) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="relative z-10 section-container">
        <div className="max-w-2xl mb-10 space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Mes réalisations
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Projets & Labs
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Découvrez les projets que j&apos;ai réalisés durant ce semestre
            dans le cadre du cours Web Application Design.
          </p>
        </div>

        {/* Grille de cards façon modèle, côte à côte */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-card/95 border-border/80 text-foreground card-tilt hover-elevate h-full"
            >
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                {/* Top : icône + titre + liens */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl border border-border/60">
                      <Folder className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="relative inline-block">
                        <span className="relative z-10 text-lg md:text-xl font-bold">
                          {project.title}
                        </span>
                        {/* surlignage coloré sous le titre */}
                        <span
                          className={`absolute left-0 bottom-0 h-2 w-full ${
                            index % 3 === 0
                              ? "bg-pink-500"
                              : index % 3 === 1
                              ? "bg-blue-500"
                              : "bg-violet-500"
                          }`}
                        />
                      </div>
                      <p className="mt-2 text-[11px] text-muted-foreground">
                        Lab {project.id.toString().padStart(2, "0")} · Web
                        Application Design
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      asChild
                      className="hover-elevate"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="icon"
                        variant="ghost"
                        asChild
                        className="hover-elevate"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Description façon bloc <h3> */}
                <div className="font-mono text-xs md:text-sm text-muted-foreground mb-4">
                  <p className="text-[11px] text-muted-foreground mb-1">
                    &lt;h3&gt;
                  </p>
                  <p className="relative pl-6 leading-relaxed before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-border/70">
                    {project.description}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    &lt;/h3&gt;
                  </p>
                </div>

                {/* Tech stack */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[11px] border-primary/40 bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
