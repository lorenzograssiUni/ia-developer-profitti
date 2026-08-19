import { X, Copy, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import './PromptModal.css'

function PromptModal({ prompt, onClose }) {
  const [copied, setCopied] = useState(false)

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt['Prompt'])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Chiudi">
          <X size={24} />
        </button>

        <div className="modal-header">
          <span className="modal-number">Prompt #{prompt['#']}</span>
          <h2>{prompt['Prompt']}</h2>
        </div>

        <div className="modal-body">
          <div className="prompt-box">
            <div className="prompt-box-header">
              <span>Prompt completo</span>
              <button className="copy-prompt-btn" onClick={copyPrompt}>
                <Copy size={16} />
                {copied ? 'Copiato!' : 'Copia'}
              </button>
            </div>
            <p className="prompt-text">{prompt['Prompt']}</p>
          </div>

          {prompt['Perché·¢fa per te'] && (
            <div className="info-section">
              <h3>Caso di studio</h3>
              <p>{prompt['Perché·¢fa per te']}</p>
            </div>
          )}

          <div className="info-grid">
            {prompt['Tempo'] && (
              <div className="info-item">
                <span className="info-label">Tempo stimato</span>
                <span className="info-value">{prompt['Tempo']}</span>
              </div>
            )}
            
            {prompt['Guadagno mensile'] && (
              <div className="info-item">
                <span className="info-label">Guadagno mensile</span>
                <span className="info-value earnings">{prompt['Guadagno mensile']}</span>
              </div>
            )}

            {prompt['Difficoltà·¢'] && (
              <div className="info-item">
                <span className="info-label">Difficoltà·¢</span>
                <span className="info-value difficulty">{prompt['Difficoltà·¢']}</span>
              </div>
            )}
          </div>

          {prompt['Skill richieste'] && (
            <div className="info-section">
              <h3>Skill richieste</h3>
              <div className="skills-list">
                {prompt['Skill richieste'].split(',').map((skill, idx) => (
                  <span key={idx} className="skill-badge-modal">{skill.trim()}</span>
                ))}
              </div>
            </div>
          )}

          <div className="info-section">
            <h3>Cosa impari da questo prompt</h3>
            <p>Costruirai competenze pratiche immediatamente monetizzabili nel mercato reale.</p>
          </div>

          <div className="next-step">
            <h3>Prossimo step consigliato</h3>
            <p>Esplora altri prompt correlati nella lista principale per continuare il tuo percorso.</p>
            <button className="back-btn" onClick={onClose}>
              Torna alla lista
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptModal
