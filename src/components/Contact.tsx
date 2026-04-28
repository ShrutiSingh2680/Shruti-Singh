import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f8fafc] geometric-border md:grid md:grid-cols-2">
      <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[#0f172a] flex flex-col justify-between min-h-[400px]">
        <div>
          <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#C2410C] mb-12 flex items-center">
            Connect
            <span className="w-12 h-[1px] bg-[#C2410C] ml-4" />
          </h2>
          <h3 className="text-5xl md:text-7xl font-serif text-[#0f172a] leading-[0.85] tracking-tighter italic">
            Let's build <br />something <br /><span className="text-[#064E3B]">real</span> together.
          </h3>
        </div>
        
        <div className="mt-12">
          <div className="w-16 h-16 border-2 border-[#0F172A] rounded-full flex items-center justify-center rotate-12 bg-[#FDE68A] shadow-lg">
            <Mail size={24} className="text-[#0F172A]" />
          </div>
        </div>
      </div>

      <div className="p-8 md:p-16 flex flex-col justify-between bg-white relative">
        <div className="space-y-8">
          <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#475569]">Digital Footprint</h2>
          <div className="flex flex-col space-y-4">
            <a href="https://www.linkedin.com/in/shrutisingh2680/" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl text-[#0f172a] hover:italic hover:text-[#064E3B] transition-all w-fit">
              LinkedIn
            </a>
            <a 
              href="mailto:shrutisingh2680@gmail.com" 
              title="Send me an email"
              className="relative z-10 font-serif text-3xl text-[#0f172a] hover:italic hover:text-[#064E3B] transition-all w-fit cursor-pointer flex items-center pointer-events-auto"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-[#0f172a] pt-8">
          <div className="text-[10px] font-bold text-[#475569] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()}
          </div>
          <div className="text-sm font-hand text-[#C2410C]">
             Bengaluru, India
          </div>
        </div>
      </div>
    </section>
  );
}
