
import { ReactNode, useState } from "react";
import { Info } from "lucide-react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export const Tooltip = ({ content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="inline-flex items-center cursor-help"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        <Info size={16} className="ml-1 text-brand-primary" />
      </div>
      
      {isVisible && (
        <div className="absolute z-50 w-64 p-3 mt-2 -translate-x-1/2 transform left-1/2 text-sm bg-gray-800 rounded-md shadow-lg border border-gray-700 text-white">
          {content}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-gray-800 border-t border-l border-gray-700"></div>
        </div>
      )}
    </div>
  );
};
