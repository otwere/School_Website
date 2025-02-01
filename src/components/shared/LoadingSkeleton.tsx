import React from "react";
interface SkeletonProps {
  className?: string;
  animate?: boolean;
}
const LoadingSkeleton: React.FC<SkeletonProps> = ({
  className = "",
  animate = true
}) => {
  return <div className={`bg-gray-200 rounded-lg ${animate ? "animate-pulse" : ""} ${className}`} />;
};
export default LoadingSkeleton;