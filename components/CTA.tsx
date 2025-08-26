
import React from 'react';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

interface CTASectionProps {
  badge?: {
    text: string;
  };
  title: string;
  description?: string;
  action: {
    text: string;
    href: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  };
  withGlow?: boolean;
  className?: string;
}

const CTASectionComponent: React.FC<CTASectionProps> = ({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}) => {
  return (
    <div className={cn("relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 text-center sm:gap-8", className)}>
      {badge && (
        <Badge
          variant="outline"
          className="opacity-0 animate-fade-in-up delay-100"
        >
          <span className="text-muted-foreground">{badge.text}</span>
        </Badge>
      )}
      <h2 className="text-3xl font-semibold sm:text-5xl opacity-0 animate-fade-in-up delay-200">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-fade-in-up delay-300">
          {description}
        </p>
      )}
      <div className="mt-4 opacity-0 animate-fade-in-up delay-500">
        <Button
          variant={action.variant || "default"}
          size="lg"
          asChild
          className="text-base"
        >
          <a href={action.href} onClick={action.onClick}>{action.text}</a>
        </Button>
      </div>
      {withGlow && (
        <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-0 animate-scale-in delay-700" />
      )}
    </div>
  );
};

const CTA: React.FC = () => {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', targetId);
        }
    };

  return (
    <section id="pricing" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <CTASectionComponent
          title="Ready to Launch Your First AI-Powered Landing Page?"
          description="Join hundreds of creators who’ve fast-tracked their success. You don’t need coding or design skills — just the right tools and guidance."
          action={{
            text: "Get access now",
            href: "#offer",
            onClick: (e) => handleScrollTo(e, "#offer"),
          }}
        />
        <p className="mt-4 text-center text-sm text-muted-foreground opacity-0 animate-fade-in-up delay-500">
          30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
};

export default CTA;