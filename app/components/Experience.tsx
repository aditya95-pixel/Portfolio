// components/Experience.tsx
import Image from "next/image";

const experiences = [
  {
    company: "Miel Consulting ProgramX",
    role: "SDE Intern",
    period: "Mar 2026 — May 2026",
    desc: "Optimized ERP modules using PHP and MySQL, improving system performance and data consistency.",
    logo: "/assets/miel-logo.png",
    skills: ["PHP", "MySQL", "ERP"]
  },
  {
    company: "IACS",
    role: "Research Intern",
    period: "Jun 2025 — Jul 2025",
    desc: "Trained sparse autoencoders on transformer activations and analyzed feature space universality across Gemma models.",
    logo: "/assets/iacs-logo.png",
    skills: ["Transformers", "PyTorch", "Gemma"]
  },
];

function Experience() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            EXPERIENCE
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
        </div>

        <div className="relative">
          {/* Animated central line */}
          <div className="absolute left-8 md:left-1/2 h-full w-[1px] bg-zinc-800 md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-transparent to-transparent opacity-50" />
          </div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Logo with pulsing hover glow */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                  <div className={`relative w-14 h-14 rounded-xl border bg-zinc-900 p-2 transition-all duration-500 
                    border-white/10 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]
                    /* Mobile Active */
                    max-md:border-red-500 max-md:shadow-[0_0_20px_rgba(239,68,68,0.2)]`}>
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-contain p-2 transition-all"
                    />
                  </div>
                </div>

                {/* Main Card */}
                <div className="ml-20 md:ml-0 w-full md:w-[45%]">
                  <div className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 shadow-xl
                    border-white/5 bg-zinc-900/50 
                    /* Desktop Hover */
                    group-hover:bg-gradient-to-br group-hover:from-zinc-900 group-hover:to-red-950/30 
                    group-hover:border-red-500/30 group-hover:-translate-y-1
                    /* Mobile Active */
                    max-md:bg-gradient-to-br max-md:from-zinc-900 max-md:to-red-950/20 
                    max-md:border-red-500/30 max-md:-translate-y-1`}>
                    
                    {/* Top Row: Date & Role */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors
                        text-zinc-500 group-hover:text-red-400 max-md:text-red-400`}>
                        {exp.period}
                      </span>
                      <div className={`px-3 py-1 rounded-full text-[10px] transition-all duration-300
                        bg-zinc-800 text-zinc-400 
                        group-hover:bg-red-500 group-hover:text-white 
                        max-md:bg-red-500 max-md:text-white`}>
                        {exp.role}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold text-white mb-2 transition-colors
                      group-hover:text-red-50 max-md:text-red-50`}>
                      {exp.company}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-4 transition-colors
                      text-zinc-400 group-hover:text-zinc-200 max-md:text-zinc-200`}>
                      {exp.desc}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className={`text-[10px] px-2 py-1 rounded bg-white/5 border transition-all
                            border-white/5 text-zinc-500 
                            group-hover:border-red-500/20 group-hover:text-red-300 
                            max-md:border-red-500/20 max-md:text-red-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Experience;