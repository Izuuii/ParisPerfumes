import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../hooks/useCart";
import { formatCLP } from "../data/products";
import { IconClose, IconCart } from "./icons";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, count } =
    useCart();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
          >
            <div className="flex items-center justify-between border-b border-taupe/15 px-6 py-5">
              <h2 className="font-display text-xl font-medium text-ink">
                Tu Carro{" "}
                <span className="text-sm text-ink/50">({count})</span>
              </h2>
              <button type="button" onClick={closeCart} aria-label="Cerrar carro">
                <IconClose className="h-6 w-6 text-ink" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-beige text-mocha">
                  <IconCart className="h-7 w-7" />
                </span>
                <p className="text-sm text-ink/60">Tu carro está vacío.</p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="rounded-full bg-ink px-6 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:bg-mocha"
                >
                  Seguir Comprando
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-16 rounded-lg bg-white object-contain p-1"
                      />
                      <div className="flex flex-1 flex-col">
                        <p className="text-xs uppercase tracking-wide text-mocha">
                          {item.brand}
                        </p>
                        <p className="text-sm font-medium text-ink">
                          {item.name}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-taupe/30">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="px-2.5 py-1 text-ink/70 hover:text-mocha"
                              aria-label="Disminuir"
                            >
                              −
                            </button>
                            <span className="min-w-6 text-center text-sm">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="px-2.5 py-1 text-ink/70 hover:text-mocha"
                              aria-label="Aumentar"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-ink">
                            {formatCLP(item.price * item.qty)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="self-start text-ink/40 hover:text-ink"
                        aria-label="Quitar"
                      >
                        <IconClose className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-taupe/15 px-6 py-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink/60">Subtotal</span>
                    <span className="font-display text-xl font-semibold text-ink">
                      {formatCLP(subtotal)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink/40">
                    Impuestos y envío calculados al finalizar.
                  </p>
                  <button
                    type="button"
                    disabled
                    className="mt-4 w-full cursor-not-allowed rounded-full bg-ink px-6 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-cream/70"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
