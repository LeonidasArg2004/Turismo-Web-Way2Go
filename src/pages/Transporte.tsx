import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Bus, Car, Plane, Ship, Clock, MapPin, Users, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Transporte() {
  const serviciosTransporte = [
    {
      tipo: "Autobús Turístico",
      icono: Bus,
      descripcion: "Buses cómodos con aire acondicionado para grupos",
      precio: "Desde $15/persona",
      imagen: "https://images.unsplash.com/photo-1598332123582-7ad71ac4c25e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFuc3BvcnRhdGlvbiUyMGJ1cyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NzE4OTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["WiFi gratuito", "Aire acondicionado", "Asientos reclinables"]
    },
    {
      tipo: "Vehículo Privado",
      icono: Car,
      descripcion: "Autos y SUVs con conductor profesional",
      precio: "Desde $80/día",
      imagen: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2b2xjYW5vJTIwbGFuZHNjYXBlZHwxfHx8fDE3NTcxODk2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Conductor bilingüe", "Seguro incluido", "Flexibilidad de horarios"]
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Transporte</h1>
              <p className="max-w-2xl mx-auto">
                Viaja cómodamente por Nicaragua con nuestros servicios de transporte. 
                Desde buses turísticos hasta vehículos privados, te llevamos a tu destino con seguridad.
              </p>
            </div>
          </div>
        </section>

        {/* Buscador de Transporte */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Buscar Transporte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label>Origen</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar ciudad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="managua">Managua</SelectItem>
                        <SelectItem value="granada">Granada</SelectItem>
                        <SelectItem value="leon">León</SelectItem>
                        <SelectItem value="masaya">Masaya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Destino</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar ciudad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="managua">Managua</SelectItem>
                        <SelectItem value="granada">Granada</SelectItem>
                        <SelectItem value="leon">León</SelectItem>
                        <SelectItem value="masaya">Masaya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Fecha</Label>
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

        {/* Servicios de Transporte */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviciosTransporte.map((servicio, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <ImageWithFallback 
                      src={servicio.imagen}
                      alt={servicio.tipo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <servicio.icono className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{servicio.tipo}</CardTitle>
                    <p className="text-gray-600">{servicio.descripcion}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-2xl text-orange-600 mb-2">{servicio.precio}</p>
                      <ul className="space-y-1">
                        {servicio.caracteristicas.map((caracteristica, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full">Reservar Ahora</Button>
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