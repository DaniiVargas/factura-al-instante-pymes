
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { FileText, TrendingUp, Shield, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-brand-dark">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Recibe liquidez inmediata anticipando el pago de tus facturas
                </h1>
                <p className="text-lg text-gray-300 md:pr-12">
                  Desbloquea el capital atrapado en tus facturas pendientes y mejora tu flujo de efectivo sin complicaciones.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => navigate('/factoring')} 
                    className="btn-primary px-8 py-3"
                  >
                    Comenzar ahora
                  </button>
                  <button 
                    onClick={() => navigate('/how-it-works')} 
                    className="btn-secondary px-8 py-3"
                  >
                    Cómo funciona
                  </button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="/lovable-uploads/df4e05a0-4fd1-4b32-87ad-464f48872d7c.png" 
                  alt="Dashboard Finaktiva" 
                  className="w-full max-w-lg rounded-lg shadow-xl border border-gray-800" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Solución diseñada para PyMEs</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Nuestra plataforma te permite anticipar el pago de tus facturas de manera fácil, segura y transparente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-dark flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Liquidez inmediata</h3>
                <p className="text-gray-300">Recibe fondos en tu cuenta en menos de 24 horas una vez aprobada tu solicitud.</p>
              </div>
              
              <div className="card-dark flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proceso simple</h3>
                <p className="text-gray-300">Carga tu factura, verifica la información y recibe una oferta en minutos.</p>
              </div>
              
              <div className="card-dark flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% seguro</h3>
                <p className="text-gray-300">Plataforma protegida con los más altos estándares de seguridad para tus datos.</p>
              </div>
              
              <div className="card-dark flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tarifas competitivas</h3>
                <p className="text-gray-300">Costos transparentes y justos basados en el perfil de riesgo de tu cliente.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar tu flujo de caja?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a las cientos de PyMEs que ya están utilizando nuestra plataforma para optimizar su liquidez y hacer crecer su negocio.
            </p>
            <button 
              onClick={() => navigate('/register')} 
              className="btn-primary px-8 py-3 text-lg"
            >
              Crear cuenta gratis
            </button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-950 py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-white text-xl font-bold">
              Finaktiva<span className="text-brand-primary">.</span>
            </span>
            <p className="text-gray-400 text-sm mt-1">© 2025 Finaktiva. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-brand-primary">Términos</a>
            <a href="#" className="text-gray-400 hover:text-brand-primary">Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-brand-primary">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
