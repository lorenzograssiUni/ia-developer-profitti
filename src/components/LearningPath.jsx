import { BookOpen, Code, Rocket } from 'lucide-react'
import './LearningPath.css'

function LearningPath({ onSelectPath }) {
  const paths = [
    { icon: <BookOpen size={24} />, title: 'Parti da zero', level: 'Principiante', description: 'Prompt accessibili per iniziare con contenuti, template e piccoli servizi.' },
    { icon: <Code size={24} />, title: 'Ho già basi tecniche', level: 'Intermedio', description: 'Idee pratiche per chi conosce già le basi dello sviluppo.' },
    { icon: <Rocket size={24} />, title: 'Voglio scalare', level: 'Avanzato', description: 'Prompt per prodotti, automazioni e progetti più strutturati.' }
  ]

  return <section id="percorsi" className="learning-path"><h2>Percorsi consigliati</h2><div className="paths-grid">{paths.map(path => <button key={path.level} className="path-card" onClick={() => onSelectPath(path.level)}><span className="path-icon">{path.icon}</span><h3>{path.title}</h3><p>{path.description}</p><span className="path-action">Mostra prompt {path.level.toLowerCase()}</span></button>)}</div></section>
}

export default LearningPath
