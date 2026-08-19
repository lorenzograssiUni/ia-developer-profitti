import { Copy, ChevronRight } from 'lucide-react'
import './PromptCard.css'

function PromptCard({ prompt, onClick }) {
  const difficultyColors = {
    'Principiante': '#48bb78',
    'Intermedio': '#ecc94b',
    'Avanzato': '#f56565'
  }

  const copyPrompt = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(prompt['Prompt'])
  }

  return (
    <div className="prompt-card" onClick={() => onClick(prompt)}>
      <div className="card-header">
        <span className="prompt-number">#{prompt['#']}</span>
        <button className="copy-btn" onClick={copyPrompt} aria-label="Copia prompt">
          <Copy size={16} />
        </button>
      </div>
      
      <h3 className="card-title">{prompt['Prompt'].split(' ').slice(0, 10).join(' ')}...</h3>
      
      <div className="card-badges">
        <span 
          className="badge difficulty"
          style={{ backgroundColor: difficultyColors[prompt['Difficoltà·¢']] || '#718096' }}
        >
          {prompt['Difficoltà·¢']}
        </span>
        
        {prompt['Guadagno mensile'] && (
          <span className="badge earnings">{prompt['Guadagno mensile']}</span>
        )}
        
        {prompt['Tempo'] && (
          <span className="badge time">{prompt['Tempo']}</span>
        )}
      </div>

      {prompt['Skill richieste'] && (
        <div className="skills-container">
          {prompt['Skill richieste'].split(',').map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill.trim()}</span>
          ))}
        </div>
      )}

      <button className="read-more-btn">
        Leggi dettagli
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

export default PromptCard
