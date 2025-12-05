import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Mail, Gamepad2, Code2, Server, Terminal, MapPin } from 'lucide-react';
import ChatGuide from './components/ChatGuide';
import ProjectCard from './components/ProjectCard';
import { PROJECTS } from './constants';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131314] text-[#E3E3E3] selection:bg-[#A8C7FA] selection:text-[#001D35]">
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-40 bg-[#131314]/80 backdrop-blur-xl border-b border-[#444746]"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-[#A8C7FA]/10 rounded-lg text-[#A8C7FA]">
               <Code2 size={24} />
            </div>
            <div className="text-xl font-medium tracking-tight">
              marcel<span className="text-[#A8C7FA]">.</span>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-medium text-[#C4C7C5]">
            <a href="#work" className="hover:text-[#E3E3E3] transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">Work</a>
            <a href="#stack" className="hover:text-[#E3E3E3] transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">Stack</a>
            <a href="#about" className="hover:text-[#E3E3E3] transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">About</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1F20] border border-[#444746] text-[#A8C7FA] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#A8C7FA] animate-pulse"></span>
              Hello, I'm Marcel
            </div>
            
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
              Full Stack<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8C7FA] via-[#D3E3FD] to-[#E8DEF8]">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#C4C7C5] max-w-2xl leading-relaxed mb-12">
              & Creative Coder. Based in Poland 🇵🇱. <br/>
              Building scalable web applications and interactive experiences that bridge the gap between game modding and engineering.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="px-8 py-4 bg-[#A8C7FA] text-[#001D35] rounded-full font-medium text-lg hover:bg-[#8AB4F8] transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-transparent border border-[#444746] text-[#E3E3E3] rounded-full font-medium text-lg hover:bg-[#303030] transition-colors"
              >
                Connect
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Fading Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative w-[400px] h-[400px] ml-auto">
                {/* Gradient Masks for fading effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#131314]/50 via-transparent to-transparent z-10"></div>
                
                <img
                  src="https://github.com/m4rcel-lol.png"
                  alt="Marcel Profile"
                  className="w-full h-full object-cover rounded-3xl opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                  }}
                />
             </div>
          </motion.div>
        </div>

        {/* Background Gradient Blob */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-[#A8C7FA] opacity-5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-24 px-6 bg-[#131314]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-[#E3E3E3]">Featured Projects</h2>
            <div className="hidden md:block h-[1px] bg-[#444746] flex-1 ml-12 mb-4" />
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-24 px-6 bg-[#1E1F20]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-medium mb-6"
            >
              Core Technology Stack
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#C4C7C5] max-w-2xl"
            >
              My toolkit for building robust applications, from high-performance backend logic to responsive frontend architecture.
            </motion.p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Frontend */}
            <motion.div variants={fadeIn} className="p-8 bg-[#131314] rounded-3xl border border-[#444746] hover:border-[#A8C7FA]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#A8C7FA]/10 rounded-2xl flex items-center justify-center text-[#A8C7FA] mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-medium mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'HTML5', 'CSS3', 'React', 'Tailwind'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[#1E1F20] text-[#C4C7C5] rounded-lg text-sm border border-[#444746]">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={fadeIn} className="p-8 bg-[#131314] rounded-3xl border border-[#444746] hover:border-[#E8DEF8]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#E8DEF8]/10 rounded-2xl flex items-center justify-center text-[#E8DEF8] mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-medium mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'MySQL', 'Node.js', 'System Design'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[#1E1F20] text-[#C4C7C5] rounded-lg text-sm border border-[#444746]">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeIn} className="p-8 bg-[#131314] rounded-3xl border border-[#444746] hover:border-[#A8C7FA]/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#A8C7FA]/10 rounded-2xl flex items-center justify-center text-[#A8C7FA] mb-6">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-medium mb-4">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Gemini API', 'VS Code'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[#1E1F20] text-[#C4C7C5] rounded-lg text-sm border border-[#444746]">{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Games */}
      <section id="about" className="py-24 px-6 bg-[#131314]">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-4xl font-medium mb-6">About Me</h2>
            <div className="flex items-center gap-2 text-[#A8C7FA] mb-6">
              <MapPin size={20} />
              <span className="font-medium">Poland</span>
            </div>
            <p className="text-[#C4C7C5] text-lg leading-relaxed mb-6">
              I am a passionate developer focused on building scalable web applications and interactive experiences. My work typically bridges the gap between creative game modding and professional software engineering.
            </p>
            <p className="text-[#C4C7C5] text-lg leading-relaxed mb-8">
              Currently, I am exploring advanced system design patterns and developing high-performance applications.
            </p>
            
            <div className="p-6 bg-[#1E1F20] rounded-2xl border border-[#444746]">
               <h4 className="text-sm font-medium text-[#E3E3E3] uppercase tracking-wider mb-4">Gaming Stack</h4>
               <div className="flex flex-wrap gap-3">
                 {['Roblox', 'Minecraft', 'Geometry Dash', 'Steam'].map((game) => (
                   <div key={game} className="flex items-center gap-2 px-4 py-2 bg-[#131314] rounded-lg border border-[#444746] text-[#C4C7C5] hover:bg-[#303030] transition-colors">
                     <Gamepad2 size={16} />
                     <span className="text-sm">{game}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
          
          <div className="relative">
             {/* Decorative element resembling a code editor or terminal */}
             <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full aspect-square md:aspect-[4/3] bg-[#1E1F20] rounded-3xl border border-[#444746] p-6 overflow-hidden relative"
             >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                </div>
                <div className="font-mono text-sm text-[#C4C7C5] space-y-2">
                  <p><span className="text-[#A8C7FA]">const</span> <span className="text-[#E8DEF8]">developer</span> = <span className="text-[#A8C7FA]">{'{'}</span></p>
                  <p className="pl-4">name: <span className="text-[#98E1A4]">'Marcel'</span>,</p>
                  <p className="pl-4">role: <span className="text-[#98E1A4]">'Creative Coder'</span>,</p>
                  <p className="pl-4">location: <span className="text-[#98E1A4]">'Poland'</span>,</p>
                  <p className="pl-4">passion: <span className="text-[#98E1A4]">'Building cool stuff'</span>,</p>
                  <p className="pl-4">languages: <span className="text-[#A8C7FA]">[</span><span className="text-[#98E1A4]">'TypeScript'</span>, <span className="text-[#98E1A4]">'Python'</span><span className="text-[#A8C7FA]">]</span></p>
                  <p><span className="text-[#A8C7FA]">{'}'}</span>;</p>
                  <p className="mt-4 text-[#5E5E5E]">// Todo: Drink more coffee</p>
                </div>
                
                {/* Abstract shape */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#A8C7FA] to-transparent opacity-10 rounded-full blur-3xl"></div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 border-t border-[#444746] bg-[#131314]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-medium mb-2">Let's Connect.</h3>
            <p className="text-[#C4C7C5]">Reach out on GitHub or Email.</p>
          </div>
          
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/m4rcel-lol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-[#1E1F20] rounded-full text-[#E3E3E3] hover:bg-[#303030] hover:text-[#A8C7FA] transition-colors border border-[#444746]"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:m5r@kitties.email" 
              className="p-3 bg-[#1E1F20] rounded-full text-[#E3E3E3] hover:bg-[#303030] hover:text-[#A8C7FA] transition-colors border border-[#444746]"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
        <div className="max-w-7xl mx-auto mt-12 text-center text-sm text-[#5E5E5E]">
          © 2024 Marcel. Crafted with code from Poland 🇵🇱.
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatGuide />
    </div>
  );
};

export default App;