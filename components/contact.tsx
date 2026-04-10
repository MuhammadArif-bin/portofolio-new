"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      id: 1,
      icon: Mail,
      label: "Email",
      value: "arifykt@gmail.com",
      href: "15220801@bsi.ac.id",
      color: "text-red-400",
    },
    {
      id: 2,
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammad arif giovanni",
      href: "https://www.linkedin.com/in/muhammad-arif-giovanni-50792b3a8",
      color: "text-blue-400",
    },
    {
      id: 3,
      icon: Github,
      label: "GitHub",
      value: "MuhammadArif-bin",
      href: "https://github.com/MuhammadArif-bin",
      color: "text-white",
    },
    {
      id: 4,
      icon: Instagram,
      label: "Instagram",
      value: "m.arifgiovanni",
      href: "https://www.instagram.com/m.arifgiovanni",
      color: "text-pink-400",
    },
  ];

  return (
    <>
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold glow-text mb-2">
              GET IN TOUCH
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>

          {/* Main Contact Message */}
          <div className="neon-box-accent p-12 rounded-lg mb-16 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let&apos;s Create Something Amazing Together
            </h3>
            <p className="text-blue-300 text-lg mb-6 leading-relaxed">
              Saya terbuka untuk kolaborasi, freelance projects, atau sekedar
              chat tentang web development. Feel free to reach out!
            </p>
            <p className="text-cyan-400 font-semibold">
              {"[ open for opportunities 2025 ]"}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactLinks.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <Link
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-box p-8 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-lg neon-box ${contact.color} flex-shrink-0`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-blue-400 uppercase tracking-wider">
                        {contact.label}
                      </p>
                      <p className="text-white font-semibold truncate group-hover:text-cyan-400 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-cyan-400 border-opacity-30">
            <Link
              href="#about"
              className="text-cyan-400 hover:text-white transition-colors font-semibold"
            >
              About
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="#projects"
              className="text-cyan-400 hover:text-white transition-colors font-semibold"
            >
              Projects
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="#timeline"
              className="text-cyan-400 hover:text-white transition-colors font-semibold"
            >
              Timeline
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="#skills"
              className="text-cyan-400 hover:text-white transition-colors font-semibold"
            >
              Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 border-t border-cyan-400 border-opacity-20 py-8 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div>
              <h4 className="text-lg font-bold text-cyan-400 neon-text mb-2">
                {" TEKNIK & INFORMATIKA "}
              </h4>
              <p className="text-blue-400 text-sm">
                Bina Sarana Informatika Portfolio
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-cyan-400 font-semibold mb-4">Follow Me</p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/MuhammadArif-bin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-box p-3 rounded hover:bg-cyan-400 hover:bg-opacity-10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-cyan-400" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammad-arif-giovanni-50792b3a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-box p-3 rounded hover:bg-cyan-400 hover:bg-opacity-10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </Link>
                <Link
                  href="https://www.instagram.com/m.arifgiovanni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-box p-3 rounded hover:bg-cyan-400 hover:bg-opacity-10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-cyan-400" />
                </Link>
                <Link
                  href="mailto:arifykt@gmail.com"
                  className="neon-box p-3 rounded hover:bg-cyan-400 hover:bg-opacity-10 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                </Link>
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-cyan-400 font-semibold mb-4">Based In</p>
              <p className="text-gray-400 text-sm">Indonesia</p>
              <p className="text-gray-400 text-sm mt-2">
                Always open to new opportunities
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-cyan-400 border-opacity-20 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Teknik & Informatika | Bina Sarana Informatika. Crafted
              with <span className="text-cyan-400">{"<3"}</span> using Next.js &
              TypeScript
            </p>
            <p className="text-gray-600 text-xs mt-2 font-mono">
              {"[ portfolio.v1.0 ] [ cyberpunk-theme ]"}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
