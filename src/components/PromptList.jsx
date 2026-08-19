import PromptCard from './PromptCard'
import './PromptList.css'

function PromptList({ prompts, onPromptClick, viewedCount, totalCount }) {
  return <section id="prompt-list" className="prompt-list">
    <div className="list-header"><h2>Tutti i prompt</h2><span className="viewed-counter">{viewedCount} visualizzati su {totalCount}</span></div>
    {!prompts.length ? <div className="no-results"><h3>Nessun prompt trovato</h3><p>Prova a modificare la ricerca o a rimuovere qualche filtro.</p></div> : <div className="cards-grid">{prompts.map(prompt => <PromptCard key={prompt.id} prompt={prompt} onClick={onPromptClick} />)}</div>}
  </section>
}

export default PromptList
