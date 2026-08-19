import { Filter, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import './FilterBar.css'

const distinct = (prompts, key) => [...new Set(prompts.map(prompt => prompt[key]).filter(Boolean))]

function FilterBar({ filters, setFilters, prompts }) {
  const [isOpen, setIsOpen] = useState(false)
  const options = useMemo(() => ({
    difficulty: distinct(prompts, 'difficulty'),
    skills: [...new Set(prompts.flatMap(prompt => prompt.skills.split(',').map(item => item.trim()).filter(Boolean)))],
    earnings: distinct(prompts, 'earnings'),
    time: distinct(prompts, 'time'),
    type: distinct(prompts, 'type')
  }), [prompts])
  const labels = { difficulty: 'Livello difficoltà', skills: 'Skill richieste', earnings: 'Guadagno mensile', time: 'Tempo di esecuzione', type: 'Tipo di attività' }
  const active = Object.values(filters).some(values => values.length)
  const count = Object.values(filters).reduce((total, values) => total + values.length, 0)
  const toggle = (key, value) => setFilters(current => ({ ...current, [key]: current[key].includes(value) ? current[key].filter(item => item !== value) : [...current[key], value] }))
  const clear = () => setFilters({ difficulty: [], skills: [], earnings: [], time: [], type: [] })

  return <section className="filter-bar">
    <button className="filter-toggle" onClick={() => setIsOpen(value => !value)} aria-expanded={isOpen}><Filter size={18} /> Filtri {active && <span className="filter-count">{count}</span>}</button>
    {isOpen && <div className="filter-content">{Object.entries(options).map(([key, values]) => <div className="filter-section" key={key}><h4>{labels[key]}</h4><div className="filter-options">{values.map(value => <button key={value} className={`filter-option ${filters[key].includes(value) ? 'active' : ''}`} onClick={() => toggle(key, value)}>{value}</button>)}</div></div>)}{active && <button className="clear-filters" onClick={clear}><X size={16} /> Rimuovi filtri</button>}</div>}
  </section>
}

export default FilterBar
