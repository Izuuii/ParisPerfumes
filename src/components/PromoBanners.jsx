import { motion } from "framer-motion";
import banner1 from "../assets/banners/banner-1.jpg";
import banner2 from "../assets/banners/banner-2.jpg";
import banner3 from "../assets/banners/banner-3.jpg";
import banner4 from "../assets/banners/banner-4.jpg";
import { IconArrow } from "./icons";

const banners = [
  {
    image: banner1,
    eyebrow: "Sets de Regalo",
    title: "Perfumes Estuches",
    anchor: "#productos",
  },
  {
    image: banner2,
    eyebrow: "Para Ellas",
    title: "Perfumes Para Ellas",
    anchor: "#productos",
  },
  {
    image: banner3,
    eyebrow: "Para Ellos",
    title: "Perfumes Para Ellos",
    anchor: "#productos",
  },
  {
    image: banner4,
    eyebrow: "Originales Sellados",
    title: "Perfumes Tester",
    anchor: "#productos",
  },
];

export default function PromoBanners() {
  return (
    <section id="ofertas" className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {banners.map((banner, i) => (
          <motion.a
            key={banner.title}
            href={banner.anchor}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex h-[340px] items-end overflow-hidden rounded-card"
          >
            <img
              src={banner.image}
              alt={banner.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
            <div className="relative z-10 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                {banner.eyebrow}
              </span>
              <h3 className="mt-2 font-display text-2xl font-medium text-cream">
                {banner.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-cream/90">
                Ver más
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
