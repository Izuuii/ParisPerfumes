import { motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";
import heroImage from "../assets/hero/pngwing.com.png";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-beige to-cream"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-taupe/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-mocha/10 blur-3xl" />

      <div className="mx-auto grid min-h-[88vh] max-w-[1200px] items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-taupe/40 bg-white/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-mocha">
            Boutique de Fragancias
          </span>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            La esencia de
            <span className="block italic text-mocha">tu elegancia</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            {site.tagline}. Descubre nuestra selección de fragancias de las
            marcas más exclusivas del mundo.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#productos"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-cream transition-all hover:bg-mocha hover:shadow-lift"
            >
              Ver Catálogo
            </a>
            <a
              href="#marcas"
              className="rounded-full border border-ink/20 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:border-mocha hover:text-mocha"
            >
              Nuestras Marcas
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative flex h-[440px] items-center justify-center sm:h-[560px] lg:h-[88vh]"
        >
          <motion.img
            src={heroImage}
            alt="Frasco de perfume Paris Perfumes"
            className="h-full w-full scale-110 object-contain drop-shadow-[0_30px_40px_rgba(43,38,32,0.25)] lg:scale-125"
            animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
