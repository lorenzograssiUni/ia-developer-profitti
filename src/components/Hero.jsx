import { ArrowRight } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Non è la solita lista di "prompt magici"</h2>
        <p>
          Questo è un percorso che ti mostra come usare ChatGPT/Claude come assistente personale 
          per costruire skill da developer e monetizzarle velocemente.
        </p>
        <div className="hero-badges">
          <span className="badge">Perfetto per principianti</span>
          <span className="badge">Studenti</span>
          <span className="badge">Career switcher</span>
        </div>
        <a href="#percorsi" className="cta-button">
          Inizia dal percorso guidato
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  )
}

export default Hero
