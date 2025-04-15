
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { Tooltip } from "@/components/Tooltip";
import { Link } from "react-router-dom";
import { Upload, FileUp, CheckCircle, Info, Download, ArrowRight } from "lucide-react";

const FactoringWireframe = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Simulating validation
      setTimeout(() => {
        // Sample data
        setInvoiceData({
          number: "FAC-2023-001",
          emissionDate: "2023-04-10",
          dueDate: "2023-06-10",
          client: "Grandes Empresas S.A.",
          amount: 5000000,
          status: "valid"
        });
        setStep(2);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="flex flex-1 pt-16">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Upload Invoice */}
            {step === 1 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h1 className="text-2xl font-bold mb-4">Anticipa el pago de tus facturas</h1>
                
                <div className="mb-6">
                  <Tooltip content="Sube tu factura electrónica en formato XML o PDF para validarla y obtener una oferta de anticipo inmediata.">
                    <span className="text-lg font-medium flex items-center">
                      Recibe liquidez inmediata anticipando el pago de tus clientes
                      <Info size={16} className="ml-1 text-gray-400" />
                    </span>
                  </Tooltip>
                  <p className="text-gray-600 mt-2">
                    Carga tu factura electrónica para comenzar el proceso de anticipo.
                  </p>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 mb-6">
                  <Upload size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="mb-4">Arrastra y suelta tu factura aquí o haz clic para seleccionarla</p>
                  <p className="text-sm text-gray-500 mb-4">Formatos aceptados: PDF, XML</p>
                  <label className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded cursor-pointer">
                    <span>Seleccionar factura</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.xml" 
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
                  <Info size={20} className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-blue-700 font-medium">¿Qué facturas puedo anticipar?</p>
                    <p className="text-blue-600 text-sm mt-1">
                      Puedes anticipar facturas emitidas a empresas medianas y grandes con buen historial crediticio.
                      La factura debe estar registrada en RADIAN y tener un plazo de pago entre 30 y 120 días.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Invoice Information */}
            {step === 2 && invoiceData && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h1 className="text-2xl font-bold mb-6">Información de la factura</h1>
                
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-center mb-6">
                  <CheckCircle size={20} className="text-green-500 mr-3" />
                  <p className="text-green-700">Tu factura ha sido validada correctamente y es elegible para anticipo.</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200 mb-6">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Vista previa de la factura</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Número de factura</p>
                        <p className="font-medium">{invoiceData.number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fecha de emisión</p>
                        <p className="font-medium">{invoiceData.emissionDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fecha de vencimiento</p>
                        <p className="font-medium">{invoiceData.dueDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Cliente</p>
                        <p className="font-medium">{invoiceData.client}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Monto total</p>
                        <p className="text-xl font-semibold text-gray-900">
                          ${invoiceData.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={() => setStep(1)} 
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={() => setStep(3)} 
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 flex items-center"
                  >
                    Solicitar anticipo
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Simulation */}
            {step === 3 && invoiceData && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h1 className="text-2xl font-bold mb-6">Simulación del anticipo</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-1">Recibirás</p>
                    <p className="text-2xl font-bold text-gray-900">
                      ${(invoiceData.amount * 0.9).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Monto anticipado (90% del valor de la factura)
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-500">Costo del servicio</p>
                      <Tooltip content="Calculamos el costo basado en el perfil de riesgo de tu cliente, el plazo de pago y el monto de la factura.">
                        <span className="text-xs text-blue-500">¿Cómo calculamos esto?</span>
                      </Tooltip>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      ${(invoiceData.amount * 0.03).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Tasa efectiva: 3.0% del valor de la factura
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6">
                  <h2 className="text-lg font-semibold mb-4">Información adicional</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                      <span className="text-sm">El monto restante (10%) será depositado cuando tu cliente pague la factura.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                      <span className="text-sm">El depósito se realizará en la cuenta bancaria registrada en tu perfil.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mt-1 mr-2" />
                      <span className="text-sm">Recibirás el pago en menos de 24 horas una vez aprobada la solicitud.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={() => setAcceptTerms(!acceptTerms)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      Acepto los <a href="#" className="text-blue-600 hover:underline">términos y condiciones</a> del servicio
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <Download size={16} className="text-blue-600 mr-2" />
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Descargar contrato de factoring
                    </a>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={() => setStep(2)} 
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Volver
                  </button>
                  <button 
                    onClick={() => setStep(4)} 
                    className={`px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 flex items-center ${!acceptTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!acceptTerms}
                  >
                    Aceptar y continuar
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                
                <h1 className="text-2xl font-bold mb-4">¡Solicitud enviada correctamente!</h1>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Tu solicitud de anticipo de factura ha sido recibida. Estamos procesando tu solicitud y te notificaremos por correo electrónico cuando sea aprobada.
                </p>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8 text-left">
                  <h2 className="text-lg font-semibold mb-4">Próximos pasos</h2>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
                        1
                      </span>
                      <div>
                        <p className="font-medium">Revisión de la solicitud</p>
                        <p className="text-sm text-gray-500">Nuestro equipo validará la información de tu factura (1-2 horas)</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
                        2
                      </span>
                      <div>
                        <p className="font-medium">Aprobación</p>
                        <p className="text-sm text-gray-500">Recibirás una notificación por correo electrónico al aprobar tu solicitud</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
                        3
                      </span>
                      <div>
                        <p className="font-medium">Transferencia de fondos</p>
                        <p className="text-sm text-gray-500">El dinero será depositado en tu cuenta bancaria en menos de 24 horas</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Link 
                    to="/dashboard" 
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Ir al dashboard
                  </Link>
                  <button 
                    onClick={() => setStep(1)} 
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                  >
                    Anticipar otra factura
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FactoringWireframe;
