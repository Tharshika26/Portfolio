"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-foreground">
            Contact
          </h2>
          
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Tharshika Pathmanathan</h3>
              <p className="text-sm md:text-base font-semibold text-muted-foreground mb-4">
                Computer Science and Technology Undergraduate - Uva Wellassa University
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-4xl">
              <p>
                Motivated Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka with hands-on full-stack development experience building and deploying production-grade web and mobile applications. Proficient in Agile software development, REST API design, version control with Git, and cloud deployment. Strong problem-solving, debugging, and communication skills with the ability to rapidly learn and adapt to new technologies.
              </p>
              <p>
                Seeking a Software Engineering Internship to contribute to real-world projects and grow as a collaborative team member.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 items-center">
              <a 
                href="https://github.com/Tharshika26" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={32} />
              </a>
              <a 
                href="https://linkedin.com/in/tharshinathan26" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} />
              </a>
              <a 
                href="mailto:tharshikastar@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
