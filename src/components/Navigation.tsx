
import { Home, FileText, BarChart4, Settings, HelpCircle, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-brand-dark py-4 px-6 flex justify-between items-center w-full">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-white text-xl font-bold">
          Finaktiva<span className="text-brand-primary">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className={`text-sm ${isActive('/dashboard') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'}`}>
            Dashboard
          </Link>
          <Link to="/factoring" className={`text-sm ${isActive('/factoring') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'}`}>
            Factoring
          </Link>
          <Link to="/reports" className={`text-sm ${isActive('/reports') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'}`}>
            Reportes
          </Link>
          <Link to="/help" className={`text-sm ${isActive('/help') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'}`}>
            Ayuda
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-brand-primary">
          <HelpCircle size={20} />
        </button>
        <Link to="/login" className="btn-secondary text-sm">
          Iniciar sesión
        </Link>
        <Link to="/register" className="btn-primary text-sm">
          Regístrate
        </Link>
      </div>
    </nav>
  );
};
