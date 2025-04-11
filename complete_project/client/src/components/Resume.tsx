import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
}

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
    // Create a link element
    const link = document.createElement('a');
    // Set link properties for CV file (must be in the public folder for GitHub Pages)
    link.href = './CV_Alessio_Sorrentino.pdf';
    link.download = 'CV_Alessio_Sorrentino.pdf';
    // Append to the document
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up
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
                year="2022 - "
                title="Iscrizione presso il Politecnico di Torino"
                organization="Politecnico di Torino"
                description="Il corso di laurea triennale in Ingegneria Informatica del Politecnico di Torino forma professionisti capaci di gestire sistemi digitali complessi, con solide basi in matematica, fisica e informatica, e competenze specifiche in architettura dei calcolatori, programmazione, basi di dati e reti di calcolatori. "
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
                year="2022 - Presente"
                title="Studente"
                organization="Politecnico di Torino"
                description="Impegno full-time nel percorso di laurea in Ingegneria Informatica."
              />
              <TimelineItem
                year="2017 - 2022"
                title="Lavoratore Estivo"
                organization="Stabilimenti Balneari"
                description="Un piccolo inizio di pratica nel mondo del lavoro, affinando le relazioni con colleghi e datori di lavoro."
              />
            </div>
          </div>
        </div>

        {/* Competenze */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Competenze Professionali
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SkillItem 
                name="Wireshark" 
                description="Analizzatore di protocollo di rete per l'ispezione e la risoluzione dei problemi di comunicazione di rete."
              />
              <SkillItem 
                name="Matlab" 
                description="Piattaforma per l'analisi numerica e il calcolo scientifico, utilizzato per la modellazione matematica e la simulazione."
              />
              <SkillItem 
                name="Bash" 
                description="Shell e linguaggio di scripting per l'automazione e il controllo dei sistemi operativi Unix/Linux."
              />
              <SkillItem 
                name="Python" 
                description="Linguaggio di programmazione versatile utilizzato per lo sviluppo web, l'analisi dati, l'automazione e l'intelligenza artificiale."
              />
              <SkillItem 
                name="Git" 
                description="Sistema di controllo di versione distribuito per tracciare le modifiche nel codice sorgente durante lo sviluppo software."
              />
            </div>
            <div>
              <SkillItem 
                name="HTML" 
                description="Linguaggio di markup per la creazione di pagine web e applicazioni."
              />
              <SkillItem 
                name="SQL" 
                description="Linguaggio standard per la gestione e l'interrogazione di database relazionali."
              />
              <SkillItem 
                name="MIPS" 
                description="Architettura di processori RISC utilizzata nell'insegnamento dei principi di architettura dei computer."
              />
              <SkillItem 
                name="C" 
                description="Linguaggio di programmazione di basso livello utilizzato per lo sviluppo di sistemi operativi e applicazioni ad alte prestazioni."
              />
              <SkillItem 
                name="Java" 
                description="Linguaggio di programmazione orientato agli oggetti utilizzato per lo sviluppo di applicazioni enterprise e Android."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
