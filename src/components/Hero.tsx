import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import SocialLink from './SocialLink';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_65%)]"></div>
      <img 
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"
        alt="Tech Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <div className="relative inline-block">
              <div className="absolute inset-0 animate-glow rounded-full"></div>
              <img 
                src="https://aurum490.github.io/img/demos/resume/about-me/2.gif"
                alt="Aurum Logo"
                className="w-32 h-32 mx-auto rounded-full border-2 border-amber-400/50 relative z-10"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Aurum</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-amber-200/80 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Graphic Designer · Programmer · Producer
          </p>
          <p className="text-lg mb-8 text-gray-400 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Crafting digital experiences through code and creativity
          </p>
          <div className="flex items-center justify-center gap-8 text-amber-400 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SocialLink href="https://github.com/Aurum490" icon={<Github size={24} />} />
            <SocialLink href="https://linkedin.com/in/aurum" icon={<Linkedin size={24} />} />
            <SocialLink href="mailto:contact@aurum.dev" icon={<Mail size={24} />} />
          </div>
          <div className="animate-bounce text-amber-400/50">
            <ArrowDown size={24} className="mx-auto" />
          </div>
        </div>
      </div>
    </header>
  );
}