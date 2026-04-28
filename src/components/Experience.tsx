import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Senior Product Manager',
    company: 'SureWaves MediaTech Pvt Ltd',
    period: 'Jan 2021 — Present',
    description: 'Leading the discovery and delivery of 0→1 products in the TV advertising space. Managing full-lifecycle automation for backend operations and media workflows.',
    impact: ['Automated TV station backend ops', 'Built automated order entry systems', 'Scaled US Ad market workflows']
  }
];

const expertise = [
  "Advertising (US Market)",
  "TV Industry",
  "Automation",
  "Order Management Systems",
  "Workflow Streamlining"
];

const skills = [
  { title: "0→1 Product Building", desc: "Taking ideas from scratch to real, usable products." },
  { title: "Product Strategy", desc: "Turning ambiguous problems into clear direction." },
  { title: "Prioritization & Roadmapping", desc: "Focusing on what actually moves the needle." },
  { title: "User Insight & Feedback", desc: "Listening to users and translating it into product decisions." },
  { title: "Prototyping & Validation", desc: "Testing ideas early before investing heavily." },
  { title: "Automation & Systems Thinking", desc: "Simplifying complex workflows and reducing manual effort." },
  { title: "Cross-functional Collaboration", desc: "Working across engineering, ops, and business teams." },
  { title: "Stakeholder Alignment", desc: "Keeping everyone moving in the same direction." },
  { title: "Execution & Delivery", desc: "Shipping products reliably from idea to launch." },
  { title: "Data-informed Decision Making", desc: "Using data and signals to guide product decisions, not just intuition." }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#f8fafc] geometric-border md:grid md:grid-cols-[1fr_1.5fr] scroll-mt-32">
      <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#0f172a] flex flex-col">
        <h2 className="text-[10px] uppercase font-black tracking-[0.4em] text-[#C2410C] mb-8 flex items-center">
          Experience
          <span className="w-12 h-[1px] bg-[#C2410C] ml-4" />
        </h2>

        <div className="flex-grow space-y-12">
          <div className="flex flex-col space-y-10">
             {experiences.map((exp, index) => (
              <div key={exp.role + exp.company} className="relative">
                <div className="text-[10px] font-bold text-[#475569] mb-2 tracking-widest uppercase">{exp.period}</div>
                <div className="bg-[#FDE68A] w-fit px-2 py-0.5 mb-2 text-[10px] font-black uppercase text-[#0F172A] rounded-sm">Current Lead</div>
                <h4 className="text-3xl font-serif text-[#0f172a] mb-1">{exp.role}</h4>
                <p className="text-sm font-bold text-[#064E3B] uppercase tracking-tight mb-6">{exp.company}</p>
                
                <div className="space-y-4">
                  {exp.impact.map(point => (
                    <div key={point} className="flex items-start space-x-3 text-sm font-bold text-[#475569]">
                      <div className="w-1.5 h-1.5 mt-1.5 bg-[#C2410C] rounded-full shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#E2E8F0]">
            <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#475569] mb-6 whitespace-pre">E X P E R T I S E</h2>
            <div className="flex flex-wrap gap-2">
              {expertise.map(item => (
                <span key={item} className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-[10px] font-bold text-[#0F172A] uppercase tracking-tight">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 border-2 border-[#0F172A] rounded-2xl bg-[#064E3B] text-white">
          <p className="text-xl font-serif italic mb-2">"Complexity is just unorganized simplicity."</p>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Builder's Mantra</div>
        </div>
      </div>

      <div className="p-8 md:p-12 flex flex-col bg-white text-[#0f172a] relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FDE68A] rounded-full flex items-center justify-center text-[10px] font-black uppercase rotate-[-15deg] shadow-lg border-2 border-[#0F172A] z-10 transition-transform hover:rotate-0 cursor-default">
          Execution<br />Machine
        </div>
        
        <div className="flex-grow">
          <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#475569] mb-12">Core Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8">
            {skills.map((skill, index) => (
              <div key={skill.title} className="group border-b border-zinc-100 pb-6 transition-all hover:border-[#C2410C]/20">
                <div className="flex flex-col space-y-3">
                  <div className="text-[10px] font-black text-[#94A3B8] group-hover:text-[#C2410C] transition-colors">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <div>
                    <div className="text-lg font-serif text-[#0F172A] tracking-tighter group-hover:text-[#C2410C] transition-all leading-none mb-2">
                      {skill.title}
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
