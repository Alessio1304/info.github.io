import SkillCard from "./SkillCard";
import { Code2, Network, Cpu, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: t("about.skills.algorithms.title"),
      description: t("about.skills.algorithms.desc"),
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: t("about.skills.network.title"),
      description: t("about.skills.network.desc"),
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: t("about.skills.iot.title"),
      description: t("about.skills.iot.desc"),
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t("about.skills.hardware.title"),
      description: t("about.skills.hardware.desc"),
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: t("about.skills.automation.title"),
      description: t("about.skills.automation.desc"),
    },
  ];

  const personalInfo = [
    { label: t("about.info.name"), value: "Alessio Sorrentino" },
    { label: t("about.info.email"), value: "alessio.sor.1304@icloud.com" },
    { label: t("about.info.location"), value: "Torino & Roma" },
    { label: t("about.info.social"), value: "Instagram, LinkedIn, Github" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-background overflow-hidden"
    >
      {/* Effetti di luce decorativi sullo sfondo (Blobs) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-900/5 dark:bg-blue-500/10 blur-[100px]" />
        <div className="absolute top-[60%] -left-[10%] w-[30%] h-[30%] rounded-full bg-blue-900/5 dark:bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
            <div className="h-1 w-20 bg-blue-900 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonna Sinistra - Bio e Info */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-bold mb-6 text-foreground/90">
                {t("about.subtitle")}
              </h3>
              <div className="text-muted-foreground mb-10 leading-relaxed text-lg space-y-4">
                <p>
                  <Trans
                    i18nKey="about.p1"
                    components={{
                      1: <strong className="text-foreground font-semibold" />,
                      3: <span className="text-blue-900 dark:text-blue-400 font-semibold" />
                    }}
                  />
                </p>
                <p>
                  <Trans
                    i18nKey="about.p2"
                    components={{
                      1: <strong />,
                      3: <strong />,
                      5: <strong />,
                      7: <strong />
                    }}
                  />
                </p>
                <p>
                  <Trans
                    i18nKey="about.p3"
                    components={{
                      1: <strong />,
                      3: <em />,
                      5: <strong />
                    }}
                  />
                </p>
                <p>
                  <Trans
                    i18nKey="about.p4"
                    components={{
                      1: <strong className="text-foreground font-semibold" />
                    }}
                  />
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalInfo.map((info, index) => (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <div className="relative group p-5 rounded-2xl bg-secondary/20 border border-transparent transition-all duration-300 ease-out hover:bg-card hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] hover:border-blue-900/10 dark:hover:border-blue-400/20 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 dark:from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                    <div className="relative z-10">
                      <p className="font-bold mb-1 text-foreground/80 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Colonna Destra - Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
            {skills.map((skill, index) => (
              <ScrollReveal
                key={index}
                delay={0.2 + index * 0.1}
                className={index === skills.length - 1 ? "sm:col-span-2" : ""}
              >
                <SkillCard
                  icon={skill.icon}
                  title={skill.title}
                  description={skill.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
