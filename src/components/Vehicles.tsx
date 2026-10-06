import { vehicles } from "@/data/vehicles";
import { Reveal, SectionHeading } from "./kit";

export function Vehicles() {
  if (!vehicles.length) return null;
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Frota" title="Aprenda em veículos preparados para você." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <Reveal key={v.model} delay={i * 0.08} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img src={v.image} alt={v.model} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-6">
                <span className="eyebrow">{v.category}</span>
                <h3 className="mt-1 text-lg font-bold">{v.model}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.info}</p>
                <p className="mt-3 text-xs font-bold uppercase text-foreground/70">{v.availability}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
