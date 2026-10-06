import { Reveal, SectionHeading } from "./kit";

const steps = [
  { t: "Matrícula", d: "Entre em contato e escolha a categoria desejada." },
  { t: "Preparação", d: "Realize as etapas teóricas necessárias." },
  { t: "Aulas práticas", d: "Aprenda a dirigir acompanhado por instrutor." },
  { t: "Avaliações", d: "Prepare-se para as etapas exigidas." },
  { t: "Conquiste sua habilitação", d: "Complete as etapas necessárias para obter sua CNH." },
];

export function Process() {
  return (
    <section id="como-funciona" className="scroll-mt-20 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Como funciona" title="Sua jornada até a CNH" />
        <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-[repeating-linear-gradient(90deg,var(--color-primary)_0_16px,transparent_16px_28px)] lg:block" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <li className="relative flex gap-5 lg:block">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary font-display font-extrabold text-primary-foreground ring-8 ring-background">{String(i + 1).padStart(2, "0")}</span>
                <div className="lg:mt-6">
                  <h3 className="font-bold uppercase tracking-wide">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
