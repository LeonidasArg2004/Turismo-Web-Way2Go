import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Truck, MapPin, Clock, Shield, Star, Calendar, DollarSign, CheckCircle, Car, Bus, Phone, Users } from "lucide-react";

export default function TransporteConfiable() {
  const transportTypes = [
    { 
      icon: Car, 
      title: "Transfers Privados", 
      description: "Viajes cómodos y directos desde el aeropuerto a tu destino", 
      price: "Desde $25 USD", 
      duration: "30-90 min",
      features: ["Aire acondicionado", "WiFi gratis", "Agua embotellada", "Conductor bilingüe"],
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      icon: Bus, 
      title: "Tours en Bus", 
      description: "Excursiones grupales a los principales destinos turísticos", 
      price: "Desde $15 USD", 
      duration: "2-8 horas",
      features: ["Guía certificado", "Transporte climatizado", "Itinerario completo", "Seguro incluido"],
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    { 
      icon: Truck, 
      title: "4x4 Aventura", 
      description: "Vehículos todo terreno para destinos off-road", 
      price: "Desde $35 USD", 
      duration: "4-12 horas",
      features: ["Vehículo 4x4", "Equipo de seguridad", "Conductor experto", "Rutas especializadas"],
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
  ];

  const benefits = [
    { icon: Shield, title: "Seguridad Garantizada", description: "Vehículos inspeccionados y conductores certificados" },
    { icon: Clock, title: "Puntualidad", description: "Llegamos a tiempo, siempre" },
    { icon: MapPin, title: "Cobertura Nacional", description: "Servicios en todos los destinos de Nicaragua" },
    { icon: Star, title: "Calidad Premium", description: "Experiencia de 5 estrellas en cada viaje" },
  ];

  const destinations = [
    "Managua - Aeropuerto",
    "Granada - León", 
    "San Juan del Sur",
    "Ometepe",
    "Matagalpa - Jinotega",
    "Las Peñitas - Poneloya"
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative text-white py-16"
          style={{
            background: 'linear-gradient(135deg, #1E90FF 0%, #32CD32 50%, #FF6347 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto max-w-6xl px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Truck className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Transporte Confiable</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Viaja seguro y cómodo por todo Nicaragua con nuestros servicios de transporte verificados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="h-5 w-5 mr-2" />
                Reservar Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600">
                <Phone className="h-5 w-5 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        </section>

        {/* Transport Types Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Nuestros Servicios</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Opciones de transporte para cada tipo de viajero y destino
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transportTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div 
                      className="h-2"
                      style={{
                        background: idx === 0 ? '#1E90FF' : idx === 1 ? '#32CD32' : '#FF6347'
                      }}
                    ></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 ${type.bgColor} rounded-xl`}>
                          <Icon className={`h-6 w-6 ${type.textColor}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{type.title}</CardTitle>
                          <div className="flex items-center gap-4 mt-1">
                            <Badge variant="secondary" className={type.textColor}>
                              {type.price}
                            </Badge>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {type.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {type.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className={`w-full ${type.buttonColor} text-white`}>
                        <DollarSign className="h-4 w-4 mr-2" />
                        Reservar {type.title}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">¿Por qué elegirnos?</h2>
              <p className="text-lg text-gray-600">
                Comprometidos con tu seguridad y comodidad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="text-center group">
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform"
                      style={{
                        background: 'linear-gradient(135deg, #1E90FF, #32CD32)'
                      }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Destinos Populares</h2>
              <p className="text-lg text-gray-600">
                Rutas más solicitadas por nuestros viajeros
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:text-green-600 transition-colors" />
                    <h3 className="text-lg mb-2">{destination}</h3>
                    <Button variant="ghost" className="text-blue-600 hover:text-green-600">
                      Ver opciones →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section 
          className="py-16 px-4 text-white"
          style={{
            background: 'linear-gradient(135deg, #1E90FF, #32CD32)'
          }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl mb-4">¿Necesitas un servicio personalizado?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contáctanos para cotizaciones especiales, grupos grandes o rutas personalizadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Llamar ahora: +505 8888-8888
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Users className="h-5 w-5 mr-2" />
                Cotización grupal
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}