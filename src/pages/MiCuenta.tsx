import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { User, MapPin, Calendar, CreditCard, Settings, LogOut, Eye, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function MiCuenta() {
  const reservasActivas = [
    {
      id: "R001",
      titulo: "Ruta de los Volcanes",
      fecha: "15 Enero 2025",
      estado: "Confirmada",
      precio: "$450",
      imagen: "https://images.unsplash.com/photo-1745208098930-cf0cf811aa07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjB2b2xjYW5vJTIwbGFuZHNjYXBlZHwxfHx8fDE3NTcxODk2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "R002",
      titulo: "Hotel Colonial Granada",
      fecha: "20-22 Enero 2025",
      estado: "Pendiente",
      precio: "$240",
      imagen: "https://images.unsplash.com/photo-1719241367647-718f2f7e8956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNhcmFndWElMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBjb2xvbmlhbHxlbnwxfHx8fDE3NTcxODk3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const historialReservas = [
    {
      id: "R003",
      titulo: "Tour Fotográfico Granada",
      fecha: "10 Diciembre 2024",
      estado: "Completada",
      precio: "$45",
      rating: 5
    },
    {
      id: "R004", 
      titulo: "Finca Cafetera Familiar",
      fecha: "25 Noviembre 2024",
      estado: "Completada",
      precio: "$120",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Header del Perfil */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8 mb-8">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback className="text-2xl">MA</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="mb-2">María Alejandra Pérez</h1>
                  <p className="opacity-90">Miembro desde Marzo 2023</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Managua, Nicaragua</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">Viajero Frecuente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs de Contenido */}
            <Tabs defaultValue="reservas" className="w-full">
              <TabsList className="grid grid-cols-4 max-w-lg mb-8">
                <TabsTrigger value="reservas">Reservas</TabsTrigger>
                <TabsTrigger value="perfil">Perfil</TabsTrigger>
                <TabsTrigger value="pagos">Pagos</TabsTrigger>
                <TabsTrigger value="configuracion">Config</TabsTrigger>
              </TabsList>

              {/* Reservas */}
              <TabsContent value="reservas">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Reservas Activas */}
                  <div>
                    <h2 className="mb-6">Reservas Activas</h2>
                    <div className="space-y-4">
                      {reservasActivas.map((reserva) => (
                        <Card key={reserva.id}>
                          <CardContent className="p-4">
                            <div className="flex gap-4">
                              <div className="w-20 h-20 flex-shrink-0">
                                <ImageWithFallback 
                                  src={reserva.imagen}
                                  alt={reserva.titulo}
                                  className="w-full h-full object-cover rounded"
                                />
                              </div>
                              <div className="flex-grow">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h3 className="text-base">{reserva.titulo}</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                      <Calendar className="h-3 w-3" />
                                      {reserva.fecha}
                                    </div>
                                  </div>
                                  <Badge 
                                    variant={reserva.estado === "Confirmada" ? "default" : "secondary"}
                                  >
                                    {reserva.estado}
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-lg">{reserva.precio}</span>
                                  <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                      <Eye className="h-3 w-3 mr-1" />
                                      Ver
                                    </Button>
                                    <Button size="sm">Gestionar</Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Historial */}
                  <div>
                    <h2 className="mb-6">Historial de Reservas</h2>
                    <div className="space-y-4">
                      {historialReservas.map((reserva) => (
                        <Card key={reserva.id}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h3 className="text-base">{reserva.titulo}</h3>
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                  <Calendar className="h-3 w-3" />
                                  {reserva.fecha}
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge variant="outline">{reserva.estado}</Badge>
                                <div className="flex items-center gap-1 mt-1">
                                  {[...Array(reserva.rating)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg">{reserva.precio}</span>
                              <Button variant="outline" size="sm">Ver Detalles</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Perfil */}
              <TabsContent value="perfil">
                <Card>
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Nombre</Label>
                        <Input defaultValue="María Alejandra" />
                      </div>
                      <div>
                        <Label>Apellido</Label>
                        <Input defaultValue="Pérez" />
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input defaultValue="maria@email.com" />
                      </div>
                      <div>
                        <Label>Teléfono</Label>
                        <Input defaultValue="+505 8888-9999" />
                      </div>
                      <div className="md:col-span-2">
                        <Label>Dirección</Label>
                        <Input defaultValue="Managua, Nicaragua" />
                      </div>
                      <div className="md:col-span-2">
                        <Label>Fecha de Nacimiento</Label>
                        <Input type="date" defaultValue="1990-03-15" />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button>Guardar Cambios</Button>
                      <Button variant="outline">Cancelar</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pagos */}
              <TabsContent value="pagos">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Métodos de Pago</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5" />
                            <div>
                              <p className="font-medium">**** **** **** 1234</p>
                              <p className="text-sm text-gray-600">Visa - Vence 12/26</p>
                            </div>
                          </div>
                          <Badge>Principal</Badge>
                        </div>
                        <Button className="w-full" variant="outline">
                          + Agregar Método de Pago
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Historial de Pagos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="text-sm">Tour Fotográfico Granada</p>
                            <p className="text-xs text-gray-600">10 Dic 2024</p>
                          </div>
                          <span className="text-sm">$45.00</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="text-sm">Finca Cafetera Familiar</p>
                            <p className="text-xs text-gray-600">25 Nov 2024</p>
                          </div>
                          <span className="text-sm">$120.00</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Ver Todo el Historial
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Configuración */}
              <TabsContent value="configuracion">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración de la Cuenta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3>Notificaciones</h3>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Ofertas especiales por email</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Recordatorios de reservas</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Newsletter semanal</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3>Privacidad</h3>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Perfil público</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">Compartir experiencias</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-6 border-t">
                        <div className="flex gap-4">
                          <Button>Guardar Configuración</Button>
                          <Button variant="destructive" className="flex items-center gap-2">
                            <LogOut className="h-4 w-4" />
                            Cerrar Sesión
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}