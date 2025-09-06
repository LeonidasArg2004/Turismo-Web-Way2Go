import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Bed, Utensils, Star, MapPin, Wifi, Car, Coffee, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HospedajeRestaurantes() {
  const hoteles = [
    {
      nombre: "Hotel Colonial Granada",
      categoria: "Boutique",
      precio: "$120/noche",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1719241367647-718f2f7e8956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NTcxODk3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Centro Histórico, Granada",
      servicios: ["WiFi gratuito", "Desayuno incluido", "Piscina", "Parking"]
    },
    {
      nombre: "Eco Lodge Volcán Maderas",
      categoria: "Eco-lodge",
      precio: "$85/noche",
      rating: 4.6,
      imagen: "https://images.unsplash.com/photo-1719241367647-718f2f7e8956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NTcxODk3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Isla de Ometepe",
      servicios: ["Vista al volcán", "Tours incluidos", "Restaurante", "Kayaks"]
    }
  ];

  const restaurantes = [
    {
      nombre: "El Zaguan",
      tipo: "Cocina Nicaragüense",
      precio: "$$",
      rating: 4.9,
      imagen: "https://images.unsplash.com/photo-1719241367647-718f2f7e8956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NTcxODk3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Granada",
      especialidad: "Gallo Pinto, Nacatamales, Vigorón"
    },
    {
      nombre: "Café de las Sonrisas",
      tipo: "Café & Postres",
      precio: "$",
      rating: 4.7,
      imagen: "https://images.unsplash.com/photo-1719241367647-718f2f7e8956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NTcxODk3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Granada",
      especialidad: "Café orgánico, Tres leches, Emprendimiento social"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Hospedaje & Restaurantes</h1>
              <p className="max-w-2xl mx-auto">
                Descansa cómodamente y disfruta de la auténtica gastronomía nicaragüense. 
                Desde hoteles boutique hasta eco-lodges, y restaurantes que te harán saborear lo mejor del país.
              </p>
            </div>
          </div>
        </section>

        {/* Buscador */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Buscar Hospedaje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label>Destino</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="¿A dónde vas?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="managua">Managua</SelectItem>
                        <SelectItem value="granada">Granada</SelectItem>
                        <SelectItem value="leon">León</SelectItem>
                        <SelectItem value="ometepe">Isla de Ometepe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Check-in</Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label>Check-out</Label>
                    <Input type="date" />
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">Buscar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tabs Hospedaje/Restaurantes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="hospedaje" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger value="hospedaje" className="flex items-center gap-2">
                  <Bed className="h-4 w-4" />
                  Hospedaje
                </TabsTrigger>
                <TabsTrigger value="restaurantes" className="flex items-center gap-2">
                  <Utensils className="h-4 w-4" />
                  Restaurantes
                </TabsTrigger>
              </TabsList>

              {/* Hoteles */}
              <TabsContent value="hospedaje">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {hoteles.map((hotel, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <ImageWithFallback 
                          src={hotel.imagen}
                          alt={hotel.nombre}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                          {hotel.categoria}
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{hotel.nombre}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{hotel.ubicacion}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{hotel.rating}</span>
                            </div>
                            <p className="text-xl">{hotel.precio}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.servicios.map((servicio, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {servicio}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full">Ver Disponibilidad</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Restaurantes */}
              <TabsContent value="restaurantes">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {restaurantes.map((restaurante, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <ImageWithFallback 
                          src={restaurante.imagen}
                          alt={restaurante.nombre}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                          {restaurante.tipo}
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{restaurante.nombre}</CardTitle>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{restaurante.ubicacion}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{restaurante.rating}</span>
                            </div>
                            <p className="text-xl">{restaurante.precio}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          <strong>Especialidad:</strong> {restaurante.especialidad}
                        </p>
                        <Button className="w-full">Ver Menú</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}