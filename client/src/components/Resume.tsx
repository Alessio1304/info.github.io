import { Button } from "@/components/ui/button";
import { FileDown, Cpu, Code } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const skills = [
  {
    name: "Arduino",
    description:
      "Sviluppo di applicazioni interattive che controllano dispositivi elettronici attraverso codice.",
  },
  {
    name: "Bash",
    description:
      "Shell e linguaggio di scripting per l'automazione e il controllo dei sistemi operativi Unix/Linux.",
  },
  {
    name: "C",
    description:
      "Linguaggio di programmazione di basso livello utilizzato per lo sviluppo di sistemi operativi e applicazioni ad alte prestazioni.",
  },
  {
    name: "Git",
    description:
      "Sistema di controllo di versione distribuito per tracciare le modifiche nel codice sorgente durante lo sviluppo software.",
  },
  {
    name: "HTML",
    description:
      "Linguaggio di markup per la creazione di pagine web e applicazioni.",
  },
  {
    name: "Java",
    description:
      "Linguaggio di programmazione orientato agli oggetti utilizzato per lo sviluppo di applicazioni enterprise e Android.",
  },
  {
    name: "Matlab",
    description:
      "Piattaforma per l'analisi numerica e il calcolo scientifico, utilizzato per la modellazione matematica e la simulazione.",
  },
  {
    name: "MIPS",
    description:
      "Architettura di processori RISC utilizzata nell'insegnamento dei principi di architettura dei computer.",
  },
  {
    name: "Python",
    description:
      "Linguaggio di programmazione versatile utilizzato per lo sviluppo web, l'analisi dati, l'automazione e l'intelligenza artificiale.",
  },
  {
    name: "SQL",
    description:
      "Linguaggio standard per la gestione e l'interrogazione di database relazionali.",
  },
  {
    name: "Simulink",
    description:
      "Ambiente grafico di modellazione e simulazione integrato in MATLAB.",
  },
  {
    name: "Verilog",
    description:
      "Linguaggio di descrizione hardware (HDL) usato per modellare circuiti digitali.",
  },
  {
    name: "Wireshark",
    description:
      "Analizzatore di protocollo di rete per l'ispezione e la risoluzione dei problemi di comunicazione di rete.",
  },
  {
    name: "RISC-V assembly",
    description:
      "Sviluppo e ottimizzazione di codice a basso livello per il controllo hardware diretto e la massimizzazione delle prestazioni su processori basati su architettura RISC-V.",
  },
  {
    name: "ARM Cortex M3",
    description:
      "Core a 32-bit ottimizzato per sistemi embedded, il Cortex-M3 unisce potenza di calcolo ed efficienza energetica. È ideale per gestire task di controllo in tempo reale garantendo una latenza minima e un'elevata densità di codice.",
  },
  {
    name: "MongoDB Query Language (MQL)",
    description:
      "Esperienza nell'utilizzo di MQL per la gestione di database orientati ai documenti. Competente nell'esecuzione di operazioni CRUD, nell'utilizzo di operatori di query avanzati e nella manipolazione di dati JSON-like (BSON) per garantire alte prestazioni e scalabilità.",
  },
  {
    name: "RESTful API Design",
    description:
      "Esperienza nello sviluppo e nel consumo di API RESTful, con focus sull'utilizzo dei metodi HTTP standard (GET, POST, PUT, DELETE), gestione dei codici di stato e formattazione dei dati in JSON per l'interscambio tra client e server.",
  },
  {
    name: "JSON Data Interchange",
    description:
      "Competenza nell'utilizzo del formato JSON per la strutturazione, la serializzazione e il parsing dei dati. Esperienza nella gestione di oggetti complessi e array per lo scambio di informazioni tra client e server in applicazioni web e mobile.",
  },
  {
    name: "Streamlit (Python Framework)",
    description:
      "Esperienza nello sviluppo di web application interattive e dashboard per la visualizzazione dei dati. Capacità di trasformare script Python in strumenti web-based pronti per l'uso, con focus sulla rapidità di prototipazione e sulla user experience.",
  },
  {
    name: "MQTT (IoT Messaging Protocol)",
    description:
      "Competenza nell'utilizzo del protocollo MQTT per la comunicazione leggera e a bassa latenza tra dispositivi IoT. Esperienza nell'implementazione dell'architettura Publish/Subscribe per il monitoraggio e il controllo remoto di sensori e attuatori.",
  },
  {
    name: "Rust",
    description:
      "Linguaggio di sistema ad alte prestazioni focalizzato sulla sicurezza della memoria e sulla concorrenza, senza l'utilizzo di un garbage collector.",
  },
];

const sortedSkills = skills.sort((a, b) => a.name.localeCompare(b.name));

const TimelineItem = ({
  year,
  title,
  organization,
  description,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-6 md:pl-8 pb-8 group">
      {/* Linea statica, meno invadente */}
      <div className="absolute left-0 top-6 h-full border-l-2 border-muted transition-colors duration-300"></div>

      {/* Pallino che reagisce dolcemente al passaggio del mouse */}
      <div className="absolute left-[-9px] top-10 w-4 h-4 rounded-full bg-background border-2 border-muted transition-all duration-300 group-hover:border-blue-900 group-hover:bg-blue-900/20 group-hover:scale-125 z-10"></div>

      {/* Card con effetto hover */}
      <div className="relative p-5 md:p-6 rounded-2xl transition-all duration-300 ease-out border border-transparent group-hover:bg-card group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:border-blue-900/10 group-hover:-translate-y-1">
        {/* Effetto luce sfumata in sottofondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-900 uppercase bg-blue-900/10 rounded-full">
            {year}
          </span>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground/80 font-medium mb-3">{organization}</p>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface SkillItemProps {
  name: string;
  description: string;
}

const SkillItem = ({ name, description }: SkillItemProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <h4 className="text-lg font-semibold text-blue-900 mr-3">{name}</h4>
        <div className="text-xs text-muted-foreground">
          Politecnico di Torino
        </div>
      </div>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
};

const Resume = () => {
  // Function to download CV
  const downloadCV = () => {
    // URL diretto al file (raw) e codificato correttamente per gli spazi
    const cvUrl =
      "https://github.com/Alessio1304/Components/raw/19e02a3c075218dc7f03cdda32bf53bc9fa32541/Sorrentino%20Alessio%20CV.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;

    // Qui inserisci il nome che il file avrà una volta scaricato
    link.download = "Sorrentino_Alessio_CV.pdf";

    // Importante per i file PDF: forza l'apertura in una nuova scheda
    // se il browser decide di non scaricarlo immediatamente
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Curriculum</h2>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <Button
            onClick={downloadCV}
            variant="outline"
            className="gap-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
          >
            <FileDown className="h-4 w-4" />
            Scarica CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formazione */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-blue-900/10 text-blue-900 p-2 rounded-md mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </span>
              Formazione
            </h3>
            <div>
              <TimelineItem
                year="2017 - 2022"
                title="Diploma di Liceo Scientifico"
                organization="Lice Scientifico Leonardo da Vinci, Terracina"
                description="Acquisizione della cultura di base per iniziare al meglio il mio percorso."
              />
              <TimelineItem
                year="2021 - 2022"
                title="Certificazione Cisco: IT ESSENTIAL "
                organization="Lice Scientifico Leonardo da Vinci, Terracina"
                description="Competenze tecniche nell'assemblaggio, manutenzione e aggiornamento di PC, installazione e gestione di sistemi operativi (Windows, Mac, Linux) e configurazione di reti, dispositivi mobili e stampanti. Esperienza nell'uso sicuro degli strumenti, nel troubleshooting avanzato e nell'implementazione di misure di sicurezza IT."
              />
              <TimelineItem
                year="2024"
                title="IELTS - Certificazione di Inglese"
                organization="British Council"
                description="Conoscenza intermedia-superiore della lingua inglese, corrispondente al livello B2 del Quadro Comune Europeo di Riferimento per le Lingue (CEFR)."
              />
              <TimelineItem
                year="2022 - 2025"
                title="Laurea con lode in Ingegneria Informatica"
                organization="Politecnico di Torino"
                description="Il corso di laurea triennale in Ingegneria Informatica del Politecnico di Torino forma professionisti capaci di gestire sistemi digitali complessi, con solide basi in matematica, fisica e informatica, e competenze specifiche in architettura dei calcolatori, programmazione, basi di dati e reti di calcolatori."
              />
              <TimelineItem
                year="2025 - Presente"
                title="Corso di Specializzazione in Automation and Intelligent Cyber-Physical Systems"
                organization="Politecnico di Torino"
                description="Ci si occupa di approfondire gli aspetti legati al progetto nonché all'analisi teorica e sperimentale di modelli mediante predizione, controllo e diagnostica dei meccanismi interni. Ci si occupa inoltre di aspetti legati alla logistica e al governo della mobilità di veicoli, persone e cose, con attenzione tanto al dominio applicativo quanto agli aspetti di automazione e di gestione di base."
              />
            </div>
          </div>

          {/* Esperienza */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-blue-900/10 text-blue-900 p-2 rounded-md mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              Esperienza
            </h3>
            <div>
              <TimelineItem
                year="2017 - 2022"
                title="Lavoratore Estivo"
                organization="Stabilimenti Balneari"
                description="Un piccolo inizio di pratica nel mondo del lavoro, affinando le relazioni con colleghi e datori di lavoro."
              />
              <TimelineItem
                year="2022 - 2025"
                title="Attività di laboratorio"
                organization="Politecnico di Torino"
                description="Varie attività di laboratorio svolte in team, mirate ad approfondire le materie studiate."
              />
              <TimelineItem
                year="2025"
                title="Collaborazione part-time : Corso di Informatica"
                organization="Politecnico di Torino"
                description="Assistere gli studenti durante le esercitazioni e le prove ed esperienze di laboratorio, assistere gli studenti in apposite ore di ricevimento e/o correggere esercizi da essi svolti; effettuare assistenza/vigilanza durante lo svolgimento degli esami scritti."
              />
            </div>
          </div>
        </div>

        {/* Progetti (Nuova sezione a tutta larghezza) */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-12 flex items-center justify-center">
            <span className="bg-blue-900/10 text-blue-900 p-2 rounded-md mr-3">
              <Code className="w-5 h-5" />
            </span>
            Progetti Sviluppati
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              <TimelineItem
                year="2025"
                title="IoT & Smart Home Automation Developer | Progetto Full-Stack"
                organization="Politecnico di Torino"
                description="Ho ingegnerizzato un sistema di automazione domestica distribuito, focalizzandomi sull'interoperabilità tra diverse tecnologie e protocolli (MQTT, HTTP). Ho sviluppato un backend scalabile con CherryPy per la gestione dinamica di utenti e risorse, integrando nodi Arduino per il monitoraggio ambientale avanzato. Il progetto si distingue per l'implementazione di algoritmi di automazione contestuale: il sistema analizza autonomamente i livelli di rumore e movimento per ottimizzare il funzionamento di luci e ventilazione, garantendo un controllo granulare sia tramite interfacce CLI in Python che tramite feedback fisico su display LCD."
              />
              <TimelineItem
                year="2025"
                title="Analisi Spettrale e Progettazione di Filtri Digitali (MATLAB)"
                organization="Politecnico di Torino"
                description="Ho sviluppato in MATLAB un sistema di elaborazione digitale dei segnali per l’analisi spettrale e il filtraggio audio. Ho implementato algoritmi per il calcolo della FFT e progettato filtri FIR passa-basso e passa-alto (basati su funzione sinc e delta di Dirac), validandone le prestazioni tramite il calcolo della funzione di trasferimento. Il sistema è stato ottimizzato e testato sia su tracce audio reali che su rumore bianco gaussiano per garantire l'accuratezza della risposta in frequenza e l'efficacia dell'attenuazione."
              />
              <TimelineItem
                year="2025"
                title="Sviluppo del Motore Analitico e Persistenza per un simulatore avanzato di Conway’s Game of Life (Java & JPA)"
                organization="Politecnico di Torino"
                description="In questo progetto ho progettato e implementato il modulo Board, il cuore strutturale di una versione estesa del Game of Life. Mi sono occupato della gestione della griglia e dell'interazione dinamica tra le celle e l'ambiente, implementando sistemi di calcolo per i modificatori energetici e i 'life points'. Un aspetto centrale del mio lavoro è stato lo sviluppo di un robusto motore analitico capace di estrarre statistiche in tempo reale e serie temporali sull'evoluzione della simulazione, utilizzando le Stream API di Java. Ho inoltre gestito l'intero layer di persistenza tramite JPA/Hibernate, mappando relazioni complesse tra entità e garantendo il salvataggio e il ripristino dello stato completo della board su database H2."
              />
              <TimelineItem
                year="2025"
                title="Embedded Systems & Real-Time Control: ARM Cortex-M3"
                organization="Politecnico di Torino"
                description="Ho sviluppato, per il corso di Architetture e Sistemi di Elaborazione, un sistema real-time basato su ARM Cortex-M3 che esegue una versione avanzata di Tetris su scheda LandTiger (LPC1768). Ho integrato il controllo della velocità tramite segnali analogici (ADC) e la riproduzione audio via hardware, implementando algoritmi ottimizzati per la gestione di collisioni, power-up e malus dinamici. Il progetto, realizzato in C con Keil IDE, dimostra la mia abilità nel far dialogare algoritmi software complessi con hardware fisico in contesti a risorse limitate."
              />
            </div>

            <div>
              <TimelineItem
                year="2025"
                title="Predictive Safety & Dynamic Risk Estimation in Human-Robot Collaboration"
                organization="Politecnico di Torino"
                description="Questo progetto si concentra sulla sicurezza proattiva per la collaborazione uomo-robot (HRC) in ambito industriale. L'obiettivo principale è stato creare un sistema in grado non solo di rilevare la prossimità in tempo reale, ma di prevedere attivamente l'evoluzione del rischio di collisione. Utilizzando i dati cinematici 3D del dataset CHICO, abbiamo implementato un'architettura di deep learning in due fasi: una rete MLP per la valutazione istantanea e un modello LSTM per il forecasting temporale. Grazie a strategie avanzate di data augmentation e a un'ottimizzazione rigorosamente safety-first, il framework riesce ad anticipare le collisioni garantendo un intervento fail-safe. Il risultato è una soluzione robusta e proattiva, essenziale per garantire il controllo e l'affidabilità dei moderni sistemi cyber-fisici intelligenti."
              />
              <TimelineItem
                year="2026"
                title="Distributed Formation Control of Heterogeneous Nonlinear Planar Robots via Feedback Linearization"
                organization="Politecnico di Torino"
                description="Il lavoro affronta la sfida del controllo distribuito per una squadra di tre robot planari nonlineari eterogenei, operanti come Veicoli Autonomi di Superficie (ASV). L'obiettivo primario è stato garantire il mantenimento di una rigorosa formazione triangolare durante l'inseguimento di una traiettoria spaziale. Per superare le differenze dinamiche tra i veicoli, è stata implementata un'architettura gerarchica: un anello interno di Feedback Linearization ha compensato le nonlinearità locali trasformando il sistema in modelli lineari a doppio integratore, supportato da un osservatore di Luenberger per la stima degli stati non misurabili. Su questo impianto virtuale sono stati progettati e confrontati due protocolli di controllo cooperativo ad alto livello: uno basato su State-Feedback (tramite equazione di Riccati) e uno basato su Loop-Shaping in frequenza. L'efficacia dell'architettura è stata validata tramite simulazioni MATLAB, dimostrando un'elevata stabilità e reiezione dei disturbi anche in scenari marini severi caratterizzati da raffiche di vento, rumore dei sensori e incertezze parametriche."
              />
              <TimelineItem
                year="2026"
                title="Georuggine: Sistema Distribuito in Rust per la Geolocalizzazione di Flotte"
                organization="Politecnico di Torino"
                description="Progetto accademico sviluppato in Rust per la gestione, la geolocalizzazione e la comunicazione in tempo reale di una flotta di veicoli. Il sistema si basa su un'architettura distribuita client/server, sfruttando una comunicazione full-duplex tramite WebSocket per garantire il tracciamento continuo sulla mappa di Torino. Il backend asincrono, ingegnerizzato con Axum e Tokio, si interfaccia con un database SQLite per analizzare la telemetria, mentre il simulatore di movimento sfrutta un grafo stradale elaborato in Python ed è eseguito nel browser grazie a WebAssembly (WASM). Validato tramite stress-test concorrenti per garantire la minima latenza e il minimo impatto sulle risorse."
              />
            </div>
          </div>
        </div>

        {/* Competenze */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-12 flex items-center justify-center">
            <span className="bg-blue-900/10 text-blue-900 p-2 rounded-md mr-3">
              <Cpu className="w-5 h-5" />
            </span>
            Competenze Professionali
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              {sortedSkills
                .slice(0, Math.ceil(sortedSkills.length / 2))
                .map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    description={skill.description}
                  />
                ))}
            </div>
            <div>
              {sortedSkills
                .slice(Math.ceil(sortedSkills.length / 2))
                .map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    description={skill.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
