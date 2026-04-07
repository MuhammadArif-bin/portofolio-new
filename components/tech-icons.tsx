'use client'

interface TechIconProps {
  name: string
  size?: number
}

export function getTechIcon(name: string, size: number = 24) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const iconMap: Record<string, JSX.Element> = {
    'HTML': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M3 3h18v18H3z" fill="currentColor" fillOpacity="0.1" />
        <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">HTML5</text>
      </svg>
    ),
    'CSS': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M3 3h18v18H3z" fill="currentColor" fillOpacity="0.1" />
        <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">CSS</text>
      </svg>
    ),
    'JavaScript': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" fill="currentColor" fillOpacity="0.1" rx="2" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">JS</text>
      </svg>
    ),
    'TypeScript': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" fill="currentColor" fillOpacity="0.1" rx="2" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">TS</text>
      </svg>
    ),
    'React': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M12 4c2.5 2 4 3 6 4.5M12 4c-2.5 2-4 3-6 4.5M12 4v16M4 8c2 2.5 3 4 4.5 6M4 8c2-2.5 3-4 4.5-6M4 8h16M20 8c-2 2.5-3 4-4.5 6M20 8c-2-2.5-3-4-4.5-6" />
      </svg>
    ),
    'Next.js': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" fill="currentColor" fillOpacity="0.1" rx="2" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">Next</text>
      </svg>
    ),
    'Python': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <circle cx="8" cy="10" r="3" fill="currentColor" fillOpacity="0.3" />
        <circle cx="16" cy="10" r="3" fill="currentColor" fillOpacity="0.3" />
        <path d="M8 16c2-2 8-2 10 0" stroke="currentColor" fill="none" />
      </svg>
    ),
    'PHP': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" fill="currentColor" fillOpacity="0.1" rx="2" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">PHP</text>
      </svg>
    ),
    'MySQL': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    'Git & GitHub': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" />
        <path d="M8 12l3 3l5-5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    'REST APIs': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" />
        <path d="M6 12l3 3l8-8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    'Responsive Design': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" fill="none" stroke="currentColor" rx="1" />
        <path d="M6 17h12M9 21h6" stroke="currentColor" />
      </svg>
    ),
    'Web Performance': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M3 12h18M12 3v18" stroke="currentColor" />
        <path d="M16 8l-4-4l-4 4" stroke="currentColor" fill="none" />
      </svg>
    ),
    'Database Design': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="currentColor" />
        <path d="M4 6v12c0 1.65 3.6 3 8 3s8-1.35 8-3V6" stroke="currentColor" fill="none" />
        <path d="M4 12c0 1.65 3.6 3 8 3s8-1.35 8-3" stroke="currentColor" fill="none" />
      </svg>
    ),
  }

  return iconMap[name] || null
}

export function TechIcon({ name, size = 32 }: TechIconProps) {
  return (
    <div className="inline-flex items-center justify-center">
      {getTechIcon(name, size)}
    </div>
  )
}
