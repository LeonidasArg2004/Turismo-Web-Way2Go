import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Users, Heart, Award, Globe, Target, Eye, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function AcercaDe() {
  const valores = [
    {
      icono: Heart,
      titulo: "Pasión por Nicaragua",
      descripcion: "Amamos nuestro país y queremos que el mundo descubra su belleza única"
    },
    {
      icono: Users,
      titulo: "Turismo Responsable",
      descripcion: "Promovemos un turismo que beneficia a las comunidades locales"
    },
    {
      icono: Award,
      titulo: "Excelencia en Servicio",
      descripcion: "Nos comprometemos a superar las expectativas en cada experiencia"
    },
    {
      icono: Globe,
      titulo: "Sostenibilidad",
      descripcion: "Cuidamos nuestros recursos naturales para las futuras generaciones"
    }
  ];

  const equipo = [
    {
      nombre: "Carlos Mendoza",
      cargo: "Director General",
      experiencia: "15 años en turismo nicaragüense",
      imagen: "https://images.unsplash.com/photo-1712324962558-55763ad41ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjb250YWN0JTIwcGhvbmUlMjBzdXBwb3J0fGVufDF8fHx8MTc1NzE5MDAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      nombre: "María Flores",
      cargo: "Gerente de Experiencias",
      experiencia: "10 años creando tours únicos",
      imagen: "https://images.unsplash.com/photo-1712324962558-55763ad41ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjb250YWN0JTIwcGhvbmUlMjBzdXBwb3J0fGVufDF8fHx8MTc1NzE5MDAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      nombre: "Roberto Silva",
      cargo: "Coordinador de Rutas",
      experiencia: "12 años explorando Nicaragua",
      imagen: "https://images.unsplash.com/photo-1712324962558-55763ad41ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjb250YWN0JTIwcGhvbmUlMjBzdXBwb3J0fGVufDF8fHx8MTc1NzE5MDAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const logros = [
    { numero: "50,000+", descripcion: "Viajeros felices" },
    { numero: "200+", descripcion: "Rutas diseñadas" },
    { numero: "15", descripcion: "Años de experiencia" },
    { numero: "4.8/5", descripcion: "Calificación promedio" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="mb-6">Descubre Nicaragua con Expertos Locales</h1>
              <p className="text-xl leading-relaxed">
                Way2Go nació de la pasión por mostrar al mundo la belleza auténtica de Nicaragua. 
                Somos nicaragüenses que conocemos cada rincón de nuestro país y queremos 
                compartir sus secretos mejor guardados contigo.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="mb-6">Nuestra Historia</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Way2Go comenzó en 2009 como un sueño de tres amigos nicaragüenses 
                      que querían cambiar la forma en que el mundo ve a Nicaragua. Cansados 
                      de ver a nuestro país representado solo por noticias negativas, decidimos 
                      mostrar su verdadera cara: un paraíso natural lleno de cultura, historia y gente cálida.
                    </p>
                    <p>
                      Durante más de 15 años, hemos crecido de ser un pequeño operador local 
                      a convertirnos en la plataforma de turismo más confiable de Nicaragua, 
                      siempre manteniendo nuestros valores de autenticidad y compromiso con las comunidades locales.
                    </p>
                    <p>
                      Hoy, Way2Go es mucho más que una agencia de viajes. Somos embajadores 
                      de Nicaragua, creadores de experiencias inolvidables y defensores 
                      del turismo responsable y sostenible.
                    </p>
                  </div>
                </div>
                <div className="relative h-96">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1712324962558-55763ad41ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjb250YWN0JTIwcGhvbmUlMjBzdXBwb3J0fGVufDF8fHx8MTc1NzE5MDAxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Equipo Way2Go"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Nuestra Misión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Conectar a viajeros de todo el mundo con la auténtica Nicaragua, 
                      creando experiencias transformadoras que benefician tanto a nuestros 
                      visitantes como a las comunidades locales, mientras preservamos 
                      nuestro patrimonio natural y cultural para las futuras generaciones.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Eye className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Nuestra Visión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Ser reconocidos como el líder en turismo sostenible en Nicaragua, 
                      siendo el puente que conecta al mundo con nuestro país de manera 
                      responsable, auténtica y memorable, convirtiendo a cada visitante 
                      en un embajador de Nicaragua.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <valor.icono className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-base">{valor.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{valor.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Logros */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-white">Nuestros Logros</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {logros.map((logro, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{logro.numero}</div>
                  <p className="opacity-90">{logro.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Conoce a Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {equipo.map((miembro, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <ImageWithFallback 
                        src={miembro.imagen}
                        alt={miembro.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-base">{miembro.nombre}</CardTitle>
                    <Badge variant="outline">{miembro.cargo}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{miembro.experiencia}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compromiso */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Nuestro Compromiso Contigo</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                En Way2Go, cada experiencia que creamos está diseñada con amor y conocimiento local. 
                No somos solo una agencia de viajes; somos tus amigos nicaragüenses que quieren 
                asegurar que vivas momentos auténticos e inolvidables en nuestro hermoso país.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2">Experiencias Auténticas</h3>
                  <p className="text-gray-600 text-sm">
                    Cada tour está diseñado para mostrarte la verdadera Nicaragua
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2">Impacto Social Positivo</h3>
                  <p className="text-gray-600 text-sm">
                    Tu viaje beneficia directamente a las comunidades locales
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-2">Servicio de Corazón</h3>
                  <p className="text-gray-600 text-sm">
                    Te atendemos como familia, con la calidez nicaragüense
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}