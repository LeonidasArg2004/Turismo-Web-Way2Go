import { useState, useEffect } from "react";
import Header from "./components/Header";

// Importar todas las páginas
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

export default function App() {
  const [currentPage, setCurrentPage] = useState("Inicio");

  // Escuchar cambios en la URL
  useEffect(() => {
    const handlePopState = () => {
      const page = new URLSearchParams(window.location.search).get('page') || 'Inicio';
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Establecer página inicial basada en URL
    const initialPage = new URLSearchParams(window.location.search).get('page') || 'Inicio';
    setCurrentPage(initialPage);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Función para cambiar páginas
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    const url = page === 'Inicio' ? '/' : `/?page=${encodeURIComponent(page)}`;
    window.history.pushState(null, '', url);
  };

  // Renderizar la página actual
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Inicio":
        return <Inicio />;
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
      default:
        return <Inicio />;
    }
  };

  // Páginas que no deben mostrar el header
  const pagesWithoutHeader = ["Inicio de Sesión", "Registro"];
  const showHeader = !pagesWithoutHeader.includes(currentPage);

  return (
    <div className="min-h-screen">
      {/* Mostrar Header solo en páginas que lo necesiten */}
      {showHeader && <Header currentPage={currentPage} onNavigate={navigateToPage} />}
      {renderCurrentPage()}
    </div>
  );
}