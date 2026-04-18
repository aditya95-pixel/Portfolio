// components/Education.tsx
import Image from "next/image";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="w-full space-y-8">
      <div className="flex items-center gap-3">
        <GraduationCap className="text-red-500" size={28} />
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
      </div>

      <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-red-500/30 transition-all duration-500">
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-600/5 blur-[100px] group-hover:bg-red-600/10 transition-colors" />

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* Logo Container */}
          <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white shadow-xl">
            <Image
              src="/assets/heritage-logo.jpg"
              alt="Heritage Institute of Technology"
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-100">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p className="text-lg text-red-500 font-semibold mt-1">
                  Heritage Institute of Technology
                </p>
              </div>
              <div className="text-right md:text-right flex flex-col items-start md:items-end gap-1 text-zinc-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>2022 — 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Kolkata, WB</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                <Award size={18} className="text-red-500" />
                <span className="text-zinc-200 font-medium">CGPA: 9.768</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}