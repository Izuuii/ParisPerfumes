import { motion } from "framer-motion";
import { categories } from "../data/categories";
import { IconArrow } from "./icons";

export default function CategoryShowcase() {
  return (
    <section id="categorias" className="mx-auto max-w-[1200px] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mocha">
          Explora por Categoría
        </span>
        <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
          Encuentra tu Fragancia
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.label}
            href={cat.anchor}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex h-56 items-end overflow-hidden rounded-card sm:h-64"
          >
            <img
              src={cat.image}
              alt={cat.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
            <div className="relative z-10 flex w-full items-center justify-between p-6">
              <span className="font-display text-2xl font-medium text-cream">
                {cat.label}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform group-hover:translate-x-1">
                <IconArrow className="h-4 w-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
