import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, HeadphonesIcon } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contacto() {
  const canalesContacto = [
    {
      icono: Phone,
      titulo: "Teléfono",
      descripcion: "Habla directamente con nuestro equipo",
      contacto: "+505 2222-3333",
      horario: "Lun - Dom: 7:00 AM - 10:00 PM"
    },
    {
      icono: Mail,
      titulo: "Email",
      descripcion: "Te respondemos en menos de 2 horas",
      contacto: "hola@way2go.com.ni",
      horario: "Respuesta garantizada 24/7"
    },
    {
      icono: MessageSquare,
      titulo: "WhatsApp",
      descripcion: "Chatea con nosotros al instante",
      contacto: "+505 8888-9999",
      horario: "Disponible las 24 horas"
    },
    {
      icono: HeadphonesIcon,
      titulo: "Chat en Vivo",
      descripcion: "Soporte inmediato en el sitio web",
      contacto: "Chat disponible",
      horario: "Lun - Dom: 6:00 AM - 12:00 AM"
    }
  ];

  const oficinas = [
    {
      ciudad: "Managua",
      direccion: "Centro Comercial Metrocentro, Módulo M-234",
      telefono: "+505 2222-3333",
      email: "managua@way2go.com.ni",
      horario: "Lun - Vie: 8:00 AM - 6:00 PM, Sáb: 9:00 AM - 4:00 PM"
    },
    {
      ciudad: "Granada",
      direccion: "Calle La Calzada, Casa #125",
      telefono: "+505 2552-4444",
      email: "granada@way2go.com.ni",
      horario: "Lun - Vie: 8:00 AM - 5:00 PM, Sáb: 9:00 AM - 2:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Contáctanos</h1>
              <p className="max-w-2xl mx-auto">
                ¿Necesitas ayuda planificando tu viaje a Nicaragua? Nuestro equipo de expertos 
                está disponible 24/7 para hacer de tu experiencia algo inolvidable.
              </p>
            </div>
          </div>
        </section>

        {/* Canales de Contacto */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">¿Cómo prefieres contactarnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {canalesContacto.map((canal, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <canal.icono className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-base">{canal.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{canal.descripcion}</p>
                    <p className="font-medium text-blue-600 mb-2">{canal.contacto}</p>
                    <p className="text-xs text-gray-500">{canal.horario}</p>
                    <Button className="w-full mt-4" size="sm">Contactar</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario de Contacto */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">Envíanos un Mensaje</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Formulario */}
                <Card>
                  <CardHeader>
                    <CardTitle>¿En qué podemos ayudarte?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nombre">Nombre</Label>
                          <Input id="nombre" placeholder="Tu nombre" />
                        </div>
                        <div>
                          <Label htmlFor="apellido">Apellido</Label>
                          <Input id="apellido" placeholder="Tu apellido" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" />
                      </div>
                      
                      <div>
                        <Label htmlFor="telefono">Teléfono (Opcional)</Label>
                        <Input id="telefono" placeholder="+505 8888-9999" />
                      </div>
                      
                      <div>
                        <Label htmlFor="asunto">Tipo de Consulta</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un tema" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="reserva">Ayuda con Reserva</SelectItem>
                            <SelectItem value="ruta">Información sobre Rutas</SelectItem>
                            <SelectItem value="hospedaje">Hospedaje y Restaurantes</SelectItem>
                            <SelectItem value="transporte">Transporte</SelectItem>
                            <SelectItem value="grupo">Viajes en Grupo</SelectItem>
                            <SelectItem value="personalizado">Tour Personalizado</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="mensaje">Mensaje</Label>
                        <Textarea 
                          id="mensaje" 
                          placeholder="Cuéntanos cómo podemos ayudarte..."
                          className="min-h-32"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Información Adicional */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="mb-4">Respuesta Garantizada</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Respuesta por email en menos de 2 horas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Atención telefónica inmediata</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Asesoramiento personalizado gratuito</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Soporte en español e inglés</span>
                      </div>
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">¿Prefieres llamarnos?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl text-blue-600 mb-2">+505 2222-3333</div>
                        <p className="text-sm text-gray-600 mb-4">
                          Lunes a Domingo<br />
                          7:00 AM - 10:00 PM
                        </p>
                        <Button variant="outline" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Llamar Ahora
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oficinas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Nuestras Oficinas</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {oficinas.map((oficina, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      {oficina.ciudad}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Dirección</p>
                      <p className="font-medium">{oficina.direccion}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Teléfono</p>
                        <p className="font-medium">{oficina.telefono}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Email</p>
                        <p className="font-medium">{oficina.email}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Horarios</p>
                      <p className="text-sm">{oficina.horario}</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Ver en Google Maps
                    </Button>
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