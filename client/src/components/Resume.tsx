import { Button } from "@/components/ui/button";
import { FileDown, Cpu } from "lucide-react";

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
    <div className="relative pl-8 pb-12 group">
      <div className="absolute left-0 top-0 h-full border-l-2 border-dashed border-muted group-hover:border-primary transition-all duration-300"></div>
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-background border-2 border-muted group-hover:border-primary transition-all duration-300"></div>
      <span className="text-sm font-medium text-muted-foreground mb-2 inline-block">
        {year}
      </span>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-primary font-medium mb-2">{organization}</p>
      <p className="text-muted-foreground">{description}</p>
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
        <h4 className="text-lg font-semibold text-primary mr-3">{name}</h4>
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
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <Button onClick={downloadCV} variant="outline" className="gap-2">
            <FileDown className="h-4 w-4" />
            Scarica CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formazione */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
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
                description="conoscenza intermedia-superiore della lingua inglese, corrispondente al livello B2 del Quadro Comune Europeo di Riferimento per le Lingue (CEFR)"
              />
              <TimelineItem
                year="2022 - 2025"
                title="Laurea con lode in Ingegneria Informatica"
                organization="Politecnico di Torino"
                description="Il corso di laurea triennale in Ingegneria Informatica del Politecnico di Torino forma professionisti capaci di gestire sistemi digitali complessi, con solide basi in matematica, fisica e informatica, e competenze specifiche in architettura dei calcolatori, programmazione, basi di dati e reti di calcolatori."
              />
              <TimelineItem
                year="2025 - "
                title="Corso di Specializzazione in Automation and Intelligent Cyber-Physical Systems"
                organization="Politecnico di Torino"
                description="Ci si occupa di approfondire gli aspetti legati al progetto nonché all'analisi teorica e sperimentale di modelli mediante predizione, controllo e diagnostica dei meccanismi interni. Ci si occupa inoltre di aspetti legati alla logistica e al governo della mobilità di veicoli, persone e cose, con attenzione tanto al dominio applicativo quanto agli aspetti di automazione e di gestione di base."
              />
            </div>
          </div>

          {/* Esperienza */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
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
                title="IoT & Smart Home Automation Developer | Progetto Full-Stack
"
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
                title="Sviluppo del Motore Analitico e Persistenza per un simulatore avanzato di Conway’s Game of Life (Java & JPA)
"
                organization="Politecnico di Torino"
                description="In questo progetto ho progettato e implementato il modulo Board, il cuore strutturale di una versione estesa del Game of Life. Mi sono occupato della gestione della griglia e dell'interazione dinamica tra le celle e l'ambiente, implementando sistemi di calcolo per i modificatori energetici e i 'life points'. Un aspetto centrale del mio lavoro è stato lo sviluppo di un robusto motore analitico capace di estrarre statistiche in tempo reale e serie temporali sull'evoluzione della simulazione, utilizzando le Stream API di Java. Ho inoltre gestito l'intero layer di persistenza tramite JPA/Hibernate, mappando relazioni complesse tra entità e garantendo il salvataggio e il ripristino dello stato completo della board su database H2."
              />
              <TimelineItem
                year="2025"
                title="Collaborazione part-time : Corso di Informatica"
                organization="Politecnico di Torino"
                description="Assistere gli studenti durante le esercitazioni e le prove ed esperienze di laboratorio, assistere gli studenti in apposite ore di ricevimento e/o correggere esercizi da essi svolti; effettuare assistenza/vigilanza durante lo svolgimento degli esami scritti."
              />
              <TimelineItem
                year="2025"
                title="Embedded Systems & Real-Time Control: ARM Cortex-M3"
                organization="Politecnico di Torino"
                description="Ho sviluppato, per il corso di Architetture e Sistemi di Elaborazione, un sistema real-time basato su ARM Cortex-M3 che esegue una versione avanzata di Tetris su scheda LandTiger (LPC1768). Ho integrato il controllo della velocità tramite segnali analogici (ADC) e la riproduzione audio via hardware, implementando algoritmi ottimizzati per la gestione di collisioni, power-up e malus dinamici. Il progetto, realizzato in C con Keil IDE, dimostra la mia abilità nel far dialogare algoritmi software complessi con hardware fisico in contesti a risorse limitate."
              />
            </div>
          </div>
        </div>

        {/* Competenze */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
            {/* Badge stilizzato come gli altri nel tuo CV */}
            <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
              <Cpu className="w-5 h-5" />
            </span>
            Competenze Professionali
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
