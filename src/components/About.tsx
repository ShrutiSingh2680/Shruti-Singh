import { motion } from 'motion/react';
import { Pencil, Box, Zap, GraduationCap } from 'lucide-react';

export default function About() {
  const traits = [
    { icon: <Pencil size={20} />, title: "Creative Thinker", desc: "Approaching product problems with a designer's eye and a builder's heart." },
    { icon: <Zap size={20} />, title: "Problem Breaker", desc: "Simplifying complex, monolithic systems into elegant, actionable solutions." },
    { icon: <Box size={20} />, title: "Builder Mindset", desc: "Obsessed with the 0→1 journey—from messy ideation to structured launch." }
  ];

  return (
    <section id="about" className="bg-[#FDFCFB] geometric-border md:grid md:grid-cols-2 relative overflow-hidden">
      <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#0F172A] flex flex-col justify-between">
        <div>
          <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#C2410C] mb-12 flex items-center">
            About Me
            <span className="w-12 h-[1px] bg-[#C2410C] ml-4" />
          </h2>
          <div className="space-y-6">
            <h3 className="text-4xl font-serif italic text-[#0F172A] leading-tight">
              A Senior PM who thrives at the <span className="scribble-underline text-[#064E3B]">intersection</span> of creativity and technical feasibility.
            </h3>
            <p className="text-[#475569] leading-relaxed font-medium">
              I'm a Senior Product Manager with 5+ years of experience building and scaling products from 0→1. I thrive at the intersection of creativity and problem-solving—breaking down complex challenges into actionable solutions.
            </p>
            <p className="text-[#475569] leading-relaxed font-medium">
              Passionate about building impactful tools, I've led products from ideation to launch across the media and advertising industry, specifically focused on the US TV market and automation.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E2E8F0] flex items-start space-x-4">
          <div className="p-3 bg-[#FDE68A] rounded-xl text-[#0F172A]">
            <GraduationCap size={24} />
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-1">Education</div>
            <div className="font-bold text-[#0F172A]">B.Tech in Computer Science</div>
            <div className="text-sm text-[#475569]">CMR Institute of Technology, Bengaluru</div>
            <div className="text-xs font-hand text-[#C2410C] mt-1">Class of 2021</div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-16 bg-white space-y-12">
        <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#64748B]">Personal Traits</h2>
        <div className="grid grid-cols-1 gap-8">
          {traits.map((trait, index) => (
            <motion.div 
              key={trait.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-6 group"
            >
              <div className="p-4 bg-[#FDFCFB] border border-[#E2E8F0] rounded-2xl text-[#0F172A] group-hover:bg-[#FDE68A] group-hover:border-[#FDE68A] transition-all duration-300">
                {trait.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">{trait.title}</h4>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">{trait.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-[#064E3B] text-[#FDFCFB] rounded-3xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">Currently Exploring</div>
            <div className="text-2xl font-serif italic mb-2">AI + Product Strategy</div>
            <p className="text-sm opacity-80 leading-relaxed">Investigating how generative models can optimize creative production workflows in AdTech.</p>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
}
