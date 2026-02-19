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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Chi Sono</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Ingegneria, Automazione e Visione
            </h3>
            <p className="text-muted-foreground mb-6">
              Ingegnere, problem solver e sognatore quanto basta. Dopo una laurea al Politecnico di Torino con il massimo dei voti, ho scelto di specializzarmi in Automation e Cyber-Physical Systems perché credo che il futuro sia nell'integrazione perfetta tra hardware e software. Il mio approccio? Guardare oltre lo schermo: che si tratti di ottimizzare una casa intelligente o di progettare sistemi complessi, il mio obiettivo è sempre l'efficienza e l'affidabilità. Punto in alto — realtà come NASA ed ESA sono il mio riferimento per standard di qualità — ma sono sempre aperto a nuove sfide tecnologiche che richiedano rigore analitico e spirito d'iniziativa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-primary/5 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="font-medium mb-1">{info.label}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
