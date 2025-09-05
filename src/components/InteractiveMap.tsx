import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Mountain, Waves, Building, TreePine } from "lucide-react";
import { useState } from "react";

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Volcán Masaya",
      type: "volcano",
      icon: Mountain,
      position: { top: "45%", left: "35%" },
      description: "Parque Nacional Volcán Masaya con cráter activo",
      activities: ["Caminatas", "Observación nocturna", "Tours guiados"]
    },
    {
      id: 2,
      name: "Granada",
      type: "colonial",
      icon: Building,
      position: { top: "55%", left: "40%" },
      description: "Ciudad colonial con arquitectura histórica",
      activities: ["Tours históricos", "Gastronomía", "Compras"]
    },
    {
      id: 3,
      name: "San Juan del Sur",
      type: "beach",
      icon: Waves,
      position: { top: "75%", left: "25%" },
      description: "Playas paradisíacas del Pacífico",
      activities: ["Surf", "Pesca deportiva", "Vida nocturna"]
    },
    {
      id: 4,
      name: "Reserva Bosawás",
      type: "forest",
      icon: TreePine,
      position: { top: "25%", left: "60%" },
      description: "La segunda reserva de biosfera más grande del continente",
      activities: ["Ecoturismo", "Observación de aves", "Senderismo"]
    },
    {
      id: 5,
      name: "León",
      type: "colonial",
      icon: Building,
      position: { top: "30%", left: "20%" },
      description: "Patrimonio de la Humanidad UNESCO",
      activities: ["Museos", "Arte colonial", "Volcán boarding"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Rutas Turísticas en Mapa Interactivo
          </h2>
          <p className="text-lg text-gray-600">
            Explora los destinos más increíbles de Nicaragua
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Map */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border-2 border-gray-200 relative overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-4 bg-green-50 rounded opacity-50"></div>
              
              {/* Nicaragua Outline (simplified) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-2/3 border-2 border-green-400 rounded-tr-3xl rounded-bl-3xl opacity-30"></div>
              </div>

              {/* Location Pins */}
              {locations.map((location) => {
                const IconComponent = location.icon;
                return (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ top: location.position.top, left: location.position.left }}
                  >
                    <div className="relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-50"></div>
                    </div>
                    
                    {/* Location Label */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      {location.name}
                    </div>
                  </button>
                );
              })}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow">
                <h4 className="text-xs mb-2">Tipos de destinos</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Mountain className="h-3 w-3 text-primary" />
                    <span>Volcanes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="h-3 w-3 text-primary" />
                    <span>Playas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-3 w-3 text-primary" />
                    <span>Colonial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="h-3 w-3 text-primary" />
                    <span>Naturaleza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            {selectedLocation ? (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <selectedLocation.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{selectedLocation.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {selectedLocation.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-3">Actividades disponibles</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.activities.map((activity, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-primary">
                    <MapPin className="h-4 w-4 mr-2" />
                    Reservar tours en {selectedLocation.name}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="mb-2">Selecciona un destino</h3>
                  <p className="text-gray-600 text-sm">
                    Haz clic en cualquier marcador del mapa para ver información detallada y opciones de reserva.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}