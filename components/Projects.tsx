"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "ServiceHub",
    subtitle: "Home Service Management System",
    date: "Apr 2025 – Sep 2025",
    description: "A full-stack Home Service Management System with a responsive interface to streamline service booking, provider management, and administrative operations. Features role-based access control (RBAC), JWT-based authentication, and OTP email verification.",
    tech: ["React.js (Vite)", "PHP 8.x", "MySQL", "PDO", "JWT", "PHPMailer"],
    links: { githubFrontend: "https://github.com/Tharshika26/home-management-system-Frontend.git", githubBackend: "https://github.com/Tharshika26/home-management-system-Backend.git" },
    video: "/Servicehub.mp4",
  },
  {
    title: "DonorNet",
    subtitle: "Blood Donor Finder Mobile Application",
    date: "Dec 2024",
    description: "A cross-platform mobile application to help users search and connect with nearby blood donors based on blood group and city. Includes secure email/password authentication and real-time donor data management.",
    tech: ["React Native (Expo)", "Firebase Auth", "Firebase Firestore"],
    links: { github: "https://github.com/Tharshika26/DonorNet.git" },
    images: ["/DonorNet1.png", "/DonorNet2.png", "/DonorNet3.png", "/DonorNet4.png"],
  },
  {
    title: "AutoTrack Web",
    subtitle: "Vehicle Maintenance & Service Tracking System",
    date: "Feb 2025",
    description: "A full-stack web application for managing vehicles, tracking service history, and monitoring maintenance costs. Integrates RESTful APIs, protected routes, and service reminders.",
    tech: ["React.js", "Django", "PostgreSQL", "Tailwind CSS", "Axios"],
    links: { github: "https://github.com/Tharshika26/Vehicle-Maintenance-System.git" },
    video: "/Autotrack.mp4",
  },
  {
    title: "DrHospital",
    subtitle: "Advanced Hospital Management System",
    date: "Jun 2025",
    description: "A comprehensive hospital management system supporting appointment scheduling, medical reports, and online payments. Features OCR and OpenAI API integration to analyze uploaded medical reports and generate AI-powered summaries.",
    tech: ["React.js (Vite)", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe", "OpenAI API"],
    links: { github: "https://github.com/Tharshika26/DrHospital.git", live: "https://dr-hospital.vercel.app" },
    video: "/Drhospital.mp4",
  },
];

// Helper component for auto-playing image carousel in preview box
const ImageCarouselPreview = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} Preview ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover md:object-contain bg-background"
        />
      </AnimatePresence>
    </div>
  );
};

// Helper component for interactive image carousel in the modal
const ImageCarouselModal = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play for modal too
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-full bg-black/50 flex items-center justify-center overflow-hidden cursor-pointer group"
      onClick={nextImage}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} Preview ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 m-auto w-full h-full object-contain p-2 md:p-8 drop-shadow-2xl"
        />
      </AnimatePresence>

      <div className="absolute bottom-6 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 p-2 md:p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 p-2 md:p-4 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80 z-20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};


export default function Projects() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, highlighting full-stack development, mobile apps, and AI integrations.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {(showAll ? PROJECTS : PROJECTS.slice(0, 2)).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row gap-6"
            >
              {/* Details Card */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex-1 flex flex-col relative shadow-sm mt-3 lg:mt-0">
                <span className="absolute -top-3 left-6 bg-background px-3 py-1 text-xs font-semibold text-foreground border border-border rounded-full">
                  Details
                </span>

                <div className="mt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <h4 className="text-sm font-medium text-primary mb-4">{project.subtitle}</h4>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.links?.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                        GitHub <FaGithub size={14} />
                      </a>
                    )}
                    {project.links?.githubFrontend && (
                      <a href={project.links.githubFrontend} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                        Frontend <FaGithub size={14} />
                      </a>
                    )}
                    {project.links?.githubBackend && (
                      <a href={project.links.githubBackend} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                        Backend <FaGithub size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Preview Card */}
              <div
                className="bg-card border border-border rounded-2xl p-4 flex-1 relative shadow-sm min-h-75 flex flex-col mt-3 lg:mt-0 cursor-pointer hover:border-primary/50 transition-colors group"
                onClick={() => setSelectedMedia(project)}
              >
                <span className="absolute -top-3 left-6 bg-background px-3 py-1 text-xs font-semibold text-foreground border border-border rounded-full z-20 transition-colors group-hover:border-primary/50 group-hover:text-primary shadow-sm">
                  Preview
                </span>

                <div className="w-full h-full bg-linear-to-br from-primary/5 to-primary/20 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity border border-border/50">

                  {/* Background Video */}
                  {project.video && (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                  )}

                  {/* Foreground Images Carousel */}
                  {project.images && project.images.length > 0 && (
                    <ImageCarouselPreview images={project.images} title={project.title} />
                  )}

                  {/* Fallback if neither video nor images */}
                  {!project.video && !project.images && (
                    <div className="text-xl font-bold text-foreground/30 px-6 text-center z-20">
                      {project.title} Interface Preview
                    </div>
                  )}

                  {/* Title overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background/90 to-transparent z-20 pointer-events-none">
                    <span className="font-bold text-lg text-foreground">{project.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && PROJECTS.length > 2 && (
          <div className="mt-20">
            <h3 className="text-xl font-bold text-center mb-8">Up next</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {PROJECTS.slice(2).map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-card border border-border rounded-2xl p-2 relative shadow-sm h-48 cursor-pointer hover:border-primary/50 transition-colors group"
                  onClick={() => setSelectedMedia(project)}
                >
                  <div className="w-full h-full bg-linear-to-br from-primary/5 to-primary/20 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity border border-border/50">
                    
                    {/* Background Video */}
                    {project.video && (
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                    )}

                    {/* Foreground Images Carousel */}
                    {project.images && project.images.length > 0 && (
                      <ImageCarouselPreview images={project.images} title={project.title} />
                    )}

                    {/* Fallback if neither video nor images */}
                    {!project.video && !project.images && (
                      <div className="text-sm font-bold text-foreground/30 px-2 text-center z-20">
                        {project.title} Preview
                      </div>
                    )}

                    {/* Title overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-background/90 to-transparent z-20 pointer-events-none">
                      <span className="font-bold text-sm text-foreground">{project.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {PROJECTS.length > 2 && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-2.5 border border-border rounded-full hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm inline-flex items-center gap-2"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>

      {/* Enlarged Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-card border border-border rounded-full text-foreground hover:bg-accent transition-colors z-110 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-[95vw] h-[95vh] max-w-7xl bg-card/50 border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.video ? (
                <video
                  src={selectedMedia.video}
                  autoPlay
                  controls
                  playsInline
                  className="w-full max-h-[85vh] object-contain bg-black/80"
                />
              ) : selectedMedia.images ? (
                <ImageCarouselModal images={selectedMedia.images} title={selectedMedia.title} />
              ) : (
                <div className="p-20 text-center text-muted-foreground">
                  Media preview not available for {selectedMedia.title}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
