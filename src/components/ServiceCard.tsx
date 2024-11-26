import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 glass-effect rounded-lg hover-lift group cursor-pointer">
      <div className="text-amber-400 mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-amber-300 mb-2 transition-colors group-hover:text-gradient">
        {title}
      </h3>
      <p className="text-gray-400 text-sm transition-colors group-hover:text-gray-300">
        {description}
      </p>
    </div>
  );
}