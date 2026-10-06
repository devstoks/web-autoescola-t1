import { Instagram as IgIcon } from "lucide-react";
import { businessConfig } from "@/config/business";
import { contactConfig } from "@/config/contact";
import { CtaLink, Reveal } from "./kit";

export function Instagram() {
  const imgs = businessConfig.instagramImages;
  const tiles = imgs.length ? imgs.slice(0, 6) : Array.from({ length: 6 }, () => "");
  return (
    <section className="bg-secondary py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="eyebrow">Instagram</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Acompanhe nossa rotina</h2>
          <p className="mt-4 text-lg text-muted-foreground">Veja novidades, dicas, aulas e muito mais no nosso Instagram.</p>
          <p className="mt-6 font-display text-xl font-bold">{contactConfig.instagramHandle}</p>
          <CtaLink href={contactConfig.instagram} variant="ink" className="mt-6"><IgIcon className="h-4 w-4" /> Ver Instagram</CtaLink>
        </Reveal>
        <div className="grid grid-cols-3 gap-3">
          {tiles.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <a href={contactConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Abrir Instagram" className="group relative block aspect-square overflow-hidden rounded-xl bg-ink">
                {src ? <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" /> : (
                  <span className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,var(--color-ink),var(--color-ink-soft))]">
                    <IgIcon className="h-7 w-7 text-primary/60 transition-transform group-hover:scale-125" />
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
