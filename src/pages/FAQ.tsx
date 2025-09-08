import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Search, HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [busqueda, setBusqueda] = useState("");

  const categoriasFAQ = [
    {
      categoria: "Reservas y Pagos",
      icono: "💳",
      preguntas: [
        {
          pregunta: "¿Cómo puedo hacer una reserva?",
          respuesta: "Puedes hacer una reserva directamente en nuestro sitio web seleccionando la experiencia que deseas, eligiendo la fecha y completando el proceso de pago. También puedes contactarnos por teléfono o WhatsApp para recibir asistencia personalizada."
        },
        {
          pregunta: "¿Qué métodos de pago aceptan?",
          respuesta: "Aceptamos tarjetas de crédito y débito Visa, Mastercard y American Express. También aceptamos PayPal y transferencias bancarias. Para grupos grandes, ofrecemos planes de pago flexibles."
        },
        {
          pregunta: "¿Puedo cancelar mi reserva?",
          respuesta: "Sí, puedes cancelar tu reserva hasta 48 horas antes de la fecha programada sin costo alguno. Para cancelaciones con menos de 48 horas, aplica una penalización del 50%. Las cancelaciones el mismo día no son reembolsables."
        },
        {
          pregunta: "¿Cuándo debo pagar mi reserva?",
          respuesta: "Para reservas individuales, el pago se realiza al momento de la reserva. Para grupos de 6 o más personas, puedes pagar el 50% al reservar y el resto 7 días antes del viaje."
        }
      ]
    },
    {
      categoria: "Documentos y Requisitos",
      icono: "📋",
      preguntas: [
        {
          pregunta: "¿Qué documentos necesito para ingresar a Nicaragua?",
          respuesta: "Los ciudadanos de la mayoría de países necesitan pasaporte vigente. Algunos países requieren visa. Te recomendamos verificar los requisitos específicos para tu nacionalidad en el consulado nicaragüense más cercano o contactarnos para asesorarte."
        },
        {
          pregunta: "¿Necesito vacunas especiales?",
          respuesta: "No hay vacunas obligatorias para ingresar a Nicaragua. Sin embargo, se recomienda estar al día con las vacunas de rutina (hepatitis A y B, tétanos, fiebre amarilla si vienes de países de riesgo). Consulta con tu médico antes del viaje."
        },
        {
          pregunta: "¿Es seguro viajar a Nicaragua?",
          respuesta: "Nicaragua es un país seguro para el turismo. Nuestros tours son operados por guías locales experimentados que conocen las mejores rutas y prácticas de seguridad. Siempre incluimos seguro de viaje en nuestros paquetes."
        }
      ]
    },
    {
      categoria: "Durante el Viaje",
      icono: "✈️",
      preguntas: [
        {
          pregunta: "¿Qué incluyen los tours?",
          respuesta: "Nuestros tours incluyen guía bilingüe certificado, transporte, entradas a sitios turísticos y seguro de viaje. Algunos tours incluyen comidas y hospedaje según se especifica en cada paquete. Siempre detallamos qué está incluido y qué no."
        },
        {
          pregunta: "¿Qué debo llevar en los tours?",
          respuesta: "Te recomendamos ropa cómoda, zapatos para caminar, protector solar, repelente de insectos, sombrero y cámara. Para tours de volcanes, incluye ropa abrigada. Te enviamos una lista detallada al confirmar tu reserva."
        },
        {
          pregunta: "¿Los tours son aptos para niños?",
          respuesta: "Sí, la mayoría de nuestros tours son familiares. Ofrecemos descuentos especiales para niños menores de 12 años. Algunos tours de aventura tienen restricciones de edad por seguridad. Consulta las especificaciones de cada tour."
        },
        {
          pregunta: "¿Qué pasa si llueve durante mi tour?",
          respuesta: "Nicaragua tiene un clima tropical con temporadas definidas. Nuestros tours operan todo el año. En caso de lluvia intensa, ajustamos el itinerario para tu seguridad y comodidad, ofreciendo actividades alternativas cubiertas."
        }
      ]
    },
    {
      categoria: "Hospedaje y Transporte",
      icono: "🏨",
      preguntas: [
        {
          pregunta: "¿Incluyen transporte desde el aeropuerto?",
          respuesta: "Sí, ofrecemos servicio de traslado desde y hacia el aeropuerto. Este servicio está incluido en paquetes de 3 días o más. Para tours de un día, lo ofrecemos por un costo adicional."
        },
        {
          pregunta: "¿Qué tipo de hospedaje ofrecen?",
          respuesta: "Trabajamos con una amplia gama de hospedajes desde hoteles boutique hasta eco-lodges rurales. Todos nuestros alojamientos son seleccionados por su calidad, autenticidad y compromiso con el turismo sostenible."
        },
        {
          pregunta: "¿Puedo personalizar mi hospedaje?",
          respuesta: "¡Por supuesto! Podemos adaptar el hospedaje a tu presupuesto y preferencias. Contáctanos para crear un paquete personalizado que se ajuste a tus necesidades específicas."
        }
      ]
    }
  ];

  const preguntas = categoriasFAQ.flatMap(cat => 
    cat.preguntas.map(p => ({ ...p, categoria: cat.categoria }))
  );

  const preguntasFiltradas = preguntas.filter(p => 
    p.pregunta.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.respuesta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Preguntas Frecuentes</h1>
              <p className="max-w-2xl mx-auto mb-8">
                Encuentra respuestas rápidas a las preguntas más comunes sobre viajar a Nicaragua. 
                Si no encuentras lo que buscas, no dudes en contactarnos.
              </p>
              
              {/* Buscador */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar en preguntas..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Búsqueda Activa */}
        {busqueda && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8">Resultados de búsqueda para: "{busqueda}"</h2>
              {preguntasFiltradas.length > 0 ? (
                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible>
                    {preguntasFiltradas.map((pregunta, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div>
                            <p>{pregunta.pregunta}</p>
                            <span className="text-xs text-blue-600">{pregunta.categoria}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">{pregunta.respuesta}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="mb-2">No encontramos resultados</h3>
                  <p className="text-gray-600 mb-4">
                    No encontramos preguntas que coincidan con tu búsqueda.
                  </p>
                  <Button onClick={() => setBusqueda("")}>
                    Ver todas las preguntas
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* FAQ por Categorías */}
        {!busqueda && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                {categoriasFAQ.map((categoria, catIndex) => (
                  <div key={catIndex}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{categoria.icono}</span>
                      <h2>{categoria.categoria}</h2>
                    </div>
                    
                    <Accordion type="single" collapsible>
                      {categoria.preguntas.map((pregunta, index) => (
                        <AccordionItem key={index} value={`${catIndex}-${index}`}>
                          <AccordionTrigger className="text-left">
                            {pregunta.pregunta}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-700">{pregunta.respuesta}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contacto de Ayuda */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">¿No encuentras tu respuesta?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nuestro equipo de atención al cliente está disponible 24/7 para ayudarte 
                con cualquier pregunta específica sobre tu viaje a Nicaragua.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base">Llámanos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Habla directamente con nuestros expertos
                  </p>
                  <p className="font-medium text-blue-600 mb-3">+505 2222-3333</p>
                  <p className="text-xs text-gray-500 mb-4">Disponible 24/7</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Llamar Ahora
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-base">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Chat inmediato con respuesta rápida
                  </p>
                  <p className="font-medium text-green-600 mb-3">+505 8888-9999</p>
                  <p className="text-xs text-gray-500 mb-4">Respuesta inmediata</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Abrir Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-base">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Escríbenos para consultas detalladas
                  </p>
                  <p className="font-medium text-purple-600 mb-3">hola@way2go.com.ni</p>
                  <p className="text-xs text-gray-500 mb-4">Respuesta en 2 horas</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Enviar Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}