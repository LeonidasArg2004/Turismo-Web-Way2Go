import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PopularOffers from "../components/PopularOffers";
import PaymentAndProfile from "../components/PaymentAndProfile";
import Footer from "../components/Footer";

interface InicioProps {
  onNavigate: (page: string) => void;
}

export default function Inicio({ onNavigate }: InicioProps) {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ServicesSection onNavigate={onNavigate} />
        <PopularOffers />
        <PaymentAndProfile />
      </main>
      <Footer />
    </div>
  );
}