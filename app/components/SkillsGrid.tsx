// components/SkillsGrid.tsx
import React from 'react';

function SkillsGrid() {
  const skillGroups = [
    {
      category: "Languages",
      accent: "from-blue-500 to-cyan-400",
      items: [
        { name: "C/C++", icon: "/assets/cpp.png" },
        { name: "Python", icon: "/assets/python.png" },
        { name: "Java", icon: "/assets/java.png" },
        { name: "JS", icon: "/assets/js.png" },
        { name: "SQL", icon: "/assets/sql.png" },
        { name: "R", icon: "/assets/r.png" },
      ],
    },
    {
      category: "AI & Machine Learning",
      accent: "from-purple-500 to-pink-500",
      items: [
        { name: "PyTorch", icon: "/assets/pytorch.png" },
        { name: "TensorFlow", icon: "/assets/tensorflow.png" },
        { name: "Scikit-learn", icon: "/assets/sklearn.png" },
        { name: "Streamlit", icon: "/assets/streamlit.png" },
        { name: "OpenCV", icon: "/assets/opencv.png" },
      ],
    },
    {
      category: "Web & Frameworks",
      accent: "from-orange-500 to-yellow-500",
      items: [
        { name: "React", icon: "/assets/react.png" },
        { name: "Next.js", icon: "/assets/nextjs.png" },
        { name: "Node.js", icon: "/assets/nodejs.png" },
        { name: "Express", icon: "/assets/express.png" },
        { name: "Flask", icon: "/assets/flask.png" },
        { name: "PHP", icon: "/assets/php.png" },
      ],
    },
    {
      category: "Cloud & DevOps",
      accent: "from-red-500 to-orange-600",
      items: [
        { name: "AWS", icon: "/assets/aws.png" },
        { name: "Vercel", icon: "/assets/vercel.png" },
        { name: "Docker", icon: "/assets/docker.png" },
        { name: "Git", icon: "/assets/git.png" },
        { name: "Postman", icon: "/assets/postman.png" },
        { name: "Kubernetes", icon: "/assets/kubernetes.png" },
      ],
    }
  ];

  return (
    <section className="max-w-6xl w-full mt-24 px-6 mx-auto mb-20">
      <div className="relative flex flex-col mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Arsenal</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
        <p className="mt-4 text-zinc-400 max-w-2xl text-lg">
          A collection of technologies I've mastered and used to build scalable applications and AI models.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {skillGroups.map((group) => (
          <div 
            key={group.category} 
            className="group relative overflow-hidden p-1 rounded-[2.5rem] bg-zinc-900/50 border backdrop-blur-2xl transition-all duration-500
              border-white/5 hover:border-white/10
              max-sm:border-white/10"
          >
            {/* Background Glow - Visible on mobile */}
            <div className={`absolute -inset-px bg-gradient-to-br ${group.accent} transition-opacity duration-500
              opacity-0 group-hover:opacity-10 
              max-sm:opacity-10`} />
            
            <div className="relative p-8">
              <h3 className="flex items-center gap-3 text-zinc-100 font-bold mb-10 text-sm uppercase tracking-[0.3em]">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.accent} animate-pulse`} />
                {group.category}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8">
                {group.items.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group/item flex flex-col items-center"
                  >
                    <div className="relative mb-4">
                      {/* Icon Container with Scale active on mobile */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-zinc-800/50 border border-white/5 transition-all duration-300 shadow-xl overflow-hidden
                        group-hover/item:scale-110 group-hover/item:border-white/20
                        max-sm:scale-110 max-sm:border-white/20">
                        
                        {/* Inner Glow visible on mobile */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity
                          opacity-0 group-hover/item:opacity-100
                          max-sm:opacity-100" />
                        
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain z-10 filter transition-all
                            brightness-90 group-hover/item:brightness-110
                            max-sm:brightness-110"
                        />
                      </div>
                      
                      {/* Drop Shadow visible on mobile */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-black/40 blur-md rounded-full transition-opacity
                        opacity-0 group-hover/item:opacity-100
                        max-sm:opacity-100" />
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-colors
                      text-zinc-500 group-hover/item:text-white
                      max-sm:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsGrid;