import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cta = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wide text-sm transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-cta hover:bg-primary-deep",
        outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
        ghostInk: "border-2 border-ink-foreground/30 text-ink-foreground hover:border-primary hover:text-primary",
        whatsapp: "bg-whatsapp text-whatsapp-foreground hover:brightness-110",
        ink: "bg-ink text-ink-foreground hover:bg-ink-soft",
      },
      size: { md: "h-12 px-6", lg: "h-14 px-8", sm: "h-10 px-4 text-xs" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function CtaLink({ href, children, className, external, ...v }: { href: string; children: ReactNode; className?: string; external?: boolean } & VariantProps<typeof cta>) {
  const ext = external ?? href.startsWith("http");
  return (
    <a href={href} className={cn(cta(v), className)} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true, dark }: { eyebrow: string; title: string; subtitle?: string; center?: boolean; dark?: boolean }) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
      <p className={cn("eyebrow", dark && "text-primary")}>{eyebrow}</p>
      <h2 className={cn("mt-3 text-3xl font-bold md:text-4xl", dark ? "text-ink-foreground" : "text-foreground")}>{title}</h2>
      <div className={cn("mt-4 h-1 w-12 rounded-full bg-primary", center && "mx-auto")} />
      {subtitle && <p className={cn("mt-5 text-base md:text-lg", dark ? "text-ink-muted" : "text-muted-foreground")}>{subtitle}</p>}
    </Reveal>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5c0-5.19 4.23-9.42 9.43-9.42a9.4 9.4 0 0 1 9.42 9.43c0 5.2-4.23 9.42-9.43 9.42zm8.02-17.44A11.3 11.3 0 0 0 12.05.75C5.8.75.7 5.84.7 12.1c0 2 .52 3.95 1.52 5.67L.6 23.75l6.12-1.6a11.3 11.3 0 0 0 5.33 1.36c6.26 0 11.35-5.1 11.35-11.36 0-3.03-1.18-5.88-3.33-8.03z" />
    </svg>
  );
}

export function Logo({ dark }: { dark?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="Início">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary font-display text-lg font-extrabold text-primary-foreground">A</span>
      <span className="leading-none">
        <span className={cn("block font-display text-lg font-extrabold tracking-tight", dark ? "text-ink-foreground" : "text-foreground")}>AUTOESCOLA</span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary-deep">Dirija com confiança</span>
      </span>
    </a>
  );
}
