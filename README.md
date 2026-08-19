# IA → Developer → Profitti

**100 prompt strategici per usare l'IA come leva e costruire profitti online, anche se parti da zero**

[![Deployed with GitHub Pages](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-blue)](https://lorenzograssiUni.github.io/ia-developer-profitti/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 Descrizione

Non è la solita lista di "prompt magici" per diventare ricchi. Questo è un **percorso educativo** che ti mostra come usare ChatGPT/Claude come assistente personale per costruire skill da developer e monetizzarle velocemente.

### Posizionamento chiaro

- **Titolo:** IA → Developer → Profitti
- **Sottotitolo:** 100 prompt strategici per usare l'IA come leva e costruire profitti online
- **Messaggio chiave:** Costruisci competenze reali, non schemi get-rich-quick

---

## ✨ Feature principali

- 🔍 **Ricerca avanzata** per keyword nei prompt e casi di studio
- 🎚️ **Filtri multipli**: difficoltà, skill, guadagno, tempo, tipo attività
- 🃏 **Card interattive** con copia rapida del prompt
- 📊 **Modal dettagli** con prompt completo, caso di studio, skill acquisite
- 🛤️ **Percorsi guidati**: Parti da zero, Ho basi tecniche, Voglio scalare
- 🌓 **Dark mode** toggle
- 📱 **Responsive design** mobile-first
- ⌨️ **Accessibilità·¢**: keyboard navigation, aria-label, contrasti adeguati
- 📈 **Contatore progressi**: X prompt visualizzati su 100
- 💾 **LocalStorage**: salvataggio progressi e preferenze dark mode

---

## 🚀 Quick Start

### Installazione

```bash
# Clona il repository
git clone https://github.com/lorenzograssiUni/ia-developer-profitti.git
cd ia-developer-profitti

# Installa dipendenze
npm install

# Avvia in development
npm run dev
```

Il server partirà·¢ su `http://localhost:5173/ia-developer-profitti/`

### Build per produzione

```bash
npm run build
npm run preview
```

### Deploy su GitHub Pages

Il deploy è automatico! Ogni push su `main` triggera GitHub Actions che:
1. Builda il progetto
2. Deploya su GitHub Pages

Badge nel README: `![Deployed with GitHub Pages](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-blue)`

---

## 📁 Struttura progetto

```
ia-developer-profitti/
├── src/
│   ├── components/
│   │   ├── Header.jsx + .css
│   │   ├── Hero.jsx + .css
│   │   ├── SearchBar.jsx + .css
│   │   ├── FilterBar.jsx + .css
│   │   ├── PromptCard.jsx + .css
│   │   ├── PromptList.jsx + .css
│   │   ├── PromptModal.jsx + .css
│   │   ├── LearningPath.jsx + .css
│   │   └── FAQ.jsx + .css
│   ├── data/
│   │   └── prompts-demo.csv (10 prompt demo)
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── LICENSE
└── README.md
```

---

## 📝 Come sostituire il CSV con i tuoi 100 prompt

1. Prepara il tuo file CSV con queste colonne:
   ```
   "#","Prompt","Perché·¢fa per te","Difficoltà·¢","Skill richieste","Guadagno mensile","Tempo","Tipo attività"
   ```

2. Sostituisci il file `/src/data/prompts-demo.csv` con il tuo CSV completo

3. I dati verranno caricati automaticamente all'avvio dell'app

**Esempio riga CSV:**
```csv
"1","Micro-SaaS per nicchie (es. tracker MTG)","Sfrutta la tua passione per Magic + skill full-stack","Intermedio","Java, React, Spring Boot","200€+","5-7 giorni","Micro-SaaS"
```

---

## 🎨 Come personalizzare testi e branding

### Modificare testi

- **Header:** `/src/components/Header.jsx` - titolo e sottotitolo
- **Hero:** `/src/components/Hero.jsx` - messaggio principale e badge
- **FAQ:** `/src/components/FAQ.jsx` - domande e risposte
- **Percorsi:** `/src/components/LearningPath.jsx` - percorsi guidati

### Modificare colori

Tutti i colori sono definiti inline nei CSS. Cerca e sostituisci:

- `#4a90e2` → colore primario (blu)
- `#48bb78` → colore guadagni (verde)
- `#ed8936` → colore tempo (arancione)
- `#f0f4ff` → sfondi chiari
- `#1a1a2e` → testo scuro / dark mode background

### Modificare font

Nel file `/src/styles/index.css`, cambia la famiglia font:

```css
:root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  /* Sostituisci con: 'Roboto', 'Poppins', o font custom */
}
```

---

## 🛠️ Stack tecnologico

- **React 18** - UI library
- **Vite** - Build tool e dev server
- **PapaParse** - Parsing CSV
- **Lucide React** - Icone
- **CSS puro** - Zero framework, zero Tailwind/Bootstrap
- **GitHub Pages** - Hosting gratuito
- **GitHub Actions** - CI/CD automatico

---

## 📊 Performance

- ⚡ Caricamento iniziale: <2 secondi
- 🎯 Filtri: istantanei (client-side)
- 📱 Mobile-first: perfetto su smartphone
- ♿ Accessibilità·¢: WCAG 2.1 AA compliant

---

## 🤝 Come contribuire

1. Forka il repository
2. Crea un branch feature (`git checkout -b feature/AmazingFeature`)
3. Commita le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha sul branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

---

## 📄 License

Distribuito sotto license MIT. Vedi `LICENSE` per maggiori informazioni.

---

## 🔗 Link

- **Repository:** https://github.com/lorenzograssiUni/ia-developer-profitti
- **Live Demo:** https://lorenzograssiUni.github.io/ia-developer-profitti/

---

**Costruito con ❤️ da lorenzograssiUni**
