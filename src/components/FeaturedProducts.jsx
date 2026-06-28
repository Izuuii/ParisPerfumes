import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const filters = ["Todos", "Mujer", "Hombre", "Unisex"];

export default function FeaturedProducts() {
  const [active, setActive] = useState("Todos");

  const visible = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => p.gender === active);
  }, [active]);

  return (
    <section id="productos" className="mx-auto max-w-[1200px] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mocha">
          Selección Exclusiva
        </span>
        <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
          Fragancias Destacadas
        </h2>
        <p className="mt-4 max-w-md text-sm text-ink/60">
          Las fragancias más buscadas, seleccionadas para ti entre nuestras
          marcas premium.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
              active === filter
                ? "bg-ink text-cream"
                : "border border-taupe/30 text-ink/70 hover:border-mocha hover:text-mocha"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
