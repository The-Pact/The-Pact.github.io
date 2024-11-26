import React, { useEffect, useRef } from 'react';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  location: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  delay: number;
}

function ExperienceItem({ company, location, role, description, startDate, endDate, delay }: ExperienceItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="reveal border-l-2 border-amber-900/20 pl-6 pb-8 last:pb-0 relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-400 rounded-full animate-glow"></div>
      <div className="glass-effect p-6 rounded-lg hover-lift">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-semibold text-amber-300">{role}</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={16} />
            <span>{startDate} - {endDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-amber-400/80 mb-3">
          <Building2 size={16} />
          <span>{company}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400">{location}</span>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "Github",
      location: "Greater New York",
      role: "Developer",
      description: "A software developer's work combines creativity, problem-solving, and technical skills to create functional and user-friendly software solutions that meet the needs of users and businesses alike. Their contributions are integral to the modern digital landscape, enabling the development of innovative and impactful applications across various industries.",
      startDate: "July 2020",
      endDate: "Present"
    },
    {
      company: "DistroKid",
      location: "Greater New York",
      role: "Music Producer",
      description: "A music producer is a creative professional who plays a pivotal role in the creation and development of music recordings. Producers are responsible for overseeing various aspects of the music production process, from the initial concept to the final release of a song or album. Their goal is to guide and shape the artistic vision of a musical project while ensuring its technical and commercial success.",
      startDate: "May 2022",
      endDate: "Present"
    },
    {
      company: "Jartex Network",
      location: "Greater New York",
      role: "Server Administrator",
      description: "A server administrator, also known as a system administrator or IT administrator, is a professional responsible for the management, configuration, and maintenance of computer servers and the underlying systems and networks that support them. Server administrators play a critical role in ensuring the reliability, security, and optimal performance of servers that host various applications, services, and data within an organization.",
      startDate: "February 2021",
      endDate: "November 2022"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index} 
                {...exp} 
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}