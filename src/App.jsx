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
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    difficulty: [],
    skills: [],
    earnings: [],
    time: [],
    type: []
  })
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [viewedCount, setViewedCount] = useState(0)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedDarkMode)
    if (savedDarkMode) {
      document.body.classList.add('dark-mode')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  useEffect(() => {
    fetch('/src/data/prompts-demo.csv')
      .then(res => res.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { header: true })
        const data = parsed.data.filter(row => row['#'] && row['#'].trim() !== '')
        setPrompts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Errore caricamento CSV:', err)
        setLoading(false)
      })
  }, [])

  const filteredPrompts = prompts.filter(prompt => {
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch = !searchTerm || 
      prompt['Prompt'].toLowerCase().includes(searchLower) ||
      (prompt['Perché·¢fa per te'] && prompt['Perché·¢fa per te'].toLowerCase().includes(searchLower))

    const matchesDifficulty = filters.difficulty.length === 0 || 
      filters.difficulty.includes(prompt['Difficoltà·¢'])
    
    const matchesSkills = filters.skills.length === 0 || 
      filters.skills.some(skill => prompt['Skill richieste']?.includes(skill))
    
    const matchesEarnings = filters.earnings.length === 0 || 
      filters.earnings.includes(prompt['Guadagno mensile'])
    
    const matchesTime = filters.time.length === 0 || 
      filters.time.includes(prompt['Tempo'])
    
    const matchesType = filters.type.length === 0 || 
      filters.type.includes(prompt['Tipo attività'])

    return matchesSearch && matchesDifficulty && matchesSkills && matchesEarnings && matchesTime && matchesType
  })

  const handlePromptClick = (prompt) => {
    setSelectedPrompt(prompt)
    setViewedCount(prev => {
      const viewed = JSON.parse(localStorage.getItem('viewedPrompts') || '[]')
      if (!viewed.includes(prompt['#'])) {
        viewed.push(prompt['#'])
        localStorage.setItem('viewedPrompts', JSON.stringify(viewed))
      }
      return viewed.length
    })
  }

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Caricamento prompt in corso...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <LearningPath />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar filters={filters} setFilters={setFilters} prompts={prompts} />
      <PromptList 
        prompts={filteredPrompts} 
        onPromptClick={handlePromptClick}
        viewedCount={viewedCount}
        totalCount={prompts.length}
      />
      <FAQ />
      {selectedPrompt && (
        <PromptModal 
          prompt={selectedPrompt} 
          onClose={() => setSelectedPrompt(null)} 
        />
      )}
    </div>
  )
}

export default App
