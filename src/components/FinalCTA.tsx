import { ArrowRight } from "lucide-react";
import estrada from "@/assets/estrada.jpg";
import { waLink, whatsappMessages } from "@/config/contact";
import { CtaLink, Reveal, WhatsAppIcon } from "./kit";

export function FinalCTA({ title = "Sua jornada começa agora.", text = "Aprenda, conquiste sua habilitação e dirija com mais confiança.", compact }: { title?: string; text?: string; compact?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {!compact && <img src={estrada} alt="" loading="lazy" width={1920} height={912} className="absolute inset-0 -z-20 h-full w-full object-cover" />}
      <div className="absolute inset-0 -z-10 bg-ink-fade" />
      <div className={`container-x flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between ${compact ? "py-16" : "py-28"}`}>
        <Reveal className="max-w-xl">
          <h2 className={`font-extrabold ${compact ? "text-3xl" : "text-4xl md:text-5xl"}`}>{title}</h2>
          <p className="mt-4 text-lg text-ink-muted">{text}</p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={waLink(whatsappMessages.matricula)} size="lg">Quero me matricular <ArrowRight className="h-4 w-4" /></CtaLink>
          <CtaLink href={waLink()} variant="ghostInk" size="lg"><WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp</CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
