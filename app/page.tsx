"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Mail } from "lucide-react";

// Components
import CPDashboard from "./components/CPDashboard";
import ProjectGrid from "./components/ProjectGrid";
import SkillsGrid from "./components/SkillsGrid";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  // 1. Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 pt-24 pb-20 overflow-x-hidden bg-black text-white">
      {/* Fixed Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-900 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 mt-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-8"
        >
          <div>
            <motion.h1
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              Aditya{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
                Mazumdar
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-xl text-zinc-400 max-w-xl leading-relaxed"
            >
              Software Engineer & AI/ML Researcher.<br />
              <span className="text-white/80 font-medium">
                Expert at building scalable AI platforms and solving high-level algorithmic challenges.
              </span>
            </motion.p>
          </div>

          {/* Social Links - Reverted to your image setup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <SocialLink 
              href="https://github.com/aditya95-pixel" 
              src="/assets/github-logo.png" 
              alt="GitHub"
            />
            <SocialLink 
              href="https://linkedin.com/in/aditya-mazumdar-7b032b277" 
              src="/assets/linkedin-logo.png" 
              alt="LinkedIn"
            />
            <SocialLink 
              href="mailto:aditya.mazumdar.33@gmail.com" 
              icon={<Mail size={20} />} 
            />
          </motion.div>
        </motion.div>

        {/* Desktop Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative w-72 h-80 shrink-0 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-red-500/20 bg-zinc-900 z-10 shadow-2xl shadow-red-500/10"
          >
            <Image
              src="/assets/profile.jpg"
              alt="Aditya Mazumdar"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red-500/10 rounded-3xl -z-10" />
        </motion.div>

        {/* Mobile Profile Photo */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="md:hidden w-48 h-48 relative"
        >
          <Image
            src="/assets/profile.jpg"
            alt="Aditya"
            fill
            className="rounded-full border-2 border-red-500/30 object-cover shadow-xl shadow-red-500/20"
          />
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="w-full max-w-5xl mt-32 space-y-32">
        <RevealSection><CPDashboard /></RevealSection>
        <RevealSection><Experience /></RevealSection>
        <RevealSection><ProjectGrid /></RevealSection>
        <RevealSection><SkillsGrid /></RevealSection>
        <RevealSection><Education /></RevealSection>
      </div>
    </main>
  );
}

function RevealSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      {children}
    </motion.div>
  );
}

function SocialLink({ 
  href, 
  src, 
  icon, 
  alt 
}: { 
  href: string; 
  src?: string; 
  icon?: React.ReactNode; 
  alt?: string 
}) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(220, 38, 38, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="group relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-500/50 transition-all duration-300 overflow-hidden"
    >
      <div className="relative w-6 h-6 flex items-center justify-center transition-all duration-300">
        {src ? (
          <Image 
            src={src} 
            alt={alt || ""} 
            fill 
            className="object-contain mix-blend-lighten rounded-full transition-all"
          />
        ) : (
          <div className="text-zinc-400 group-hover:text-red-500 transition-colors">
            {icon}
          </div>
        )}
      </div>
    </motion.a>
  );
}