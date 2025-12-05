import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="group relative bg-[#282A2F] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#000000]/40 flex flex-col h-full hover:-translate-y-1"
    >
      {/* State Layer Overlay (Hover effect) */}
      <div className="absolute inset-0 bg-[#A8C7FA] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none z-0" />

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#282A2F] to-transparent opacity-40" />
        
        {project.year && (
          <div className="absolute top-4 right-4 bg-[#111318]/60 backdrop-blur-md px-3 py-1 rounded-[8px] text-xs font-medium text-[#E2E2E9] tracking-wide border border-[#44474E]/30">
            {project.year}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-[22px] leading-tight font-normal text-[#E2E2E9] mb-2">
          {project.title}
        </h3>
        
        <p className="text-[#C4C6D0] text-sm leading-relaxed mb-6 flex-1 tracking-wide">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="px-3 py-1.5 bg-[#1E1F25] text-[#E2E2E9] text-xs font-medium rounded-[8px] border border-[#44474E]/50"
            >
              {t}
            </span>
          ))}
        </div>

        <a 
          href={project.link || "#"}
          target={project.link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#33353A] text-[#A8C7FA] hover:bg-[#3E4759] hover:text-[#D6E3FF] transition-colors font-medium text-sm"
        >
          View Project
          <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;