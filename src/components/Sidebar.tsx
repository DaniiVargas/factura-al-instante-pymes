
import { Home, FileText, BarChart4, Settings, DollarSign, Inbox, PieChart, Clock, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const menuItems = [
    { path: "/dashboard", icon: <Home size={20} />, label: "Inicio" },
    { path: "/factoring", icon: <DollarSign size={20} />, label: "Factoring" },
    { path: "/invoices", icon: <FileText size={20} />, label: "Mis Facturas" },
    { path: "/reports", icon: <BarChart4 size={20} />, label: "Reportes" },
    { path: "/clients", icon: <User size={20} />, label: "Clientes" },
    { path: "/settings", icon: <Settings size={20} />, label: "Ajustes" }
  ];
  
  return (
    <div className="bg-gray-900 w-64 h-screen fixed left-0 top-16 overflow-y-auto">
      <div className="pt-8 pb-4 px-4">
        <h2 className="text-brand-primary font-medium text-lg mb-6 px-4">Mi Cuenta</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path) 
                    ? "bg-brand-primary/10 text-brand-primary" 
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className={isActive(item.path) ? "text-brand-primary" : "text-gray-400"}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
