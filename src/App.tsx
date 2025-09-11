import { useState, useEffect } from "react";
import Header from "./components/Header";

// Páginas
import Inicio from "./pages/Inicio";
import RutasTuristicas from "./pages/RutasTuristicas";
import Transporte from "./pages/Transporte";
import HospedajeRestaurantes from "./pages/HospedajeRestaurante";
import Experiencias from "./pages/Experiencias";
import TurismoRural from "./pages/TurismoRural";
import MiCuenta from "./pages/MiCuenta";
import InicioSesion from "./pages/InicioSesion";
import Registro from "./pages/Registro";
import Contacto from "./pages/Contacto";
import AcercaDe from "./pages/AcercaDe";
import Ofertas from "./pages/Ofertas";
import FAQ from "./pages/FAQ";
import TransporteConfiable from "./pages/TransporteConfiable";

// 🟢 Importar Chatbot
import Chatbot from './components/ui/chatbox';

export default function App() {
  const [currentPage, setCurrentPage] = useState("Inicio");

  // Escuchar cambios en URL
  useEffect(() => {
    const handlePopState = () => {
      const page = new URLSearchParams(window.location.search).get("page") || "Inicio";
      setCurrentPage(page);
    };
    window.addEventListener("popstate", handlePopState);

    const initialPage = new URLSearchParams(window.location.search).get("page") || "Inicio";
    setCurrentPage(initialPage);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToPage = (page: string) => {
    const [pageName, hash] = page.includes('#') ? page.split('#') : [page, ''];
    
    setCurrentPage(pageName);
    const url = pageName === "Inicio" ? "/" : `/?page=${encodeURIComponent(pageName)}`;
    window.history.pushState(null, "", url + (hash ? `#${hash}` : ''));
    
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Inicio":
        return <Inicio onNavigate={navigateToPage} />;
      case "Rutas Turísticas":
        return <RutasTuristicas />;
      case "Transporte":
        return <Transporte />;
      case "Hospedaje & Restaurantes":
        return <HospedajeRestaurantes />;
      case "Experiencias":
        return <Experiencias />;
      case "Turismo Rural":
        return <TurismoRural />;
      case "Mi Cuenta":
        return <MiCuenta />;
      case "Inicio de Sesión":
        return <InicioSesion onNavigate={navigateToPage} />;
      case "Registro":
        return <Registro onNavigate={navigateToPage} />;
      case "Contacto":
        return <Contacto />;
      case "Acerca de":
        return <AcercaDe />;
      case "Ofertas":
        return <Ofertas />;
      case "FAQ":
        return <FAQ />;
      case "Transporte Confiable":
        return <TransporteConfiable />;
      default:
        return <Inicio onNavigate={navigateToPage} />;
    }
  };

  const pagesWithoutHeader = ["Inicio de Sesión", "Registro"];
  const showHeader = !pagesWithoutHeader.includes(currentPage);

  // 🟢 Páginas donde NO queremos mostrar el chatbot
  const pagesWithoutChatbot = ["Inicio de Sesión", "Registro"];
  const showChatbot = !pagesWithoutChatbot.includes(currentPage);

  return (
    <div className="min-h-screen">
      {showHeader && <Header currentPage={currentPage} onNavigate={navigateToPage} />}
      {renderCurrentPage()}
      {/* 👇 Mostrar chatbot solo si la página lo permite */}
      {showChatbot && <Chatbot />}
    </div>
  );
}