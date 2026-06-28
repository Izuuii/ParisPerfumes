import { motion } from "framer-motion";
import { IconShield, IconTag, IconStore, IconTruck } from "./icons";

const badges = [
  { icon: IconShield, title: "100% Originales", sub: "Garantía de autenticidad" },
  { icon: IconTag, title: "Precios por Mayor", sub: "Sin mínimo de compra" },
  { icon: IconStore, title: "Retiro en Tienda", sub: "Providencia, Santiago" },
  { icon: IconTruck, title: "Envíos a todo Chile", sub: "Despacho a domicilio" },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-taupe/15 bg-beige/50">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-px px-6 py-10 lg:grid-cols-4">
        {badges.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 px-2 py-3"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mocha/30 text-mocha">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{badge.title}</p>
                <p className="text-xs text-ink/60">{badge.sub}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
