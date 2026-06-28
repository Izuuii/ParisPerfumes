import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import { IconStar } from "./icons";

export default function Testimonials() {
  return (
    <section className="bg-beige/50 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mocha">
            Testimonios
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-card border border-taupe/15 bg-cream p-6 shadow-soft"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <IconStar
                    key={idx}
                    className={`h-4 w-4 ${idx < t.rating ? "text-gold" : "text-taupe/30"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-taupe/15 pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink/50">{t.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
