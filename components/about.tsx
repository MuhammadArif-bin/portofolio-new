'use client'

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold glow-text mb-2">
            ABOUT ME
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="neon-box p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                {'>Introduction'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Saya adalah mahasiswa Universitas Bina Sarana Informatika dengan fakultas Teknik & Informatika dengan passion yang tinggi 
                dalam Web Development dan Software Engineering. Saya percaya bahwa teknologi harus digunakan untuk menciptakan solusi yang 
                meaningful dan accessible untuk semua orang.

                Sebagai seorang IT Enthusiast, Saya menciptakan jam terbang untuk menjembatani kesenjangan antara intusias manusia dan presisi mesin
                Perjalanan saya dimulai dengan adanya rasa ingin tahu terhadap dunia programming dan dunia digital, dimana baris-baris kode menjadi bahasa 
                pertama saya dalam menciptakan suatu project, dimulai dengan project yang sederhana.  
              </p>
            </div>

            <div className="neon-box p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                {'> PASSION'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Saya sangat antusias dalam membuat aplikasi web yang user-friendly, mengoptimalkan database, 
                dan mengimplementasikan best practices dalam development. Selalu eager untuk belajar teknologi 
                baru dan berkontribusi pada proyek-proyek yang meaningful.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="neon-box-accent p-8 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                {'> EDUCATION'}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-cyan-400 font-semibold">Bina Sarana Informatika</p>
                  <p className="text-gray-400">Teknik & Informatika</p>
                  <p className="text-sm text-gray-500">2023 - Present</p>
                </div>
              </div>
            </div>

            <div className="neon-box p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                {'> GOALS'}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Menjadi Full-stack Developer yang kompeten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Berkontribusi pada open-source projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Membangun produk yang solve real problems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
