import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import InteractiveMap from "./components/InteractiveMap";
import PopularOffers from "./components/PopularOffers";
import PaymentAndProfile from "./components/PaymentAndProfile";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <InteractiveMap />
        <PopularOffers />
        <PaymentAndProfile />
      </main>
      <Footer />
    </div>
  );
}