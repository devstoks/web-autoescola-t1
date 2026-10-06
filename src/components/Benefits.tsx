import { Building2, Clock, Headphones, ShieldCheck, Target, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./kit";

const items = [
  { icon: Target, t: "Aprendizado personalizado", d: "Acompanhar o aluno de acordo com suas necessidades." },
  { icon: ShieldCheck, t: "Foco na segurança", d: "Preparação para uma condução consciente." },
  { icon: Clock, t: "Horários flexíveis", d: "Opções para diferentes rotinas." },
  { icon: Users, t: "Equipe preparada", d: "Profissionais focados no aprendizado." },
  { icon: Building2, t: "Estrutura", d: "Ambiente e veículos preparados para o processo de aprendizagem." },
  { icon: Headphones, t: "Atendimento", d: "Facilidade para tirar dúvidas e acompanhar sua jornada." },
];

export function Benefits() {
  return (
    <section className="bg-ink py-24 text-ink-foreground">
      <div className="container-x">
        <SectionHeading dark eyebrow="Diferenciais" title="Por que escolher nossa autoescola?" />
        <div className="grid gap-px overflow-hidden rounded-2xl bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 0.08} className="group bg-ink p-8 transition-colors hover:bg-ink-soft">
              <Icon className="h-9 w-9 text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-5 text-base font-bold uppercase tracking-wide">{t}</h3>
              <p className="mt-2 text-sm text-ink-muted">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
