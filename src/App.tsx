/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen p-0 md:p-3 relative overflow-hidden">
      {/* Decorative Human Touch Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#FDE68A]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] left-[-5%] w-[30vw] h-[30vw] bg-[#C2410C]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="bg-[#FDFCFB] min-h-screen outer-frame selection:bg-[#064E3B] selection:text-white relative z-10">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" />
        <Navigation />
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Hobbies />
          <Contact />
        </main>
      </div>
    </div>
  );
}

