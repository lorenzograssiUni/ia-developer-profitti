import { BookOpen, Code, Rocket } from 'lucide-react'
import './LearningPath.css'

function LearningPath() {
  const paths = [
    {
      icon: <BookOpen size={24} />,
      title: 'Parti da zero',
      description: '10 prompt per chi non ha skill tecniche (writing, template, contenuti)',
      time: '2-3 settimane',
      earnings: '50-150€/mese',
      skills: 'Writing, Template design, Content creation'
    },
    {
      icon: <Code size={24} />,
      title: 'Ho già basi tecniche',
      description: '10 prompt per sviluppatori junior (Java, React, Spring)',
      time: '3-4 settimane',
      earnings: '150-400€/mese',
      skills: 'Java, React, Spring Boot, API design'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Voglio scalare',
      description: '10 prompt per prodotti digitali e automazione',
      time: '4-6 settimane',
      earnings: '400-1000€+/mese',
      skills: 'Micro-SaaS, Automation, Product design'
    }
  ]

  return (
    <section id="percorsi" className="learning-path">
      <h2>Percorsi consigliati</h2>
      <div className="paths-grid">
        {paths.map((path, idx) => (
          <div key={idx} className="path-card">
            <div className="path-icon">{path.icon}</div>
            <h3>{path.title}</h3>
            <p>{path.description}</p>
            <div className="path-stats">
              <div className="stat">
                <span className="stat-label">Tempo</span>
                <span className="stat-value">{path.time}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Guadagno</span>
                <span className="stat-value earnings">{path.earnings}</span>
              </div>
            </div>
            <div className="path-skills">
              <span className="skills-label">Skill acquisite:</span>
              <span>{path.skills}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LearningPath
