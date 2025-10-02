import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { User, Mail, Phone, Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface RegistroProps {
  onNavigate?: (page: string) => void;
}

export default function Registro({ onNavigate }: RegistroProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    sexo: "",
    nacionalidad: "",
    telefono: "",
    email: ""
  });

  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    const camposRequeridos = Object.values(formData).every(campo => campo.trim() !== "");
    
    if (!camposRequeridos) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!aceptaTerminos) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Aquí iría la lógica de registro
    
    // Simular registro exitoso y redirigir a inicio de sesión
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    
    if (onNavigate) {
      onNavigate("Inicio de Sesión");
    }
  };

  const handleLoginClick = () => {
    if (onNavigate) {
      onNavigate("Inicio de Sesión");
    }
  };

  const handleBackClick = () => {
    if (onNavigate) {
      onNavigate("Inicio");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">

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
              <h1 className="text-2xl mb-2">¡Únete a Way2Go!</h1>
              <p className="text-muted-foreground">Crea tu cuenta y comienza a explorar Nicaragua</p>
            </div>

            {/* Formulario de Registro */}
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Crear Cuenta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Nombre y Apellido */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="nombre"
                          placeholder="Tu nombre"
                          className="pl-10"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange("nombre", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido *</Label>
                      <Input 
                        id="apellido"
                        placeholder="Tu apellido"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange("apellido", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Fecha de Nacimiento */}
                  <div className="space-y-2">
                    <Label htmlFor="fechaNacimiento">Fecha de Nacimiento *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="fechaNacimiento"
                        type="date"
                        className="pl-10"
                        value={formData.fechaNacimiento}
                        onChange={(e) => handleInputChange("fechaNacimiento", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Sexo */}
                  <div className="space-y-2">
                    <Label>Sexo *</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                      <Select 
                        value={formData.sexo} 
                        onValueChange={(value) => handleInputChange("sexo", value)}
                        required
                      >
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Selecciona tu sexo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="femenino">Femenino</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                          <SelectItem value="prefiero-no-decir">Prefiero no decir</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Nacionalidad */}
                  <div className="space-y-2">
                    <Label>Nacionalidad *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                      <Select 
                        value={formData.nacionalidad} 
                        onValueChange={(value) => handleInputChange("nacionalidad", value)}
                        required
                      >
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Selecciona tu nacionalidad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nicaraguense">Nicaragüense</SelectItem>
                          <SelectItem value="costarricense">Costarricense</SelectItem>
                          <SelectItem value="hondurena">Hondureña</SelectItem>
                          <SelectItem value="guatemalteca">Guatemalteca</SelectItem>
                          <SelectItem value="salvadorena">Salvadoreña</SelectItem>
                          <SelectItem value="belicena">Beliceña</SelectItem>
                          <SelectItem value="panameña">Panameña</SelectItem>
                          <SelectItem value="mexicana">Mexicana</SelectItem>
                          <SelectItem value="estadounidense">Estadounidense</SelectItem>
                          <SelectItem value="canadiense">Canadiense</SelectItem>
                          <SelectItem value="espanola">Española</SelectItem>
                          <SelectItem value="francesa">Francesa</SelectItem>
                          <SelectItem value="alemana">Alemana</SelectItem>
                          <SelectItem value="italiana">Italiana</SelectItem>
                          <SelectItem value="otra">Otra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Número de Teléfono */}
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Número de Teléfono *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="telefono"
                        type="tel"
                        placeholder="+505 8888-9999"
                        className="pl-10"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Correo Electrónico */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Términos y Condiciones */}
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 text-sm cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={aceptaTerminos}
                        onChange={(e) => setAceptaTerminos(e.target.checked)}
                        className="mt-0.5 rounded border-gray-300"
                        required
                      />
                      <span>
                        Acepto los{' '}
                        <Button variant="link" className="p-0 text-sm underline h-auto text-primary">
                          Términos de Servicio
                        </Button>{' '}
                        y la{' '}
                        <Button variant="link" className="p-0 text-sm underline h-auto text-primary">
                          Política de Privacidad
                        </Button>{' '}
                        de Way2Go. *
                      </span>
                    </label>
                  </div>

                  {/* Beneficios de la cuenta */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h3 className="text-sm text-primary mb-2">¡Tu cuenta incluye:</h3>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Reservas ilimitadas sin comisiones</li>
                      <li>• Acceso a ofertas exclusivas</li>
                      <li>• Atención personalizada 24/7</li>
                      <li>• Programa de puntos Way2Go</li>
                    </ul>
                  </div>

                  {/* Botón de Registro */}
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!aceptaTerminos}
                  >
                    Registrarme
                  </Button>
                </form>

                {/* Enlace a Inicio de Sesión */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    ¿Ya tienes cuenta?
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleLoginClick}
                  >
                    Iniciar Sesión
                  </Button>
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