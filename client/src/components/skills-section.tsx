// src/sections/skills-section.tsx
import React from "react";
import {
  SiReact,
  SiVite,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiJest,
  SiNodedotjs,
  SiTailwindcss,
  SiNpm,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: "Débutant" | "Intermédiaire" | "Avancé";
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Langages",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        level: "Avancé",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500" />,
        level: "Intermédiaire",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-500" />,
        level: "Avancé",
      },
      {
        name: "CSS3",
        icon: <SiCss3 className="text-sky-500" />,
        level: "Intermédiaire",
      },
      {
        name: "PHP",
        icon: <SiPhp className="text-indigo-500" />,
        level: "Intermédiaire",
      },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      {
        name: "React",
        icon: <SiReact className="text-cyan-400" />,
        level: "Intermédiaire",
      },
      {
        name: "Vite",
        icon: <SiVite className="text-purple-400" />,
        level: "Intermédiaire",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
        level: "Intermédiaire",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />,
        level: "Débutant",
      },
    ],
  },
  {
    title: "Outils",
    skills: [
      {
        name: "Git",
        icon: <SiGit className="text-orange-500" />,
        level: "Intermédiaire",
      },
      {
        name: "GitHub",
        icon: <SiGithub className="text-zinc-100" />,
        level: "Intermédiaire",
      },
      {
        name: "VS Code",
        icon: (
          <div className="w-5 h-5 rounded-md bg-sky-500/80 flex items-center justify-center text-[10px] font-bold text-white">
            VS
          </div>
        ),
        level: "Avancé",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-sky-700" />,
        level: "Intermédiaire",
      },
      {
        name: "phpMyAdmin",
        icon: (
          <div className="w-5 h-5 rounded-sm bg-orange-500/80 flex items-center justify-center text-[10px] font-bold text-white">
            php
          </div>
        ),
        level: "Intermédiaire",
      },
      {
        name: "XAMPP",
        icon: (
          <div className="w-5 h-5 rounded-sm bg-orange-600/80 flex items-center justify-center text-[10px] font-bold text-white">
            X
          </div>
        ),
        level: "Intermédiaire",
      },
      {
        name: "npm",
        icon: <SiNpm className="text-red-500" />,
        level: "Intermédiaire",
      },
      {
        name: "Jest",
        icon: <SiJest className="text-red-500" />,
        level: "Débutant",
      },
    ],
  },
];

const levelToWidth: Record<Skill["level"], string> = {
  Débutant: "w-2/5",
  Intermédiaire: "w-3/5",
  Avancé: "w-5/6",
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 section-fade">
      {/* Fond dev (gradient + grille) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 section-container">
        <div className="max-w-2xl mb-10 space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Expertise technique
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Compétences & Technologies
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Une vue synthétique des langages, frameworks et outils utilisés
            dans mes labs et projets front‑end.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="card-tilt hover-elevate bg-card/80 border-border/60"
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-background/70 border border-border/60 overflow-hidden">
                      <div
                        className={`h-full ${levelToWidth[skill.level]} bg-gradient-to-r from-primary via-accent to-primary`}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
