import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-amber-400">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-amber-300">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}