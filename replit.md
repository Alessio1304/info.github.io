# Portfolio Alessio Sorrentino - Replit Project Documentation

## Project Overview
Repository per il sito personale di Alessio Sorrentino contenente curriculum, blog e informazioni di contatto, ottimizzato per il deployment su GitHub Pages.

**Target URL:** https://alessio1304.github.io/info.github.io/

## User Preferences
- **Language:** Italiano e Inglese
- **Communication:** Risposte concise e tecniche quando necessario
- **Deployment:** GitHub Pages con percorso base `/info.github.io/`

## Project Architecture
- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui components
- **Routing:** Wouter con hash-based routing per GitHub Pages
- **Build System:** Vite per la build del client
- **Deployment:** GitHub Actions workflow per deploy automatico

### Key Technical Decisions
- **Hash-based routing:** Implementato `useHashLocation` hook per compatibilità con GitHub Pages
- **Base path:** Configurato `/info.github.io/` come percorso base
- **Static files:** File ottimizzati per deployment diretto senza server backend

## Recent Changes

### 2024-07-08 - Aggiornamenti finali e ottimizzazioni social/immagini
- ✅ Sostituita icona Twitter con icona X in tutti i componenti social
- ✅ Riordinate competenze professionali in ordine alfabetico:
  - Algoritmi e programmazione
  - Circuiti, Hardware e Segnali  
  - IoT
  - Reti e Protocolli
- ✅ Aggiunta immagine profilo personale (IMG_9754.jpeg) nella sezione About
- ✅ Aggiornata build finale con tutti i cambiamenti per GitHub Pages
- ✅ File ottimizzati con hash per caching nella cartella `github-pages-deploy/`

### 2024-07-07 - Aggiornamenti di navigazione e ottimizzazione finale
- ✅ Rimossa sezione blog dal menu desktop e mobile come richiesto dall'utente
- ✅ Aggiornate icone nella sezione About con simboli tecnici appropriati:
  - Code2 per "Algoritmi e programmazione"
  - Network per "Reti e Protocolli"  
  - Cpu per "IoT"
  - Zap per "Circuiti, Hardware e Segnali"
- ✅ Implementata navigazione smooth scroll in Header, Hero e Footer
- ✅ Sostituiti tutti i link <a href="#"> con button onClick per migliore controllo
- ✅ Aggiornata build finale per GitHub Pages nella cartella `github-pages-deploy/`

### 2024-04-14 - Configurazione completa per GitHub Pages
- ✅ Aggiornato percorso base da `/info/` a `/info.github.io/`
- ✅ Modificato `client/src/main.tsx` per utilizzare il nuovo percorso base
- ✅ Aggiornato `client/index.html` con URL corretto nelle meta property
- ✅ Configurato GitHub Actions workflow per build e deploy automatico
- ✅ Creato cartella `github-pages-final/` con file ottimizzati per deploy
- ✅ Aggiornati percorsi delle risorse da assoluti a relativi per funzionamento corretto
- ✅ Creato file `.nojekyll` per evitare processing Jekyll
- ✅ Implementato `404.html` per gestione SPA routing

### File Structure for GitHub Pages
```
github-pages-deploy/
├── index.html          # File principale con percorsi relativi e navigation smooth
├── 404.html           # Gestione routing per SPA
├── .nojekyll          # Disabilita Jekyll processing
├── README.md          # Istruzioni complete per deploy
└── assets/
    ├── index-[hash].js   # JavaScript bundle ottimizzato
    └── index-[hash].css  # CSS styles ottimizzati
```

## Deploy Instructions
1. Copiare tutti i file da `github-pages-deploy/` nel repository `info.github.io`
2. Fare push su GitHub
3. Abilitare GitHub Pages nelle impostazioni del repository (Source: Deploy from a branch, Branch: main, Folder: / root)
4. Il sito sarà disponibile su https://alessio1304.github.io/info.github.io/

## Current Project Status
- Navigazione completamente funzionante con smooth scroll
- Sezione blog rimossa come richiesto
- Icone aggiornate per riflettere competenze tecniche
- Build ottimizzata per GitHub Pages deployment
- Tutti i link e navigazione testati e funzionanti

## Development Notes
- Il progetto è configurato per funzionare sia in sviluppo locale che in produzione su GitHub Pages
- I percorsi sono gestiti automaticamente tramite la variabile `BASE_URL`
- Il routing utilizza hash (#) per compatibilità con GitHub Pages
- Non è necessario un server backend per il funzionamento in produzione