import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, MapPin, Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2b2xjYW5vJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1NjY5NTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Paisaje volcánico de Nicaragua"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6">
          Descubre Nicaragua en un solo lugar
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Explora volcanes, playas paradisíacas, ciudades coloniales y la cultura más auténtica de Centroamérica
        </p>

        {/* Search Widget */}
        <div className="bg-white rounded-lg p-6 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Service Type */}
            <div className="space-y-2">
              <label className="w-full pl-10 text-sm text-gray-600">¿Qué buscas?</label>
              <Select>
                <SelectTrigger className="w-full text-sm text-gray-600">
                  <SelectValue placeholder="Seleccionar servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transporte">Transporte</SelectItem>
                  <SelectItem value="hospedaje">Hospedaje</SelectItem>
                  <SelectItem value="experiencias">Experiencias</SelectItem>
                  <SelectItem value="restaurantes">Restaurantes</SelectItem>
                  <SelectItem value="paquetes">Paquetes completos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Destination */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Destino</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                <Select>                  
                 <SelectTrigger className="w-full pl-10 text-sm text-gray-600">
                   <SelectValue placeholder="¿A dónde vamos?" />
                 </SelectTrigger>
                 <SelectContent>
                  <SelectItem value="granada">Granada</SelectItem>
                  <SelectItem value="san-juan-del-sur">San Juan del Sur</SelectItem>
                  <SelectItem value="leon">León</SelectItem>
                  <SelectItem value="managua">Managua</SelectItem>
                  <SelectItem value="masaya">Masaya</SelectItem>
                  <SelectItem value="esteli">Estelí</SelectItem>
                  <SelectItem value="matagalpa">Matagalpa</SelectItem>
                  <SelectItem value="rivas">Rivas</SelectItem>
                  <SelectItem value="chinandega">Chinandega</SelectItem>
                  <SelectItem value="chontales">Chontales</SelectItem>
                  <SelectItem value="bluefields">Bluefields</SelectItem>
                  <SelectItem value="boaco">Boaco</SelectItem>
                  <SelectItem value="carazo">Carazo</SelectItem>
                  <SelectItem value="jinotega">Jinotega</SelectItem>
                  <SelectItem value="madriz">Madriz</SelectItem>
                  <SelectItem value="nueva-segovia">Nueva Segovia</SelectItem>
                  <SelectItem value="puerto-cabezas">Puerto Cabezas</SelectItem>
                 </SelectContent>
               </Select>
              </div>
            </div>

            {/* Dates */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Fechas</label>
              <div className="text-sm text-gray-600">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
                <Input 
                  type="date"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full bg-primary h-10">
                <Search className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}