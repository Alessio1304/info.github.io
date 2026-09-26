{
  /* Reason: Applied RevealOnScroll to the Resume section, ensuring timeline items and skills fade in gracefully as the user scrolls down, mimicking the behavior added to the About section. */
}
import { Button } from "@/components/ui/button";
import { FileDown, Cpu, Code } from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

// --- Componente Helper per l'animazione allo scroll ---
const RevealOnScroll = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <ScrollReveal delay={delay / 1000} className={className}>
      {children}
    </ScrollReveal>
  );
};
// --------------------------------------------------------

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
    <div className="relative pl-6 md:pl-8 pb-8 group">
      {/* Linea statica, meno invadente */}
      <div className="absolute left-0 top-6 h-full border-l-2 border-muted transition-colors duration-300"></div>

      {/* Pallino che reagisce dolcemente al passaggio del mouse */}
      <div className="absolute left-[-9px] top-10 w-4 h-4 rounded-full bg-background border-2 border-muted transition-all duration-300 group-hover:border-blue-900 dark:group-hover:border-blue-400 group-hover:bg-blue-900/20 dark:group-hover:bg-blue-400/20 group-hover:scale-125 z-10"></div>

      {/* Card con effetto hover */}
      <div className="relative p-5 md:p-6 rounded-2xl transition-all duration-300 ease-out border border-transparent group-hover:bg-card group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] group-hover:border-blue-900/10 dark:group-hover:border-blue-400/20 group-hover:-translate-y-1">
        {/* Effetto luce sfumata in sottofondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 dark:from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-900 dark:text-blue-400 uppercase bg-blue-900/10 dark:bg-blue-400/20 rounded-full transition-colors">
            {year}
          </span>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
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
  organization?: string;
}

const SkillItem = ({ name, description, organization }: SkillItemProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400 mr-3 transition-colors">
          {name}
        </h4>
        <div className="text-xs text-muted-foreground">
          {organization}
        </div>
      </div>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
};

const Resume = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "Arduino", description: t("resume.skillsList.arduino") },
    { name: "Bash", description: t("resume.skillsList.bash") },
    { name: "C", description: t("resume.skillsList.c") },
    { name: "Git", description: t("resume.skillsList.git") },
    { name: "HTML", description: t("resume.skillsList.html") },
    { name: "Java", description: t("resume.skillsList.java") },
    { name: "Matlab", description: t("resume.skillsList.matlab") },
    { name: "MIPS", description: t("resume.skillsList.mips") },
    { name: "Python", description: t("resume.skillsList.python") },
    { name: "SQL", description: t("resume.skillsList.sql") },
    { name: "Simulink", description: t("resume.skillsList.simulink") },
    { name: "Verilog", description: t("resume.skillsList.verilog") },
    { name: "Wireshark", description: t("resume.skillsList.wireshark") },
    { name: "RISC-V assembly", description: t("resume.skillsList.riscv") },
    { name: "ARM Cortex M3", description: t("resume.skillsList.cortex") },
    { name: "MongoDB Query Language (MQL)", description: t("resume.skillsList.mql") },
    { name: "RESTful API Design", description: t("resume.skillsList.rest") },
    { name: "JSON Data Interchange", description: t("resume.skillsList.json") },
    { name: "Streamlit (Python Framework)", description: t("resume.skillsList.streamlit") },
    { name: "MQTT (IoT Messaging Protocol)", description: t("resume.skillsList.mqtt") },
    { name: "Rust", description: t("resume.skillsList.rust") },
  ];

  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  // Function to download CV
  const downloadCV = () => {
    const cvUrl = `${import.meta.env.BASE_URL}Sorrentino Alessio CV.pdf`;
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
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("resume.title")}</h2>
            <div className="h-1 w-20 bg-blue-900 dark:bg-blue-400 mx-auto transition-colors"></div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="flex justify-center mb-12">
            <Button
              onClick={downloadCV}
              variant="outline"
              className="gap-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
            >
              <FileDown className="h-4 w-4" />
              {t("resume.downloadCV")}
            </Button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* {t("resume.education")} */}
          <div>
            <RevealOnScroll delay={150}>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="bg-blue-900/10 dark:bg-blue-400/20 text-blue-900 dark:text-blue-400 p-2 rounded-md mr-3 transition-colors">
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
                {t("resume.education")}
              </h3>
            </RevealOnScroll>
            <div>
              <RevealOnScroll delay={200}>
                <TimelineItem
                  year="2017 - 2022"
                  title={t("resume.edu.liceo.title")}
                  organization={t("resume.edu.liceo.org")}
                  description={t("resume.edu.liceo.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <TimelineItem
                  year="2021 - 2022"
                  title={t("resume.edu.cisco.title")}
                  organization={t("resume.edu.cisco.org")}
                  description={t("resume.edu.cisco.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={400}>
                <TimelineItem
                  year="2024"
                  title={t("resume.edu.ielts.title")}
                  organization={t("resume.edu.ielts.org")}
                  description={t("resume.edu.ielts.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={500}>
                <TimelineItem
                  year="2022 - 2025"
                  title={t("resume.edu.bachelors.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.edu.bachelors.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={600}>
                <TimelineItem
                  year="2025 - Presente"
                  title={t("resume.edu.masters.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.edu.masters.desc")}
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* {t("resume.experience")} */}
          <div>
            <RevealOnScroll delay={150}>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="bg-blue-900/10 dark:bg-blue-400/20 text-blue-900 dark:text-blue-400 p-2 rounded-md mr-3 transition-colors">
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
                {t("resume.experience")}
              </h3>
            </RevealOnScroll>
            <div>
              <RevealOnScroll delay={200}>
                <TimelineItem
                  year="2017 - 2022"
                  title={t("resume.exp.summer.title")}
                  organization={t("resume.exp.summer.org")}
                  description={t("resume.exp.summer.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <TimelineItem
                  year="2022 - 2025"
                  title={t("resume.exp.lab.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.exp.lab.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={400}>
                <TimelineItem
                  year="2025 & 2026"
                  title={t("resume.exp.teaching.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.exp.teaching.desc")}
                />
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* Progetti (Nuova sezione a tutta larghezza) */}
        <div className="mt-20">
          <RevealOnScroll>
            <h3 className="text-2xl font-semibold mb-12 flex items-center justify-center">
              <span className="bg-blue-900/10 dark:bg-blue-400/20 text-blue-900 dark:text-blue-400 p-2 rounded-md mr-3 transition-colors">
                <Code className="w-5 h-5" />
              </span>
              {t("resume.projects")}
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              <RevealOnScroll delay={100}>
                <TimelineItem
                  year="2025"
                  title={t("resume.proj.iot.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.proj.iot.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <TimelineItem
                  year="2025"
                  title={t("resume.proj.dsp.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.proj.dsp.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <TimelineItem
                  year="2025"
                  title={t("resume.proj.gol.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.proj.gol.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={400}>
                <TimelineItem
                  year="2025"
                  title={t("resume.proj.arm.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.proj.arm.desc")}
                />
              </RevealOnScroll>
            </div>

            <div>
              <RevealOnScroll delay={150}>
                <TimelineItem
                  year="2025"
                  title={t("resume.proj.hrc.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.proj.hrc.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={250}>
                <TimelineItem
                  year="2026"
                  title={t("resume.proj.formation.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.proj.formation.desc")}
                />
              </RevealOnScroll>
              <RevealOnScroll delay={350}>
                <TimelineItem
                  year="2026"
                  title={t("resume.proj.rust.title")}
                  organization={t("resume.edu.bachelors.org")}
                  description={t("resume.proj.rust.desc")}
                />
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* Competenze */}
        <div className="mt-20">
          <RevealOnScroll>
            <h3 className="text-2xl font-semibold mb-12 flex items-center justify-center">
              <span className="bg-blue-900/10 dark:bg-blue-400/20 text-blue-900 dark:text-blue-400 p-2 rounded-md mr-3 transition-colors">
                <Cpu className="w-5 h-5" />
              </span>
              {t("resume.professionalSkills")}
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              {sortedSkills
                .slice(0, Math.ceil(sortedSkills.length / 2))
                .map((skill, index) => (
                  <RevealOnScroll key={skill.name} delay={index * 50}>
                    <SkillItem
                      name={skill.name}
                      description={skill.description}
                      organization={t("resume.poliTo")}
                    />
                  </RevealOnScroll>
                ))}
            </div>
            <div>
              {sortedSkills
                .slice(Math.ceil(sortedSkills.length / 2))
                .map((skill, index) => (
                  <RevealOnScroll key={skill.name} delay={index * 50 + 25}>
                    <SkillItem
                      name={skill.name}
                      description={skill.description}
                      organization={t("resume.poliTo")}
                    />
                  </RevealOnScroll>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
