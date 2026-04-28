import { motion } from 'motion/react';
import { BookOpen, Coffee, Palette, Sliders } from 'lucide-react';

const hobbies = [
  {
    title: 'The Library',
    details: 'Currently diving into vintage Sci-Fi and Hegelian philosophy. There is something about physical books that digital products can\'t replicate.',
    icon: <BookOpen className="text-zinc-300" />,
    color: 'bg-zinc-900',
    link: 'https://www.goodreads.com/theblackbox'
  },
  {
    title: 'Canvas & Color',
    details: 'Oil painting is my meditative escape. I love exploring abstract textures and how light interacts with raw pigment.',
    icon: <Palette className="text-zinc-300" />,
    color: 'bg-zinc-900',
  },
  {
    title: 'Specialty Brews',
    details: 'A self-proclaimed coffee nerd. The precision and science behind a perfect V60 pour is surprisingly similar to product iteration.',
    icon: <Coffee className="text-zinc-300" />,
    color: 'bg-zinc-900',
  },
  {
    title: 'Analog Randoms',
    details: 'Obsessed with mechanical keyboards and vintage film cameras. I appreciate tools that have a tangible, haptic feedback.',
    icon: <Sliders className="text-zinc-300" />,
    color: 'bg-zinc-900',
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-[#0F172A] text-[#FDFCFB] geometric-border md:grid md:grid-cols-2 overflow-hidden">
      <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#FDFCFB]/10 relative">
        <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#FDE68A] mb-12 flex items-center">
          The Human Component
          <span className="w-12 h-[1px] bg-[#FDE68A] ml-4" />
        </h2>
        
        <div className="grid grid-cols-2 gap-4 h-full min-h-[500px]">
          {hobbies.map((hobby, index) => {
            const Wrapper = hobby.link ? motion.a : motion.div;
            return (
              <Wrapper
                key={hobby.title}
                href={hobby.link}
                target={hobby.link ? "_blank" : undefined}
                rel={hobby.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                className={`group relative border border-[#FDFCFB]/10 p-6 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  index === 0 ? 'bg-[#064E3B]' : 
                  index === 1 ? 'bg-[#C2410C]' : 
                  index === 2 ? 'bg-[#B45309]' : 
                  'bg-[#1E293B]'
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                
                <div className="text-white/40 group-hover:text-white transition-colors">
                  {hobby.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1 italic">
                    {hobby.title === 'The Library' ? 'On the Shelf' : hobby.title === 'Canvas & Color' ? 'On the Easel' : 'Current Pulse'}
                  </div>
                  <div className="text-xl md:text-2xl font-serif leading-tight text-white">{hobby.title}</div>
                  {hobby.link && (
                    <div className="mt-2 text-[8px] uppercase font-black tracking-widest text-[#FDE68A] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Profile →
                    </div>
                  )}
                </div>
              </Wrapper>
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
