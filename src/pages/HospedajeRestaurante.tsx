import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Bed, Utensils, Star, MapPin, Wifi, Car, Coffee, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HospedajeRestaurantes() {
  const [activeTab, setActiveTab] = useState("hospedaje");

  useEffect(() => {    
    const hash = window.location.hash.replace('#', '');
    if (hash === 'restaurantes') {
      setActiveTab('restaurantes');
    } else if (hash === 'hospedaje') {
      setActiveTab('hospedaje');
    }
  }, []);
  const hoteles = [
    {
      nombre: "Hotel Colonial Granada",
      categoria: "Boutique",
      precio: "$120/noche",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1664647608575-7800d6b6975a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuYWRhJTIwbmljYXJhZ3VhJTIwY29sb25pYWwlMjBob3RlbHxlbnwxfHx8fDE3NTc0MzY3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Centro Histórico, Granada",
      servicios: ["WiFi gratuito", "Desayuno incluido", "Piscina", "Parking"]
    },
    {
      nombre: "Eco Lodge Volcán Maderas",
      categoria: "Eco-lodge",
      precio: "$85/noche",
      rating: 4.6,
      imagen: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWV0ZXBlJTIwdm9sY2FubyUyMGxvZGdlJTIwbmljYXJhZ3VhfGVufDF8fHx8MTc1NzQzNjc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Isla de Ometepe",
      servicios: ["Vista al volcán", "Tours incluidos", "Restaurante", "Kayaks"]
    },
    {
      nombre: "Hotel Plaza Colonial",
      categoria: "Histórico",
      precio: "$95/noche",
      rating: 4.7,
      imagen: "https://images.unsplash.com/photo-1711989874705-bb85dc205541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc1NzQzNjc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "León",
      servicios: ["Centro histórico", "Terraza panorámica", "WiFi", "A/C"]
    },
    {
      nombre: "Resort Playa Montelimar",
      categoria: "Resort Playa",
      precio: "$180/noche",
      rating: 4.9,
      imagen: "https://images.unsplash.com/photo-1615121864762-c5db0315fb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBiZWFjaCUyMHJlc29ydCUyMGhvdGVsfGVufDF8fHx8MTc1NzU3MjY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Montelimar, Managua",
      servicios: ["Playa privada", "Spa", "3 Restaurantes", "Golf"]
    },
    {
      nombre: "Casa San Francisco",
      categoria: "Boutique",
      precio: "$110/noche",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1664231323799-84a7ef527992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYW1lcmljYSUyMGJvdXRpcXVlJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTcyNjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "San Juan del Sur",
      servicios: ["Vista al mar", "Yoga", "Biblioteca", "Terraza"]
    },
    {
      nombre: "Hotel Laguna de Apoyo",
      categoria: "Eco-resort",
      precio: "$140/noche",
      rating: 4.7,
      imagen: "https://images.unsplash.com/photo-1714991103332-4271fcee7bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBsYWtlJTIwaG90ZWwlMjBsb2RnZXxlbnwxfHx8fDE3NTc1NzI2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Laguna de Apoyo, Masaya",
      servicios: ["Lago volcánico", "Buceo", "Canopy", "Masajes"]
    },
    {
      nombre: "Hotel Paradise Tropical",
      categoria: "Resort",
      precio: "$160/noche",
      rating: 4.6,
      imagen: "https://images.unsplash.com/photo-1567491634123-460945ea86dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGhvdGVsJTIwcG9vbCUyMG5pY2FyYWd1YXxlbnwxfHx8fDE3NTc1NzI2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Corn Island",
      servicios: ["2 Piscinas", "Beach club", "Snorkel", "Bar flotante"]
    },
    {
      nombre: "Finca Vista Hermosa",
      categoria: "Hacienda",
      precio: "$75/noche",
      rating: 4.5,
      imagen: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBtb3VudGFpbiUyMGhvdGVsJTIwdmlld3xlbnwxfHx8fDE3NTc1NzI2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Matagalpa",
      servicios: ["Montañas", "Café orgánico", "Senderismo", "Cabalgatas"]
    },
    {
      nombre: "Hotel Darío",
      categoria: "Histórico",
      precio: "$90/noche",
      rating: 4.4,
      imagen: "https://images.unsplash.com/photo-1685135971687-c16b284c1784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGhvdGVsJTIwY2VudHJhbCUyMGFtZXJpY2F8ZW58MXx8fHwxNzU3NTcyNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "León",
      servicios: ["Arquitectura colonial", "Museo", "Café", "Tours"]
    },
    {
      nombre: "Selva Negra Mountain Resort",
      categoria: "Eco-lodge",
      precio: "$130/noche",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1742605633046-4cd50779bc97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjb2ZmZWUlMjBwbGFudGF0aW9uJTIwaG90ZWx8ZW58MXx8fHwxNzU3NTcyNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Matagalpa",
      servicios: ["Café orgánico", "Bosque nuboso", "Observación aves", "Eco-tours"]
    },
    {
      nombre: "Hotel Intercontinental",
      categoria: "Lujo",
      precio: "$200/noche",
      rating: 4.9,
      imagen: "https://images.unsplash.com/photo-1567491634123-460945ea86dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGhvdGVsJTIwcG9vbCUyMG5pY2FyYWd1YXxlbnwxfHx8fDE3NTc1NzI2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Managua",
      servicios: ["Centro business", "Spa", "4 Restaurantes", "Casino"]
    },
    {
      nombre: "Little Corn Beach Bungalow",
      categoria: "Cabaña",
      precio: "$65/noche",
      rating: 4.3,
      imagen: "https://images.unsplash.com/photo-1615121864762-c5db0315fb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBiZWFjaCUyMHJlc29ydCUyMGhvdGVsfGVufDF8fHx8MTc1NzU3MjY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Little Corn Island",
      servicios: ["Playa virgen", "Buceo", "Hammocks", "Restaurante"]
    }
  ];

  const restaurantes = [
    {
      nombre: "El Zaguan",
      tipo: "Cocina Nicaragüense",
      precio: "$",
      rating: 4.9,
      imagen: "https://images.unsplash.com/photo-1661939252817-ebb73304f4c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWFuJTIwdHJhZGl0aW9uYWwlMjBmb29kJTIwZ2FsbG8lMjBwaW50b3xlbnwxfHx8fDE3NTczOTg0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Granada",
      especialidad: "Gallo Pinto, Nacatamales, Vigorón"
    },
    {
      nombre: "Café de las Sonrisas",
      tipo: "Café & Postres",
      precio: "$",
      rating: 4.7,
      imagen: "https://images.unsplash.com/photo-1617343772441-5e40418d4139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjYWZlJTIwY29mZmVlJTIwc2hvcCUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1NzQzNjc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Granada",
      especialidad: "Café orgánico, Tres leches, Emprendimiento social"
    },
    {
      nombre: "La Cocina de Abuela",
      tipo: "Cocina Casera",
      precio: "$",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1711989874705-bb85dc205541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc1NzQzNjc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Managua",
      especialidad: "Indio Viejo, Quesillo, Sopa de Mondongo"
    },
    {
      nombre: "Mariscos El Tiburón",
      tipo: "Mariscos",
      precio: "$$",
      rating: 4.6,
      imagen: "https://images.unsplash.com/photo-1652458316645-07971d6e52ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFkaXRpb25hbCUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc1NzU3MjY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "San Juan del Sur",
      especialidad: "Langosta, Pargo rojo, Ceviche mixto"
    },
    {
      nombre: "Terraza Colonial",
      tipo: "Internacional",
      precio: "$$",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1688287398986-3d6dcd55ef8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbiUyMGFtZXJpY2FuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc1NzU3MjY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "León",
      especialidad: "Fusión Nicaragua-Europa, Steaks, Vista panorámica"
    },
    {
      nombre: "Pescadería La Sirena",
      tipo: "Mariscos",
      precio: "$",
      rating: 4.5,
      imagen: "https://images.unsplash.com/photo-1651126179043-f94b62006243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcmVzdGF1cmFudCUyMG5pY2FyYWd1YXxlbnwxfHx8fDE3NTc1NzI2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Corn Island",
      especialidad: "Pescado frito, Rondon, Caracola"
    },
    {
      nombre: "Antojitos Nica",
      tipo: "Comida Rápida",
      precio: "$",
      rating: 4.4,
      imagen: "https://images.unsplash.com/photo-1639363885736-bb4d797175e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW50cmFsJTIwYW1lcmljYSUyMHN0cmVldCUyMGZvb2R8ZW58MXx8fHwxNzU3NTcyNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Managua",
      especialidad: "Tajadas, Baho, Güirila con queso"
    },
    {
      nombre: "Mirador del Volcán",
      tipo: "Cocina Internacional",
      precio: "$$",
      rating: 4.7,
      imagen: "https://images.unsplash.com/photo-1696626605347-20148794d9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjByb29mdG9wJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTc1NzI2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Masaya",
      especialidad: "Vista al volcán, Parrillas, Cocteles artesanales"
    },
    {
      nombre: "Pizzería Don Bosco",
      tipo: "Italiana",
      precio: "$",
      rating: 4.6,
      imagen: "https://images.unsplash.com/photo-1689915972091-debe902f72fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzU3NTcyNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Granada",
      especialidad: "Pizza artesanal, Pasta fresca, Tiramisu"
    },
    {
      nombre: "Restaurante Playa Azul",
      tipo: "Cocina Playera",
      precio: "$",
      rating: 4.5,
      imagen: "https://images.unsplash.com/photo-1651126179043-f94b62006243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBiZWFjaCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNTc1NzI2NjckMA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Montelimar",
      especialidad: "Pescado a la plancha, Cocteles tropicales, Vista al mar"
    },
    {
      nombre: "Café Mombacho",
      tipo: "Café Especialidad",
      precio: "$",
      rating: 4.8,
      imagen: "https://images.unsplash.com/photo-1617343772441-5e40418d4139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjYWZlJTIwY29mZmVlJTIwc2hvcCUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1NzQzNjc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Managua",
      especialidad: "Café orgánico Mombacho, Repostería francesa, Brunch"
    },
    {
      nombre: "El Ranchón Típico",
      tipo: "Cocina Típica",
      precio: "$",
      rating: 4.7,
      imagen: "https://images.unsplash.com/photo-1652458316645-07971d6e52ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFkaXRpb25hbCUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc1NzU3MjY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ubicacion: "Estelí",
      especialidad: "Chancho con yuca, Caballo bayo, Chicharrón"
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="text-white py-16"
          style={{
            background: `linear-gradient(to right, #f47d0eff, #ed3737ff)`
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Hospedaje & Restaurantes</h1>
              <p className="max-w-2xl mx-auto">
                Descansa cómodamente y disfruta de la auténtica gastronomía nicaragüense. 
                Desde hoteles boutique hasta eco-lodges, y restaurantes que te harán saborear lo mejor del país.
              </p>
            </div>
          </div>
        </section>

        {/* Buscador */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Buscar Hospedaje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label>Destino</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="¿A dónde vas?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="managua">Managua</SelectItem>
                        <SelectItem value="granada">Granada</SelectItem>
                        <SelectItem value="leon">León</SelectItem>
                        <SelectItem value="ometepe">Isla de Ometepe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Check-in</Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label>Check-out</Label>
                    <Input type="date" />
                  </div>
                  <div className="flex items-end">
                    <Button 
                      className="w-full text-white"
                      style={{ backgroundColor: '#1E90FF' }}
                    >
                      Buscar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tabs Hospedaje/Restaurantes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                <TabsTrigger 
                  id="hospedaje"
                  value="hospedaje" 
                  className="flex items-center gap-2"
                >
                  <Bed className="h-4 w-4" />
                  Hospedaje
                </TabsTrigger>
                <TabsTrigger 
                  id="restaurantes"
                  value="restaurantes" 
                  className="flex items-center gap-2"
                >
                  <Utensils className="h-4 w-4" />
                  Restaurantes
                </TabsTrigger>
              </TabsList>

              {/* Hoteles */}
              <TabsContent value="hospedaje">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                  {hoteles.map((hotel, index) => (
                    <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback 
                          src={hotel.imagen}
                          alt={hotel.nombre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/95 text-gray-800 backdrop-blur-sm">
                          {hotel.categoria}
                        </Badge>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-800">{hotel.rating}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg mb-2 text-gray-900">{hotel.nombre}</h3>
                          <div className="flex items-center gap-1 mb-3">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{hotel.ubicacion}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {hotel.servicios.map((servicio, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-gray-100">
                                {servicio}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl text-gray-900">{hotel.precio}</span>
                        </div>
                        <Button 
                          className="w-full text-white bg-green-600 hover:bg-green-700 transition-colors"
                        >
                          Ver Disponibilidad
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Restaurantes */}
              <TabsContent value="restaurantes">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                  {restaurantes.map((restaurante, index) => (
                    <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback 
                          src={restaurante.imagen}
                          alt={restaurante.nombre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/95 text-gray-800 backdrop-blur-sm">
                          {restaurante.tipo}
                        </Badge>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-800">{restaurante.rating}</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg mb-2 text-gray-900">{restaurante.nombre}</h3>
                          <div className="flex items-center gap-1 mb-3">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{restaurante.ubicacion}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            <strong>Especialidad:</strong> {restaurante.especialidad}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl text-gray-900">{restaurante.precio}</span>
                        </div>
                        <Button 
                          className="w-full text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                        >
                          Ver Menú
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}