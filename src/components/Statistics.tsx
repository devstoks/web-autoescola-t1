import { businessConfig } from "@/config/business";
import { Reveal } from "./kit";

export function Statistics() {
  const stats = businessConfig.statistics.filter((s) => s.value);
  if (!stats.length) return null;
  return (
    <section className="py-12">
      <div className="container-x">
        <Reveal className="grid grid-cols-2 gap-6 rounded-2xl bg-secondary p-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-primary-deep">{s.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
