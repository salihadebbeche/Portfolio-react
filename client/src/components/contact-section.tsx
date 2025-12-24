// src/sections/contact-section.tsx
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: "saliha.debbeche@univ-constantine.dz",
    href: "mailto:saliha.debbeche@univ-constantine.dz",
  },
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Téléphone",
    value: "+213 794062537",
    href: "tel:+213794062537",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Localisation",
    value: "ElKhroub, Constantine, Algérie",
  },
];

const socialLinks = [
  {
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
    href: "https://github.com/salihadebbeche",
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saliha-debbeche-0a58a83a2/",
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ID Formspree défini dans .env
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "";

    if (!formspreeId) {
      toast({
        title: "Configuration requise",
        description:
          "Veuillez configurer l'ID Formspree dans les variables d'environnement (VITE_FORMSPREE_ID).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description:
            "Merci pour votre message. Je vous répondrai bientôt.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch {
      toast({
        title: "Erreur d'envoi",
        description:
          "Impossible d'envoyer le message. Veuillez réessayer ou me contacter directement par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 section-fade">
      {/* Fond dev (gradient + grille) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 section-container">
        <div className="max-w-2xl mb-10 space-y-2">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Restons en contact
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">Contactez-moi</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Vous avez un projet web, un lab à discuter ou une idée à
            prototyper ? Envoyez un message, comme une issue GitHub.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] items-start">
          {/* Formulaire */}
          <Card className="bg-card/80 border-border/60 hover-elevate">
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet, votre lab ou votre question..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-2 btn-gradient hover-elevate flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Infos + réseaux */}
          <div className="space-y-6">
            <Card className="bg-card/80 border-border/60 hover-elevate">
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/15 p-2 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card/80 border-border/60 hover-elevate">
              <CardHeader>
                <CardTitle>Réseaux sociaux</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-3">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover-elevate"
                  >
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.icon}
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
