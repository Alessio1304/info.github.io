# Portfolio di Alessio Sorrentino

Questo repository contiene i file statici per il sito personale di Alessio Sorrentino.

## Istruzioni per il deploy su GitHub Pages

1. Crea un nuovo repository su GitHub chiamato "info"
2. Carica tutti questi file nella branch principale del repository
3. Vai alle impostazioni del repository -> Pages
4. Nella sezione "Build and deployment" seleziona:
   - Source: "Deploy from a branch"
   - Branch: "main" (o "master" se è il nome della tua branch principale)
   - Cartella: "/ (root)"
5. Clicca su "Save"

Dopo alcuni minuti, il sito sarà disponibile all'indirizzo: `https://alessio1304.github.io/info/`

## Struttura dei file

- `index.html`: La pagina principale del sito
- `404.html`: Pagina di errore che reindirizza alla pagina principale
- `assets/`: Cartella contenente i file JavaScript e CSS
- `.nojekyll`: File che indica a GitHub di non elaborare il sito con Jekyll

## Note importanti

- Questo sito utilizza il routing basato su hash per la compatibilità con GitHub Pages
- Il sito è ottimizzato per funzionare con il percorso base `/info/`
- Non modificare i nomi dei file nella cartella `assets` poiché sono generati con hash unici