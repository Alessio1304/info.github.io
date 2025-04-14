#!/bin/bash

# Script per generare una build statica per GitHub Pages

# Imposta la variabile BASE_URL per GitHub Pages
export BASE_URL="/info/"

echo "Creazione della build statica per GitHub Pages..."

# Esegui il comando di build
npm run build

# Crea la cartella docs se non esiste
mkdir -p docs

# Copia tutti i file dalla cartella di build alla cartella docs
cp -r dist/public/* docs/

# Crea un file .nojekyll per evitare il processing Jekyll
touch docs/.nojekyll

# Crea un file di configurazione _config.yml per GitHub Pages
echo "theme: jekyll-theme-minimal" > docs/_config.yml

# Copia il file index.html e modificalo per GitHub Pages
# Il file index.html verrà creato nel processo di build

echo "Build completata! I file sono disponibili nella cartella 'docs'."
echo "Puoi scaricare questa cartella e caricarla nel tuo repository GitHub."
echo "Ricorda di abilitare GitHub Pages nelle impostazioni del repository con la sorgente impostata sulla cartella 'docs'."