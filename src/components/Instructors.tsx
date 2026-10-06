import { instructors } from "@/data/instructors";
import { Reveal, SectionHeading } from "./kit";

export function Instructors() {
  if (!instructors.length) return null;
  return (
    <section className="bg-secondary py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Equipe" title="Aprenda com quem entende." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="overflow-hidden rounded-2xl bg-card shadow-card">
              <img src={p.photo} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />
              <div className="p-5">
                <h3 className="font-bold">{p.name}</h3>
                <p className="eyebrow mt-1">{p.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
