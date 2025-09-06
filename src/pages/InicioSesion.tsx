import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function InicioSesion() {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [recordarme, setRecordarme] = useState(false);

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
              <h1 className="mb-2">¡Bienvenido de vuelta!</h1>
              <p className="text-gray-600">Inicia sesión para continuar explorando Nicaragua</p>
            </div>

            {/* Formulario de Inicio de Sesión */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Iniciar Sesión</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  
                  {/* Email */}
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

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        id="password"
                        type={mostrarPassword ? "text" : "password"}
                        placeholder="Tu contraseña"
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

                  {/* Recordarme y Olvidé contraseña */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input 
                        type="checkbox"
                        checked={recordarme}
                        onChange={(e) => setRecordarme(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <span>Recordarme</span>
                    </label>
                    <Button variant="link" className="p-0 text-sm">
                      ¿Olvidaste tu contraseña?
                    </Button>
                  </div>

                  {/* Botón de Iniciar Sesión */}
                  <Button type="submit" className="w-full">
                    Iniciar Sesión
                  </Button>
                </form>

                {/* Separador */}
                <div className="my-6">
                  <Separator />
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white px-2 text-sm text-gray-500">O continúa con</span>
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

                {/* Enlace a Registro */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    ¿No tienes cuenta?{' '}
                    <Button variant="link" className="p-0 text-sm">
                      Regístrate aquí
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Información adicional */}
            <div className="mt-8 text-center text-xs text-gray-500">
              <p>
                Al iniciar sesión, aceptas nuestros{' '}
                <Button variant="link" className="p-0 text-xs text-gray-500 underline">
                  Términos de Servicio
                </Button>{' '}
                y{' '}
                <Button variant="link" className="p-0 text-xs text-gray-500 underline">
                  Política de Privacidad
                </Button>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}