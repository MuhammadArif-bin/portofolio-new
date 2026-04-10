'use client'

import Image from 'next/image'
import { Download } from 'lucide-react'

export function Hero() {
  const handleDownloadCV = () => {
    // Create a sample CV download
    const cvContent = `
CURRICULUM VITAE
Student from Bina Sarana Informatika
Teknik & Informatika

CONTACT INFORMATION
Email: 15220801@bsi.ac.id
Phone: +62 xxx xxx xxxx
Location: Indonesia

EDUCATION
Bina Sarana Informatika
Teknik & Informatika
Expected Graduation: 2026

TECHNICAL SKILLS
Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js
Backend: Python, PHP, MySQL
Other: Git, Web Development, Database Design

PROJECTS
- Portfolio Website
- Full-stack Web Applications
- Database Projects
- Mobile Responsive Websites

LANGUAGES
- Indonesian (Native)
- English (Native)
    `.trim()

    const element = document.createElement('a')
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent)
    )
    element.setAttribute('download', 'CV-Teknik-Informatika.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 grid-background relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="neon-box-accent p-1">
              <div className="relative w-80 h-80 rounded-lg overflow-hidden">
                <Image
                  src="profile-no-bg.png"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold glow-text mb-4">
                WELCOME TO MY PORTFOLIO
              </h1>
              <p className="neon-text text-lg mb-6">
                {'> Student | Developer | Tech Enthusiast'}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Mahasiswa dari Bina Sarana Informatika dengan konsentrasi Teknik & Informatika. Passionate tentang web development,
                database design, dan creating innovative solutions.
              </p>

              <p className="text-cyan-400 font-semibold text-lg">
                {'[ STACK: React | Next.js | TypeScript | PHP | MySQL ]'}
              </p>
            </div>

            <div className="accent-line pt-6" />

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadCV}
                className="neon-box neon-text px-8 py-4 rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2 justify-center font-semibold"
              >
                <Download className="w-5 h-5" />
                DOWNLOAD CV
              </button>

              <a
                href="#about"
                className="neon-box-accent text-white px-8 py-4 rounded-lg hover:bg-purple-500 hover:bg-opacity-10 transition-all duration-300 font-semibold text-center"
              >
                EXPLORE PROJECTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
