
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-400" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-6">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          
          <Link to="/" className="btn-primary inline-block px-8 py-3">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
