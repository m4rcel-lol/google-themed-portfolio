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
      className="group relative bg-[#1E1F20] rounded-[32px] overflow-hidden border border-[#444746] hover:border-[#A8C7FA] transition-colors duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F20] to-transparent opacity-60" />
        
        {project.year && (
          <div className="absolute top-4 right-4 bg-[#131314]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#E3E3E3] border border-[#444746]">
            {project.year}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold text-[#E3E3E3] mb-3 group-hover:text-[#A8C7FA] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-[#C4C7C5] leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="px-3 py-1 bg-[#303030] text-[#E3E3E3] text-sm rounded-lg border border-[#444746]"
            >
              {t}
            </span>
          ))}
        </div>

        <a 
          href={project.link || "#"}
          target={project.link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#A8C7FA] hover:text-[#D3E3FD] font-medium text-sm mt-auto group/link"
        >
          View Project
          <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;