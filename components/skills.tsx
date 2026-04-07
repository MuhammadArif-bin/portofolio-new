'use client'

import { TechIcon } from './tech-icons'

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', proficiency: 95 },
        { name: 'CSS', proficiency: 92 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'React', proficiency: 88 },
        { name: 'Next.js', proficiency: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', proficiency: 80 },
        { name: 'PHP', proficiency: 82 },
        { name: 'MySQL', proficiency: 85 },
        { name: 'Database Design', proficiency: 83 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', proficiency: 88 },
        { name: 'REST APIs', proficiency: 87 },
        { name: 'Responsive Design', proficiency: 90 },
        { name: 'Web Performance', proficiency: 80 },
      ],
    },
  ]

  const techStack = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'PHP',
    'MySQL',
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold glow-text mb-2">
            SKILLS & TECH STACK
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 neon-text">
            {'[ PRIMARY TECHNOLOGIES ]'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="neon-box p-4 rounded-lg text-center hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 group cursor-pointer flex flex-col items-center gap-3"
              >
                <div className="text-cyan-400 group-hover:text-white transition-colors">
                  <TechIcon name={tech} size={32} />
                </div>
                <p className="font-bold text-cyan-400 group-hover:text-white transition-colors text-sm">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-purple-400 mb-8">
                {'► ' + category.category.toUpperCase()}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-cyan-400 group-hover:text-white transition-colors flex-shrink-0">
                        <TechIcon name={skill.name} size={24} />
                      </div>
                      <div className="flex items-center justify-between flex-1">
                        <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </p>
                        <span className="text-cyan-400 font-mono text-sm">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="neon-box h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full transition-all duration-500 shadow-lg shadow-cyan-400/50"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 neon-box-accent rounded-lg">
          <h3 className="text-lg font-bold text-purple-400 mb-4">
            {'> LEARNING & GROWTH'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-cyan-400 font-semibold mb-2">Currently Learning</p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Advanced Next.js patterns</li>
                <li>• Web Performance optimization</li>
                <li>• Cloud deployment</li>
              </ul>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold mb-2">Passionate About</p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Full-stack development</li>
                <li>• UI/UX implementation</li>
                <li>• Database optimization</li>
              </ul>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold mb-2">Future Goals</p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Become expert full-stack dev</li>
                <li>• Build impactful products</li>
                <li>• Contribute to open-source</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
