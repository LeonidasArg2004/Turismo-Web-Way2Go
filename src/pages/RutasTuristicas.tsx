import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MapPin, Clock, Star, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function RutasTuristicas() {
  const rutas = [
    {
      id: 1,
      titulo: "Ruta de los Volcanes",
      descripcion: "Explora los majestuosos volcanes de Nicaragua: Masaya, Mombacho y Concepción",
      imagen: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2b2xjYW5vJTIwbGFuZHNjYXBlZHwxfHx8fDE3NTcxODk2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "3 días",
      precio: "$450",
      rating: 4.8,
      participantes: "2-8 personas",
      categorias: ["Aventura", "Naturaleza"]
    },
    {
      id: 2,
      titulo: "Ruta Colonial Granada-León",
      descripcion: "Descubre la rica historia colonial de Nicaragua visitando sus ciudades más emblemáticas",
      imagen: "https://images.unsplash.com/photo-1734698144161-de5f72411b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjb2xvbmlhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTc1NzAzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "2 días",
      precio: "$320",
      rating: 4.9,
      participantes: "1-12 personas",
      categorias: ["Cultura", "Historia"]
    },
    {
      id: 3,
      titulo: "Ruta de las Playas del Pacífico",
      descripcion: "Disfruta de las mejores playas de la costa pacífica nicaragüense",
      imagen: "https://images.unsplash.com/photo-1685380518106-308ed23847a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBwYWNpZmljJTIwY29hc3QlMjBiZWFjaHxlbnwxfHx8fDE3NTc1NzAzODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "4 días",
      precio: "$380",
      rating: 4.7,
      participantes: "2-15 personas",
      categorias: ["Playa", "Relax"]
    },
    {
      id: 4,
      titulo: "Ruta del Lago de Nicaragua",
      descripcion: "Navega por el lago más grande de Centroamérica y sus islas misteriosas",
      imagen: "https://images.unsplash.com/photo-1580142656337-ae0028dce93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBsYWtlJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1NzU3MDM4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "2 días",
      precio: "$280",
      rating: 4.6,
      participantes: "4-10 personas",
      categorias: ["Naturaleza", "Aventura"]
    },
    {
      id: 5,
      titulo: "Ruta del Café en Matagalpa",
      descripcion: "Conoce el proceso del café nicaragüense en las montañas del norte",
      imagen: "https://images.unsplash.com/photo-1660493843788-bd03ccade4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjb2ZmZWUlMjBwbGFudGF0aW9uJTIwbW91bnRhaW5zfGVufDF8fHx8MTc1NzU3MDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "3 días",
      precio: "$420",
      rating: 4.8,
      participantes: "2-12 personas",
      categorias: ["Café", "Cultura"]
    },
    {
      id: 6,
      titulo: "Ruta de la Selva Tropical",
      descripcion: "Adéntrate en las reservas naturales y descubre la biodiversidad única",
      imagen: "https://images.unsplash.com/photo-1649960861743-56249bc35318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjByYWluZm9yZXN0JTIwanVuZ2xlJTIwdHJvcGljYWx8ZW58MXx8fHwxNzU3NTcwMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "5 días",
      precio: "$650",
      rating: 4.9,
      participantes: "3-8 personas",
      categorias: ["Naturaleza", "Aventura"]
    },
    {
      id: 7,
      titulo: "Ruta de las Cascadas",
      descripcion: "Descubre las cascadas más impresionantes escondidas en la naturaleza",
      imagen: "https://images.unsplash.com/photo-1728932827628-3a577c035817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3YXRlcmZhbGwlMjBjYXNjYWRlJTIwbmF0dXJlfGVufDF8fHx8MTc1NzU3MDM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "2 días",
      precio: "$350",
      rating: 4.7,
      participantes: "2-10 personas",
      categorias: ["Naturaleza", "Aventura"]
    },
    {
      id: 8,
      titulo: "Ruta de la Costa Caribeña",
      descripcion: "Explora la cultura afro-caribeña y las playas del Mar Caribe",
      imagen: "https://images.unsplash.com/photo-1613138479104-bea0450285ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjYXJpYmJlYW4lMjBjb2FzdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NzU3MDM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "4 días",
      precio: "$520",
      rating: 4.6,
      participantes: "2-12 personas",
      categorias: ["Cultura", "Playa"]
    },
    {
      id: 9,
      titulo: "Ruta de Pesca Deportiva",
      descripcion: "Experiencia única de pesca en alta mar y aguas dulces",
      imagen: "https://images.unsplash.com/photo-1649785182328-9fa444926974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBmaXNoaW5nJTIwYm9hdCUyMHNlYSUyMHNwb3J0fGVufDF8fHx8MTc1NzU3MDQwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "3 días",
      precio: "$480",
      rating: 4.5,
      participantes: "2-6 personas",
      categorias: ["Pesca", "Aventura"]
    },
    {
      id: 10,
      titulo: "Ruta de Ometepe",
      descripcion: "Isla formada por dos volcanes en el Gran Lago de Nicaragua",
      imagen: "https://images.unsplash.com/photo-1501327825011-e83b7080b0f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBvbWV0ZXBlJTIwaXNsYW5kJTIwdm9sY2Fub3xlbnwxfHx8fDE3NTc1NzA0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "3 días",
      precio: "$390",
      rating: 4.8,
      participantes: "2-15 personas",
      categorias: ["Isla", "Naturaleza"]
    },
    {
      id: 11,
      titulo: "Ruta de Aventura en Canopy",
      descripcion: "Vuela entre las copas de los árboles en tirolesas y puentes colgantes",
      imagen: "https://images.unsplash.com/photo-1640895236626-6435d5205789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjYW5vcHklMjB6aXBsaW5lJTIwYWR2ZW50dXJlJTIwZm9yZXN0fGVufDF8fHx8MTc1NzU3MDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "1 día",
      precio: "$180",
      rating: 4.7,
      participantes: "1-20 personas",
      categorias: ["Aventura", "Adrenalina"]
    },
    {
      id: 12,
      titulo: "Ruta Cultural Indígena",
      descripcion: "Conoce las tradiciones y costumbres de las comunidades indígenas",
      imagen: "https://images.unsplash.com/photo-1508278579464-6532e89f884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1NzU3MDQxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "2 días",
      precio: "$310",
      rating: 4.6,
      participantes: "3-10 personas",
      categorias: ["Cultura", "Historia"]
    },
    {
      id: 13,
      titulo: "Ruta de Observación de Aves",
      descripcion: "Avistamiento de aves exóticas en sus hábitats naturales",
      imagen: "https://images.unsplash.com/photo-1743186157217-9d0b32641ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3aWxkbGlmZSUyMGJpcmQlMjB3YXRjaGluZyUyMG5hdHVyZXxlbnwxfHx8fDE3NTc1NzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "3 días",
      precio: "$340",
      rating: 4.8,
      participantes: "2-8 personas",
      categorias: ["Naturaleza", "Vida Silvestre"]
    },
    {
      id: 14,
      titulo: "Ruta del Río San Juan",
      descripcion: "Navegación por el río histórico que conecta el lago con el Caribe",
      imagen: "https://images.unsplash.com/photo-1653158192140-bc8099cd88b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjByaXZlciUyMGJvYXQlMjBuYXR1cmUlMjBleHBsb3JhdGlvbnxlbnwxfHx8fDE3NTc1NzA0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "4 días",
      precio: "$580",
      rating: 4.7,
      participantes: "4-12 personas",
      categorias: ["Historia", "Naturaleza"]
    },
    {
      id: 15,
      titulo: "Ruta de los Pueblos Blancos",
      descripcion: "Recorre los pintorescos pueblos blancos cerca de Granada",
      imagen: "https://images.unsplash.com/photo-1543125274-c53157f43fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3aGl0ZSUyMHB1ZWJsb3MlMjB0cmFkaXRpb25hbCUyMHZpbGxhZ2V8ZW58MXx8fHwxNzU3NTcwNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "1 día",
      precio: "$150",
      rating: 4.5,
      participantes: "2-15 personas",
      categorias: ["Cultura", "Tradición"]
    },
    {
      id: 16,
      titulo: "Ruta de las Islas Solentiname",
      descripcion: "Descubre el arte primitivo y la naturaleza en estas islas únicas",
      imagen: "https://images.unsplash.com/photo-1737469259518-2ea1880bc777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBzb2xlbnRpbmFtZSUyMGlzbGFuZHMlMjBhcnR8ZW58MXx8fHwxNzU3NTcwNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duracion: "2 días",
      precio: "$320",
      rating: 4.6,
      participantes: "2-10 personas",
      categorias: ["Arte", "Naturaleza"]
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="text-white py-16"
        style={{
            background: `linear-gradient(to right, #7e11d1ff, #ce0cdcff)`
          }}>
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Rutas Turísticas</h1>
              <p className="max-w-2xl mx-auto">
                Descubre Nicaragua a través de nuestras rutas cuidadosamente diseñadas. 
                Desde volcanes activos hasta ciudades coloniales, cada ruta te llevará a 
                vivir experiencias únicas.
              </p>
            </div>
          </div>
        </section>

          {/* Rutas Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
              {rutas.map((ruta) => (
                <Card key={ruta.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback 
                      src={ruta.imagen}
                      alt={ruta.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {ruta.categorias.map((categoria) => (
                        <Badge key={categoria} variant="secondary" className="bg-white/90 text-gray-800">
                          {categoria}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg leading-tight">{ruta.titulo}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{ruta.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-gray-600 mb-3 text-sm">{ruta.descripcion}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-600">{ruta.duracion}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-gray-500" />
                        <span className="text-xs text-gray-600">{ruta.participantes}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Desde</p>
                        <p className="text-lg font-semibold text-green-600">{ruta.precio}</p>
                      </div>
                    </div>
                    <Button className="w-full text-sm">Ver Detalles</Button>
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