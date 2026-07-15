import SkillCard from "./SkillCard";
import { Code2, Network, Cpu, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Algoritmi e programmazione",
      description:
        "Capacità di creare e modificare algoritmi di ogni livello di astrazione, utilizzando molteplici linguaggi di programmazione.",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Reti e Protocolli",
      description:
        "Ottima conoscenza della pila ISO/OSI e dei suoi protocolli caratterizzanti.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "IoT",
      description:
        "Conoscenza e programmazione dei principali componenti dei sistemi IoT (sensori, microcontrollori, comunicazioni) sia software che hardware.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Circuiti, Hardware e Segnali",
      description:
        "Ottima conoscenza e padronanza sia teorica che pratica di molteplici aspetti di basso livello.",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Automazione",
      description:
        "Concetti e metodi per analizzare, modellare e progettare sistemi dinamici LTI, con enfasi su feedback, stabilità, risposta, sintesi del controllore, robustezza e prestazioni in regime e transitorio.",
    },
  ];

  const personalInfo = [
    { label: "Nome e Cognome:", value: "Alessio Sorrentino" },
    { label: "Email:", value: "alessio.sor.1304@icloud.com" },
    { label: "Località:", value: "Torino & Roma, Italia" },
    { label: "Social:", value: "Instagram, LinkedIn, Facebook, X" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-background overflow-hidden"
    >
      {/* Effetti di luce decorativi sullo sfondo (Blobs) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-900/5 blur-[100px]" />
        <div className="absolute top-[60%] -left-[10%] w-[30%] h-[30%] rounded-full bg-blue-900/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Chi Sono</h2>
          <div className="h-1 w-20 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonna Sinistra - Bio e Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground/90">
              L'intersezione tra Software e Dinamica Fisica
            </h3>
            <div className="text-muted-foreground mb-10 leading-relaxed text-lg space-y-4">
              <p>
                Sono un Ingegnere Informatico, mi piace pensarmi come il
                traduttore tra la logica pura del software e le incertezze del
                mondo fisico. Dopo aver conseguito la laurea con il massimo dei
                voti, ho scelto di radicare il mio percorso al{" "}
                <strong className="text-foreground font-semibold">
                  Politecnico di Torino
                </strong>{" "}
                per specializzarmi in{" "}
                <span className="text-blue-900 font-semibold">
                  Automation and Intelligent Cyber-Physical Systems
                </span>
                .
              </p>
              <p>
                Non mi accontento di codice che "semplicemente funziona". Quando
                sviluppo, che si tratti di architetture di rete in{" "}
                <strong>Rust</strong> per sfruttarne il rigore del
                memory-safety, o di progettare anelli di{" "}
                <em>Feedback Linearization</em> su <strong>MATLAB</strong> per
                veicoli autonomi, il mio focus è sempre sulla stabilità
                asintotica e sulla reiezione dei disturbi.
              </p>
              <p>
                Attualmente mi dedico a sfide dove il rigore matematico è
                cruciale: dall'addestramento di modelli <strong>LSTM</strong>{" "}
                per la sicurezza predittiva (fail-safe) nella collaborazione
                uomo-robot.
              </p>
              <p>
                Punto in alto — guardando agli standard di tolleranza ai guasti
                di realtà come{" "}
                <strong className="text-foreground font-semibold">
                  NASA ed ESA
                </strong>{" "}
                — perché credo che ogni variabile di stato, ogni allocazione di
                memoria e ogni loop di controllo debba essere ingegnerizzato per
                garantire un'affidabilità assoluta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="relative group p-5 rounded-2xl bg-secondary/20 border border-transparent transition-all duration-300 ease-out hover:bg-card hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-900/10 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                  <div className="relative z-10">
                    <p className="font-bold mb-1 text-foreground/80 group-hover:text-blue-900 transition-colors duration-300">
                      {info.label}
                    </p>
                    <p className="text-muted-foreground font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonna Destra - Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
            {skills.map((skill, index) => (
              <div
                key={index}
                // Se è l'ultima skill (la quinta) la facciamo espandere su 2 colonne per mantenere la simmetria
                className={index === skills.length - 1 ? "sm:col-span-2" : ""}
              >
                <SkillCard
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
