import { Calendar, Car, Heart, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { businessConfig } from "@/config/business";

const icons: Record<string, LucideIcon> = { users: Users, car: Car, calendar: Calendar, shield: ShieldCheck, heart: Heart };

export function TrustBar() {
  return (
    <div className="container-x relative z-10 -mt-16">
      <motion.ul
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
        className="grid gap-6 rounded-2xl bg-ink p-6 text-ink-foreground shadow-card sm:grid-cols-2 md:p-8 lg:grid-cols-5 lg:divide-x lg:divide-ink-border"
      >
        {businessConfig.trust.map((t) => {
          const Icon = icons[t.icon] ?? ShieldCheck;
          return (
            <li key={t.title} className="flex gap-3 lg:px-4 first:lg:pl-0">
              <Icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.6} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">{t.title}</p>
                <p className="mt-1 text-xs text-ink-muted">{t.text}</p>
              </div>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}
