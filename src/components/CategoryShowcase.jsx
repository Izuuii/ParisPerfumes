import { motion } from "framer-motion";
import { categories } from "../data/categories";

export default function CategoryShowcase() {
  const track = [...categories, ...categories];

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="marquee-pause mt-12 overflow-hidden"
      >
        <div className="relative flex w-max animate-marquee">
          {track.map((cat, i) => {
            const isDuplicate = i >= categories.length;

            return (
              <a
                key={`${cat.label}-${i}`}
                href={cat.anchor}
                aria-hidden={isDuplicate ? "true" : undefined}
                tabIndex={isDuplicate ? -1 : undefined}
                className="group relative mx-2 block h-48 w-64 shrink-0 overflow-hidden rounded-card bg-beige shadow-soft sm:h-56 sm:w-80"
              >
                <img
                  src={cat.image}
                  alt={isDuplicate ? "" : cat.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="sr-only">{cat.label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
