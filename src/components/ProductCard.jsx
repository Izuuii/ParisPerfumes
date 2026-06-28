import { motion } from "framer-motion";
import { formatCLP } from "../data/products";
import { useCart } from "../hooks/useCart";
import { IconCart } from "./icons";

export default function ProductCard({ product }) {
  const { addItem, openCart } = useCart();

  const handleAdd = () => {
    addItem(product);
    openCart();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-card border border-taupe/15 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-white">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cream">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mocha">
          {product.brand}
        </p>
        <h3 className="mt-1 font-display text-xl font-medium leading-snug text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-ink/50">{product.gender}</p>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-lg font-semibold text-ink">
            {formatCLP(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-ink/40 line-through">
              {formatCLP(product.oldPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-mocha"
        >
          <IconCart className="h-4 w-4" />
          Agregar
        </button>
      </div>
    </motion.article>
  );
}
