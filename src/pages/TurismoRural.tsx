import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Leaf, Home, Users, Heart, MapPin, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function TurismoRural() {
  const experienciasRurales = [
    {
      titulo: "Finca Cafetera Familiar - Matagalpa",
      descripcion: "Vive la experiencia completa del café nicaragüense con una familia productora",
      imagen: "https://images.unsplash.com/photo-1742320086662-56a3c278734b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBydXJhbCUyMGZhcm0lMjBjb2ZmZWUlMjBwbGFudGF0aW9ufGVufDF8fHx8MTc1NzE4OTgxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Matagalpa",
      duracion: "2-3 días",
      precio: "$120/día",
      rating: 4.9,
      actividades: ["Cosecha de café", "Procesamiento tradicional", "Comidas caseras", "Senderismo"],
      beneficios: ["Apoyo directo a familias", "Comercio justo", "Sostenible"]
    },
    {
      titulo: "Comunidad Rural San Juan de Limay",
      descripcion: "Descubre la artesanía tradicional en mármol y soapstone",
      imagen: "https://images.unsplash.com/photo-1719852255246-898f965e04e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFkaXRpb25hbCUyMGNyYWZ0cyUyMHBvdHRlcnl8ZW58MXx8fHwxNzU3NTc0NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Estelí",
      duracion: "1 día",
      precio: "$65/persona",
      rating: 4.7,
      actividades: ["Taller de escultura", "Visita a talleres", "Almuerzo comunitario", "Intercambio cultural"],
      beneficios: ["Preservación cultural", "Empoderamiento comunitario", "Arte tradicional"]
    },
    {
      titulo: "Granja Orgánica La Esperanza",
      descripcion: "Aprende sobre agricultura sostenible y permacultura",
      imagen: "https://images.unsplash.com/photo-1679824244521-6d2c7ae496e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBvcmdhbmljJTIwZmFybSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NzU3NDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Rivas",
      duracion: "2 días",
      precio: "$85/día",
      rating: 4.8,
      actividades: ["Trabajo en huertos", "Elaboración de compost", "Cocina con ingredientes frescos", "Yoga al amanecer"],
      beneficios: ["Agricultura ecológica", "Bienestar personal", "Conexión con la tierra"]
    },
    {
      titulo: "Aldea Pescadora Las Mercedes",
      descripcion: "Vive como un pescador tradicional en las costas del Pacífico",
      imagen: "https://images.unsplash.com/photo-1749584550858-f7fa4ea89c41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYW1lcmljYSUyMGZpc2hpbmclMjB2aWxsYWdlfGVufDF8fHx8MTc1NzU3NDQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Chinandega",
      duracion: "2 días",
      precio: "$95/día",
      rating: 4.6,
      actividades: ["Pesca artesanal", "Reparación de redes", "Preparación de pescado", "Navegación tradicional"],
      beneficios: ["Preservación marina", "Tradiciones pesqueras", "Economía local"]
    },
    {
      titulo: "Hacienda Ganadera El Paraíso",
      descripcion: "Experimenta la vida del vaquero nicaragüense en las llanuras",
      imagen: "https://images.unsplash.com/photo-1737466109813-edfe3c7e2b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjYXR0bGUlMjByYW5jaCUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc1NzU3NDQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Boaco",
      duracion: "3 días",
      precio: "$110/día",
      rating: 4.8,
      actividades: ["Ordeño de vacas", "Cabalgatas", "Elaboración de queso", "Rodeo tradicional"],
      beneficios: ["Ganadería sostenible", "Tradiciones gauchescas", "Productos lácteos artesanales"]
    },
    {
      titulo: "Cooperativa de Mujeres Tejedoras",
      descripcion: "Aprende el arte ancestral del tejido con mujeres artesanas",
      imagen: "https://images.unsplash.com/photo-1695044966923-129f3bc5c906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBydXJhbCUyMHZpbGxhZ2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU3NTc0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Masaya",
      duracion: "1 día",
      precio: "$55/persona",
      rating: 4.9,
      actividades: ["Taller de tejido", "Teñido natural", "Historia oral", "Comida comunitaria"],
      beneficios: ["Empoderamiento femenino", "Arte ancestral", "Autonomía económica"]
    },
    {
      titulo: "Refugio de Vida Silvestre Comunitario",
      descripcion: "Protege la biodiversidad junto a guardabosques locales",
      imagen: "https://images.unsplash.com/photo-1655751410674-91ff015bc076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBtb3VudGFpbiUyMHZpbGxhZ2UlMjBlY28lMjB0b3VyaXNtfGVufDF8fHx8MTc1NzU3NDQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Río San Juan",
      duracion: "4 días",
      precio: "$140/día",
      rating: 4.7,
      actividades: ["Monitoreo fauna", "Reforestación", "Observación aves", "Investigación científica"],
      beneficios: ["Conservación ambiental", "Educación ecológica", "Ciencia ciudadana"]
    },
    {
      titulo: "Finca Agroecológica Familiar",
      descripcion: "Descubre técnicas ancestrales de agricultura sin químicos",
      imagen: "https://images.unsplash.com/photo-1679824244521-6d2c7ae496e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBvcmdhbmljJTIwZmFybSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc1NzU3NDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Nueva Segovia",
      duracion: "2 días",
      precio: "$80/día",
      rating: 4.5,
      actividades: ["Siembra tradicional", "Control biológico", "Medicina natural", "Cocina solar"],
      beneficios: ["Agricultura ancestral", "Soberanía alimentaria", "Salud familiar"]
    },
    {
      titulo: "Comunidad Indígena Chorotega",
      descripcion: "Conecta con las raíces precolombinas de Nicaragua",
      imagen: "https://images.unsplash.com/photo-1719852255246-898f965e04e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFkaXRpb25hbCUyMGNyYWZ0cyUyMHBvdHRlcnl8ZW58MXx8fHwxNzU3NTc0NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Rivas",
      duracion: "1 día",
      precio: "$75/persona",
      rating: 4.8,
      actividades: ["Cerámica ancestral", "Rituales tradicionales", "Lengua indígena", "Medicina tradicional"],
      beneficios: ["Preservación cultural", "Identidad indígena", "Conocimiento ancestral"]
    },
    {
      titulo: "Apiario Comunitario San Marcos",
      descripcion: "Aprende sobre apicultura sostenible y productos de la colmena",
      imagen: "https://images.unsplash.com/photo-1695044966923-129f3bc5c906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBydXJhbCUyMHZpbGxhZ2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU3NTc0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Carazo",
      duracion: "1 día",
      precio: "$60/persona",
      rating: 4.6,
      actividades: ["Manejo de colmenas", "Extracción de miel", "Elaboración de cera", "Productos apícolas"],
      beneficios: ["Polinización natural", "Productos orgánicos", "Cooperativismo"]
    },
    {
      titulo: "Vivero Forestal Comunitario",
      descripcion: "Participa en la reforestación y conservación de bosques nativos",
      imagen: "https://images.unsplash.com/photo-1655751410674-91ff015bc076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBtb3VudGFpbiUyMHZpbGxhZ2UlMjBlY28lMjB0b3VyaXNtfGVufDF8fHx8MTc1NzU3NDQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Jinotega",
      duracion: "2 días",
      precio: "$70/día",
      rating: 4.7,
      actividades: ["Germinación de semillas", "Trasplante", "Reforestación", "Educación ambiental"],
      beneficios: ["Restauración ecológica", "Cambio climático", "Bosques nativos"]
    },
    {
      titulo: "Escuela Rural Multigrado",
      descripcion: "Apoya la educación rural enseñando a niños campesinos",
      imagen: "https://images.unsplash.com/photo-1695044966923-129f3bc5c906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBydXJhbCUyMHZpbGxhZ2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU3NTc0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ubicacion: "Madriz",
      duracion: "3 días",
      precio: "$45/día",
      rating: 4.9,
      actividades: ["Clases de apoyo", "Juegos educativos", "Huerto escolar", "Biblioteca comunitaria"],
      beneficios: ["Educación rural", "Desarrollo infantil", "Futuro comunitario"]
    }
  ];

  const beneficios = [
    {
      icono: Heart,
      titulo: "Impacto Social Positivo",
      descripcion: "Tu visita beneficia directamente a las comunidades rurales locales"
    },
    {
      icono: Leaf,
      titulo: "Turismo Sostenible",
      descripcion: "Experiencias que respetan y conservan el medio ambiente"
    },
    {
      icono: Users,
      titulo: "Intercambio Cultural",
      descripcion: "Comparte y aprende de las tradiciones nicaragüenses auténticas"
    },
    {
      icono: Home,
      titulo: "Hospitalidad Genuina",
      descripcion: "Siente la calidez y amabilidad característica de nuestro pueblo"
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="text-white py-16"
          style={{
            background: `linear-gradient(to right, #09a72bff, #0bd5b3ff)`
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Turismo Rural</h1>
              <p className="max-w-2xl mx-auto">
                Conecta auténticamente con las comunidades rurales de Nicaragua. 
                Vive experiencias genuinas que benefician directamente a las familias locales 
                mientras descubres tradiciones milenarias.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">¿Por qué elegir Turismo Rural?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#E6F7E6' }}
                  >
                    <beneficio.icono 
                      className="h-8 w-8" 
                      style={{ color: '#32CD32' }}
                    />
                  </div>
                  <h3 className="mb-2">{beneficio.titulo}</h3>
                  <p className="text-gray-600 text-sm">{beneficio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiencias Rurales */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Experiencias Rurales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              {experienciasRurales.map((experiencia, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <ImageWithFallback 
                      src={experiencia.imagen}
                      alt={experiencia.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge 
                        className="text-white"
                        style={{ backgroundColor: '#32CD32' }}
                      >
                        Rural
                      </Badge>
                      <Badge className="bg-white/90 text-gray-800">Sostenible</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{experiencia.rating}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-base">{experiencia.titulo}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {experiencia.ubicacion}
                    </div>
                    <p className="text-gray-600 text-sm">{experiencia.descripcion}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="h-4 w-4 text-gray-500" />
                        {experiencia.duracion}
                      </div>
                      <div className="text-right">
                        <span 
                          className="text-xl"
                          style={{ color: '#32CD32' }}
                        >
                          {experiencia.precio}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Actividades incluidas:</p>
                      <div className="flex flex-wrap gap-1">
                        {experiencia.actividades.map((actividad, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {actividad}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Beneficios sociales:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {experiencia.beneficios.map((beneficio, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div 
                              className="w-1 h-1 rounded-full"
                              style={{ backgroundColor: '#32CD32' }}
                            ></div>
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full text-white"
                      style={{ backgroundColor: '#1E90FF' }}
                    >
                      Reservar Experiencia
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compromiso */}
        <section 
          className="py-16"
          style={{ backgroundColor: '#F0FDF4' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6">Nuestro Compromiso</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                En Way2Go creemos en un turismo que transforma vidas. Cada experiencia rural 
                que ofrecemos está diseñada para generar un impacto positivo real en las 
                comunidades que visitas. El 70% de los ingresos va directamente a las familias 
                y proyectos comunitarios locales.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div 
                    className="text-3xl mb-2"
                    style={{ color: '#32CD32' }}
                  >
                    85%
                  </div>
                  <p className="text-sm text-gray-600">De ingresos van a la comunidad</p>
                </div>
                <div>
                  <div 
                    className="text-3xl mb-2"
                    style={{ color: '#32CD32' }}
                  >
                    12
                  </div>
                  <p className="text-sm text-gray-600">Comunidades beneficiadas</p>
                </div>
                <div>
                  <div 
                    className="text-3xl mb-2"
                    style={{ color: '#32CD32' }}
                  >
                    500+
                  </div>
                  <p className="text-sm text-gray-600">Familias apoyadas directamente</p>
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