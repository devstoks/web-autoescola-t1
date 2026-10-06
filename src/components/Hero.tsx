import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroDefault from "@/assets/hero.jpg";
import { businessConfig } from "@/config/business";
import { waLink, whatsappMessages } from "@/config/contact";
import { CtaLink } from "./kit";

const ease = [0.22, 1, 0.36, 1] as const;
const item = (d: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease } });

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <motion.img
        src={businessConfig.heroImage || heroDefault}
        alt="Carro de autoescola com aluno dirigindo acompanhado do instrutor"
        width={1920} height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, ease }}
      />
      <div className="absolute inset-0 -z-10 bg-hero-fade" />
      <div className="container-x flex min-h-[640px] flex-col justify-center pb-28 pt-32 lg:min-h-[760px]">
        <div className="max-w-xl">
          <motion.p {...item(0.1)} className="eyebrow">{businessConfig.name}</motion.p>
          <motion.h1 {...item(0.2)} className="mt-4 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Aprenda a dirigir.<br />Conquiste sua <span className="text-primary-deep">liberdade.</span>
          </motion.h1>
          <motion.p {...item(0.35)} className="mt-6 text-lg text-foreground/75">
            Aulas teóricas e práticas para você se preparar para dirigir com segurança, confiança e responsabilidade.
          </motion.p>
          <motion.div {...item(0.5)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={waLink(whatsappMessages.matricula)} size="lg">Quero me matricular <ArrowRight className="h-4 w-4" /></CtaLink>
            <CtaLink href="#cursos" variant="outline" size="lg">Ver cursos</CtaLink>
          </motion.div>
          <motion.ul {...item(0.65)} className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold text-foreground/80">
            {["Instrutores qualificados", "Aulas teóricas e práticas", "Horários flexíveis", "Atendimento personalizado"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary-deep" />{t}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
