import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Bus, Car, Plane, Ship, Clock, MapPin, Users, Star, Bike, Truck, Plane as PlaneAlt, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Transporte() {
  const serviciosTransporte = [
    {
      tipo: "Autobús Turístico",
      icono: Bus,
      descripcion: "Buses cómodos con aire acondicionado para grupos",
      precio: "Desde $15/persona",
      imagen: "https://images.unsplash.com/photo-1598332123582-7ad71ac4c25e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBidXMlMjB0cmFuc3BvcnRhdGlvbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NzU3MTMwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["WiFi gratuito", "Aire acondicionado", "Asientos reclinables"],
      rating: 4.8,
      capacidad: "40 personas"
    },
    {
      tipo: "Vehículo Privado",
      icono: Car,
      descripcion: "Autos y SUVs con conductor profesional",
      precio: "Desde $80/día",
      imagen: "https://images.unsplash.com/photo-1650383045243-9c37a9c5f1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0YXhpJTIwdmVoaWNsZSUyMGNhciUyMHRyYW5zcG9ydGF0aW9ufGVufDF8fHx8MTc1NzU3MTMwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Conductor bilingüe", "Seguro incluido", "Flexibilidad de horarios"],
      rating: 4.9,
      capacidad: "1-4 personas"
    },
    {
      tipo: "Vuelos Domésticos",
      icono: Plane,
      descripcion: "Vuelos internos para conexiones rápidas",
      precio: "Desde $120/persona",
      imagen: "https://images.unsplash.com/photo-1646798577452-cf5cffe91320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhaXJwbGFuZSUyMGZsaWdodCUyMGFpcnBvcnR8ZW58MXx8fHwxNzU3NTcxMzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Viajes rápidos", "Servicios de aeropuerto", "Conexiones nacionales"],
      rating: 4.7,
      capacidad: "120 personas"
    },
    {
      tipo: "Transporte Acuático",
      icono: Ship,
      descripcion: "Lanchas y ferries para destinos costeros",
      precio: "Desde $25/persona",
      imagen: "https://images.unsplash.com/photo-1642990440807-f5889bd2ffc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBib2F0JTIwZmVycnklMjB3YXRlciUyMHRyYW5zcG9ydGF0aW9ufGVufDF8fHx8MTc1NzU3MTMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Chalecos salvavidas", "Guía incluido", "Rutas escénicas"],
      rating: 4.6,
      capacidad: "12-30 personas"
    },
    {
      tipo: "Motocicletas",
      icono: Bike,
      descripcion: "Alquiler de motos para aventureros",
      precio: "Desde $35/día",
      imagen: "https://images.unsplash.com/photo-1708823339140-a26385a7388a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBtb3RvcmN5Y2xlJTIwYmlrZSUyMHRvdXJ8ZW58MXx8fHwxNzU3NTcxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Casco incluido", "Seguro básico", "Rutas recomendadas"],
      rating: 4.5,
      capacidad: "1-2 personas"
    },
    {
      tipo: "Minivan Grupal",
      icono: Truck,
      descripcion: "Vans cómodas para grupos familiares",
      precio: "Desde $120/día",
      imagen: "https://images.unsplash.com/photo-1614623626926-e3dae0476930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2YW4lMjBtaW5pYnVzJTIwZ3JvdXAlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NTc1NzEzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Espacio amplio", "Aire acondicionado", "Equipaje incluido"],
      rating: 4.7,
      capacidad: "6-8 personas"
    },
    {
      tipo: "Shuttle Aeropuerto",
      icono: Bus,
      descripcion: "Traslados compartidos desde/hacia aeropuerto",
      precio: "Desde $12/persona",
      imagen: "https://images.unsplash.com/photo-1646798577452-cf5cffe91320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBzaHV0dGxlJTIwYWlycG9ydCUyMHRyYW5zZmVyJTIwc2VydmljZXxlbnwxfHx8fDE3NTc1NzEzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Horarios regulares", "Paradas múltiples", "Económico"],
      rating: 4.4,
      capacidad: "15-20 personas"
    },
    {
      tipo: "Bicicletas Eco",
      icono: Bike,
      descripcion: "Bicicletas para turismo ecológico",
      precio: "Desde $8/día",
      imagen: "https://images.unsplash.com/photo-1745240938964-91f8d5af7a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBiaWN5Y2xlJTIwZWNvJTIwdG91cmlzbSUyMGdyZWVuJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1NzU3MTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Casco gratis", "Rutas eco-amigables", "Mantenimiento incluido"],
      rating: 4.3,
      capacidad: "1 persona"
    },
    {
      tipo: "Helicóptero Turístico",
      icono: PlaneAlt,
      descripcion: "Tours aéreos panorámicos únicos",
      precio: "Desde $300/persona",
      imagen: "https://images.unsplash.com/photo-1646448046538-9ea3d8496b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBoZWxpY29wdGVyJTIwdG91ciUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzU3NTcxMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Vistas únicas", "Piloto profesional", "Experiencia premium"],
      rating: 4.9,
      capacidad: "3-4 personas"
    },
    {
      tipo: "Tren Turístico",
      icono: Zap,
      descripcion: "Experiencia ferroviaria histórica",
      precio: "Desde $45/persona",
      imagen: "https://images.unsplash.com/photo-1717599958669-a553e5905287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFpbiUyMHJhaWx3YXklMjB0cmFuc3BvcnQlMjB2aW50YWdlfGVufDF8fHx8MTc1NzU3MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Viaje nostálgico", "Paisajes únicos", "Guía histórico"],
      rating: 4.6,
      capacidad: "50-80 personas"
    },
    {
      tipo: "Carreta Tradicional",
      icono: Truck,
      descripcion: "Transporte tradicional para experiencias auténticas",
      precio: "Desde $20/persona",
      imagen: "https://images.unsplash.com/photo-1724733223352-538651520481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3JzZSUyMGNhcnQlMjB0cmFkaXRpb25hbCUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NTc1NzEzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Experiencia cultural", "Ritmo relajado", "Tradición local"],
      rating: 4.2,
      capacidad: "4-6 personas"
    },
    {
      tipo: "Mototaxi Local",
      icono: Bike,
      descripcion: "Transporte rápido y económico en ciudades",
      precio: "Desde $3/viaje",
      imagen: "https://images.unsplash.com/photo-1575406809920-57b593c5190c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0dWslMjB0dWslMjBtb3RvdGF4aSUyMGxvY2FsJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc1NzU3MTM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Muy económico", "Disponibilidad alta", "Experiencia local"],
      rating: 4.0,
      capacidad: "1-2 personas"
    },
    {
      tipo: "Bus Charter Lujo",
      icono: Bus,
      descripcion: "Buses premium para grupos grandes",
      precio: "Desde $400/día",
      imagen: "https://images.unsplash.com/photo-1700617593271-26c31f7e1738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjaGFydGVyJTIwYnVzJTIwbHV4dXJ5JTIwZ3JvdXAlMjB0cmF2ZWx8ZW58MXx8fHwxNzU3NTcxMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Máximo confort", "Entretenimiento", "Servicio premium"],
      rating: 4.8,
      capacidad: "30-50 personas"
    },
    {
      tipo: "SUV de Lujo",
      icono: Car,
      descripcion: "Vehículos premium con chofer ejecutivo",
      precio: "Desde $150/día",
      imagen: "https://images.unsplash.com/photo-1646798577452-cf5cffe91320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhaXJwb3J0JTIwdHJhbnNmZXIlMjBsdXh1cnklMjBzdXZ8ZW58MXx8fHwxNTc1NzU3MTM0NnwwMK&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Lujo ejecutivo", "Chofer profesional", "Servicios VIP"],
      rating: 4.9,
      capacidad: "1-6 personas"
    },
    {
      tipo: "Lancha de Pesca",
      icono: Ship,
      descripcion: "Embarcaciones especializadas para pesca deportiva",
      precio: "Desde $180/día",
      imagen: "https://images.unsplash.com/photo-1592582494509-28d914589019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBmaXNoaW5nJTIwYm9hdCUyMGNoYXJ0ZXIlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NTc1NzEzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caracteristicas: ["Equipo de pesca", "Capitán experto", "Rutas especializadas"],
      rating: 4.7,
      capacidad: "4-8 personas"
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="text-white py-16"
        style={{
            background: `linear-gradient(to right, #2141b2ff, #2b95ffff)`
          }}>
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
            <h1 className="text-center mb-12 ">Nuestros Servicios</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {serviciosTransporte.map((servicio, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40">
                    <ImageWithFallback 
                      src={servicio.imagen}
                      alt={servicio.tipo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full">
                      <servicio.icono className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{servicio.rating}</span>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg leading-tight">{servicio.tipo}</CardTitle>
                    <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="mb-3">
                      <p className="text-lg text-orange-600 mb-2">{servicio.precio}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-600">{servicio.capacidad}</span>
                      </div>
                      <ul className="space-y-1">
                        {servicio.caracteristicas.slice(0, 2).map((caracteristica, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                            <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full text-sm">Reservar Ahora</Button>
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