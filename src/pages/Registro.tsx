import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Progress } from "../components/ui/progress";
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Registro() {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmPassword, setMostrarConfirmPassword] = useState(false);
  const [pasoActual, setPasoActual] = useState(1);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [recibirOfertas, setRecibirOfertas] = useState(true);

  const progreso = (pasoActual / 3) * 100;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            
            {/* Hero Visual */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1721297013151-16efb22886aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJpcmQlMjBjb2xvcmZ1bCUyMG5pY2FyYWd1YXxlbnwxfHx8fDE3NTcxODIxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Way2Go"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mb-2">¡Únete a Way2Go!</h1>
              <p className="text-gray-600">Crea tu cuenta y comienza a explorar Nicaragua</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Paso {pasoActual} de 3</span>
                <span>{Math.round(progreso)}% completo</span>
              </div>
              <Progress value={progreso} className="h-2" />
            </div>

            {/* Formulario de Registro */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Crear Cuenta</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  
                  {/* Paso 1: Información Básica */}
                  {pasoActual === 1 && (
                    <>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nombre">Nombre</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input 
                                id="nombre"
                                placeholder="Tu nombre"
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="apellido">Apellido</Label>
                            <Input 
                              id="apellido"
                              placeholder="Tu apellido"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Correo Electrónico</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input 
                              id="email"
                              type="email"
                              placeholder="tu@email.com"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="telefono">Teléfono</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input 
                              id="telefono"
                              placeholder="+505 8888-9999"
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <Button 
                        type="button" 
                        onClick={() => setPasoActual(2)}
                        className="w-full"
                      >
                        Continuar
                      </Button>
                    </>
                  )}

                  {/* Paso 2: Contraseñas y Ubicación */}
                  {pasoActual === 2 && (
                    <>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="password">Contraseña</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input 
                              id="password"
                              type={mostrarPassword ? "text" : "password"}
                              placeholder="Mínimo 8 caracteres"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setMostrarPassword(!mostrarPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {mostrarPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input 
                              id="confirmPassword"
                              type={mostrarConfirmPassword ? "text" : "password"}
                              placeholder="Repite tu contraseña"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setMostrarConfirmPassword(!mostrarConfirmPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {mostrarConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="ciudad">Ciudad</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                            <Select>
                              <SelectTrigger className="pl-10">
                                <SelectValue placeholder="Selecciona tu ciudad" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="managua">Managua</SelectItem>
                                <SelectItem value="granada">Granada</SelectItem>
                                <SelectItem value="leon">León</SelectItem>
                                <SelectItem value="masaya">Masaya</SelectItem>
                                <SelectItem value="chinandega">Chinandega</SelectItem>
                                <SelectItem value="esteli">Estelí</SelectItem>
                                <SelectItem value="matagalpa">Matagalpa</SelectItem>
                                <SelectItem value="jinotega">Jinotega</SelectItem>
                                <SelectItem value="otra">Otra ciudad</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Fecha de Nacimiento</Label>
                          <Input type="date" />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setPasoActual(1)}
                          className="flex-1"
                        >
                          Atrás
                        </Button>
                        <Button 
                          type="button" 
                          onClick={() => setPasoActual(3)}
                          className="flex-1"
                        >
                          Continuar
                        </Button>
                      </div>
                    </>
                  )}

                  {/* Paso 3: Términos y Finalización */}
                  {pasoActual === 3 && (
                    <>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <label className="flex items-start space-x-3 text-sm">
                            <input 
                              type="checkbox"
                              checked={aceptaTerminos}
                              onChange={(e) => setAceptaTerminos(e.target.checked)}
                              className="mt-0.5 rounded border-gray-300"
                            />
                            <span>
                              Acepto los{' '}
                              <Button variant="link" className="p-0 text-sm underline">
                                Términos de Servicio
                              </Button>{' '}
                              y la{' '}
                              <Button variant="link" className="p-0 text-sm underline">
                                Política de Privacidad
                              </Button>{' '}
                              de Way2Go.
                            </span>
                          </label>
                          
                          <label className="flex items-start space-x-3 text-sm">
                            <input 
                              type="checkbox"
                              checked={recibirOfertas}
                              onChange={(e) => setRecibirOfertas(e.target.checked)}
                              className="mt-0.5 rounded border-gray-300"
                            />
                            <span>
                              Quiero recibir ofertas especiales y noticias sobre destinos nicaragüenses.
                            </span>
                          </label>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg">
                          <h3 className="text-sm text-green-800 mb-2">¡Tu cuenta incluye:</h3>
                          <ul className="text-xs text-green-700 space-y-1">
                            <li>• Reservas ilimitadas sin comisiones</li>
                            <li>• Acceso a ofertas exclusivas</li>
                            <li>• Atención personalizada 24/7</li>
                            <li>• Programa de puntos Way2Go</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setPasoActual(2)}
                          className="flex-1"
                        >
                          Atrás
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={!aceptaTerminos}
                          className="flex-1"
                        >
                          Crear Cuenta
                        </Button>
                      </div>
                    </>
                  )}
                </form>

                {pasoActual === 1 && (
                  <>
                    {/* Separador */}
                    <div className="my-6">
                      <Separator />
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-white px-2 text-sm text-gray-500">O regístrate con</span>
                        </div>
                      </div>
                    </div>

                    {/* Botones de Redes Sociales */}
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continuar con Google
                      </Button>
                      
                      <Button variant="outline" className="w-full">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Continuar con Facebook
                      </Button>
                    </div>
                  </>
                )}

                {/* Enlace a Inicio de Sesión */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    ¿Ya tienes cuenta?{' '}
                    <Button variant="link" className="p-0 text-sm">
                      Inicia sesión aquí
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}