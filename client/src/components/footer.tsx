import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en React + Vite
          </p>
          <p>
            {currentYear} Saliha Debbeche. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
