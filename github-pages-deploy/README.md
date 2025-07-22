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
   git commit -m "Deploy portfolio website with profile image"
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
- `assets/`: File JavaScript, CSS e immagine profilo ottimizzati con hash per il caching
  - `IMG_9754-D2Y27lE3.jpeg`: Immagine profilo di Alessio
  - `index-CqpQqAHP.js`: JavaScript bundle ottimizzato
  - `index-fNoL-I0C.css`: CSS styles ottimizzati
- `.nojekyll`: Impedisce a Jekyll di processare i file

## Note tecniche

- Il sito utilizza routing basato su hash per compatibilità con GitHub Pages
- Il percorso base è configurato per `/info.github.io/`
- Tutti i percorsi delle risorse sono relativi per funzionare correttamente
- La navigazione utilizza smooth scroll per una migliore esperienza utente
- Immagine profilo integrata correttamente nella sezione About
- File ottimizzati con hash per evitare problemi di cache

## Aggiornamenti recenti

- ✅ **RISOLTO**: Problema visualizzazione immagine profilo IMG_9754.jpeg su GitHub Pages
- ✅ Immagine profilo caricata correttamente con hash unico (IMG_9754-D2Y27lE3.jpeg)
- ✅ Percorsi relativi configurati per GitHub Pages deployment
- ✅ Sostituita icona Twitter con icona X (nuovo logo social)
- ✅ Riordinate competenze professionali in ordine alfabetico
- ✅ Implementata navigazione smooth scroll per tutti i componenti
- ✅ File ottimizzati con hash per caching ottimale