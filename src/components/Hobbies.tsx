import { motion } from 'motion/react';
import { BookOpen, Palette } from 'lucide-react';

import { Link } from 'react-router-dom';

const hobbies = [
  {
    title: 'The Library',
    details: 'Currently diving into vintage Sci-Fi and Hegelian philosophy. There is something about physical books that digital products can\'t replicate.',
    icon: <BookOpen className="text-zinc-300" />,
    color: 'bg-[#064E3B]',
    link: 'https://www.goodreads.com/theblackbox',
    isExternal: true
  },
  {
    title: 'Canvas & Color',
    details: 'Oil painting is my meditative escape. I love exploring abstract textures and how light interacts with raw pigment.',
    icon: <Palette className="text-zinc-300" />,
    color: 'bg-[#C2410C]',
    link: '/paintings',
    isExternal: false
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-[#0F172A] text-[#FDFCFB] geometric-border md:grid md:grid-cols-2 overflow-hidden scroll-mt-32">
      <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#FDFCFB]/10 relative">
        <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#FDE68A] mb-12 flex items-center">
          The Human Component
          <span className="w-12 h-[1px] bg-[#FDE68A] ml-4" />
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full min-h-[400px]">
          {hobbies.map((hobby, index) => {
            const isInternal = hobby.link && !hobby.isExternal;
            const Wrapper = isInternal ? Link : (hobby.link ? "a" : "div");
            const extraProps: any = hobby.link ? (hobby.isExternal ? {
              href: hobby.link,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {
              to: hobby.link
            }) : {};

            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`group relative border border-[#FDFCFB]/10 p-8 flex flex-col justify-between overflow-hidden cursor-pointer ${hobby.color}`}
              >
                <Wrapper {...extraProps} className="absolute inset-0 z-20" />
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                
                <div className="text-white/40 group-hover:text-white transition-colors relative z-10">
                  {hobby.icon}
                </div>

                <div className="relative z-10 mt-12">
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1 italic">
                    {hobby.title === 'The Library' ? 'On the Shelf' : 'On the Easel'}
                  </div>
                  <div className="text-2xl md:text-3xl font-serif leading-tight text-white mb-4">{hobby.title}</div>
                  <p className="text-sm text-white/70 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {hobby.details}
                  </p>
                  {hobby.link && (
                    <div className="mt-4 text-[8px] uppercase font-black tracking-widest text-[#FDE68A] opacity-0 group-hover:opacity-100 transition-opacity">
                      View {hobby.isExternal ? 'Profile' : 'Gallery'} →
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>


      <div className="p-8 md:p-16 flex flex-col justify-center bg-[#FDFCFB] text-[#0F172A] relative">
        <div className="max-w-sm relative z-10">
          <h3 className="text-5xl font-serif italic mb-8 leading-[0.9] tracking-tighter">
            Curiosity is the <span className="scribble-underline text-[#064E3B]">primary engine</span> of product innovation.
          </h3>
          <p className="text-[#475569] leading-relaxed font-medium">
            I believe that diverse interests lead to divergent thinking. My hobbies are the testing ground for new perspectives and creative problem-solving outside the backlog.
          </p>
          <div className="mt-8 font-hand text-[#C2410C] text-lg rotate-[-2deg]">
            Experimentation &gt; Perfection
          </div>
        </div>
        
        {/* Decorative Splotch */}
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#C2410C]/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
