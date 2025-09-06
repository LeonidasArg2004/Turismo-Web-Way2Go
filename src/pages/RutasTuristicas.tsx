import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MapPin, Clock, Star, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function RutasTuristicas() {
  const rutas = [
    {
      id: 1,
      titulo: "Ruta de los Volcanes",
      descripcion: "Explora los majestuosos volcanes de Nicaragua: Masaya, Mombacho y Concepción",
      imagen: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2b2xjYW5vJTIwbGFuZHNjYXBlZHwxfHx8fDE3NTcxODk2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "3 días",
      precio: "$450",
      rating: 4.8,
      participantes: "2-8 personas",
      categorias: ["Aventura", "Naturaleza"]
    },
    {
      id: 2,
      titulo: "Ruta Colonial Granada-León",
      descripcion: "Descubre la rica historia colonial de Nicaragua visitando sus ciudades más emblemáticas",
      imagen: "https://images.unsplash.com/photo-1598332123582-7ad71ac4c25e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFuc3BvcnRhdGlvbiUyMGJ1cyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NzE4OTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "2 días",
      precio: "$320",
      rating: 4.9,
      participantes: "1-12 personas",
      categorias: ["Cultura", "Historia"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Rutas Turísticas</h1>
              <p className="max-w-2xl mx-auto">
                Descubre Nicaragua a través de nuestras rutas cuidadosamente diseñadas. 
                Desde volcanes activos hasta ciudades coloniales, cada ruta te llevará a 
                vivir experiencias únicas.
              </p>
            </div>
          </div>
        </section>

        {/* Rutas Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {rutas.map((ruta) => (
                <Card key={ruta.id} className="overflow-hidden">
                  <div className="relative h-64">
                    <ImageWithFallback 
                      src={ruta.imagen}
                      alt={ruta.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {ruta.categorias.map((categoria) => (
                        <Badge key={categoria} variant="secondary" className="bg-white/90 text-gray-800">
                          {categoria}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{ruta.titulo}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{ruta.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{ruta.descripcion}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{ruta.duracion}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{ruta.participantes}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Desde</p>
                        <p className="text-xl">{ruta.precio}</p>
                      </div>
                    </div>
                    <Button className="w-full">Ver Detalles</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}