# Portfolio di Alessio Sorrentino

Questo repository contiene i file statici per il sito personale di Alessio Sorrentino, ottimizzato per GitHub Pages.

## URL del sito
Il sito sarà disponibile all'indirizzo: `https://alessio1304.github.io/info.github.io/`

## Istruzioni per il deploy

### Opzione 1: Upload diretto dei file
1. **Crea il repository su GitHub:**
   - Nome repository: `info.github.io`
   - Assicurati che sia pubblico

2. **Carica i file:**
   - Scarica tutti i file da questa cartella
   - Caricali direttamente nel repository tramite interfaccia web GitHub
   - Oppure usa git:
   ```bash
   git clone https://github.com/alessio1304/info.github.io.git
   cd info.github.io
   # Copia tutti i file da github-pages-deploy/ qui
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```

3. **Abilita GitHub Pages:**
   - Vai nelle impostazioni del repository
   - Sezione "Pages"
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Cartella: "/ (root)"
   - Clicca "Save"

### Opzione 2: GitHub Actions (consigliata)
Il repository principale include già un workflow GitHub Actions che automatizza il deploy.

## Struttura dei file

- `index.html`: Pagina principale del sito con percorsi relativi
- `404.html`: Gestisce le route per SPA (Single Page Application)
- `assets/`: File JavaScript e CSS ottimizzati con hash per il caching
- `.nojekyll`: Impedisce a Jekyll di processare i file

## Note tecniche

- Il sito utilizza routing basato su hash per compatibilità con GitHub Pages
- Il percorso base è configurato per `/info.github.io/`
- Tutti i percorsi delle risorse sono relativi per funzionare correttamente
- La navigazione utilizza smooth scroll per una migliore esperienza utente
- Non include più la sezione blog come richiesto dall'utente

## Aggiornamenti recenti

- ✅ Rimossa sezione blog dal menu e dalla struttura
- ✅ Aggiornate icone nella sezione About con simboli tecnici appropriati
- ✅ Implementata navigazione smooth scroll per tutti i componenti
- ✅ Percorsi ottimizzati per GitHub Pages deployment