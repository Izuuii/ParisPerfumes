import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import TrustBadges from "./components/TrustBadges";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoryShowcase from "./components/CategoryShowcase";
import BrandStrip from "./components/BrandStrip";
import PromoBanners from "./components/PromoBanners";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <CartProvider>
      <TopBar />
      <Navbar onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <TrustBadges />
        <FeaturedProducts />
        <CategoryShowcase />
        <BrandStrip />
        <PromoBanners />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </CartProvider>
  );
}

export default App;
