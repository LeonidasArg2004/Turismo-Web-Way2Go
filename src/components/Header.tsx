import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom"; 
import way2GoLogo from '../assets/c364adb80cd90b771ae6c4e8f69e06df8e8648db.png';

export default function Header() {
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Rutas Turísticas", path: "/rutas-turisticas" },
    { name: "Transporte", path: "/transporte" },
    { name: "Hospedaje & Restaurantes", path: "/hospedaje-restaurantes" },
    { name: "Experiencias", path: "/experiencias" },
    { name: "Turismo Rural", path: "/turismo-rural" },
    { name: "Mi Cuenta", path: "/mi-cuenta" },
  ];

  const handleNavClick = (item: string, path: string, e: React.MouseEvent) => {
    if (item === "Inicio") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={way2GoLogo} 
              alt="Way2Go Logo" 
              className="h-12 w-auto"
            />
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Way</span>
              <span className="text-xl font-bold text-green-600">2</span>
              <span className="text-xl font-bold text-red-500">Go</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(item.name, item.path, e)}
                className="text-sm hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/mi-cuenta">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Mi Cuenta
              </Button>
            </Link>
            <Link to="/ofertas">
              <Button size="sm" className="bg-primary">
                Reservar Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleNavClick(item.name, item.path, e)}
                    className="text-base hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Link to="/mi-cuenta">
                    <Button variant="ghost" className="w-full justify-start mb-2">
                      <User className="h-4 w-4 mr-2" />
                      Mi Cuenta
                    </Button>
                  </Link>
                  <Link to="/ofertas">
                    <Button className="w-full bg-primary">
                      Reservar Ahora
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
