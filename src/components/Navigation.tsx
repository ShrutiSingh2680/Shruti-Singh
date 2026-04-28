import { motion, useScroll, useTransform } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsub();
  }, [scrollY]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Human', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-[24px] left-[24px] right-[24px] z-[9999] flex items-center justify-between px-6 py-4 md:px-10 transition-all duration-300 rounded-xl pointer-events-auto ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border border-zinc-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`text-xl font-bold tracking-tighter transition-colors duration-300 text-[#0F172A] cursor-pointer hover:text-[#C2410C]`}
      >
        SS
      </div>
      
      <div className="hidden md:flex items-center space-x-12">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`group relative text-[10px] uppercase font-black tracking-[0.3em] transition-all duration-300 text-[#475569]`}
          >
            <span className="relative z-10 group-hover:text-[#C2410C] transition-colors">{item.name}</span>
            <span className="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-[#C2410C] group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <a 
          href="https://www.linkedin.com/in/shrutisingh2680/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`p-2 transition-all duration-300 text-[#475569] hover:text-[#0A66C2]`}
        >
          <Linkedin size={20} />
        </a>
        <button 
          onClick={() => {
            navigator.clipboard.writeText('shrutisingh2680@gmail.com');
            alert('Email copied to clipboard!');
          }}
          title="shrutisingh2680@gmail.com (Click to copy)"
          className={`relative z-[100] p-2 transition-all duration-300 text-[#475569] hover:text-[#C2410C] cursor-pointer flex items-center justify-center pointer-events-auto`}
        >
          <Mail size={20} />
        </button>
      </div>
    </motion.nav>
  );
}
