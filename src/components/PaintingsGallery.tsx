import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const paintings = [
  {
    id: 1,
    title: "Abstract Textures I",
    year: "2023",
    description: "Oil on canvas. An exploration of tactile surfaces and depth through layering.",
    image: "/art1.jpg",
  },
  {
    id: 2,
    title: "Silent Whispers",
    year: "2023",
    description: "Mixed media. Minimalist organic forms meeting fluid charcoal strokes.",
    image: "/art2.jpeg",
  },
  {
    id: 3,
    title: "Urban Rhythms",
    year: "2024",
    description: "A series focused on the kinetic energy and structural layering of city life.",
    image: "/art3.jpeg",
  },
  {
    id: 4,
    title: "Ethereal Bloom",
    year: "2024",
    description: "Vibrant botanical abstractions captured in a moment of structured chaos.",
    image: "/art4.jpeg",
  },
  {
    id: 5,
    title: "Verdant Dreams",
    year: "2024",
    description: "Landscape study exploring the deep greens and textures of the Western Ghats.",
    image: "/art5.jpg",
  },
  {
    id: 6,
    title: "Geometric Solace",
    year: "2024",
    description: "A dialogue between rigid lines and soft gradients in oil and pastels.",
    image: "/art6.jpg",
  },
  {
    id: 7,
    title: "Cerulean Depths",
    year: "2024",
    description: "Fluid studies of motion using heavy body acrylics and pouring techniques.",
    image: "/art7.jpg",
  },
];

export default function PaintingsGallery() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#0F172A] selection:bg-[#C2410C] selection:text-white">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-[#0F172A]/5 px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest hover:text-[#C2410C] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
        <div className="text-xl font-bold tracking-tighter">SS / ART</div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        <header className="mb-16 md:mb-24">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-serif italic leading-tight mb-6"
          >
            Canvas <span className="text-[#C2410C]">&</span> Color
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#475569] max-w-2xl leading-relaxed"
          >
            A collection of my oil paintings and analog experiments. 
            This is where I escape the pixels and focus on the raw, tactile chemistry of pigment.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {paintings.map((art, index) => (
            <motion.div 
              key={art.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border-2 border-[#0F172A] bg-zinc-100 shadow-xl mb-6">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-${art.id === 1 ? '1541963463532-d68292c34b19' : art.id === 2 ? '1579783902614-a3fb3927b6a5' : art.id === 3 ? '1578301978693-85fa9c0320b9' : '1549490349-8643362247b5'}?auto=format&fit=crop&q=80&w=800`;
                  }}
                />
                <div className="absolute inset-0 bg-[#0F172A]/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif italic mb-1">{art.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed max-w-md">{art.description}</p>
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-[#C2410C] translate-y-1">
                  {art.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-32 pt-16 border-t border-[#0F172A]/10 text-center">
            <h4 className="text-lg font-serif italic text-[#475569] mb-8">Want to see more or talk about art?</h4>
            <a 
              href="mailto:shrutisingh2680@gmail.com"
              className="inline-flex items-center space-x-2 bg-[#0F172A] text-[#FDFCFB] px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#C2410C] transition-all"
            >
              <span>Get in touch</span>
              <ExternalLink size={12} />
            </a>
        </footer>
      </main>
    </div>
  );
}
