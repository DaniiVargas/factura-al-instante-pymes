
import { ReactNode } from "react";

interface StatusBadgeProps {
  status: "pending" | "approved" | "rejected" | "processing" | "paid";
  children?: ReactNode;
}

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "approved":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "rejected":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "processing":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "paid":
        return "bg-brand-primary/20 text-brand-primary border-brand-primary/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "pending":
        return "Pendiente";
      case "approved":
        return "Aprobado";
      case "rejected":
        return "Rechazado";
      case "processing":
        return "En proceso";
      case "paid":
        return "Pagado";
      default:
        return status;
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles()}`}>
      {children || getStatusLabel()}
    </span>
  );
};
