import { brands } from "../data/brands";

export default function BrandStrip() {
  const track = [...brands, ...brands];

  return (
    <section
      id="marcas"
      className="marquee-pause overflow-hidden border-y border-taupe/15 bg-ink py-10"
    >
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
        Marcas que Confían en Nosotros
      </p>
      <div className="relative flex w-max animate-marquee">
        {track.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-8 whitespace-nowrap font-display text-2xl font-medium text-cream/60 transition-colors hover:text-cream sm:text-3xl"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
