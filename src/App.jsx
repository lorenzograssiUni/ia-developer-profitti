import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import Header from './components/Header'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import PromptList from './components/PromptList'
import PromptModal from './components/PromptModal'
import LearningPath from './components/LearningPath'
import FAQ from './components/FAQ'
import './styles/App.css'

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
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedDarkMode)
    setViewedCount(JSON.parse(localStorage.getItem('viewedPrompts') || '[]').length)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  useEffect(() => {
    fetch('/data/prompts.csv')
      .then(response => {
        if (!response.ok) throw new Error('Il file dei prompt non è disponibile.')
        return response.text()
      })
      .then(csvText => {
        const result = Papa.parse(csvText, { header: true, skipEmptyLines: true })
        const data = result.data.filter(row => row['#'] && row.Prompt)
        if (!data.length) throw new Error('Il file non contiene prompt validi.')
        setPrompts(data)
      })
      .catch(error => {
        console.error('Errore caricamento CSV:', error)
        setLoadError('Non siamo riusciti a caricare i prompt. Ricarica la pagina tra qualche istante.')
      })
      .finally(() => setLoading(false))
  }, [])

  const filteredPrompts = prompts.filter(prompt => {
    const text = `${prompt.Prompt || ''} ${prompt['Perché fa per te'] || ''}`.toLowerCase()
    const matchesSearch = !searchTerm || text.includes(searchTerm.toLowerCase())
    const matchesDifficulty = !filters.difficulty.length || filters.difficulty.includes(prompt.Difficoltà)
    const matchesSkills = !filters.skills.length || filters.skills.some(skill => prompt['Skill richieste']?.includes(skill))
    const matchesEarnings = !filters.earnings.length || filters.earnings.includes(prompt['Guadagno mensile'])
    const matchesTime = !filters.time.length || filters.time.includes(prompt.Tempo)
    const matchesType = !filters.type.length || filters.type.includes(prompt['Tipo attività'])
    return matchesSearch && matchesDifficulty && matchesSkills && matchesEarnings && matchesTime && matchesType
  })

  const handlePromptClick = prompt => {
    setSelectedPrompt(prompt)
    const viewed = JSON.parse(localStorage.getItem('viewedPrompts') || '[]')
    if (!viewed.includes(prompt['#'])) {
      const updated = [...viewed, prompt['#']]
      localStorage.setItem('viewedPrompts', JSON.stringify(updated))
      setViewedCount(updated.length)
    }
  }

  if (loading) return <div className="loading-container"><div className="loading-spinner" /><p>Caricamento dei percorsi in corso...</p></div>
  if (loadError) return <div className="loading-container"><p>{loadError}</p></div>

  return <div className="app">
    <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(value => !value)} />
    <Hero />
    <LearningPath />
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <FilterBar filters={filters} setFilters={setFilters} prompts={prompts} />
    <PromptList prompts={filteredPrompts} onPromptClick={handlePromptClick} viewedCount={viewedCount} totalCount={prompts.length} />
    <FAQ />
    {selectedPrompt && <PromptModal prompt={selectedPrompt} onClose={() => setSelectedPrompt(null)} />}
  </div>
}

export default App
