# Sito Personale di Alessio Sorrentino

Questo repository contiene il codice sorgente per il sito personale di Alessio Sorrentino, 
progettato per essere pubblicato automaticamente tramite GitHub Pages.

## Configurazione Automatica

Questo repository è configurato per essere pubblicato automaticamente tramite GitHub Actions.
Una volta caricato questo codice su GitHub con il nome utente 'Alessio1304' e il nome repository 'info',
il sito verrà automaticamente pubblicato all'indirizzo [alessio1304.github.io/info](https://alessio1304.github.io/info).

## Passaggi per la Pubblicazione

1. Crea un nuovo repository pubblico su GitHub con nome 'info'
2. Carica tutti questi file nel repository
3. Vai su Settings > Pages e seleziona 'GitHub Actions' come sorgente per GitHub Pages
4. Il workflow di GitHub Actions si avvierà automaticamente e il sito sarà presto online

## Struttura del Progetto

- `client/`: Contiene il codice front-end dell'applicazione React
- `server/`: Contiene il codice back-end
- `shared/`: Contiene schemi e tipi condivisi
- `attached_assets/`: Contiene asset e componenti
- `.github/workflows/deploy.yml`: Configurazione per il deployment automatico tramite GitHub Actions
