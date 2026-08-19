import { Copy, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import './PromptModal.css'

function PromptModal({ prompt, onClose }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(prompt.effectivePrompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  useEffect(() => {
    const closeWithEscape = event => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeWithEscape)
    return () => window.removeEventListener('keydown', closeWithEscape)
  }, [onClose])

  return <div className="modal-overlay" onMouseDown={onClose} role="presentation">
    <section className="modal-content" onMouseDown={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="prompt-title">
      <button className="modal-close" onClick={onClose} aria-label="Chiudi dettaglio"><X size={24} /></button>
      <div className="modal-header"><span className="modal-number">Prompt #{prompt.id}</span><h2 id="prompt-title">{prompt.title}</h2></div>
      <div className="modal-body">
        <div className="info-grid">
          {prompt.difficulty && <div className="info-item"><span className="info-label">Livello</span><span className="info-value difficulty">{prompt.difficulty}</span></div>}
          {prompt.time && <div className="info-item"><span className="info-label">Tempo stimato</span><span className="info-value">{prompt.time}</span></div>}
          {prompt.earnings && <div className="info-item"><span className="info-label">Potenziale mensile</span><span className="info-value earnings">{prompt.earnings}</span></div>}
          {prompt.type && <div className="info-item"><span className="info-label">Attività</span><span className="info-value">{prompt.type}</span></div>}
        </div>
        {!!prompt.skills && <div className="info-section"><h3>Skill richieste</h3><div className="skills-list">{prompt.skills.split(',').map(skill => <span key={skill.trim()} className="skill-badge-modal">{skill.trim()}</span>)}</div></div>}
        <div className="prompt-box">
          <div className="prompt-box-header"><span>Prompt effettivo</span><button className="copy-prompt-btn" onClick={copy}><Copy size={16} />{copied ? 'Copiato!' : 'Copia prompt'}</button></div>
          <pre className="prompt-text">{prompt.effectivePrompt}</pre>
        </div>
        <button className="back-btn" onClick={onClose}>Torna alla lista</button>
      </div>
    </section>
  </div>
}

export default PromptModal
