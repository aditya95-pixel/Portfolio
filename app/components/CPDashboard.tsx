// components/CPDashboard.tsx
import Image from "next/image";
import { Trophy, ExternalLink, Activity } from "lucide-react";

const stats = [
  {
    platform: "LeetCode",
    rank: "Guardian",
    rating: "2185",
    color: "from-red-500 to-red-900",
    glow: "group-hover:shadow-orange-500/20",
    logo: "/assets/leetcode-logo.png",
    url: "https://leetcode.com/u/adityamazumdar/",
  },
  {
    platform: "Codeforces",
    rank: "Expert",
    rating: "1619",
    color: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-blue-500/20",
    logo: "/assets/codeforces-logo.png",
    url: "https://codeforces.com/profile/aditya1695/",
  },
  {
    platform: "CodeChef",
    rank: "4-Star",
    rating: "1859",
    color: "from-violet-500 to-violet-800",
    glow: "group-hover:shadow-yellow-600/20",
    logo: "/assets/codechef-logo.png",
    url: "https://www.codechef.com/users/aditya_1695/",
  },
  {
    platform: "Atcoder",
    rank: "4 Kyu",
    rating: "1204",
    color: "from-cyan-400 to-cyan-500",
    glow: "group-hover:shadow-cyan-500/20",
    logo: "/assets/atcoder-logo.png",
    url: "https://atcoder.jp/users/aditya1695/",
  }
];

function CPDashboard() {
  return (
    <section className="w-full py-12">
      <div className="flex items-center justify-between mb-10">
        <div className="space-y-1">
          <h2 className="text-4xl font-black flex items-center gap-3 tracking-tight">
            <Trophy className="text-red-500 animate-pulse" size={32} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 py-1">
              Competitive Programming
            </span>
          </h2>
          <p className="text-zinc-500 font-medium ml-11">Global ranking and performance metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <a
            key={s.platform}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-8 rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-md 
              /* Desktop Hover */
              hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
              /* Mobile "Always Active" State */
              max-md:-translate-y-2 max-md:border-white/20 max-md:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              transition-all duration-500 ease-out overflow-hidden ${s.glow} max-md:shadow-orange-500/10`}
          >
            {/* Gradient Sphere */}
            <div className={`absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br ${s.color} 
              opacity-10 blur-3xl group-hover:opacity-30 max-md:opacity-30 transition-opacity duration-500`} 
            />

            <div className="flex justify-between items-start mb-6">
              <div className="relative w-12 h-12 p-2 bg-white/5 rounded-2xl border border-white/5 
                group-hover:scale-110 group-hover:rotate-3 max-md:scale-110 max-md:rotate-3 transition-all duration-500">
                <Image
                  src={s.logo}
                  alt={s.platform}
                  fill
                  className="object-contain p-2 filter transition-all duration-500"
                />
              </div>
              <div className="p-2 rounded-full bg-white/5 
                opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 
                max-md:opacity-100 max-md:translate-x-0 transition-all duration-500">
                <ExternalLink size={18} className="text-white" />
              </div>
            </div>

            <div className="space-y-2 transform group-hover:translate-x-1 max-md:translate-x-1 transition-transform duration-500">
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">
                {s.platform}
              </p>
              <h3 className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${s.color} tracking-tighter`}>
                {s.rank}
              </h3>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                  <Activity size={12} className="text-zinc-400" />
                  <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Rating</span>
                  <span className="text-white font-mono font-bold text-lg">{s.rating}</span>
                </div>
              </div>
            </div>

            {/* Bottom Progress Line */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-zinc-800">
              <div className={`h-full bg-gradient-to-r ${s.color} transition-all duration-1000 ease-in-out
                w-0 group-hover:w-full max-md:w-full`} 
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CPDashboard;