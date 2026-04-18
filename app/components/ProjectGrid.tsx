// components/ProjectGrid.tsx
import Image from "next/image";

function ProjectGrid() {
  const projects = [
    {
      title: "Xmaths",
      desc: "AI-driven platform for solving complex Maths, Data Structures, Algorithms, Machine Learning problems. Featuring high-fidelity rendering and real-time computation.",
      tags: ["Next.js", "MongoDB", "Mermaid.js", "GFM", "Gemini API"],
      image: "/assets/xmaths.png",
      link: "https://xmaths.vercel.app/",
      accent: "from-blue-600/20"
    },
    {
      title: "CareerX",
      desc: "Full-stack AI Career Coach generating resumes and mock interview feedback. Tailored algorithms to match user profiles with industry standards.",
      tags: ["Next.js", "Gemini API", "PostgreSQL", "Prisma"],
      image: "/assets/careerx.png",
      link: "https://career-x-sooty.vercel.app/",
      accent: "from-red-600/20"
    },
    {
      title: "DesignFlow",
      desc: "Real-time collaborative design studio with multi-user canvas editing. Engineered for low-latency synchronization and high-performance vector rendering.",
      tags: ["Next.js", "Fabric.js", "Convex"],
      image: "/assets/designflow.png",
      link: "https://design-flow-topaz.vercel.app/",
      accent: "from-purple-600/20"
    }
  ];

  return (
    <section className="max-w-7xl w-full mt-32 pb-32 px-6 mx-auto">
      <div className="flex flex-col mb-20">
        <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
          FEATURED WORK
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-900" />
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((p, index) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Background Glow Effect - Active on Mobile */}
            <div className={`absolute -inset-8 bg-gradient-to-r ${p.accent} to-transparent transition-opacity duration-700 blur-3xl -z-10
              opacity-0 group-hover:opacity-100 
              max-lg:opacity-100`} />

            {/* Image Container - Enhanced Border/Scale on Mobile */}
            <div className="relative w-full lg:w-3/5 aspect-video overflow-hidden rounded-xl border bg-zinc-900 transition-all duration-500 shadow-2xl
              border-white/10 group-hover:border-white/20 
              max-lg:border-white/20">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-all duration-700
                  opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] 
                  max-lg:opacity-100 max-lg:scale-[1.01]"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-2/5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-red-500 font-mono text-sm">0{index + 1}</span>
                  <div className="h-[1px] bg-zinc-800 transition-all duration-500
                    w-8 group-hover:w-12 group-hover:bg-red-500 
                    max-lg:w-12 max-lg:bg-red-500" />
                </div>
                <h3 className="text-4xl font-bold text-white transition-colors
                  group-hover:text-red-50 
                  max-lg:text-red-50">
                  {p.title}
                </h3>
              </div>

              <p className="text-lg leading-relaxed transition-colors
                text-zinc-400 group-hover:text-zinc-200 
                max-lg:text-zinc-200">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-zinc-900 border transition-all duration-500
                      text-zinc-500 border-white/5 
                      group-hover:border-red-500/30 group-hover:text-red-400 
                      max-lg:border-red-500/30 max-lg:text-red-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center text-white font-bold text-sm transition-all duration-300
                gap-2 group-hover:gap-4 
                max-lg:gap-4">
                VIEW PROJECT 
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;