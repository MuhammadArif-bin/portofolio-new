'use client'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AKA Laundry-Informasi Layanan & Cek Resi',
      description: 'Kami melayani laundry dengan sistem offline. Halaman ini untuk informasi paket layanan, lokasi, dan pengecekan resi.',
      stack: ['CodeIgniter4', 'JavaScript', 'MySQL', 'PHP'],
      achievements: 'Optimized database queries, responsive design, secure payment handling',
      status: 'Completed',
      url: 'https://laundrykuporject.great-site.net',
      image: 'aka laundry.png',
    },
    {
      id: 2,
      title: 'Remove-Background',
      description: 'Hapus latar belakang gambar secara online dan gratis. Ubah JPG/PNG menjadi transparan (background transparan) secara otomatis dengan AI. Tanpa pendaftaran, hasil berkualitas HD.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      achievements: 'JWT authentication, responsive UI, database optimization',
      status: 'Completed',
      url: 'http://remove-background-pearl.vercel.app',
      image: 'foto-RemoveBackground.png',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website dengan cyberpunk aesthetic dan modern design patterns',
      stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      achievements: 'Neon design system, accessible components, smooth animations',
      status: 'In Progress',
      url: 'https://example.com/portfolio',
      image: '/placeholder.jpg',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Blog platform dengan markdown support, user authentication, dan comment system',
      stack: ['Next.js', 'JavaScript', 'PHP', 'MySQL'],
      achievements: 'SEO optimization, markdown parsing, user management',
      status: 'Completed',
      url: 'https://example.com/blog-platform',
      image: '/placeholder.jpg',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold glow-text mb-2">
            PROJECTS & ACHIEVEMENTS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="neon-box-accent p-8 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group relative overflow-hidden"
            >
              {project.image ? (
                <div
                  className="absolute inset-0 opacity-30 bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url("${encodeURI(project.image)}")` }}
                />
              ) : null}
              <div className="absolute inset-0 bg-black/70 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-400 bg-opacity-10 px-3 py-1 rounded">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 pb-6 border-b border-purple-500 border-opacity-30">
                  <p className="text-sm text-gray-400 mb-2 font-semibold">
                    TECH STACK:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-purple-500 bg-opacity-20 text-purple-300 px-3 py-1 rounded border border-purple-500 border-opacity-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    <span className="text-cyan-400 font-semibold">ACHIEVEMENTS:</span>{' '}
                    {project.achievements}
                  </p>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span className="underline underline-offset-4">
                        Visit Website
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
