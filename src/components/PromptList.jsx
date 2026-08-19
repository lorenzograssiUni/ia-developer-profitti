import PromptCard from './PromptCard'
import './PromptList.css'

function PromptList({ prompts, onPromptClick, viewedCount, totalCount }) {
  if (prompts.length === 0) {
    return (
      <div className="no-results">
        <h3>Nessun prompt trovato</h3>
        <p>Prova a modificare i filtri o la ricerca per trovare quello che cerchi.</p>
      </div>
    )
  }

  return (
    <div className="prompt-list">
      <div className="list-header">
        <h2>Tutti i prompt</h2>
        <span className="viewed-counter">
          {viewedCount} visualizzati su {totalCount}
        </span>
      </div>
      <div className="cards-grid">
        {prompts.map((prompt, idx) => (
          <PromptCard 
            key={idx} 
            prompt={prompt} 
            onClick={onPromptClick} 
          />
        ))}
      </div>
    </div>
  )
}

export default PromptList
