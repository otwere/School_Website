import React, { useState } from "react";
interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}
const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  return <div className="relative inline-block">
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {children}
      </div>
      {isVisible && <div className={`absolute ${positionClasses[position]} z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded-lg whitespace-nowrap opacity-0 transition-opacity duration-200 ${isVisible ? "opacity-100" : ""}`}>
          {content}
          <div className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${position === "top" ? "bottom-[-4px] left-1/2 -translate-x-1/2" : position === "bottom" ? "top-[-4px] left-1/2 -translate-x-1/2" : position === "left" ? "right-[-4px] top-1/2 -translate-y-1/2" : "left-[-4px] top-1/2 -translate-y-1/2"}`} />
        </div>}
    </div>;
};
export default Tooltip;