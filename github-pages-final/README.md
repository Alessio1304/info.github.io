# Portfolio di Alessio Sorrentino

Questo repository contiene i file statici per il sito personale di Alessio Sorrentino ottimizzato per GitHub Pages.

## URL del sito
Il sito sarà disponibile all'indirizzo: `https://alessio1304.github.io/info.github.io/`

## Istruzioni per il deploy

1. **Crea il repository su GitHub:**
   - Nome repository: `info.github.io`
   - Assicurati che sia pubblico

2. **Carica i file:**
   ```bash
   git clone https://github.com/alessio1304/info.github.io.git
   cd info.github.io
   # Copia tutti i file da questa cartella nel repository
   git add .
   git commit -m "Initial commit - Portfolio website"
   git push origin main
   ```

3. **Abilita GitHub Pages:**
   - Vai nelle impostazioni del repository
   - Sezione "Pages"
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Cartella: "/ (root)"
   - Clicca "Save"

4. **Attendi il deploy:**
   - GitHub Pages impiega qualche minuto per il primo deploy
   - Il sito sarà disponibile all'URL sopra indicato

## Struttura dei file

- `index.html`: Pagina principale del sito
- `404.html`: Gestisce le route per SPA (Single Page Application)
- `assets/`: File JavaScript e CSS ottimizzati
- `.nojekyll`: Impedisce a Jekyll di processare i file

## Note tecniche

- Il sito utilizza routing basato su hash per compatibilità con GitHub Pages
- Il percorso base è configurato per `/info.github.io/`
- Tutti i percorsi delle risorse sono relativi per funzionare correttamente