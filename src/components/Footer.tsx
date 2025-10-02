import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import way2GoLogo from 'figma:asset/c364adb80cd90b771ae6c4e8f69e06df8e8648db.png';


export default function Footer() {
  const quickLinks = [
    "Inicio",
    "Rutas Turísticas", 
    "Transporte",
    "Hospedaje",
    "Experiencias",
    "Turismo Rural"
  ];

  const supportLinks = [
    "Centro de ayuda",
    "Contacto",
    "FAQ",
    "Política de privacidad",
    "Términos y condiciones",
    "Cancelaciones"
  ];

  const destinations = [
    "Granada",
    "León", 
    "San Juan del Sur",
    "Ometepe",
    "Masaya",
    "Matagalpa"
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl mb-3">Recibe ofertas y novedades</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Suscríbete a nuestro newsletter y sé el primero en conocer las mejores ofertas de turismo en Nicaragua
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="tu@email.com" 
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
            <Button className="bg-primary hover:bg-primary/90">
              <Mail className="h-4 w-4 mr-2" />
              Suscribirse
            </Button>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={way2GoLogo} 
                alt="Way2Go Logo" 
                className="h-10 w-auto"
              />
              <div className="flex items-center">
                <span className="text-xl" style={{ color: '#1E90FF' }}>Way</span>
                <span className="text-xl" style={{ color: '#32CD32' }}>2</span>
                <span className="text-xl" style={{ color: '#FF6347' }}>Go</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Tu compañero de confianza para descubrir la belleza auténtica de Nicaragua. Conectamos viajeros con experiencias únicas.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+505 2222-3333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@way2go.ni</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Managua, Nicaragua</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Soporte</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="mb-4">Destinos Populares</h4>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            © 2025 Way2Go. Todos los derechos reservados.
          </div>
          
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Síguenos en:</span>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}