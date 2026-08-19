import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: 'Devo già saper programmare?',
      answer: 'No. Puoi iniziare dal percorso “Parti da zero”, con attività guidate su contenuti, template e piccoli servizi. I prompt più tecnici arrivano quando avrai costruito le basi.'
    },
    {
      question: 'Come uso un prompt?',
      answer: 'Apri la scheda, copia il prompt e incollalo nel tuo assistente IA preferito, come ChatGPT o Claude. Poi segui i passaggi proposti, adattandoli alla tua situazione e ai bisogni delle persone a cui vuoi offrire valore.'
    },
    {
      question: 'Quanto tempo devo dedicare?',
      answer: 'Ogni scheda indica una stima. Puoi iniziare dedicando anche solo qualche ora alla settimana: l’obiettivo è imparare facendo e completare un piccolo risultato alla volta.'
    },
    {
      question: 'I guadagni sono garantiti?',
      answer: 'No. Le fasce indicate sono esempi di potenziale, non promesse. I risultati dipendono dalla qualità del lavoro, dal tempo dedicato, dal mercato e dalla capacità di ascoltare i clienti. Qui trovi idee per costruire competenze monetizzabili, non scorciatoie.'
    },
    {
      question: 'Posso usare la versione gratuita di ChatGPT o Claude?',
      answer: 'Sì. Per iniziare sono sufficienti anche gli strumenti gratuiti. Con l’esperienza potrai valutare strumenti aggiuntivi solo se ti aiutano davvero a lavorare meglio.'
    }
  ]

  return <section className="faq">
    <h2>Domande frequenti</h2>
    <div className="faq-list">
      {faqs.map((faq, index) => <div key={faq.question} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
        <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index}>
          {faq.question}<ChevronDown size={20} />
        </button>
        {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
      </div>)}
    </div>
  </section>
}

export default FAQ
