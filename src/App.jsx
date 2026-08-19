import { useEffect, useMemo, useState } from 'react'
import Papa from 'papaparse'
import csvUrl from './data/-Prompt-Perchfaperte.csv?url'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import PromptList from './components/PromptList'
import PromptModal from './components/PromptModal'
import LearningPath from './components/LearningPath'
import FAQ from './components/FAQ'
import './styles/App.css'

const normalizeKey = value => String(value || '').replace(/^\uFEFF/, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/gi, '').toLowerCase()
const readColumn = (row, ...names) => {
  const normalized = Object.fromEntries(Object.entries(row).map(([key, value]) => [normalizeKey(key), String(value || '').trim()]))
  return names.map(normalizeKey).map(key => normalized[key]).find(Boolean) || ''
}

function App() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({ difficulty: [], skills: [], earnings: [], time: [], type: [] })
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [viewedCount, setViewedCount] = useState(0)

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true')
    setViewedCount(JSON.parse(localStorage.getItem('viewedPrompts') || '[]').length)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  useEffect(() => {
    fetch(csvUrl)
      .then(response => {
        if (!response.ok) throw new Error('File CSV non disponibile')
        return response.text()
      })
      .then(text => {
        const parsed = Papa.parse(text, { header: true, skipEmptyLines: true })
        const normalized = parsed.data.map(row => ({
          id: readColumn(row, '#', 'numero', 'id'),
          title: readColumn(row, 'titolo'),
          difficulty: readColumn(row, 'difficoltà°°', 'difficoltà', 'difficolta'),
          skills: readColumn(row, 'skill richieste', 'skill'),
          earnings: readColumn(row, 'guadagno mensile', 'guadagno'),
          time: readColumn(row, 'tempo', 'tempo stimato'),
          type: readColumn(row, 'tipo attività', 'tipo attivita', 'tipo'),
          effectivePrompt: readColumn(row, 'prompt effettivo'),
          raw: row
        })).filter(item => item.id && item.title)
        if (!normalized.length) throw new Error('Nessun prompt valido nel CSV')
        setPrompts(normalized)
      })
      .catch(error => {
        console.error(error)
        setLoadError('Non siamo riusciti a caricare i prompt. Riprova tra qualche istante.')
      })
      .finally(() => setLoading(false))
  }, [])

  const filteredPrompts = useMemo(() => prompts.filter(prompt => {
    const content = `${prompt.title} ${prompt.effectivePrompt} ${prompt.skills} ${prompt.type}`.toLowerCase()
    const selectedSkills = prompt.skills.split(',').map(item => item.trim())
    return (!searchTerm || content.includes(searchTerm.toLowerCase())) &&
      (!filters.difficulty.length || filters.difficulty.includes(prompt.difficulty)) &&
      (!filters.skills.length || filters.skills.some(skill => selectedSkills.includes(skill))) &&
      (!filters.earnings.length || filters.earnings.includes(prompt.earnings)) &&
      (!filters.time.length || filters.time.includes(prompt.time)) &&
      (!filters.type.length || filters.type.includes(prompt.type))
  }), [prompts, searchTerm, filters])

  const selectPath = difficulty => {
    setFilters(current => ({ ...current, difficulty: [difficulty] }))
    document.getElementById('prompt-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePromptClick = prompt => {
    setSelectedPrompt(prompt)
    const viewed = JSON.parse(localStorage.getItem('viewedPrompts') || '[]')
    if (!viewed.includes(prompt.id)) {
      const updated = [...viewed, prompt.id]
      localStorage.setItem('viewedPrompts', JSON.stringify(updated))
      setViewedCount(updated.length)
    }
  }

  if (loading) return <div className="loading-container"><div className="loading-spinner" /><p>Caricamento dei percorsi in corso...</p></div>
  if (loadError) return <div className="loading-container"><p>{loadError}</p></div>

  return <div className="app">
    <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(value => !value)} />
    <Hero />
    <LearningPath onSelectPath={selectPath} />
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <FilterBar filters={filters} setFilters={setFilters} prompts={prompts} />
    <PromptList prompts={filteredPrompts} onPromptClick={handlePromptClick} viewedCount={viewedCount} totalCount={prompts.length} />
    <FAQ />
    {selectedPrompt && <PromptModal prompt={selectedPrompt} onClose={() => setSelectedPrompt(null)} />}
  </div>
}

export default App
