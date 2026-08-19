import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Devo saper programmare?',
      answer: 'No! I primi percorsi sono pensati per chi parte da zero. Puoi iniziare con attività di writing, creazione di template e contenuti. Man mano che acquisisci confidenza, puoi esplorare prompt più tecnici.'
    },
    {
      question: 'Quanto tempo serve?',
      answer: 'Dipende dal percorso scelto. I percorsi base richiedono 2-3 settimane con 1-2 ore al giorno. Quelli più avanzati possono richiedere 4-6 settimane. La flessibilità·¢ è totale: lavori sui tuoi tempi.'
    },
    {
      question: 'È·̈ sicuro?',
      answer: 'Assolutamente sì. Non stai comprando corsi o facendo investimenti. Stai imparando a usare strumenti gratuiti (ChatGPT, Claude) per costruire competenze reali e monetizzarle. Zero rischi economici.'
    },
    {
      question: 'Posso sostituire il CSV con i miei 100 prompt?',
      answer: 'Sì·¨! Il file CSV demo include 10 prompt di esempio. Per usare i tuoi 100 prompt, sostituisci semplicemente il file /src/data/prompts-demo.csv con il tuo file CSV completo.'
    },
    {
      question: 'Come personalizzo colori e branding?',
      answer: 'Tutti i colori sono definiti nei file CSS. Modifica le variabili colore in /src/styles/index.css e nei vari component CSS per adattare il design al tuo brand.'
    }
  ]

  return (
    <section className="faq">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`faq-item ${openIndex === idx ? 'open' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.question}
              <ChevronDown size={20} />
            </button>
            {openIndex === idx && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
