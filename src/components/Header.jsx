import { Moon, Sun } from 'lucide-react'
import './Header.css'

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>IA → Developer → Profitti</h1>
          <p>100 prompt strategici per usare l'IA come leva e costruire profitti online</p>
        </div>
        <button 
          className="dark-mode-toggle" 
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Attiva modalità chiara' : 'Attiva modalità scura'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Header
