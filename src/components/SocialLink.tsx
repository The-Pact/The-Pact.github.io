import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export default function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      className="hover:text-amber-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}