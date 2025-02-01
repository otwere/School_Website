import React from "react";
import { Sparkles, Star } from "lucide-react";
interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "colored" | "white";
}
const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  className = "",
  variant = "light"
}) => {
  const getBgClass = () => {
    switch (variant) {
      case "colored":
        return "bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50";
      case "white":
        return "bg-gradient-to-b from-gray-50 to-white";
      default:
        return "bg-gradient-to-b from-gray-50 to-white";
    }
  };
  return <section className={`py-20 relative overflow-hidden ${getBgClass()} ${className}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-100 rounded-full -top-20 -left-20 opacity-20"></div>
        <div className="absolute w-96 h-96 bg-pink-100 rounded-full -bottom-32 -right-32 opacity-20"></div>
        <div className="absolute top-1/4 left-10 transform -rotate-12">
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-30" />
        </div>
        <div className="absolute bottom-1/4 right-10 transform rotate-12">
          <Star className="w-8 h-8 text-purple-400 opacity-30" />
        </div>
        <div className="absolute top-1/2 right-1/4 transform rotate-45">
          <Sparkles className="w-6 h-6 text-blue-400 opacity-20" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 transform -rotate-45">
          <Star className="w-6 h-6 text-pink-400 opacity-20" />
        </div>
      </div>
      {/* Content */}
      <div className="relative">{children}</div>
    </section>;
};
export default BackgroundWrapper;