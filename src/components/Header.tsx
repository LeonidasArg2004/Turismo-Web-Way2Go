import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import way2GoLogo from 'figma:asset/c364adb80cd90b771ae6c4e8f69e06df8e8648db.png';

export default function Header() {
  const menuItems = [
    "Inicio",
    "Rutas Turísticas", 
    "Transporte",
    "Hospedaje & Restaurantes",
    "Experiencias",
    "Turismo Rural"
  ];

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
              <span className="text-xl font-bold" style={{ color: '#1E90FF' }}>Way</span>
              <span className="text-xl font-bold" style={{ color: '#32CD32' }}>2</span>
              <span className="text-xl font-bold" style={{ color: '#FF6347' }}>Go</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Mi Cuenta
            </Button>
            <Button size="sm" className="bg-primary">
              Reservar Ahora
            </Button>
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
                  <a 
                    key={item}
                    href="#" 
                    className="text-base hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4 border-t">
                  <Button variant="ghost" className="w-full justify-start mb-2">
                    <User className="h-4 w-4 mr-2" />
                    Mi Cuenta
                  </Button>
                  <Button className="w-full bg-primary">
                    Reservar Ahora
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}