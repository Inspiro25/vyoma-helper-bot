
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, className, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group p-6 rounded-2xl transition-all duration-300 neomorph hover:shadow-lg",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
