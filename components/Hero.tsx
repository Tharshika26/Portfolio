"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative">
      {/* Background blobs for premium feel */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm md:text-base font-mono tracking-widest text-[#9c7a32] uppercase"
        >
          AVAILABLE FOR SOFTWARE ENGINEERING INTERNSHIPS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight mb-6 whitespace-nowrap"
        >
          Hi, I&apos;m <span className="text-gradient">Tharshika Pathmanathan</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-foreground/90 max-w-4xl mx-auto leading-tight"
        >
          Software Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Computer Science undergraduate at Uva Wellassa University with hands-on experience shipping production-grade web and mobile applications from role-based auth systems to AI-assisted healthcare tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg bg-[#0F2840] text-white font-semibold hover:bg-[#0F2840]/90 transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent text-foreground font-semibold border border-border hover:bg-accent transition-all transform hover:scale-105 active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a href="https://github.com/Tharshika26" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full">
            <FaGithub size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/tharshinathan26" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full">
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:tharshikastar@gmail.com" className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
