import { Search } from 'lucide-react'
import './SearchBar.css'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <Search size={20} className="search-icon" />
      <input
        type="text"
        placeholder="Cerca prompt per keyword o caso di studio..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Cerca prompt"
      />
    </div>
  )
}

export default SearchBar
