"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Settings } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages & Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["JavaScript (ES6+)", "Python", "Java", "React.js", "Next.js", "React Native", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "PHP", "RESTful API", "JWT Auth", "OAuth 2.0"],
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["AWS (EC2, S3, DynamoDB)", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="w-6 h-6 text-primary" />,
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Vercel", "Postman", "Figma", "Agile/Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-accent/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies, tools, and methodologies I use to build scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card p-6 md:p-8 rounded-2xl flex flex-col h-full border border-border shadow-sm hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-background border border-border rounded-lg text-foreground shadow-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Core Concepts</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "Software Development Life Cycle (SDLC)", "Unit Testing", "Responsive Web Design", "Role-Based Access Control (RBAC)"].map((concept) => (
              <span key={concept} className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
