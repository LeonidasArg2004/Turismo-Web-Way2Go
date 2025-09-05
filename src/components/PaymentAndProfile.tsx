import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, CreditCard, Smartphone, Building2, Star, MessageCircle, History, Heart } from "lucide-react";
import { Badge } from "./ui/badge";

export default function PaymentAndProfile() {
  const paymentMethods = [
    { icon: CreditCard, name: "Tarjetas de crédito/débito" },
    { icon: Smartphone, name: "PayPal" },
    { icon: Building2, name: "Transferencias bancarias" },
    { icon: Smartphone, name: "Billeteras digitales" }
  ];

  const userFeatures = [
    {
      icon: History,
      title: "Historial de reservas",
      description: "Accede a todas tus reservas pasadas y futuras"
    },
    {
      icon: Star,
      title: "Opiniones y reseñas",
      description: "Lee y comparte experiencias con otros viajeros"
    },
    {
      icon: Heart,
      title: "Recomendaciones personalizadas",
      description: "Descubre ofertas basadas en tus preferencias"
    },
    {
      icon: MessageCircle,
      title: "Soporte 24/7",
      description: "Asistencia en tiempo real durante tu viaje"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Payment & Security Section */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl mb-4">
                Facilidades de Pago y Seguridad
              </h2>
              <p className="text-gray-600">
                Reserva con total confianza y comodidad
              </p>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3>Pagos 100% seguros</h3>
                    <p className="text-sm text-gray-600">
                      Certificación SSL y encriptación de datos
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <IconComponent className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">{method.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="p-2">
                <Shield className="h-4 w-4 mr-1" />
                SSL Seguro
              </Badge>
              <Badge variant="outline" className="p-2">
                Cancelación gratuita
              </Badge>
              <Badge variant="outline" className="p-2">
                Mejor precio garantizado
              </Badge>
            </div>
          </div>

          {/* User Profile & Community Section */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl mb-4">
                Perfil del Usuario & Comunidad
              </h2>
              <p className="text-gray-600">
                Una experiencia personalizada para cada viajero
              </p>
            </div>

            <div className="space-y-4">
              {userFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800">Únete a nuestra comunidad</span>
              </div>
              <p className="text-sm text-blue-700 mb-3">
                Más de 10,000 viajeros han descubierto Nicaragua con Way2Go
              </p>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Crear cuenta gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}