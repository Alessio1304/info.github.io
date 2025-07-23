# Portfolio di Alessio Sorrentino

Questo repository contiene i file statici per il sito personale di Alessio Sorrentino, ottimizzato per GitHub Pages.

## URL del sito
Il sito sarà disponibile all'indirizzo: `https://alessio1304.github.io/info.github.io/`

## Istruzioni per il deploy

### Opzione 1: Upload diretto dei file (CONSIGLIATA)
1. **Crea il repository su GitHub:**
   - Nome repository: `info.github.io`
   - Assicurati che sia pubblico

2. **Carica i file:**
   - Scarica tutti i file da questa cartella `github-pages-deploy/`
   - Caricali direttamente nel repository tramite interfaccia web GitHub
   - Oppure usa git:
   ```bash
   git clone https://github.com/alessio1304/info.github.io.git
   cd info.github.io
   # Copia tutti i file da github-pages-deploy/ qui
   git add .
   git commit -m "Deploy portfolio website - versione finale aggiornata"
   git push origin main
   ```

3. **Abilita GitHub Pages:**
   - Vai nelle impostazioni del repository
   - Sezione "Pages"
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Cartella: "/ (root)"
   - Clicca "Save"

## Struttura dei file ottimizzati

- `index.html`: Pagina principale con percorsi relativi per GitHub Pages
- `404.html`: Gestisce le route per SPA (Single Page Application)
- `assets/`: Cartella con tutti i file ottimizzati
  - `index-BbkhlCcQ.js`: JavaScript bundle ottimizzato (343KB)
  - `index-BSTQ0X5z.css`: CSS styles ottimizzati (68KB)
- `.nojekyll`: Impedisce a Jekyll di processare i file
- `README.md`: Questo file con le istruzioni

## Caratteristiche tecniche

✅ **Routing basato su hash** per compatibilità con GitHub Pages  
✅ **Percorso base configurato** per `/info.github.io/`  
✅ **Percorsi relativi** per tutte le risorse (./assets/)  
✅ **Navigazione smooth scroll** implementata  
✅ **File ottimizzati** con hash per evitare problemi di cache  
✅ **Icone social aggiornate** (X al posto di Twitter)  
✅ **Competenze professionali** riordinate alfabeticamente  
✅ **Hero section aggiornata** con le ultime modifiche

## Cosa è incluso

- Portfolio personale responsive
- Sezione "Chi Sono" completa
- Sezione "Curriculum" professionale
- Sezione "Contatti" con form e social links
- Navigazione smooth tra sezioni
- Design ottimizzato per mobile, tablet e desktop

## Deploy finale

**TUTTO PRONTO PER IL PUSH!** 

Basta copiare i file dalla cartella `github-pages-deploy/` nel tuo repository GitHub `info.github.io` e il sito funzionerà perfettamente su:

**`https://alessio1304.github.io/info.github.io/`**