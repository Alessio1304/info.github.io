# Portfolio Personale - Alessio Sorrentino

Questo repository contiene il codice sorgente per il portfolio personale di Alessio Sorrentino, sviluppato come Single Page Application (SPA) con **React**, **TypeScript**, **Vite** e **Tailwind CSS**.

🌐 **Sito Live:** [https://alessio1304.github.io/info.github.io/](https://alessio1304.github.io/info.github.io/)

---

## 🏗️ Architettura e Collegamento dei File

L'applicazione è strutturata in modo modulare per consentire sia lo sviluppo locale fluido con live-reloading, sia il deployment statico automatico su **GitHub Pages**.

```
AlessioPersonalSite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow GitHub Actions per build e deploy automatico
├── client/                     # Codice sorgente dell'applicazione React (Frontend)
│   ├── index.html              # Template HTML principale caricato da Vite
│   └── src/
│       ├── main.tsx            # Punto di ingresso TypeScript/React (monta l'App)
│       ├── App.tsx             # Layout e composizione delle sezioni della pagina
│       ├── index.css           # Direttive Tailwind CSS e stili globali
│       ├── components/         # Componenti UI (Header, Hero, About, Resume, Contact, Footer)
│       │   └── ui/             # Componenti riutilizzabili (shadcn/ui)
│       ├── hooks/              # Custom React Hooks (es. responsive design, toast)
│       └── lib/                # Utility e helper (incluso router per GitHub Pages)
├── server/                     # Server Express per l'ambiente di sviluppo locale
│   ├── index.ts                # Server HTTP Express locale
│   ├── vite.ts                 # Integrazione del middleware di dev con HMR
│   ├── routes.ts               # Rotte API (predisposizione per estensioni backend)
│   └── storage.ts              # Interfaccia di memoria locale
├── shared/
│   └── schema.ts               # Definizioni di tipi e schemi condivisi
├── package.json                # Dipendenze e script di build/sviluppo
├── vite.config.ts              # Configurazione del bundler Vite
├── tsconfig.json               # Configurazione del compilatore TypeScript
├── tailwind.config.ts          # Configurazione del tema Tailwind CSS
├── postcss.config.js           # Configurazione PostCSS per Tailwind e Autoprefixer
└── theme.json                  # Definizione dei colori e variabili del tema UI
```

### 🔗 Come interagiscono i componenti:

1. **Sviluppo Locale (`npm run dev`)**:
   - Viene avviato il server Express definito in `server/index.ts`.
   - `server/vite.ts` collega Vite in modalità sviluppo, intercettando le richieste e servendo il file `client/index.html` e i moduli React in `client/src/` con Hot Module Replacement (HMR).

2. **Flusso dell'Applicazione React (`client/src/`)**:
   - `client/index.html` richiama `client/src/main.tsx`.
   - `main.tsx` inizializza React e renderizza il componente principale `App.tsx`.
   - `App.tsx` avvolge l'app in un `ThemeProvider` per la gestione del tema (Dark/Light mode) e in `wouter` per il routing hash-based (`useHashLocation` in `client/src/lib/github-pages.ts`).
   - `App.tsx` compone la pagina affiancando in sequenza i componenti:
     - `Header`: Navigazione principale e toggle del tema.
     - `Hero`: Sezione introduttiva con avatar e chiamate all'azione.
     - `About`: Presentazione personale, biografia e competenze tecniche.
     - `Resume`: Esperienze professionali, istruzione e certificazioni.
     - `Contact`: Form e informazioni di contatto.
     - `Footer`: Note di copyright e link social.

3. **Compilazione di Produzione (`npm run build`)**:
   - Vite legge `vite.config.ts`, prende `client/index.html` come root e compila tutto il codice TypeScript e i componenti JSX/TSX minificandoli nella cartella `dist/public/`.

4. **Deploy Automatico su GitHub Pages (`.github/workflows/deploy.yml`)**:
   - Ogni volta che viene fatto un **`git push`** sul ramo `main` del repository GitHub (`info.github.io`):
     - La pipeline GitHub Actions si attiva automaticamente.
     - Installa le dipendenze con `npm ci`.
     - Esegue `npm run build` impostando la variabile di ambiente `BASE_URL=/info.github.io/`.
     - Genera il file `404.html` (per la gestione delle rotte SPA) e il file `.nojekyll` (per disabilitare il rendering Jekyll di GitHub).
     - Pubblica automaticamente il contenuto di `dist/public/` sul dominio `https://alessio1304.github.io/info.github.io/`.

---

## 🛠️ Istruzioni per lo Sviluppo Locale

### 1. Prerequisiti
Assicurati di avere installato [Node.js](https://nodejs.org/) (versione 18 o superiore) e `npm`.

### 2. Installazione delle dipendenze
```bash
npm install
```

### 3. Avvio del server di sviluppo
Per avviare l'applicazione in locale con ricaricamento automatico:
```bash
npm run dev
```
L'applicazione sarà accessibile nel browser all'indirizzo `http://localhost:5173`.

### 4. Controllo Tipi TypeScript
Per verificare che non ci siano errori di tipo TypeScript prima del commit:
```bash
npm run check
```

### 5. Compilazione di test per la produzione
Per testare la build di produzione locale:
```bash
npm run build
```

---

## 🚀 Caricamento e Deploy su GitHub

Poiché il workflow GitHub Actions è già configurato nel file `.github/workflows/deploy.yml`, la procedura per pubblicare gli aggiornamenti è semplice:

1. **Aggiungi i file modifcati su Git**:
   ```bash
   git add .
   ```

2. **Crea un commit**:
   ```bash
   git commit -m "Aggiornamento portfolio e pulizia repository"
   ```

3. **Invia le modifiche a GitHub**:
   ```bash
   git push origin main
   ```

GitHub Actions compilerà ed aggiornerà automaticamente il sito online su `https://alessio1304.github.io/info.github.io/` entro pochi minuti!
