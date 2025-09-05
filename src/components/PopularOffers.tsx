import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Star, MapPin, Clock, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function PopularOffers() {
  const offers = [
    {
      id: 1,
      title: "Tour Volcán Masaya + Granada Colonial",
      type: "Paquete Completo",
      image: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2b2xjYW5vJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1NjY5NTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$85",
      originalPrice: "$120",
      rating: 4.8,
      reviews: 124,
      duration: "Full Day",
      groupSize: "2-15 personas",
      location: "Masaya, Granada",
      highlights: ["Cráter activo", "Ciudad colonial", "Almuerzo incluido"]
    },
    {
      id: 2,
      title: "Surf & Relax en San Juan del Sur",
      type: "Hospedaje + Actividades",
      image: "https://images.unsplash.com/photo-1648876672455-56cc2aa32b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBiZWFjaCUyMGNvYXN0bGluZXxlbnwxfHx8fDE3NTY3MDc3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$65",
      originalPrice: "$90",
      rating: 4.6,
      reviews: 89,
      duration: "3 días / 2 noches",
      groupSize: "1-8 personas",
      location: "San Juan del Sur",
      highlights: ["Clases de surf", "Hotel boutique", "Transporte incluido"]
    },
    {
      id: 3,
      title: "León Colonial y Volcano Boarding",
      type: "Aventura",
      image: "https://images.unsplash.com/photo-1635697048296-2dae168a6f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYW1lcmljYSUyMGNvbG9uaWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NjcwNzc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$95",
      originalPrice: "$135",
      rating: 4.9,
      reviews: 156,
      duration: "2 días",
      groupSize: "4-12 personas",
      location: "León",
      highlights: ["Volcano boarding", "Tour histórico", "Equipos incluidos"]
    },
    {
      id: 4,
      title: "Ecoturismo en Reserva Bosawás",
      type: "Turismo Rural",
      image: "https://images.unsplash.com/photo-1727410300436-3c7900708fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHRvdXJpc20lMjBmYXJtfGVufDF8fHx8MTc1NjcwNzc5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$110",
      originalPrice: "$150",
      rating: 4.7,
      reviews: 67,
      duration: "4 días / 3 noches",
      groupSize: "2-10 personas",
      location: "Reserva Bosawás",
      highlights: ["Comunidad indígena", "Observación de aves", "Senderismo"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ofertas Populares
          </h2>
          <p className="text-lg text-gray-600">
            Las experiencias más reservadas por nuestros viajeros
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {offers.map((offer) => (
              <CarouselItem key={offer.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge 
                      className="absolute top-3 left-3 bg-primary"
                      variant="secondary"
                    >
                      {offer.type}
                    </Badge>
                    {offer.originalPrice && (
                      <Badge 
                        className="absolute top-3 right-3 bg-red-500"
                        variant="secondary"
                      >
                        -{Math.round(((parseFloat(offer.originalPrice.replace('$','')) - parseFloat(offer.price.replace('$',''))) / parseFloat(offer.originalPrice.replace('$',''))) * 100)}%
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-3">
                      <h3 className="text-lg mb-1 line-clamp-2">{offer.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                        <MapPin className="h-3 w-3" />
                        {offer.location}
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm ml-1">{offer.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({offer.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{offer.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        <span>{offer.groupSize}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {offer.highlights.slice(0, 2).map((highlight, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                        {offer.highlights.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{offer.highlights.length - 2} más
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{offer.price}</span>
                          {offer.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {offer.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">por persona</span>
                      </div>
                      <Button size="sm" className="bg-primary">
                        Reservar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}