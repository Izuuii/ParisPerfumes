import { useState } from "react";
import { motion } from "framer-motion";
import { IconCheck, IconMail } from "./icons";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-card bg-ink px-8 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mocha/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-taupe/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Únete al Club
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium text-cream sm:text-5xl">
            Ofertas exclusivas en tu correo
          </h2>
          <p className="mt-4 text-sm text-cream/70">
            Suscríbete y recibe descuentos especiales y novedades antes que
            nadie.
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-cream/10 px-6 py-3 text-sm text-cream">
              <IconCheck className="h-5 w-5 text-gold-soft" />
              ¡Gracias por suscribirte!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-2 rounded-full bg-cream px-5 py-3.5">
                <IconMail className="h-4 w-4 text-mocha" />
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-mocha px-7 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-gold"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
