
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FileUp, Filter, Search, Eye, Download, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Datos de ejemplo para las gráficas
const barData = [
  { name: "Ene", value: 3200000 },
  { name: "Feb", value: 4500000 },
  { name: "Mar", value: 2800000 },
  { name: "Abr", value: 5100000 },
  { name: "May", value: 4200000 },
  { name: "Jun", value: 3800000 },
];

const pieData = [
  { name: "Pendientes", value: 30, color: "#FFB547" },
  { name: "Aprobadas", value: 50, color: "#86F5B5" },
  { name: "Rechazadas", value: 10, color: "#FF5252" },
  { name: "En proceso", value: 10, color: "#5B8DEF" },
];

// Datos de ejemplo para facturas
const invoicesData = [
  {
    id: "INV-001",
    client: "GlobalTech S.A.",
    date: "2025-03-15",
    dueDate: "2025-05-15",
    amount: 4500000,
    status: "approved",
  },
  {
    id: "INV-002",
    client: "Comercial Express",
    date: "2025-03-20",
    dueDate: "2025-05-20",
    amount: 3200000,
    status: "pending",
  },
  {
    id: "INV-003",
    client: "Industrias Omega",
    date: "2025-03-25",
    dueDate: "2025-05-25",
    amount: 6800000,
    status: "processing",
  },
  {
    id: "INV-004",
    client: "Distribuidora Nacional",
    date: "2025-03-28",
    dueDate: "2025-05-28",
    amount: 2100000,
    status: "rejected",
  },
  {
    id: "INV-005",
    client: "GlobalTech S.A.",
    date: "2025-04-03",
    dueDate: "2025-06-03",
    amount: 5600000,
    status: "paid",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState(invoicesData);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <div className="flex flex-1 pt-16">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-8">
          <div className="mb-8">
            <h1 className="title-xl mb-2">Dashboard</h1>
            <p className="text-gray-400">Bienvenido de nuevo, revisa el estado de tus facturas y finanzas</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card-dark">
              <p className="text-sm text-gray-400 mb-1">Por cobrar</p>
              <p className="text-2xl font-bold">$21,424,533</p>
              <div className="flex items-center mt-2 text-green-400 text-sm">
                <span className="mr-1">↑ 12%</span>
                <span className="text-gray-400">vs. mes anterior</span>
              </div>
            </div>
            
            <div className="card-dark">
              <p className="text-sm text-gray-400 mb-1">Por pagar</p>
              <p className="text-2xl font-bold">$13,400,533</p>
              <div className="flex items-center mt-2 text-red-400 text-sm">
                <span className="mr-1">↑ 8%</span>
                <span className="text-gray-400">vs. mes anterior</span>
              </div>
            </div>
            
            <div className="card-dark">
              <p className="text-sm text-gray-400 mb-1">Balance</p>
              <p className="text-2xl font-bold">$8,024,000</p>
              <div className="flex items-center mt-2 text-green-400 text-sm">
                <span className="mr-1">↑ 5%</span>
                <span className="text-gray-400">vs. mes anterior</span>
              </div>
            </div>
            
            <div className="card-dark">
              <p className="text-sm text-gray-400 mb-1">Cupo disponible</p>
              <p className="text-2xl font-bold text-brand-primary">$15,000,000</p>
              <button 
                onClick={() => navigate('/factoring')}
                className="btn-primary mt-2 py-1 text-sm w-full flex items-center justify-center"
              >
                <span>Solicitar</span>
                <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="card-dark lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="title-md">Facturas anticipadas</h2>
                <div className="flex items-center space-x-2">
                  <select className="input-dark text-sm py-1">
                    <option>Últimos 6 meses</option>
                    <option>Último año</option>
                    <option>Últimos 3 meses</option>
                  </select>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e1e1e', border: '1px solid #333' }}
                      formatter={(value: any) => [`$${value.toLocaleString()}`, 'Monto']}
                    />
                    <Bar dataKey="value" fill="#86F5B5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="card-dark">
              <div className="flex justify-between items-center mb-4">
                <h2 className="title-md">Distribución</h2>
                <div className="flex items-center space-x-2">
                  <select className="input-dark text-sm py-1">
                    <option>Último mes</option>
                    <option>Último trimestre</option>
                  </select>
                </div>
              </div>
              
              <div className="h-80 flex flex-col items-center justify-center">
                <div className="w-64 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e1e1e', border: '1px solid #333' }}
                        formatter={(value: any) => [`${value}%`, 'Porcentaje']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                  {pieData.map((item) => (
                    <div key={item.name} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Invoices Table */}
          <div className="card-dark">
            <div className="flex justify-between items-center mb-6">
              <h2 className="title-md">Facturas recientes</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Buscar factura..." 
                    className="input-dark pl-9 text-sm"
                  />
                </div>
                <button className="btn-secondary py-2 flex items-center">
                  <Filter size={16} className="mr-2" />
                  <span>Filtrar</span>
                </button>
                <button 
                  onClick={() => navigate('/factoring')} 
                  className="btn-primary py-2 flex items-center"
                >
                  <FileUp size={16} className="mr-2" />
                  <span>Nueva factura</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="text-left border-b border-gray-700">
                  <tr>
                    <th className="pb-3 text-gray-400 font-medium">Factura</th>
                    <th className="pb-3 text-gray-400 font-medium">Cliente</th>
                    <th className="pb-3 text-gray-400 font-medium">Fecha</th>
                    <th className="pb-3 text-gray-400 font-medium">Vencimiento</th>
                    <th className="pb-3 text-gray-400 font-medium">Monto</th>
                    <th className="pb-3 text-gray-400 font-medium">Estado</th>
                    <th className="pb-3 text-gray-400 font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="py-4 font-medium">{invoice.id}</td>
                      <td className="py-4">{invoice.client}</td>
                      <td className="py-4">{invoice.date}</td>
                      <td className="py-4 flex items-center">
                        {invoice.dueDate}
                        <Calendar size={14} className="ml-2 text-gray-400" />
                      </td>
                      <td className="py-4 font-medium">${invoice.amount.toLocaleString()}</td>
                      <td className="py-4">
                        <StatusBadge status={invoice.status as any} />
                      </td>
                      <td className="py-4">
                        <div className="flex space-x-2">
                          <button className="p-2 rounded-full hover:bg-gray-700">
                            <Eye size={16} className="text-gray-400 hover:text-white" />
                          </button>
                          <button className="p-2 rounded-full hover:bg-gray-700">
                            <Download size={16} className="text-gray-400 hover:text-white" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-400">Mostrando 5 de 24 facturas</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-gray-800">
                  Anterior
                </button>
                <button className="px-3 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium">
                  1
                </button>
                <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-gray-800">
                  2
                </button>
                <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-gray-800">
                  3
                </button>
                <button className="px-3 py-1 rounded border border-gray-700 text-gray-400 hover:bg-gray-800">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
