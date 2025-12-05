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
      staggerChildren: 0.15
    }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111318] text-[#E2E2E9] selection:bg-[#004786] selection:text-[#D6E3FF] font-roboto">
      
      {/* Navbar (Top App Bar Style) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-40 bg-[#111318]/90 backdrop-blur-md border-b border-[#44474E]/30"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E1F25] flex items-center justify-center text-[#A8C7FA]">
               <Code2 size={20} />
            </div>
            <div className="text-xl font-normal tracking-tight text-[#E2E2E9]">
              marcel<span className="text-[#A8C7FA]">.</span>
            </div>
          </div>
          <div className="flex gap-2 text-sm font-medium text-[#C4C6D0]">
            <a href="#work" className="hover:text-[#E2E2E9] hover:bg-[#1E1F25] transition-all px-4 py-2 rounded-full">Work</a>
            <a href="#stack" className="hover:text-[#E2E2E9] hover:bg-[#1E1F25] transition-all px-4 py-2 rounded-full">Stack</a>
            <a href="#about" className="hover:text-[#E2E2E9] hover:bg-[#1E1F25] transition-all px-4 py-2 rounded-full">About</a>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1F25] border border-[#44474E] text-[#A8C7FA] text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#A8C7FA] animate-pulse"></span>
              Hello, I'm Marcel
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-normal tracking-tight mb-8 leading-[1.1] text-[#E2E2E9]">
              Full Stack<br />
              <span className="text-[#A8C7FA]">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#C4C6D0] max-w-2xl leading-relaxed mb-12 font-light">
              & Creative Coder from Poland. <br/>
              I like to create websites whenever I am bored. If you want you could check out my projects that are listed on my GitHub. Everything is down below.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="h-12 px-8 flex items-center justify-center bg-[#A8C7FA] text-[#00315F] rounded-full font-medium text-base hover:bg-[#D6E3FF] hover:shadow-lg transition-all"
              >
                View Projects
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="h-12 px-8 flex items-center justify-center bg-transparent border border-[#8E9099] text-[#A8C7FA] rounded-full font-medium text-base hover:bg-[#A8C7FA]/10 transition-all"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#111318]/50 via-transparent to-transparent z-10"></div>
                
                <img
                  src="https://github.com/m4rcel-lol.png"
                  alt="Marcel Profile"
                  className="w-full h-full object-cover rounded-[48px] opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                  }}
                />
             </div>
          </motion.div>
        </div>

        {/* Background Gradient Blob */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[#004786] opacity-10 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-24 px-6 bg-[#111318]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
               <span className="text-[#A8C7FA] text-sm font-medium tracking-wider uppercase mb-2 block">Portfolio</span>
               <h2 className="text-4xl md:text-[3.5rem] leading-none font-normal text-[#E2E2E9]">Featured Projects</h2>
            </div>
            <div className="hidden md:block h-[1px] bg-[#44474E] flex-1 ml-12 mb-4" />
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-24 px-6 bg-[#191C20] rounded-t-[48px] mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-normal mb-6 text-[#E2E2E9]"
            >
              Core Technology Stack
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#C4C6D0] text-lg max-w-2xl font-light"
            >
              My toolkit for building robust applications, from high-performance backend logic to responsive frontend architecture.
            </motion.p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Frontend */}
            <motion.div variants={fadeIn} className="p-8 bg-[#1E1F25] rounded-[24px] hover:bg-[#282A2F] transition-colors duration-300">
              <div className="w-12 h-12 bg-[#A8C7FA] rounded-[16px] flex items-center justify-center text-[#00315F] mb-6 shadow-lg shadow-[#000]/10">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-normal mb-6 text-[#E2E2E9]">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'HTML5', 'CSS3', 'React', 'Tailwind'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[#111318] text-[#C4C6D0] rounded-[8px] text-sm border border-[#44474E]">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={fadeIn} className="p-8 bg-[#1E1F25] rounded-[24px] hover:bg-[#282A2F] transition-colors duration-300">
              <div className="w-12 h-12 bg-[#DDBCE0] rounded-[16px] flex items-center justify-center text-[#3F2844] mb-6 shadow-lg shadow-[#000]/10">
                <Server size={24} />
              </div>
              <h3 className="text-2xl font-normal mb-6 text-[#E2E2E9]">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'MySQL', 'Node.js', 'System Design'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[#111318] text-[#C4C6D0] rounded-[8px] text-sm border border-[#44474E]">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeIn} className="p-8 bg-[#1E1F25] rounded-[24px] hover:bg-[#282A2F] transition-colors duration-300">
              <div className="w-12 h-12 bg-[#BEC6DC] rounded-[16px] flex items-center justify-center text-[#283141] mb-6 shadow-lg shadow-[#000]/10">
                <Terminal size={24} />
              </div>
              <h3 className="text-2xl font-normal mb-6 text-[#E2E2E9]">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Gemini API', 'VS Code'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-[#111318] text-[#C4C6D0] rounded-[8px] text-sm border border-[#44474E]">{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Games */}
      <section id="about" className="py-24 px-6 bg-[#111318]">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-4xl font-normal mb-6 text-[#E2E2E9]">About Me</h2>
            <div className="flex items-center gap-2 text-[#A8C7FA] mb-6">
              <MapPin size={20} />
              <span className="font-medium">Poland</span>
            </div>
            <p className="text-[#C4C6D0] text-lg leading-relaxed mb-6 font-light">
              I am a passionate developer focused on building scalable web applications and interactive experiences. My work typically bridges the gap between creative game modding and professional software engineering.
            </p>
            <p className="text-[#C4C6D0] text-lg leading-relaxed mb-8 font-light">
              Currently, I am exploring advanced system design patterns and developing high-performance applications.
            </p>
            
            <div className="p-8 bg-[#1E1F25] rounded-[24px]">
               <h4 className="text-sm font-medium text-[#A8C7FA] uppercase tracking-wider mb-6">Gaming Stack</h4>
               <div className="flex flex-wrap gap-3">
                 {['Roblox', 'Minecraft', 'Geometry Dash', 'Steam'].map((game) => (
                   <div key={game} className="flex items-center gap-2 px-4 py-2.5 bg-[#282A2F] rounded-[12px] text-[#E2E2E9] hover:bg-[#33353A] transition-colors">
                     <Gamepad2 size={18} />
                     <span className="text-sm font-medium">{game}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
             {/* Decorative element resembling a code editor or terminal */}
             <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full aspect-square md:aspect-[4/3] bg-[#191C20] rounded-[32px] border border-[#44474E] p-8 overflow-hidden relative shadow-2xl"
             >
                <div className="flex gap-3 mb-6">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#28C840]"></div>
                </div>
                <div className="font-mono text-sm md:text-base text-[#C4C6D0] space-y-3 leading-relaxed">
                  <p><span className="text-[#A8C7FA]">const</span> <span className="text-[#DDBCE0]">developer</span> = <span className="text-[#A8C7FA]">{'{'}</span></p>
                  <p className="pl-6">name: <span className="text-[#98E1A4]">'Marcel'</span>,</p>
                  <p className="pl-6">role: <span className="text-[#98E1A4]">'Creative Coder'</span>,</p>
                  <p className="pl-6">location: <span className="text-[#98E1A4]">'Poland'</span>,</p>
                  <p className="pl-6">passion: <span className="text-[#98E1A4]">'Building cool stuff'</span>,</p>
                  <p className="pl-6">languages: <span className="text-[#A8C7FA]">[</span><span className="text-[#98E1A4]">'TypeScript'</span>, <span className="text-[#98E1A4]">'Python'</span><span className="text-[#A8C7FA]">]</span></p>
                  <p><span className="text-[#A8C7FA]">{'}'}</span>;</p>
                  <p className="mt-8 text-[#5E5E5E] italic">// Todo: Play more games and sleep well :)</p>
                </div>
                
                {/* Abstract shape */}
                <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#A8C7FA] opacity-[0.07] rounded-full blur-3xl"></div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 bg-[#1E1F25] rounded-t-[48px]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-normal mb-3 text-[#E2E2E9]">Let's Connect.</h3>
            <p className="text-[#C4C6D0]">Reach out on GitHub or Email.</p>
          </div>
          
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/m4rcel-lol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-[#282A2F] rounded-full text-[#E2E2E9] hover:bg-[#33353A] hover:text-[#A8C7FA] transition-colors shadow-lg"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:m5r@kitties.email" 
              className="p-4 bg-[#282A2F] rounded-full text-[#E2E2E9] hover:bg-[#33353A] hover:text-[#A8C7FA] transition-colors shadow-lg"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
        <div className="max-w-7xl mx-auto mt-16 text-center text-sm text-[#8E9099] font-medium tracking-wide">
          © 2024 Marcel. Crafted with code from Poland 🇵🇱.
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatGuide />
    </div>
  );
};

export default App;