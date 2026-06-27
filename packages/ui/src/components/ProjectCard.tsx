import React from 'react'

export type ProjectColorClass = 'blue' | 'red' | 'green' | 'orange' | 'purple' | 'default'

const colorMap: Record<ProjectColorClass, { bg: string; well: string }> = {
  blue:    { bg: 'linear-gradient(135deg, #eef1ff, #e3e9fb)', well: 'rgba(108, 140, 255, 0.16)' },
  red:     { bg: 'linear-gradient(135deg, #fdeeee, #fbe3e3)', well: 'rgba(255, 107, 107, 0.16)' },
  green:   { bg: 'linear-gradient(135deg, #eafaf0, #e0f5e9)', well: 'rgba(77, 200, 130, 0.18)' },
  orange:  { bg: 'linear-gradient(135deg, #fdf3e6, #faecd8)', well: 'rgba(220, 150, 40, 0.16)' },
  purple:  { bg: 'linear-gradient(135deg, #f6eefd, #efe3fb)', well: 'rgba(200, 130, 255, 0.16)' },
  default: { bg: 'linear-gradient(135deg, #f0f4e3, #e8f1cf)', well: 'rgba(163, 204, 46, 0.20)' },
}

export interface ProjectCardProps {
  title: string
  description: string
  tags?: string[]
  icon: string
  colorClass?: ProjectColorClass
  href?: string
  onClick?: () => void
}

export function ProjectCard({
  title,
  description,
  tags = [],
  icon,
  colorClass = 'default',
  href,
  onClick,
}: ProjectCardProps) {
  const colors = colorMap[colorClass]

  const card = (
    <div className="project-card" onClick={onClick} role={onClick ? 'button' : undefined}>
      <div className="project-visual" style={{ background: colors.bg }}>
        <div className="icon-wrap" style={{ background: colors.well }}>{icon}</div>
      </div>
      <div className="project-arrow">↗</div>
      <div className="project-info">
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
          </div>
        )}
        <div className="project-name">{title}</div>
        <div className="project-desc">{description}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
        {card}
      </a>
    )
  }
  return card
}
