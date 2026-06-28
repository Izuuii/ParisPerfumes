import { site } from "../data/site";
import { categories } from "../data/categories";
import { brands } from "../data/brands";
import { IconMail, IconPhone, IconPin } from "./icons";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-semibold text-cream">
            Paris <span className="text-gold-soft">Perfumes</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            {site.tagline}.
          </p>
          <div className="mt-6 flex gap-3">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-xs uppercase transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                {s.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Categorías
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat.label}>
                <a
                  href={cat.anchor}
                  className="transition-colors hover:text-cream"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Marcas
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {brands.slice(0, 6).map((brand) => (
              <li key={brand}>
                <a href="#marcas" className="transition-colors hover:text-cream">
                  {brand}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Atención al Cliente
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
              <span className="text-cream/70">{site.contact.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-cream"
              >
                <IconMail className="h-4 w-4 text-gold-soft" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-cream"
              >
                <IconPhone className="h-4 w-4 text-gold-soft" />
                {site.contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-2">
            {["VISA", "MASTER", "WEBPAY"].map((p) => (
              <span
                key={p}
                className="rounded border border-cream/15 px-2 py-1 text-[10px] tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
