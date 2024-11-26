import React from 'react';
import { Terminal, Palette, Music, MapPin, Code, Cpu, Globe, Sparkles } from 'lucide-react';
import SkillCard from './SkillCard';
import ServiceCard from './ServiceCard';
import LanguageCard from './LanguageCard';

export default function About() {
  const skills = [
    {
      icon: <Terminal size={24} />,
      title: "Software Engineer",
      description: "Full-stack development & system architecture"
    },
    {
      icon: <Palette size={24} />,
      title: "Graphic Designer",
      description: "UI/UX design & brand identity"
    },
    {
      icon: <Music size={24} />,
      title: "Producer",
      description: "Electronic music & sound design"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      description: "Western Australia"
    }
  ];

  const languages = [
    {
      name: "English",
      level: "Advanced",
      flag: "https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sinhalese",
      level: "Advanced",
      flag: "https://images.unsplash.com/photo-1624042769685-d5ca6855768d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Japanese",
      level: "Basic",
      flag: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const technologies = [
    "JavaScript/TypeScript", "React", "Node.js", "Python",
    "Java", "C++", "SQL", "MongoDB"
  ];

  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
              <div className="bg-gradient-to-br from-amber-900/10 to-black p-6 rounded-lg border border-amber-900/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate technologist with a deep love for creating innovative digital experiences. Currently pursuing Software Engineering & Computer Science, I blend technical expertise with creative design thinking.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As an open-source advocate, I believe in the power of collaborative development and knowledge sharing. My work spans from full-stack development to creative multimedia projects.
                </p>
                <div className="bg-amber-400/10 p-4 rounded-lg">
                  <p className="text-amber-300 font-medium">
                    "Technology is best when it brings people together." - Always open to exciting collaborations!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Languages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <LanguageCard key={index} {...language} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient">What I Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                icon={<Code />}
                title="Development"
                description="Creating robust and scalable applications with modern technologies"
              />
              <ServiceCard 
                icon={<Cpu />}
                title="System Design"
                description="Architecting efficient and maintainable software solutions"
              />
              <ServiceCard 
                icon={<Globe />}
                title="Web Solutions"
                description="Building responsive and dynamic web applications"
              />
              <ServiceCard 
                icon={<Sparkles />}
                title="Creative Work"
                description="Combining design and technology for unique experiences"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-amber-900/20 to-amber-900/10 rounded-full
                           border border-amber-900/20 text-amber-300 hover:border-amber-400/50 
                           transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}