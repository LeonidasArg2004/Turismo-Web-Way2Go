import { useState } from "react";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Mountain, Waves, Camera, Coffee, TreePine, Sunset, Clock, Users, Star, Zap, Music, Palette, Utensils, Binoculars, Ship, BookOpen, Palmtree, Droplets, Heart, Bird, Scissors, PaintBucket } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Experiencias() {
  const [filtroActivo, setFiltroActivo] = useState("Todas");

  // Estilos para line-clamp
  const lineClampStyles = `
    .line-clamp-1 { 
      display: -webkit-box; 
      -webkit-line-clamp: 1; 
      -webkit-box-orient: vertical; 
      overflow: hidden; 
    }
    .line-clamp-2 { 
      display: -webkit-box; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical; 
      overflow: hidden; 
    }
  `;

  const experiencias = [
    // Historia
    {
      titulo: "Tour Histórico Catedral de León",
      descripcion: "Explora la catedral más grande de Centroamérica y su rica historia colonial",
      imagen: "https://images.unsplash.com/photo-1734698144161-de5f72411b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBoaXN0b3J5JTIwY29sb25pYWwlMjBjYXRoZWRyYWx8ZW58MXx8fHwxNzU3NTc1NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "historia",
      duracion: "2 horas",
      dificultad: "Fácil",
      precio: "$30",
      rating: 4.8,
      incluye: ["Guía historiador", "Entrada a sitios", "Material informativo"],
      icono: BookOpen
    },
    {
      titulo: "Recorrido Fortaleza del Coyotepe",
      descripcion: "Descubre la fortaleza que fue prisión política y testigo de la historia nicaragüense",
      imagen: "https://images.unsplash.com/photo-1734698144161-de5f72411b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBoaXN0b3J5JTIwY29sb25pYWwlMjBjYXRoZWRyYWx8ZW58MXx8fHwxNzU3NTc1NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "historia",
      duracion: "3 horas",
      dificultad: "Moderada",
      precio: "$40",
      rating: 4.6,
      incluye: ["Guía especializado", "Transporte", "Acceso completo"],
      icono: BookOpen
    },
    {
      titulo: "Ruta Histórica Granada Colonial",
      descripcion: "Camina por las calles empedradas de la primera ciudad española en tierra firme",
      imagen: "https://images.unsplash.com/photo-1734698144161-de5f72411b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBoaXN0b3J5JTIwY29sb25pYWwlMjBjYXRoZWRyYWx8ZW58MXx8fHwxNzU3NTc1NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "historia",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$50",
      rating: 4.9,
      incluye: ["Guía certificado", "Mapa histórico", "Degustación tradicional"],
      icono: BookOpen
    },
    // Playa
    {
      titulo: "Día de Playa en San Juan del Sur",
      descripcion: "Relájate en la playa más famosa del Pacífico nicaragüense",
      imagen: "https://images.unsplash.com/photo-1623527447053-ad7bd9023f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBiZWFjaCUyMHBsYXlhJTIwc3VyZiUyMHN1bnNldHxlbnwxfHx8fDE3NTc1NzU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "playa",
      duracion: "8 horas",
      dificultad: "Fácil",
      precio: "$45",
      rating: 4.7,
      incluye: ["Transporte", "Silla y sombrilla", "Almuerzo playero"],
      icono: Palmtree
    },
    {
      titulo: "Pesca Deportiva en Alta Mar",
      descripcion: "Aventura de pesca en el Océano Pacífico",
      imagen: "https://images.unsplash.com/photo-1586199678166-b44a585dbd3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBmaXNoaW5nJTIwc3BvcnQlMjBkZWVwJTIwc2VhfGVufDF8fHx8MTc1NzU3NTQzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "playa",
      duracion: "6 horas",
      dificultad: "Moderada",
      precio: "$120",
      rating: 4.8,
      incluye: ["Barco equipado", "Equipo de pesca", "Capitán experimentado"],
      icono: Palmtree
    },
    {
      titulo: "Buceo en Arrecifes del Caribe",
      descripcion: "Explora los arrecifes de coral de la costa caribeña",
      imagen: "https://images.unsplash.com/photo-1715028045565-6cb2fdacd12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBkaXZpbmclMjB1bmRlcndhdGVyJTIwY29yYWwlMjByZWVmfGVufDF8fHx8MTc1NzU3NTQ0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "playa",
      duracion: "4 horas",
      dificultad: "Moderada",
      precio: "$95",
      rating: 4.9,
      incluye: ["Equipo completo", "Instructor certificado", "Fotos submarinas"],
      icono: Palmtree
    },
    // Relax
    {
      titulo: "Spa Natural Aguas Termales",
      descripcion: "Relájate en las aguas termales naturales de San Jacinto",
      imagen: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBzcGElMjB3ZWxsbmVzcyUyMHJlbGF4JTIwbWFzc2FnZXxlbnwxfHx8fDE3NTc1NzU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "relax",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$60",
      rating: 4.8,
      incluye: ["Acceso a termas", "Masaje relajante", "Refrigerios naturales"],
      icono: Droplets
    },
    {
      titulo: "Yoga al Amanecer en Volcán",
      descripcion: "Sesión de yoga con vista panorámica del amanecer",
      imagen: "https://images.unsplash.com/photo-1715520212831-199dc6b4354f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB5b2dhJTIwbWVkaXRhdGlvbiUyMHN1bnJpc2UlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTc1NzU0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "relax",
      duracion: "2 horas",
      dificultad: "Fácil",
      precio: "$35",
      rating: 4.9,
      incluye: ["Instructor certificado", "Mat de yoga", "Desayuno ligero"],
      icono: Heart
    },
    // Adrenalina
    {
      titulo: "Puenting desde Puente Colgante",
      descripcion: "Salta en caída libre desde 50 metros de altura",
      imagen: "https://images.unsplash.com/photo-1694811401661-4d2775113d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHJlbmFsaW5lJTIwZXh0cmVtZSUyMHNwb3J0cyUyMGJ1bmdlZXxlbnwxfHx8fDE3NTc1NzU0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "adrenalina",
      duracion: "3 horas",
      dificultad: "Extrema",
      precio: "$150",
      rating: 4.7,
      incluye: ["Equipo profesional", "Video del salto", "Certificado de valor"],
      icono: Zap
    },
    {
      titulo: "Senderismo Volcán Masaya",
      descripcion: "Camina hasta el cráter activo del volcán Masaya y observa el lago de lava",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "adrenalina",
      duracion: "4 horas",
      dificultad: "Moderada",
      precio: "$65",
      rating: 4.8,
      incluye: ["Guía especializado", "Transporte", "Equipo de seguridad"],
      icono: Mountain
    },
    {
      titulo: "Canopy y Zipline en Mombacho",
      descripcion: "Vuela entre las copas de los árboles del bosque nuboso",
      imagen: "https://images.unsplash.com/photo-1598973940151-d23d15fccd54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjB6aXBsaW5lJTIwY2Fub3B5fGVufDF8fHx8MTc1NzU3NDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "adrenalina",
      duracion: "3 horas",
      dificultad: "Moderada",
      precio: "$85",
      rating: 4.7,
      incluye: ["Equipo completo", "Instructor certificado", "Certificado de valor"],
      icono: Zap
    },
    {
      titulo: "Clases de Surf en San Juan del Sur",
      descripcion: "Aprende a surfear en las mejores olas del Pacífico nicaragüense",
      imagen: "https://images.unsplash.com/photo-1679497583829-b042b405b963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBzdXJmaW5nJTIwcGFjaWZpYyUyMGNvYXN0JTIwd2F2ZXN8ZW58MXx8fHwxNzU3NTc0ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "playa",
      duracion: "2 horas",
      dificultad: "Fácil",
      precio: "$50",
      rating: 4.5,
      incluye: ["Tabla de surf", "Instructor certificado", "Traje de neopreno"],
      icono: Waves
    },
    // Vida Silvestre
    {
      titulo: "Safari Fotográfico Vida Silvestre",
      descripcion: "Observa monos, perezosos y aves exóticas en su hábitat natural",
      imagen: "https://images.unsplash.com/photo-1642522134728-2d149ce05013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3aWxkbGlmZSUyMG1vbmtleXMlMjBqdW5nbGUlMjBhbmltYWxzfGVufDF8fHx8MTc1NzU3NTQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "vida silvestre",
      duracion: "6 horas",
      dificultad: "Fácil",
      precio: "$85",
      rating: 4.8,
      incluye: ["Guía naturalista", "Binoculares", "Cámara fotográfica"],
      icono: Bird
    },
    {
      titulo: "Observación de Aves en Reserva",
      descripcion: "Descubre la increíble biodiversidad aviar de Nicaragua",
      imagen: "https://images.unsplash.com/photo-1743186157217-9d0b32641ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3aWxkbGlmZSUyMGJpcmQlMjB3YXRjaGluZyUyMG5hdHVyZXxlbnwxfHx8fDE3NTc1NzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "vida silvestre",
      duracion: "5 horas",
      dificultad: "Fácil",
      precio: "$90",
      rating: 4.9,
      incluye: ["Binoculares profesionales", "Guía ornitólogo", "Lista de especies"],
      icono: Binoculars
    },
    // Tradición
    {
      titulo: "Taller de Artesanías Tradicionales",
      descripcion: "Aprende técnicas ancestrales de cerámica y tejido",
      imagen: "https://images.unsplash.com/photo-1719852255246-898f965e04e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0cmFkaXRpb25hbCUyMGNyYWZ0cyUyMHdlYXZpbmclMjBwb3R0ZXJ5fGVufDF8fHx8MTc1NzU3NTQyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "tradición",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$55",
      rating: 4.7,
      incluye: ["Materiales incluidos", "Maestro artesano", "Pieza terminada"],
      icono: Scissors
    },
    {
      titulo: "Taller de Danza Folklórica",
      descripcion: "Aprende los bailes tradicionales nicaragüenses con maestros locales",
      imagen: "https://images.unsplash.com/photo-1614341769411-4f23f701e3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjdWx0dXJhbCUyMGRhbmNlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU3NTc0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "tradición",
      duracion: "2 horas",
      dificultad: "Fácil",
      precio: "$35",
      rating: 4.6,
      incluye: ["Vestuario tradicional", "Clase personalizada", "Video recuerdo"],
      icono: Music
    },
    {
      titulo: "Tour de Café en Matagalpa",
      descripcion: "Descubre el proceso del café nicaragüense desde la semilla hasta la taza",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "tradición",
      duracion: "5 horas",
      dificultad: "Fácil",
      precio: "$80",
      rating: 4.7,
      incluye: ["Degustación de café", "Almuerzo típico", "Certificado de participación"],
      icono: Coffee
    },
    // Arte
    {
      titulo: "Tour Galería de Arte Contemporáneo",
      descripcion: "Explora las obras de artistas nicaragüenses contemporáneos",
      imagen: "https://images.unsplash.com/photo-1746966655523-c7a956b0970d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhcnQlMjBnYWxsZXJ5JTIwcGFpbnRpbmclMjBzY3VscHR1cmV8ZW58MXx8fHwxNTc1NzU0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "arte",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$40",
      rating: 4.8,
      incluye: ["Guía especializado", "Catálogo de obras", "Degustación de vino"],
      icono: PaintBucket
    },
    {
      titulo: "Taller de Pintura Primitivista",
      descripcion: "Crea tu propia obra inspirada en el arte de Solentiname",
      imagen: "https://images.unsplash.com/photo-1746966655523-c7a956b0970d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhcnQlMjBnYWxsZXJ5JTIwcGFpbnRpbmclMjBzY3VscHR1cmV8ZW58MXx8fHwxNTc1NzU0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "arte",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$60",
      rating: 4.7,
      incluye: ["Materiales de pintura", "Lienzo", "Obra terminada"],
      icono: Palette
    },
    {
      titulo: "Taller de Chocolate Artesanal",
      descripcion: "Aprende el proceso del chocolate desde el cacao hasta la barra",
      imagen: "https://images.unsplash.com/photo-1657726936729-4926e65989df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjaG9jb2xhdGUlMjBjYWNhbyUyMGZhcm18ZW58MXx8fHwxNzU3NTc0ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "arte",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$70",
      rating: 4.8,
      incluye: ["Kit de chocolatería", "Degustación", "Productos para llevar"],
      icono: Utensils
    },
    {
      titulo: "Tour Gastronómico Mercados",
      descripcion: "Explora los sabores auténticos en los mercados tradicionales",
      imagen: "https://images.unsplash.com/photo-1657726936729-4926e65989df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjaG9jb2xhdGUlMjBjYWNhbyUyMGZhcm18ZW58MXx8fHwxNzU3NTc0ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "arte",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$55",
      rating: 4.6,
      incluye: ["Degustaciones múltiples", "Guía gastronómico", "Recetas tradicionales"],
      icono: Coffee
    },
    {
      titulo: "Atardecer en Las Isletas",
      descripcion: "Navegación en kayak entre las 365 isletas del Lago Cocibolca",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "relax",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$55",
      rating: 4.9,
      incluye: ["Kayak y equipo", "Guía naturalista", "Snacks y bebidas"],
      icono: Sunset
    },
    {
      titulo: "Tour Fotográfico Granada Colonial",
      descripcion: "Captura la belleza arquitectural de la ciudad más antigua de América Continental",
      imagen: "https://images.unsplash.com/photo-1734698144161-de5f72411b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBoaXN0b3J5JTIwY29sb25pYWwlMjBjYXRoZWRyYWx8ZW58MXx8fHwxNzU3NTc1NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "historia",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$45",
      rating: 4.9,
      incluye: ["Fotógrafo profesional", "Tips de fotografía", "Edición básica"],
      icono: Camera
    },
    {
      titulo: "Paseo en Barco por Río San Juan",
      descripcion: "Navega por la histórica ruta de los conquistadores",
      imagen: "https://images.unsplash.com/photo-1600762414606-74cc2d98acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjBhY3Rpdml0aWVzJTIwdm9sY2FubyUyMGhpa2luZ3xlbnwxfHx8fDE3NTcxODk3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "historia",
      duracion: "8 horas",
      dificultad: "Fácil",
      precio: "$120",
      rating: 4.8,
      incluye: ["Transporte fluvial", "Almuerzo", "Guía histórico"],
      icono: Ship
    },
    // Experiencias adicionales para balancear categorías
    {
      titulo: "Conservación de Tortugas Marinas",
      descripcion: "Participa en la liberación nocturna de tortugas bebé al océano",
      imagen: "https://images.unsplash.com/photo-1743523477046-4fa2f9134831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB0dXJ0bGUlMjBjb25zZXJ2YXRpb24lMjBiZWFjaHxlbnwxfHx8fDE3NTc1NzU2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "vida silvestre",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$75",
      rating: 4.9,
      incluye: ["Guía conservacionista", "Transporte nocturno", "Certificado de participación"],
      icono: Bird
    },
    {
      titulo: "Relajación en Aguas Termales",
      descripcion: "Sumérgete en las aguas termales naturales de Tipitapa",
      imagen: "https://images.unsplash.com/photo-1682011709221-c584d3a63703?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3QlMjBzcHJpbmdzJTIwdGhlcm1hbCUyMHJlbGF4fGVufDF8fHx8MTc1NzU3NTYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "relax",
      duracion: "5 horas",
      dificultad: "Fácil",
      precio: "$65",
      rating: 4.7,
      incluye: ["Acceso a piscinas termales", "Masaje opcional", "Almuerzo saludable"],
      icono: Droplets
    },
    {
      titulo: "Rafting Extremo en Rápidos",
      descripcion: "Desciende los rápidos clase V del río Coco",
      imagen: "https://images.unsplash.com/photo-1656027104090-0a1f56d33d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBleHRyZW1lJTIwcmFmdGluZyUyMHJhcGlkcyUyMGFkcmVuYWxpbmV8ZW58MXx8fHwxNzU3NTc1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "adrenalina",
      duracion: "6 horas",
      dificultad: "Extrema",
      precio: "$130",
      rating: 4.6,
      incluye: ["Equipo completo", "Guía experto", "Seguro de aventura"],
      icono: Waves
    },
    // Aventura
    {
      titulo: "Escalada en Roca Volcánica",
      descripcion: "Conquista las paredes de roca volcánica con vistas espectaculares",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjByb2NrJTIwY2xpbWJpbmclMjBtb3VudGFpbnxlbnwxfHx8fDE3NTc1NzU2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "aventura",
      duracion: "5 horas",
      dificultad: "Difícil",
      precio: "$95",
      rating: 4.7,
      incluye: ["Equipo de escalada", "Instructor certificado", "Seguro de riesgo"],
      icono: Mountain
    },
    {
      titulo: "Expedición al Volcán Concepción",
      descripcion: "Sube al volcán activo más alto de Nicaragua en Isla Ometepe",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjByb2NrJTIwY2xpbWJpbmclMjBtb3VudGFpbnxlbnwxfHx8fDE3NTc1NzU2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "aventura",
      duracion: "10 horas",
      dificultad: "Extrema",
      precio: "$180",
      rating: 4.8,
      incluye: ["Guía especializado", "Bastones de trekking", "Almuerzo de montaña"],
      icono: Mountain
    },
    {
      titulo: "Exploración de Cuevas Subterráneas",
      descripcion: "Aventúrate en las misteriosas cuevas de las sierras del norte",
      imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBhZHZlbnR1cmUlMjByb2NrJTIwY2xpbWJpbmclMjBtb3VudGFpbnxlbnwxfHx8fDE3NTc1NzU2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "aventura",
      duracion: "4 horas",
      dificultad: "Moderada",
      precio: "$75",
      rating: 4.6,
      incluye: ["Linternas especializadas", "Casco de seguridad", "Guía espeleólogo"],
      icono: Mountain
    },
    // Cultural
    {
      titulo: "Inmersión Cultural en Masaya",
      descripcion: "Vive con familias locales y aprende sus tradiciones ancestrales",
      imagen: "https://images.unsplash.com/photo-1614341769411-4f23f701e3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjdWx0dXJhbCUyMGRhbmNlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU3NTc0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "cultural",
      duracion: "2 días",
      dificultad: "Fácil",
      precio: "$200",
      rating: 4.9,
      incluye: ["Alojamiento familiar", "Clases de cocina", "Certificado cultural"],
      icono: Music
    },
    {
      titulo: "Festival de La Gritería",
      descripcion: "Participa en la celebración religiosa más importante de Nicaragua",
      imagen: "https://images.unsplash.com/photo-1614341769411-4f23f701e3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjdWx0dXJhbCUyMGRhbmNlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU3NTc0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "cultural",
      duracion: "1 día",
      dificultad: "Fácil",
      precio: "$45",
      rating: 4.8,
      incluye: ["Guía cultural", "Participación en tradiciones", "Cena tradicional"],
      icono: Music
    },
    {
      titulo: "Ruta de los Murales Revolucionarios",
      descripcion: "Descubre el arte callejero que cuenta la historia reciente de Nicaragua",
      imagen: "https://images.unsplash.com/photo-1614341769411-4f23f701e3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjdWx0dXJhbCUyMGRhbmNlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU3NTc0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "cultural",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$35",
      rating: 4.7,
      incluye: ["Guía historiador", "Mapa de murales", "Encuentro con artistas"],
      icono: Palette
    },
    // Gastronómica
    {
      titulo: "Tour Gastronómico Gallo Pinto",
      descripcion: "Aprende a preparar el plato nacional en cocinas tradicionales",
      imagen: "https://images.unsplash.com/photo-1657726936729-4926e65989df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjaG9jb2xhdGUlMjBjYWNhbyUyMGZhcm18ZW58MXx8fHwxNzU3NTc0ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "gastronómica",
      duracion: "4 horas",
      dificultad: "Fácil",
      precio: "$55",
      rating: 4.8,
      incluye: ["Ingredientes frescos", "Receta tradicional", "Chef especializado"],
      icono: Utensils
    },
    {
      titulo: "Cata de Ron Nicaragüense",
      descripcion: "Degusta los mejores rones premium de Nicaragua con expertos",
      imagen: "https://images.unsplash.com/photo-1657726936729-4926e65989df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjaG9jb2xhdGUlMjBjYWNhbyUyMGZhcm18ZW58MXx8fHwxNzU3NTc0ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "gastronómica",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$85",
      rating: 4.9,
      incluye: ["Degustación premium", "Sommelier especializado", "Maridajes gourmet"],
      icono: Coffee
    },
    {
      titulo: "Mercado de Mariscos Puerto Salvador",
      descripcion: "Experimenta los sabores frescos del mar en el puerto pesquero",
      imagen: "https://images.unsplash.com/photo-1657726936729-4926e65989df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBjaG9jb2xhdGUlMjBjYWNhbyUyMGZhcm18ZW58MXx8fHwxNzU3NTc0ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "gastronómica",
      duracion: "3 horas",
      dificultad: "Fácil",
      precio: "$60",
      rating: 4.7,
      incluye: ["Degustación de mariscos", "Guía gastronómico", "Preparación fresca"],
      icono: Utensils
    },
    // Naturaleza
    {
      titulo: "Sendero Ecológico Bosque Nuboso",
      descripcion: "Camina por los senderos del bosque nuboso de Mombacho",
      imagen: "https://images.unsplash.com/photo-1642522134728-2d149ce05013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3aWxkbGlmZSUyMG1vbmtleXMlMjBqdW5nbGUlMjBhbmltYWxzfGVufDF8fHx8MTc1NzU3NTQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "naturaleza",
      duracion: "6 horas",
      dificultad: "Moderada",
      precio: "$70",
      rating: 4.8,
      incluye: ["Guía naturalista", "Binoculares", "Almuerzo ecológico"],
      icono: TreePine
    },
    {
      titulo: "Reserva Natural Río Escalante",
      descripcion: "Explora la biodiversidad única de esta reserva protegida",
      imagen: "https://images.unsplash.com/photo-1642522134728-2d149ce05013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3aWxkbGlmZSUyMG1vbmtleXMlMjBqdW5nbGUlMjBhbmltYWxzfGVufDF8fHx8MTc1NzU3NTQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "naturaleza",
      duracion: "8 horas",
      dificultad: "Moderada",
      precio: "$95",
      rating: 4.9,
      incluye: ["Transporte especializado", "Guía biólogo", "Kit de observación"],
      icono: TreePine
    },
    {
      titulo: "Laguna de Apoyo Ecosistema",
      descripcion: "Descubre el ecosistema único de esta laguna cratérica",
      imagen: "https://images.unsplash.com/photo-1642522134728-2d149ce05013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB3aWxkbGlmZSUyMG1vbmtleXMlMjBqdW5nbGUlMjBhbmltYWxzfGVufDF8fHx8MTc1NzU3NTQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      categoria: "naturaleza",
      duracion: "5 horas",
      dificultad: "Fácil",
      precio: "$65",
      rating: 4.7,
      incluye: ["Kayak ecológico", "Snorkel", "Guía ambiental"],
      icono: TreePine
    }
  ];

  const categorias = ["Todas", "aventura", "cultural", "gastronómica", "naturaleza", "historia", "playa", "relax", "adrenalina", "vida silvestre", "tradición", "arte"];

  const experienciasFiltradas = filtroActivo === "Todas" 
    ? experiencias 
    : experiencias.filter(exp => exp.categoria === filtroActivo);

  return (
    <div className="min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: lineClampStyles }} />
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="text-white py-16"
          style={{
            background: `linear-gradient(to right, #513854ff, #67346dff, #ffd8ffff)`
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-4">Experiencias Únicas</h1>
              <p className="max-w-2xl mx-auto">
                Vive aventuras inolvidables en Nicaragua. Desde escalada de volcanes hasta tours culturales, 
                cada experiencia te conectará auténticamente con nuestro país.
              </p>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-center mb-6">            </h1>
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((categoria) => (
                <Button 
                  key={categoria}
                  variant={categoria === filtroActivo ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFiltroActivo(categoria)}
                  className={categoria === filtroActivo ? "text-white" : ""}
                  style={categoria === filtroActivo ? { backgroundColor: '#1E90FF' } : {}}
                >
                  {categoria === "Todas" ? categoria : categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid de Experiencias */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-8">
              {filtroActivo === "Todas" ? "Todas las Experiencias" : `Experiencias de ${filtroActivo.charAt(0).toUpperCase() + filtroActivo.slice(1)}`}
              <span className="text-gray-500 ml-2">({experienciasFiltradas.length})</span>
            </h2>
            
            {experienciasFiltradas.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">No se encontraron experiencias en esta categoría.</p>
                <Button 
                  onClick={() => setFiltroActivo("Todas")}
                  className="text-white"
                  style={{ backgroundColor: '#1E90FF' }}
                >
                  Ver todas las experiencias
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {experienciasFiltradas.map((experiencia, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <ImageWithFallback 
                        src={experiencia.imagen}
                        alt={experiencia.titulo}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                        {experiencia.categoria}
                      </Badge>
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        <experiencia.icono 
                          className="h-5 w-5" 
                          style={{ color: '#32CD32' }}
                        />
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{experiencia.rating}</span>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base leading-tight">{experiencia.titulo}</CardTitle>
                      <p className="text-gray-600 text-sm line-clamp-2">{experiencia.descripcion}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-2">
                      <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{experiencia.duracion}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Mountain className="h-4 w-4 text-gray-500" />
                          <span>{experiencia.dificultad}</span>
                        </div>
                      </div>
                      <div className="mb-3 text-center">
                        <span 
                          className="text-xl"
                          style={{ color: '#32CD32' }}
                        >
                          {experiencia.precio}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">Incluye:</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {experiencia.incluye.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div 
                                className="w-1 h-1 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#32CD32' }}
                              ></div>
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                          {experiencia.incluye.length > 2 && (
                            <li className="text-xs text-gray-500">
                              +{experiencia.incluye.length - 2} más
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <Button 
                        className="w-full text-white"
                        style={{ backgroundColor: '#FF6347' }}
                      >
                        Reservar Experiencia
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contacta con nuestros especialistas en turismo para crear una experiencia 
              personalizada que se adapte perfectamente a tus intereses y preferencias.
            </p>
            <Button 
              size="lg"
              className="text-white"
              style={{ backgroundColor: '#1E90FF' }}
            >
              Crear Experiencia Personalizada
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}