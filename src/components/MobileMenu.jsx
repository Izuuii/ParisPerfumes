import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";
import { categories } from "../data/categories";
import { IconClose, IconSearch } from "./icons";

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed inset-y-0 left-0 z-50 flex w-[82%] max-w-sm flex-col bg-cream p-6 shadow-lift lg:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-semibold text-ink">
                Paris <span className="text-mocha">Perfumes</span>
              </span>
              <button type="button" onClick={onClose} aria-label="Cerrar menú">
                <IconClose className="h-6 w-6 text-ink" />
              </button>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-2 rounded-full border border-taupe/30 bg-white/60 px-4 py-2.5"
            >
              <IconSearch className="h-4 w-4 text-mocha" />
              <input
                type="search"
                placeholder="Buscar productos"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
              />
            </form>

            <nav className="mt-8 flex flex-col gap-1">
              {site.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.anchor}
                  onClick={onClose}
                  className="border-b border-taupe/15 py-3 text-sm font-medium uppercase tracking-[0.12em] text-ink/80"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
              Categorías
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href={cat.anchor}
                  onClick={onClose}
                  className="rounded-full border border-taupe/30 px-3 py-1.5 text-xs text-ink/75"
                >
                  {cat.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8 text-xs text-ink/60">
              <p>{site.contact.email}</p>
              <p className="mt-1">{site.contact.phone}</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
