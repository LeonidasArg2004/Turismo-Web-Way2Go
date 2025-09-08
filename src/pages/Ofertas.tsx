import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Clock, Users, Star, Calendar, Percent, Gift, Zap, Timer } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Ofertas() {
  const ofertasDestacadas = [
    {
      titulo: "Paquete Volcanes + Colonial",
      descripcionCorta: "5 días explorando volcanes y ciudades coloniales",
      precioOriginal: "$850",
      precioOferta: "$595",
      descuento: "30%",
      imagen: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2b2xjYW5vJTIwbGFuZHNjYXBlZHwxfHx8fDE3NTcxODk2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tiempoRestante: "5 días",
      incluye: ["Hospedaje 4 noches", "Tours guiados", "Transporte", "Desayunos"],
      rating: 4.9,
      categoria: "Paquete Completo"
    },
    {
      titulo: "Weekend en Granada",
      descripcionCorta: "Escapada romántica de fin de semana",
      precioOriginal: "$320",
      precioOferta: "$240",
      descuento: "25%",
      imagen: "https://images.unsplash.com/photo-1719241367647-718f2f7e8956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NTcxODk3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tiempoRestante: "10 días",
      incluye: ["Hotel boutique 2 noches", "Cena romántica", "Tour en carreta", "Spa"],
      rating: 4.8,
      categoria: "Escapada Romántica"
    },
    {
      titulo: "Aventura Volcán Maderas",
      descripcionCorta: "Senderismo y camping en Ometepe",
      precioOriginal: "$180",
      precioOferta: "$126",
      descuento: "30%",
      imagen: "https://images.unsplash.com/photo-1742320086662-56a3c278734b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBydXJhbCUyMGZhcm0lMjBjb2ZmZWUlMjBwbGFudGF0aW9ufGVufDF8fHx8MTc1NzE4OTgxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tiempoRestante: "3 días",
      incluye: ["Guía especializado", "Equipo de camping", "Comidas", "Transporte"],
      rating: 4.7,
      categoria: "Aventura"
    }
  ];

  const ofertasRelámpago = [
    {
      titulo: "Tour Masaya Express",
      descripcion: "Visita al volcán y mercado artesanal",
      precio: "$35",
      precioOriginal: "$50",
      tiempoRestante: "2h 30m",
      disponibles: 8
    },
    {
      titulo: "Clase de Cocina Nicaragüense",
      descripcion: "Aprende a hacer gallo pinto y nacatamales",
      precio: "$45",
      precioOriginal: "$65",
      tiempoRestante: "4h 15m",
      disponibles: 3
    }
  ];

  const cupones = [
    {
      codigo: "PRIMERA20",
      titulo: "20% OFF Primera Reserva",
      descripcion: "Para nuevos usuarios en cualquier experiencia",
      validoHasta: "31 Enero 2025",
      icono: Gift
    },
    {
      codigo: "GRUPO15",
      titulo: "15% OFF Grupos 4+",
      descripcion: "Reservas para 4 o más personas",
      validoHasta: "28 Febrero 2025",
      icono: Users
    },
    {
      codigo: "SEMANA10",
      titulo: "10% OFF Entre Semana",
      descripcion: "Válido lunes a viernes",
      validoHasta: "15 Marzo 2025",
      icono: Calendar
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Ofertas Especiales</h1>
              <p className="max-w-2xl mx-auto">
                ¡Descubre Nicaragua al mejor precio! Ofertas limitadas, experiencias ilimitadas. 
                Aprovecha nuestros descuentos especiales y vive momentos únicos por menos.
              </p>
            </div>
          </div>
        </section>

        {/* Ofertas Flash */}
        <section className="py-12 bg-red-50 border-b-4 border-red-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-red-600" />
                <h2 className="text-red-600">Ofertas Flash</h2>
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <p className="text-red-700">¡Solo por tiempo limitado! No te pierdas estos precios únicos</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {ofertasRelámpago.map((oferta, index) => (
                <Card key={index} className="border-red-200 bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="destructive" className="animate-pulse">
                        <Timer className="h-3 w-3 mr-1" />
                        {oferta.tiempoRestante}
                      </Badge>
                      <Badge variant="outline">
                        {oferta.disponibles} disponibles
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-grow">
                        <h3 className="text-base mb-1">{oferta.titulo}</h3>
                        <p className="text-gray-600 text-sm mb-2">{oferta.descripcion}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-red-600">{oferta.precio}</span>
                          <span className="text-sm text-gray-500 line-through">{oferta.precioOriginal}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        ¡Reservar!
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ofertas Destacadas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Ofertas Destacadas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {ofertasDestacadas.map((oferta, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <ImageWithFallback 
                      src={oferta.imagen}
                      alt={oferta.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="destructive" className="bg-red-600">
                        -{oferta.descuento}
                      </Badge>
                      <Badge className="bg-white/90 text-gray-800">
                        {oferta.categoria}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{oferta.rating}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-base">{oferta.titulo}</CardTitle>
                    <p className="text-gray-600 text-sm">{oferta.descripcionCorta}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl text-red-600">{oferta.precioOferta}</span>
                        <span className="text-sm text-gray-500 line-through">{oferta.precioOriginal}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-orange-600">
                        <Clock className="h-3 w-3" />
                        {oferta.tiempoRestante} restantes
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Incluye:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {oferta.incluye.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full">Aprovechar Oferta</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Códigos de Descuento */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Códigos de Descuento</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {cupones.map((cupon, index) => (
                <Card key={index} className="text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-blue-600"></div>
                  <div className="absolute top-2 right-2">
                    <Percent className="h-4 w-4 text-white" />
                  </div>
                  <CardHeader>
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cupon.icono className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-base">{cupon.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{cupon.descripcion}</p>
                    <div className="bg-gray-100 p-3 rounded-lg mb-3">
                      <p className="text-xs text-gray-500 mb-1">Código:</p>
                      <p className="font-mono text-lg text-blue-600">{cupon.codigo}</p>
                    </div>
                    <p className="text-xs text-gray-500">Válido hasta: {cupon.validoHasta}</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      Copiar Código
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter de Ofertas */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="mb-4 text-white">¡No te pierdas ninguna oferta!</h2>
              <p className="mb-8 opacity-90">
                Suscríbete a nuestro newsletter y sé el primero en conocer nuestras ofertas exclusivas, 
                códigos de descuento especiales y promociones por tiempo limitado.
              </p>
              <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="flex-grow px-4 py-2 rounded-lg text-gray-900"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Suscribirme
                </Button>
              </div>
              <p className="text-xs opacity-75 mt-3">
                Enviamos máximo 2 emails por semana. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}