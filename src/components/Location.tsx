import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contactConfig, waLink } from "@/config/contact";
import { CtaLink, Reveal, SectionHeading, WhatsAppIcon } from "./kit";

export function Location() {
  const c = contactConfig;
  const place = [c.address, [c.city, c.state].filter(Boolean).join(" - ")].filter(Boolean).join(", ");
  const rows = [
    place && { icon: MapPin, label: "Endereço", value: place },
    c.openingHours && { icon: Clock, label: "Horários", value: c.openingHours },
    c.phone && { icon: Phone, label: "Telefone", value: c.phone },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];
  const mapsHref = c.googleMapsUrl || (place ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}` : "");

  return (
    <section id="contato" className="scroll-mt-20 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Localização" title="Encontre a nossa unidade" />
        <Reveal className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-card lg:grid-cols-2">
          <div className="p-8 md:p-10">
            <ul className="space-y-6">
              {rows.map((r) => (
                <li key={r.label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent"><r.icon className="h-5 w-5 text-primary-deep" /></span>
                  <div><p className="eyebrow">{r.label}</p><p className="mt-1 font-semibold">{r.value}</p></div>
                </li>
              ))}
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent"><WhatsAppIcon className="h-5 w-5 text-primary-deep" /></span>
                <div><p className="eyebrow">WhatsApp</p><p className="mt-1 font-semibold">{c.whatsappDisplay}</p></div>
              </li>
            </ul>
            {!place && <p className="mt-6 text-sm text-muted-foreground">Fale com a gente pelo WhatsApp para receber o endereço e os horários de atendimento.</p>}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {mapsHref && <CtaLink href={mapsHref}><Navigation className="h-4 w-4" /> Como chegar</CtaLink>}
              <CtaLink href={waLink()} variant="whatsapp"><WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp</CtaLink>
            </div>
          </div>
          <div className="relative min-h-72 bg-ink">
            {place ? (
              <iframe title="Mapa da unidade" loading="lazy" className="absolute inset-0 h-full w-full grayscale" src={`https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`} />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(var(--color-ink-border)_1px,transparent_1px)] [background-size:22px_22px]">
                <div className="text-center text-ink-foreground">
                  <MapPin className="mx-auto h-12 w-12 text-primary" />
                  <p className="mt-3 font-display text-lg font-bold">Mapa da unidade</p>
                  <p className="text-sm text-ink-muted">Aparece ao configurar o endereço</p>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
