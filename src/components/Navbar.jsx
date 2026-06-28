import { useEffect, useState } from "react";
import { site } from "../data/site";
import { brands } from "../data/brands";
import { categories } from "../data/categories";
import { useCart } from "../hooks/useCart";
import { IconSearch, IconCart, IconUser, IconMenu } from "./icons";

export default function Navbar({ onOpenMenu }) {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-[0_1px_0_rgba(43,38,32,0.08)] backdrop-blur"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4">
        <button
          type="button"
          onClick={onOpenMenu}
          className="text-ink lg:hidden"
          aria-label="Abrir menú"
        >
          <IconMenu className="h-6 w-6" />
        </button>

        <a
          href="#inicio"
          className="font-display text-2xl font-semibold tracking-wide text-ink"
        >
          Paris <span className="text-mocha">Perfumes</span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          onMouseLeave={() => setMegaOpen(false)}
        >
          {site.nav.map((item) => {
            const isMega = item.label === "Marcas" || item.label === "Perfumes";
            return (
              <a
                key={item.label}
                href={item.anchor}
                onMouseEnter={() => setMegaOpen(isMega)}
                className="relative text-sm font-medium uppercase tracking-[0.12em] text-ink/80 transition-colors hover:text-mocha"
              >
                {item.label}
              </a>
            );
          })}

          {megaOpen && (
            <div
              className="absolute left-0 right-0 top-full mx-auto max-w-[1200px] px-6"
              onMouseEnter={() => setMegaOpen(true)}
            >
              <div className="mt-3 grid grid-cols-3 gap-8 rounded-card border border-taupe/20 bg-cream p-8 shadow-soft">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
                    Categorías
                  </p>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.label}>
                        <a
                          href={cat.anchor}
                          className="text-sm text-ink/75 transition-colors hover:text-mocha"
                        >
                          {cat.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-mocha">
                    Marcas Destacadas
                  </p>
                  <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                    {brands.slice(0, 12).map((brand) => (
                      <a
                        key={brand}
                        href="#marcas"
                        className="text-sm text-ink/75 transition-colors hover:text-mocha"
                      >
                        {brand}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden items-center gap-2 rounded-full border border-taupe/30 bg-white/60 px-4 py-2 md:flex"
          >
            <IconSearch className="h-4 w-4 text-mocha" />
            <input
              type="search"
              placeholder="Buscar productos"
              className="w-40 bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
            />
          </form>

          <a
            href="#contacto"
            className="hidden text-ink/80 transition-colors hover:text-mocha sm:block"
            aria-label="Mi cuenta"
          >
            <IconUser className="h-6 w-6" />
          </a>

          <button
            type="button"
            onClick={openCart}
            className="relative text-ink/80 transition-colors hover:text-mocha"
            aria-label="Abrir carro"
          >
            <IconCart className="h-6 w-6" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-mocha px-1 text-[11px] font-semibold text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
