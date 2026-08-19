import { Copy, ChevronRight } from 'lucide-react'
import './PromptCard.css'

const difficultyColors = { Principiante: '#48bb78', Intermedio: '#ecc94b', Avanzato: '#f56565' }

function PromptCard({ prompt, onClick }) {
  const copyPrompt = event => {
    event.stopPropagation()
    navigator.clipboard.writeText(prompt.effectivePrompt)
  }

  return <article className="prompt-card" onClick={() => onClick(prompt)} tabIndex="0" onKeyDown={event => event.key === 'Enter' && onClick(prompt)}>
    <div className="card-header">
      <span className="prompt-number">#{prompt.id}</span>
      <button className="copy-btn" onClick={copyPrompt} aria-label={`Copia prompt ${prompt.id}`}><Copy size={16} /></button>
    </div>
    <div className="card-content">
      <h3 className="card-title">{prompt.title}</h3>
      <div className="card-badges">
        {prompt.difficulty && <span className="badge difficulty" style={{ backgroundColor: difficultyColors[prompt.difficulty] || '#718096' }}>{prompt.difficulty}</span>}
        {prompt.earnings && <span className="badge earnings">{prompt.earnings}</span>}
        {prompt.time && <span className="badge time">{prompt.time}</span>}
      </div>
      {!!prompt.skills && <div className="skills-container">{prompt.skills.split(',').map(skill => <span key={skill.trim()} className="skill-badge">{skill.trim()}</span>)}</div>}
    </div>
    <button className="read-more-btn">Leggi dettagli <ChevronRight size={16} /></button>
  </article>
}

export default PromptCard
