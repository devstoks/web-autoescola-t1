import { Instagram, MapPin } from "lucide-react";
import { businessConfig } from "@/config/business";
import { contactConfig, waLink } from "@/config/contact";
import { Logo, WhatsAppIcon } from "./kit";

const nav = [["Início", "#inicio"], ["Cursos", "#cursos"], ["Categorias", "#categorias"], ["Sobre", "#sobre"], ["FAQ", "#faq"], ["Contato", "#contato"]];
const cursos = ["Categoria A", "Categoria B", "Categoria AB", "Primeira habilitação"];

export function Footer() {
  const c = contactConfig;
  const place = [c.address, c.city, c.state].filter(Boolean).join(", ");
  return (
    <footer className="bg-ink pb-10 pt-16 text-ink-foreground">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm text-ink-muted">{businessConfig.description}</p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">{nav.map(([l, h]) => <li key={h}><a href={h} className="link-underline text-ink-muted hover:text-ink-foreground">{l}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Cursos</h3>
          <ul className="mt-4 space-y-2 text-sm">{cursos.map((l) => <li key={l}><a href="#cursos" className="link-underline text-ink-muted hover:text-ink-foreground">{l}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink-foreground"><WhatsAppIcon className="h-4 w-4 text-primary" />{c.whatsappDisplay}</a></li>
            <li><a href={c.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink-foreground"><Instagram className="h-4 w-4 text-primary" />{c.instagramHandle}</a></li>
            {place && <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />{place}</li>}
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 border-t border-ink-border pt-6 text-xs text-ink-muted">
        © 2026 {businessConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
