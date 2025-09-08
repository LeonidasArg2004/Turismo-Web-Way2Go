import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Mountain, Waves, Camera, Coffee, TreePine, Sunset, Clock, Users, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Experiencias() {
  const experiencias = [
    {
      titulo: "Senderismo Volcán Masaya",
      descripcion: "Camina hasta el cráter activo del volcán Masaya y observa el lago de lava",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "Aventura",
      duracion: "4 horas",
      dificultad: "Moderada",
      precio: "$65",
      rating: 4.8,
      incluye: ["Guía especializado", "Transporte", "Equipo de seguridad"],
      icono: Mountain
    },
    {
      titulo: "Tour Fotográfico Granada Colonial",
      descripcion: "Captura la belleza arquitectural de la ciudad más antigua de América Continental",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "Cultural",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$45",
      rating: 4.9,
      incluye: ["Fotógrafo profesional", "Tips de fotografía", "Edición básica"],
      icono: Camera
    },
    {
      titulo: "Tour de Café en Matagalpa",
      descripcion: "Descubre el proceso del café nicaragüense desde la semilla hasta la taza",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "Gastronómica",
      duracion: "5 horas",
      dificultad: "Fácil",
      precio: "$80",
      rating: 4.7,
      incluye: ["Degustación de café", "Almuerzo típico", "Certificado de participación"],
      icono: Coffee
    },
    {
      titulo: "Atardecer en Las Isletas",
      descripcion: "Navegación en kayak entre las 365 isletas del Lago Cocibolca",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "Naturaleza",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$55",
      rating: 4.9,
      incluye: ["Kayak y equipo", "Guía naturalista", "Snacks y bebidas"],
      icono: Sunset
    }
  ];

  const categorias = ["Todas", "Aventura", "Cultural", "Gastronómica", "Naturaleza"];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Experiencias Únicas</h1>
              <p className="max-w-2xl mx-auto">
                Vive aventuras inolvidables en Nicaragua. Desde escalada de volcanes hasta tours culturales, 
                cada experiencia te conectará auténticamente con nuestro país.
              </p>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((categoria) => (
                <Button 
                  key={categoria}
                  variant={categoria === "Todas" ? "default" : "outline"}
                  size="sm"
                >
                  {categoria}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid de Experiencias */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiencias.map((experiencia, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <ImageWithFallback 
                      src={experiencia.imagen}
                      alt={experiencia.titulo}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                      {experiencia.categoria}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <experiencia.icono className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{experiencia.rating}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle>{experiencia.titulo}</CardTitle>
                    <p className="text-gray-600 text-sm">{experiencia.descripcion}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{experiencia.duracion}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mountain className="h-4 w-4 text-gray-500" />
                        <span>{experiencia.dificultad}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl text-green-600">{experiencia.precio}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Incluye:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {experiencia.incluye.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full">Reservar Experiencia</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contacta con nuestros especialistas en turismo para crear una experiencia 
              personalizada que se adapte perfectamente a tus intereses y preferencias.
            </p>
            <Button size="lg">Crear Experiencia Personalizada</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}