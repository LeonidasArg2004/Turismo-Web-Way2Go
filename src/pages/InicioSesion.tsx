import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Eye, EyeOff, Mail, Lock, LogIn, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface InicioSesionProps {
  onNavigate?: (page: string) => void;
}

export default function InicioSesion({ onNavigate }: InicioSesionProps) {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Intentando iniciar sesión con:", { email, password });
    
    // Por ahora, simular un login exitoso
    alert("¡Inicio de sesión exitoso! (simulado)");
  };

  const handleRegisterClick = () => {
    if (onNavigate) {
      onNavigate("Registro");
    }
  };

  const handleBackClick = () => {
    if (onNavigate) {
      onNavigate("Inicio");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">

            {/* Botón Volver */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={handleBackClick}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver
              </Button>
            </div>
            
            {/* Hero Visual */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1721297013151-16efb22886aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJpcmQlMjBjb2xvcmZ1bCUyMG5pY2FyYWd1YXxlbnwxfHx8fDE3NTcxODIxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Way2Go"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl mb-2">¡Bienvenido de vuelta!</h1>
              <p className="text-muted-foreground">Inicia sesión para continuar explorando Nicaragua</p>
            </div>

            {/* Formulario de Inicio de Sesión */}
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2">
                  <LogIn className="h-5 w-5 text-primary" />
                  Iniciar Sesión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Correo Electrónico */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Contraseña */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password"
                        type={mostrarPassword ? "text" : "password"}
                        placeholder="Tu contraseña"
                        className="pl-10 pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setMostrarPassword(!mostrarPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {mostrarPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Enlace para recuperar contraseña */}
                  <div className="text-right">
                    <Button variant="link" className="p-0 h-auto text-sm text-primary">
                      ¿Olvidaste tu contraseña?
                    </Button>
                  </div>

                  {/* Botón de Iniciar Sesión */}
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Iniciar Sesión
                  </Button>
                </form>

                {/* Enlace a Registro */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    ¿No tienes cuenta?
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleRegisterClick}
                  >
                    Registrarse
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Información adicional */}
            <div className="mt-8 text-center text-xs text-muted-foreground">
              <p>
                Al iniciar sesión, aceptas nuestros{' '}
                <Button variant="link" className="p-0 text-xs text-muted-foreground underline h-auto">
                  Términos de Servicio
                </Button>{' '}
                y{' '}
                <Button variant="link" className="p-0 text-xs text-muted-foreground underline h-auto">
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