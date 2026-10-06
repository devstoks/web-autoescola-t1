import { ArrowRight, CheckCircle2 } from "lucide-react";
import carro from "@/assets/carro.jpg";
import { businessConfig } from "@/config/business";
import { waLink, whatsappMessages } from "@/config/contact";
import { CtaLink, Reveal } from "./kit";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img src={carro} alt="Aluna dirigindo com instrutor ao lado" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-xl bg-background p-5 shadow-card">
            <p className="eyebrow">Feito para você</p>
            <p className="mt-1 font-display text-xl font-extrabold">Dirigir com<br />segurança</p>
            <div className="mt-2 h-1 w-10 rounded-full bg-primary" />
          </div>
          <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-2xl border-2 border-primary" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="eyebrow">Sobre nós</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Mais do que ensinar a dirigir.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Nosso objetivo é preparar você para enfrentar o trânsito com segurança, responsabilidade e confiança.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {businessConfig.aboutHighlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 font-semibold"><CheckCircle2 className="h-5 w-5 text-primary-deep" />{h}</li>
            ))}
          </ul>
          <CtaLink href={waLink(whatsappMessages.geral)} className="mt-10">Fale com a gente <ArrowRight className="h-4 w-4" /></CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
