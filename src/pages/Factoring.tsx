
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { Tooltip } from "@/components/Tooltip";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileUp, CheckCircle, XCircle, AlertCircle, Download, Info } from "lucide-react";

const Factoring = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Simulando validación
      setTimeout(() => {
        // Datos de ejemplo
        setInvoiceData({
          number: "FAC-2025-001",
          emissionDate: "2025-04-10",
          dueDate: "2025-06-10",
          client: "Grandes Empresas S.A.",
          amount: 5000000,
          status: "valid"
        });
        
        toast({
          title: "Factura validada con éxito",
          description: "Tu factura ha sido verificada correctamente.",
          variant: "default",
        });
        
        setStep(2);
      }, 1500);
    }
  };

  const handleRequestAdvance = () => {
    setStep(3);
  };

  const handleAcceptOffer = () => {
    if (!acceptTerms) {
      toast({
        title: "Error en la solicitud",
        description: "Debes aceptar los términos y condiciones para continuar.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulando el envío de la solicitud
    toast({
      title: "Solicitud enviada",
      description: "Te notificaremos pronto sobre el resultado.",
      variant: "default",
    });
    
    setTimeout(() => {
      setStep(4);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <div className="flex flex-1 pt-16">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <div className="card-dark">
                <h1 className="title-lg mb-6">Anticipa el pago de tus facturas</h1>
                
                <div className="mb-6">
                  <Tooltip content="Sube tu factura electrónica en formato XML o PDF para validarla y obtener una oferta de anticipo inmediata.">
                    <span className="text-lg font-medium">
                      Recibe liquidez inmediata anticipando el pago de tus clientes
                    </span>
                  </Tooltip>
                  <p className="text-gray-400 mt-2">
                    Carga tu factura electrónica para comenzar el proceso de anticipo. Verificaremos su validez en tiempo real.
                  </p>
                </div>
                
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center bg-gray-800/50 mb-6">
                  <Upload size={48} className="mx-auto mb-4 text-brand-primary" />
                  <p className="mb-4">Arrastra y suelta tu factura aquí o haz clic para seleccionarla</p>
                  <p className="text-sm text-gray-400 mb-4">Formatos aceptados: PDF, XML</p>
                  <label className="btn-primary cursor-pointer">
                    <span>Seleccionar factura</span>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.xml" 
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 flex items-start">
                  <Info size={20} className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-blue-300 font-medium">¿Qué facturas puedo anticipar?</p>
                    <p className="text-blue-200/80 text-sm mt-1">
                      Puedes anticipar facturas emitidas a empresas medianas y grandes con buen historial crediticio. 
                      La factura debe estar registrada en RADIAN y tener un plazo de pago entre 30 y 120 días.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {step === 2 && invoiceData && (
              <div className="card-dark">
                <h1 className="title-lg mb-6">Información de la factura</h1>
                
                <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4 flex items-center mb-6">
                  <CheckCircle size={20} className="text-green-400 mr-3" />
                  <p className="text-green-300">Tu factura ha sido validada correctamente y es elegible para anticipo.</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg border border-gray-700 mb-6">
                  <div className="px-6 py-4 border-b border-gray-700">
                    <h2 className="title-sm">Vista previa de la factura</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Número de factura</p>
                        <p className="font-medium">{invoiceData.number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Fecha de emisión</p>
                        <p className="font-medium">{invoiceData.emissionDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Fecha de vencimiento</p>
                        <p className="font-medium">{invoiceData.dueDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Cliente</p>
                        <p className="font-medium">{invoiceData.client}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-400">Monto total</p>
                        <p className="text-xl font-semibold text-brand-primary">
                          ${invoiceData.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={() => setStep(1)} 
                    className="btn-secondary"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleRequestAdvance} 
                    className="btn-primary"
                  >
                    Solicitar anticipo
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && invoiceData && (
              <div className="card-dark">
                <h1 className="title-lg mb-6">Simulación del anticipo</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="card-stat">
                    <p className="text-sm text-gray-400 mb-1">Recibirás</p>
                    <p className="text-2xl font-bold text-brand-primary">
                      ${(invoiceData.amount * 0.9).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Monto anticipado (90% del valor de la factura)
                    </p>
                  </div>
                  
                  <div className="card-stat">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-400">Costo del servicio</p>
                      <Tooltip content="Calculamos el costo basado en el perfil de riesgo de tu cliente, el plazo de pago y el monto de la factura.">
                        <span className="text-xs text-brand-primary">¿Cómo calculamos esto?</span>
                      </Tooltip>
                    </div>
                    <p className="text-2xl font-bold text-white">
                      ${(invoiceData.amount * 0.03).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Tasa efectiva: 3.0% del valor de la factura
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-8">
                  <h2 className="title-sm mb-4">Información adicional</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-brand-primary mt-1 mr-2" />
                      <span className="text-sm">El monto restante (10%) será depositado cuando tu cliente pague la factura.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-brand-primary mt-1 mr-2" />
                      <span className="text-sm">El depósito se realizará en la cuenta bancaria registrada en tu perfil.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-brand-primary mt-1 mr-2" />
                      <span className="text-sm">Recibirás el pago en menos de 24 horas una vez aprobada la solicitud.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={() => setAcceptTerms(!acceptTerms)}
                      className="w-5 h-5 rounded border-gray-600 bg-gray-700 text-brand-primary focus:ring-brand-primary focus:ring-opacity-25"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm">
                      Acepto los <a href="#" className="text-brand-primary hover:underline">términos y condiciones</a> del servicio
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <Download size={16} className="text-brand-primary mr-2" />
                    <a href="#" className="text-sm text-brand-primary hover:underline">
                      Descargar contrato de factoring
                    </a>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={() => setStep(2)} 
                    className="btn-secondary"
                  >
                    Volver
                  </button>
                  <button 
                    onClick={handleAcceptOffer} 
                    className={`btn-primary ${!acceptTerms ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={!acceptTerms}
                  >
                    Aceptar y continuar
                  </button>
                </div>
              </div>
            )}
            
            {step === 4 && (
              <div className="card-dark text-center">
                <div className="w-20 h-20 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-brand-primary" />
                </div>
                
                <h1 className="title-lg mb-4">¡Solicitud enviada correctamente!</h1>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                  Tu solicitud de anticipo de factura ha sido recibida. Estamos procesando tu solicitud y te notificaremos por correo electrónico cuando sea aprobada.
                </p>
                
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-8 text-left">
                  <h2 className="title-sm mb-4">Próximos pasos</h2>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-medium mr-3">
                        1
                      </span>
                      <div>
                        <p className="font-medium">Revisión de la solicitud</p>
                        <p className="text-sm text-gray-400">Nuestro equipo validará la información de tu factura (1-2 horas)</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-medium mr-3">
                        2
                      </span>
                      <div>
                        <p className="font-medium">Aprobación</p>
                        <p className="text-sm text-gray-400">Recibirás una notificación por correo electrónico al aprobar tu solicitud</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-medium mr-3">
                        3
                      </span>
                      <div>
                        <p className="font-medium">Transferencia de fondos</p>
                        <p className="text-sm text-gray-400">El dinero será depositado en tu cuenta bancaria en menos de 24 horas</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => window.location.href = "/dashboard"} 
                    className="btn-secondary"
                  >
                    Ir al dashboard
                  </button>
                  <button 
                    onClick={() => setStep(1)} 
                    className="btn-primary"
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

export default Factoring;
