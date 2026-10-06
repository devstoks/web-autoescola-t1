import { motion } from "framer-motion";
import { waLink } from "@/config/contact";
import { businessConfig } from "@/config/business";
import { WhatsAppIcon } from "./kit";

export function WhatsAppButton() {
  return (
    <motion.a
      href={waLink()} target="_blank" rel="noopener noreferrer"
      aria-label={`Fale com a ${businessConfig.name} pelo WhatsApp`}
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, type: "spring" }}
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-card transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-25" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-xs font-bold text-ink-foreground opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Fale com a {businessConfig.name}
      </span>
    </motion.a>
  );
}
