import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ChevronLeft, ChevronRight, Info, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

interface OverlayProps {
  activeProject: Project | null;
  onProjectSelect: (p: Project | null) => void;
}

const Overlay: React.FC<OverlayProps> = ({ activeProject, onProjectSelect }) => {
  
  const handleNext = () => {
    if (!activeProject) {
      onProjectSelect(PROJECTS[0]);
    } else {
      const idx = PROJECTS.findIndex(p => p.id === activeProject.id);
      const nextIdx = (idx + 1) % PROJECTS.length;
      onProjectSelect(PROJECTS[nextIdx]);
    }
  };

  const handlePrev = () => {
    if (!activeProject) {
      onProjectSelect(PROJECTS[PROJECTS.length - 1]);
    } else {
      const idx = PROJECTS.findIndex(p => p.id === activeProject.id);
      const prevIdx = (idx - 1 + PROJECTS.length) % PROJECTS.length;
      onProjectSelect(PROJECTS[prevIdx]);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-start z-10 pointer-events-none">
        <div className="pointer-events-auto">
           <h1 className="text-3xl font-bold tracking-tighter text-white drop-shadow-lg">
             M4RCEL-LOL
             <span className="text-indigo-500">.</span>
           </h1>
           <p className="text-zinc-400 text-sm tracking-widest mt-1 uppercase">Digital Museum & Portfolio</p>
        </div>
        
        <div className="flex gap-4 pointer-events-auto">
            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full text-white transition-all">
                <Github size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full text-white transition-all">
                <ExternalLink size={20} />
            </a>
        </div>
      </div>

      {/* Navigation Controls (Always visible but subtle) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10 pointer-events-auto">
        <button 
          onClick={handlePrev}
          className="p-3 rounded-full bg-black/50 hover:bg-indigo-600/80 text-white backdrop-blur border border-white/10 transition-all hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
           onClick={() => onProjectSelect(null)}
           className="px-6 py-3 rounded-full bg-black/50 hover:bg-white/10 text-white backdrop-blur border border-white/10 font-medium text-sm tracking-wide uppercase transition-all"
        >
          {activeProject ? "Back to Hall" : "Overview"}
        </button>
        <button 
          onClick={handleNext}
          className="p-3 rounded-full bg-black/50 hover:bg-indigo-600/80 text-white backdrop-blur border border-white/10 transition-all hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Project Details Panel (Only when active) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed top-32 left-8 md:left-12 max-w-md z-10 pointer-events-none"
          >
            <div className="bg-black/60 backdrop-blur-xl border-l-2 border-indigo-500 p-8 pointer-events-auto rounded-r-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl font-black text-white/10">0{activeProject.id}</span>
                <span className="text-indigo-400 font-mono text-sm border border-indigo-500/30 px-2 py-1 rounded">
                  {activeProject.year}
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                {activeProject.title}
              </h2>
              
              <p className="text-zinc-300 leading-relaxed mb-6">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 text-zinc-300 text-xs rounded-full border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors group">
                View Source Code
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hint for interaction */}
      <AnimatePresence>
        {!activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 text-white/50 text-sm pointer-events-none"
          >
            Click a frame or use arrows to explore
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Overlay;