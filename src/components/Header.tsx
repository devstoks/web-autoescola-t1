import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaLink, Logo } from "./kit";
import { waLink, whatsappMessages } from "@/config/contact";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cursos", href: "#cursos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header({ hasTestimonials }: { hasTestimonials: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = navItems.filter((i) => hasTestimonials || i.href !== "#depoimentos");

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled || open ? "border-border bg-background/85 shadow-sm backdrop-blur-lg" : "border-transparent bg-transparent")}>
      <div className="container-x flex h-18 items-center justify-between gap-6 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Principal">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="link-underline pb-1 text-sm font-semibold text-foreground/80 hover:text-foreground">{i.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CtaLink href={waLink(whatsappMessages.matricula)} size="sm" className="hidden sm:inline-flex">Matricule-se</CtaLink>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background xl:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-x pb-6 xl:hidden" aria-label="Menu mobile">
          <ul className="grid gap-1">
            {items.map((i) => (
              <li key={i.href}><a href={i.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold hover:bg-muted">{i.label}</a></li>
            ))}
          </ul>
          <CtaLink href={waLink(whatsappMessages.matricula)} size="lg" className="mt-4 w-full">Quero me matricular</CtaLink>
        </nav>
      )}
    </header>
  );
}
