import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Truck, Hotel, Utensils, Theater, Leaf } from "lucide-react";

interface ServicesSectionProps {
  onNavigate: (page: string) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const services = [
    { icon: Truck, title: "Transporte Confiable", description: "Transfers, tours y transporte seguro a todos los destinos", emoji: "🚐" },
    { icon: Hotel, title: "Hospedaje seguro", description: "Hoteles, hostales y alojamientos verificados", emoji: "🏨" },
    { icon: Utensils, title: "Restaurantes locales", description: "Descubre la gastronomía auténtica nicaragüense", emoji: "🍴" },
    { icon: Theater, title: "Experiencias culturales", description: "Museos, arte, música y tradiciones locales", emoji: "🎭" },
    { icon: Leaf, title: "Turismo rural comunitario", description: "Conecta con comunidades y naturaleza", emoji: "🌱" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Servicios Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para una experiencia única en Nicaragua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">{service.emoji}</span>
                    </div>
                    <IconComponent className="h-6 w-6 text-primary mx-auto" />
                  </div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      let pageToNavigate = "";
                      
                      switch (service.title) {
                        case "Transporte Confiable":
                          pageToNavigate = "Transporte Confiable";
                          break;
                        case "Hospedaje seguro":
                          pageToNavigate = "Hospedaje & Restaurantes";
                          break;
                        case "Restaurantes locales":
                          pageToNavigate = "Hospedaje & Restaurantes";
                          break;
                        case "Experiencias culturales":
                          pageToNavigate = "Experiencias";
                          break;
                        case "Turismo rural comunitario":
                          pageToNavigate = "Turismo Rural";
                          break;
                        default:
                          return;
                      }
                      
                      onNavigate(pageToNavigate);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
