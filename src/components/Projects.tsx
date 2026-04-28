import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const personalProjects = [
  {
    title: 'DRIP — Your Digital Wardrobe',
    tagline: 'Style, organized.',
    description: 'A mobile-first app that digitizes your closet, helps you plan outfits, and turns everyday dressing into a creative ritual — powered by AI-driven styling suggestions.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop',
    link: 'https://drip-closet.lovable.app/',
    status: 'LIVE PROTOTYPE',
    color: 'bg-[#F3E8FF]'
  },
  {
    title: 'Project Placeholder Two',
    tagline: 'Workflow, reimagined.',
    description: 'An order management workflow reimagined for US TV advertising, focusing on extreme efficiency and error reduction.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    link: '#',
    status: 'COMING SOON',
    color: 'bg-[#F1F5F9]'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FDFCFB] py-24 px-6 md:px-12 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="max-w-xl">
             <h2 className="text-6xl md:text-8xl font-serif text-[#0F172A] tracking-tighter leading-[0.85]">
              Projects, <br /><span className="italic">in motion.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {[personalProjects[0]].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white border border-[#E2E8F0] rounded-[40px] p-4 md:p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-center"
            >
              <div className={`relative w-full md:w-1/2 aspect-[4/3] md:aspect-video rounded-[32px] overflow-hidden ${project.color} shrink-0`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#0F172A] shadow-sm">
                  {project.status}
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-serif text-[#0F172A] mb-2 group-hover:text-[#064E3B] transition-colors leading-[0.9]">
                      {project.title}
                    </h3>
                    <p className="text-base italic font-serif text-[#C2410C]">{project.tagline}</p>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full border border-[#E2E8F0] flex items-center justify-center hover:bg-[#0F172A] hover:text-white transition-all transform group-hover:rotate-[-45deg] shrink-0"
                  >
                    <ArrowRight size={24} />
                  </a>
                </div>
                <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {['Product Design', 'Visual Identity', 'AI Integration'].map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full border border-slate-100 bg-slate-50/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Meta Section */}
        <div className="mt-24 pt-12 border-t border-[#E2E8F0] grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C2410C] mb-4">AdTech Deep Dive</div>
            <p className="text-sm font-medium text-[#0F172A] leading-relaxed">
              Specializing in US Market automation, TV Ad Ops, and complex order management systems for media networks.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex space-x-12">
              <div>
                <div className="text-3xl font-serif italic text-[#064E3B]">0→1</div>
                <div className="text-[10px] font-bold text-[#94A3B8] uppercase">Specialist</div>
              </div>
              <div>
                <div className="text-3xl font-serif italic text-[#064E3B]">5y+</div>
                <div className="text-[10px] font-bold text-[#94A3B8] uppercase">Experience</div>
              </div>
            </div>
          </div>
          <div className="flex md:justify-end items-center">
            <a 
              href="mailto:shrutisingh2680@gmail.com" 
              className="px-8 py-4 bg-[#0F172A] text-[#FDE68A] rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block"
            >
              Let's build something new
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
