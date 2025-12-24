// src/sections/hero-section.tsx
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import photoPort from "@/assets/photo_portfolio.jpg"; // ou "../assets/photo_port.jpg"

const typingPhrases = [
  "Junior Developer",
  "Front‑End Enthusiast",
  "React & TypeScript Lover",
];

export function HeroSection() {
  const scrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 md:py-28 section-fade"
    >
      {/* Fond global (gradient + grille + glow centre) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0 bg-grid animate-float-x" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Blobs lumineux supplémentaires */}
      <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />

      {/* Particules “code” */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden md:block">
        <div className="relative h-32">
          <span className="code-particle">{`const devGirl = { stack: ["React", "TypeScript", "TailwindCSS"] };`}</span>
          <span className="code-particle">{`npm run build && npm run preview`}</span>
          <span className="code-particle">{`git commit -m "feat: polish hero section"`}</span>
          <span className="code-particle">{`fetch("/api/projects").then(console.log);`}</span>
          <span className="code-particle">{`<Button className="btn-gradient">Deploy</Button>`}</span>
        </div>
      </div>

      <div className="relative z-10 section-container grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        {/* Colonne gauche : texte + CTA */}
        <div className="space-y-7">
          {/* Badges du haut */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-primary/90 hover-elevate">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible pour stage / projet
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Bienvenue sur mon portfolio
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Saliha Debbeche
            </h1>

            {/* Typing effect plus visible */}
            <div className="flex items-center gap-3 text-sm md:text-base text-accent-foreground/90">
              <span className="typing-text font-mono">
                {typingPhrases[0]}
              </span>
              <span className="typing-cursor">|</span>
              <span className="hidden md:inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary">
                <Terminal className="h-3 w-3" />
                Web Dev & STIC
              </span>
            </div>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
            Étudiante en Master 1 STIC, passionnée par le développement web
            moderne, les interfaces réactives et les expériences utilisateur
            soignées. Ce portfolio regroupe mes projets académiques, labs
            React et explorations front‑end.
          </p>

          {/* Tags de stack */}
          <div className="flex flex-wrap gap-2 text-xs">
            {["React", "TypeScript", "Tailwind CSS", "Vite", "Git / GitHub"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary/90 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={scrollToProjects}
              className="btn-gradient hover-elevate flex items-center gap-2"
            >
              Voir mes projets
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="hover-elevate border-primary/40 bg-background/80"
            >
              Me contacter
            </Button>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                href="https://github.com/salihadebbeche"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors hover-elevate"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/saliha-debbeche-0a58a83a2/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors hover-elevate"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:saliha.debbeche@univ-constantine.dz"
                className="hover:text-primary transition-colors hover-elevate"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* mini stats */}
          <div className="mt-2 grid grid-cols-3 gap-3 text-xs md:text-sm">
            <div className="rounded-2xl border border-border/60 bg-background/70 px-3 py-3 hover-elevate">
              <p className="text-xs text-muted-foreground">Labs React</p>
              <p className="text-lg font-semibold">5+</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/70 px-3 py-3 hover-elevate">
              <p className="text-xs text-muted-foreground">Projets web</p>
              <p className="text-lg font-semibold">7+</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/70 px-3 py-3 hover-elevate">
              <p className="text-xs text-muted-foreground">
                Années d&apos;études
              </p>
              <p className="text-lg font-semibold">3</p>
            </div>
          </div>
        </div>

        {/* Colonne droite : avatar + “terminal” */}
        <div className="relative flex justify-center md:justify-end">
          {/* cercle décoratif */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full border border-primary/40" />
          <div className="absolute -bottom-10 -left-4 h-16 w-16 rounded-xl border border-accent/40" />

          <div className="relative max-w-sm w-full space-y-4">
            {/* Carte avatar flottante */}
            <div className="relative rounded-3xl border border-primary/30 bg-card/85 p-6 shadow-xl animate-float hover-elevate">
              <div className="flex items-center gap-4">
                <Avatar className="w-52 h-52 md:w-64 md:h-64 ring-4 ring-primary/40 ring-offset-4 ring-offset-background shadow-xl shadow-primary/40 animate-float">
                  <AvatarImage src={photoPort} alt="Saliha Debbeche" />
                  <AvatarFallback className="text-5xl font-bold bg-primary text-primary-foreground">
                      SD 
                    </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-muted-foreground">Profil</p>
                  <p className="text-lg font-semibold">Front‑End dev</p>
                  <p className="text-xs text-muted-foreground">
                    Constantine · Algérie
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-background/60 px-3 py-2 border border-border/50">
                  <p className="text-muted-foreground">Focus</p>
                  <p className="font-medium">UI / UX</p>
                </div>
                <div className="rounded-xl bg-background/60 px-3 py-2 border border-border/50">
                  <p className="text-muted-foreground">Stack</p>
                  <p className="font-medium">React + TS</p>
                </div>
              </div>
            </div>

            {/* Carte “console” */}
            <div className="rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-lg hover-elevate">
              <div className="flex items-center justify-between border-b border-border/60 px-4 py-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px]">
                    devtools › portfolio.tsx
                  </span>
                </div>
                <Terminal className="h-3.5 w-3.5" />
              </div>
              <div className="px-4 py-3 font-mono text-[11px] md:text-[12px] text-muted-foreground space-y-1">
                <p>
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-sky-400">npx</span>{" "}
                  create-portfolio <span className="text-purple-300">saliha</span>
                </p>
                <p>
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-sky-400">stack</span>{" "}
                  ["React", "TypeScript", "TailwindCSS"]
                </p>
                <p>
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-sky-400">status</span>{" "}
                  <span className="text-emerald-300">"ready to collaborate"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche bas de page */}
      <div className="relative z-10 mt-10 flex justify-center">
        <button
          type="button"
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown className="h-4 w-4" />
          Faire défiler vers les projets
        </button>
      </div>
    </section>
  );
}
