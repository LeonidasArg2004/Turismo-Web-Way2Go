import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PopularOffers from "../components/PopularOffers";
import PaymentAndProfile from "../components/PaymentAndProfile";
import Footer from "../components/Footer";

export default function Inicio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PopularOffers />
        <PaymentAndProfile />
      </main>
      <Footer />
    </div>
  );
}