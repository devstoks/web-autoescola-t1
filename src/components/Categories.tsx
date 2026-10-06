import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { waLink } from "@/config/contact";
import { Reveal, SectionHeading } from "./kit";

export function Categories() {
  const list = categories.filter((c) => c.enabled);
  if (!list.length) return null;
  return (
    <section id="categorias" className="scroll-mt-20 bg-secondary py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Categorias" title="Qual categoria você precisa?" />
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.1}>
              <a href={waLink(c.message)} target="_blank" rel="noopener noreferrer" className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <span className="font-display text-7xl font-extrabold leading-none text-primary">{c.code}</span>
                <h3 className="mt-6 text-lg font-bold uppercase tracking-wide">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold uppercase text-foreground">Consultar <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                <span className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-150" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
