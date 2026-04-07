'use client'

export function Timeline() {
  const milestones = [
    {
      id: 1,
      year: '2025',
      title: 'IT Bootcamp',
      description: 'Tranformasi Digital : Integrasi IoT & kecerdasan buatan untuk solusi masa',
      icon: '🚀',
      certificateUrl: '1.PNG',
    },
    {
      id: 2,
      year: '2024',
      title: 'Cisco Networking Academy',
      description: 'CCNAv7: Introduction to Networks',
      icon: '🌐',
      certificateUrl: '2.PNG',
    },
    {
      id: 3,
      year: '2026',
      title: 'Mikrotik Networking Academy',
      description: 'Mikrotik MTCNA: Mikrotik Certified Network Associate',
      icon: '📡',
      certificateUrl: '3.PNG',
    },
    {
      id: 4,
      year: '2023',
      title: 'Cisco Networking Academy',
      description: 'PCAP: Programming Essentials In Python',
      icon: '🐍',
      certificateUrl: '4.PNG',
    },
    {
      id: 5,
      year: '2022',
      title: 'Seminar',
      description: 'Fundamental Of User Interface, User Experience',
      icon: '🎨',
      certificateUrl: '5.PNG',
    },
    {
      id: 6,
      year: '2025',
      title: 'JNKTI: Jurnal Nasional Komputasi dan Teknologi Informasi',
      description: 'Analisis Sentimen Pengguna TikTok Terhadap Postingan Tiktok Smartfrenworld Menggunakan Algoritma Logistic Regression',
      icon: '✨',
      linkUrl: 'https://ojs.serambimekkah.ac.id/jnkti/article/view/9945',
    },
  ]
  return (
    <section
      id="timeline"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold glow-text mb-2">
            ACHIEVEMENT TIMELINE
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    }`}
                >
                  <div className="neon-box p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{milestone.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-mono text-cyan-400 mb-2">
                          {'[ ' + milestone.year + ' ]'}
                        </p>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {milestone.description}
                        </p>
                        {milestone.certificateUrl ? (
                          <a
                            href={milestone.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <span className="underline underline-offset-4">
                              Lihat Sertifikat
                            </span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        ) : null}
                        {milestone.linkUrl ? (
                          <a
                            href={milestone.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-sm font-mono text-purple-300 hover:text-purple-200 transition-colors"
                          >
                            <span className="underline underline-offset-4">
                              Lihat Detail
                            </span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 justify-center items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-500 border-4 border-cyan-400 shadow-lg shadow-cyan-400/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
