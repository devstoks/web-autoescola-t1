import { faq } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./kit";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-secondary py-24">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes" />
        <Reveal>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-card">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`i${i}`}>
                <AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
