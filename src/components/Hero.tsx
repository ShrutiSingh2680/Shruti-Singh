import { motion } from 'motion/react';
import { ExternalLink, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col md:grid md:grid-cols-2 geometric-border overflow-hidden">
      <div className="p-8 md:p-16 pt-32 md:pt-40 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#0F172A] bg-[#FDFCFB] relative z-20">
        <div>
          <div className="text-[10px] uppercase font-black tracking-[0.4em] text-[#C2410C] mb-12 flex items-center">
            <span className="w-12 h-[1px] bg-[#C2410C] mr-4" />
            Senior Product Manager
          </div>
          <div className="flex flex-col mb-8 relative">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-7xl md:text-9xl font-serif leading-[0.8] text-[#0F172A] tracking-tighter relative z-10"
            >
              Shruti<br />Singh
            </motion.h1>
            
            {/* Handwritten Sparkle */}
            <div className="absolute -top-10 left-[60%] opacity-40 select-none pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2V38M2 20H38M32.5 7.5L7.5 32.5M32.5 32.5L7.5 7.5" stroke="#C2410C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-xl md:text-2xl text-[#475569] font-medium leading-tight max-w-sm">
              Building 0→1 products. Simplifying complexity. Driving impact through <span className="scribble-underline text-[#064E3B]">creativity</span>.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[#FDE68A]/30 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#C2410C] rounded-full" />
              </div>
              <p className="text-sm font-hand text-[#C2410C] leading-relaxed max-w-xs">
                Helping teams break down complex challenges into actionable solutions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 group cursor-pointer relative z-30">
          <a 
            href="/resume.pdf"
            download="Shruti_Singh_Resume.pdf"
            className="inline-flex items-center space-x-4 border-b-2 border-[#0F172A] pb-2 font-black text-xs uppercase tracking-widest text-[#0F172A] hover:text-[#C2410C] hover:border-[#C2410C] transition-all group pointer-events-auto"
          >
            <FileText size={14} className="group-hover:rotate-12 transition-transform shrink-0" />
            <span>Download Resume</span>
            <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
          </a>
        </div>
      </div>

      <div className="relative p-8 md:p-16 flex flex-col justify-center items-center bg-white overflow-hidden">
        {/* Decorative Background for Image */}
        <motion.div 
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[120%] h-[120%] bg-[#FDE68A]/20 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] blur-3xl pointer-events-none"
        />
        
        <div className="relative z-10 w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="aspect-[3/4] rounded-[40px] border-2 border-[#0F172A] overflow-hidden bg-zinc-100 shadow-2xl group transition-all duration-500 hover:scale-[1.02]"
          >
            <img 
              src="/profile.png" 
              alt="Shruti Singh" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-[#064E3B]/5 mix-blend-multiply pointer-events-none" />
          </motion.div>
          
          {/* Floating Personal Badge */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -right-6 bg-[#FDE68A] border-2 border-[#0F172A] px-6 py-4 rounded-3xl shadow-xl z-20 flex flex-col items-center rotate-[-5deg] hover:rotate-0 transition-transform cursor-default"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A] opacity-60">Bengaluru, IN</span>
            <span className="text-xl font-serif italic text-[#C2410C]">Shruti Singh</span>
          </motion.div>
          
          {/* Scribble indicator */}
          <div className="absolute -top-12 -left-12 w-24 h-24 text-[#C2410C] opacity-30 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
