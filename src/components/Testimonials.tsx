import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal, SectionHeading } from "./kit";

export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section id="depoimentos" className="scroll-mt-20 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Depoimentos" title="Quem já passou por aqui recomenda." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-1" aria-label={`${t.rating} de 5 estrelas`}>
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className={k < t.rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-border"} />)}
              </div>
              <p className="mt-4 text-foreground/80">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                {t.photo && <img src={t.photo} alt={t.name} loading="lazy" className="h-10 w-10 rounded-full object-cover" />}
                <div><p className="font-bold">{t.name}</p>{t.city && <p className="text-xs text-muted-foreground">{t.city}</p>}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
