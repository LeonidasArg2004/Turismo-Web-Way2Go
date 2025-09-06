import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PopularOffers from "./components/PopularOffers";
import PaymentAndProfile from "./components/PaymentAndProfile";
import Footer from "./components/Footer";
//Páginas
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import Registro from "./pages/Registro";
import MiCuenta from "./pages/MiCuenta";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import Experiencias from "./pages/Experiencias";
import FAQ from "./pages/FAQ";
import HospedajeRestaurantes from "./pages/HospedajeRestaurante";
import Ofertas from "./pages/Ofertas";
import RutasTuristicas from "./pages/RutasTuristicas";
import Transporte from "./pages/Transporte";
import TurismoRural from "./pages/TurismoRural";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/rutas-turisticas" element={<RutasTuristicas />} />
          <Route path="/transporte" element={<Transporte />} />
          <Route path="/hospedaje-restaurantes" element={<HospedajeRestaurantes />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/turismo-rural" element={<TurismoRural />} />
          <Route path="/mi-cuenta" element={<MiCuenta />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
        <HeroSection />
        <ServicesSection />
        <PopularOffers />
        <PaymentAndProfile />
      </main>
      <Footer />
    </div>
  );
}