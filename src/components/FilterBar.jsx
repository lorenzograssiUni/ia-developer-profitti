import { Filter, X } from 'lucide-react'
import { useState } from 'react'
import './FilterBar.css'

function FilterBar({ filters, setFilters, prompts }) {
  const [isOpen, setIsOpen] = useState(false)

  const allSkills = new Set()
  prompts.forEach(p => {
    if (p['Skill richieste']) {
      const skills = p['Skill richieste'].split(',').map(s => s.trim())
      skills.forEach(s => allSkills.add(s))
    }
  })

  const toggleFilter = (category, value) => {
    setFilters(prev => {
      const current = prev[category]
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
      return { ...prev, [category]: updated }
    })
  }

  const clearFilters = () => {
    setFilters({
      difficulty: [],
      skills: [],
      earnings: [],
      time: [],
      type: []
    })
  }

  const hasActiveFilters = Object.values(filters).some(arr => arr.length > 0)

  return (
    <div className="filter-bar">
      <button 
        className="filter-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter size={18} />
        Filtri
        {hasActiveFilters && <span className="filter-count">{Object.values(filters).reduce((a, b) => a + b.length, 0)}</span>}
      </button>

      {isOpen && (
        <div className="filter-content">
          <div className="filter-section">
            <h4>Livello difficoltà</h4>
            <div className="filter-options">
              {['Principiante', 'Intermedio', 'Avanzato'].map(level => (
                <button
                  key={level}
                  className={`filter-option ${filters.difficulty.includes(level) ? 'active' : ''}`}
                  onClick={() => toggleFilter('difficulty', level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Skill richieste</h4>
            <div className="filter-options skills">
              {Array.from(allSkills).map(skill => (
                <button
                  key={skill}
                  className={`filter-option skill ${filters.skills.includes(skill) ? 'active' : ''}`}
                  onClick={() => toggleFilter('skills', skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Guadagno mensile</h4>
            <div className="filter-options">
              {['0-50€', '50-100€', '100-200€', '200€+'].map(earning => (
                <button
                  key={earning}
                  className={`filter-option ${filters.earnings.includes(earning) ? 'active' : ''}`}
                  onClick={() => toggleFilter('earnings', earning)}
                >
                  {earning}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Tempo di esecuzione</h4>
            <div className="filter-options">
              {['<3 giorni', '3-5 giorni', '5-7 giorni', '7+ giorni'].map(time => (
                <button
                  key={time}
                  className={`filter-option ${filters.time.includes(time) ? 'active' : ''}`}
                  onClick={() => toggleFilter('time', time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Tipo di attività</h4>
            <div className="filter-options">
              {['Freelancing', 'Prodotti digitali', 'Automazione', 'Content', 'Micro-SaaS'].map(type => (
                <button
                  key={type}
                  className={`filter-option ${filters.type.includes(type) ? 'active' : ''}`}
                  onClick={() => toggleFilter('type', type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button className="clear-filters" onClick={clearFilters}>
              <X size={16} />
              Rimuovi filtri
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default FilterBar
