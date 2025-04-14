#!/bin/bash

# Imposta variabili d'ambiente per la build
export BASE_URL="/info/"
export NODE_ENV="production"

echo "Preparazione dei file per GitHub Pages..."

# Esegui il build dell'applicazione
npm run build

echo "Copia dei file nella cartella gh-pages-build..."

# Assicuriamoci che le cartelle esistano
mkdir -p gh-pages-build
mkdir -p gh-pages-build/static
mkdir -p gh-pages-build/assets

# Copia i file JS e CSS dalla build alla cartella gh-pages-build
cp -r dist/public/assets/* gh-pages-build/assets/

# Crea un file JS semplificato che utilizzeremo per il sito statico
echo "// File principale dell'applicazione
import '/assets/index.js';" > gh-pages-build/static/index.js

# Crea un file CSS semplificato
echo "/* File CSS principale */
@import '/assets/index.css';" > gh-pages-build/static/index.css

# Crea un file README.md con istruzioni
cat > gh-pages-build/README.md << 'EOL'
# Portfolio di Alessio Sorrentino

Questo repository contiene i file statici per il sito personale di Alessio Sorrentino.

## Istruzioni per il deploy su GitHub Pages

1. Carica tutti questi file in un repository GitHub chiamato "info"
2. Vai alle impostazioni del repository, nella sezione "Pages"
3. Seleziona la branch "main" come sorgente
4. Clicca "Save"

Il sito sarà accessibile all'URL: https://alessio1304.github.io/info/
EOL

echo "Creazione file completata!"
echo ""
echo "Per utilizzare questo sito su GitHub Pages:"
echo "1. Scarica la cartella 'gh-pages-build' come ZIP"
echo "2. Carica tutti i file nel repository 'info' su GitHub"
echo "3. Abilita GitHub Pages nelle impostazioni del repository"
echo ""
echo "Il tuo sito sarà disponibile su: https://alessio1304.github.io/info/"