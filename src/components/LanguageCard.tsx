import React from 'react';

interface LanguageCardProps {
  name: string;
  level: string;
  flag: string;
}

export default function LanguageCard({ name, level, flag }: LanguageCardProps) {
  return (
    <div className="glass-effect p-6 rounded-lg hover-lift group">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/20">
          <img 
            src={flag} 
            alt={`${name} flag`}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-amber-300">{name}</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <span className="text-gray-400 text-sm">{level}</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-black/50 rounded-full h-2">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
          style={{ 
            width: level === 'Advanced' ? '90%' : '40%',
            transition: 'width 1s ease-out'
          }}
        ></div>
      </div>
    </div>
  );
}