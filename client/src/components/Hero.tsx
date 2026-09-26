import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-8 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <ScrollReveal direction="left" delay={0.1} className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("hero.greeting")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-400 dark:to-blue-200">
                Alessio Sorrentino
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              {t("hero.role")}
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>
            <div className="space-x-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
              >
                {t("hero.contact")}
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-muted-foreground text-sm lg:justify-start justify-center">
              <a
                href="https://www.instagram.com/alessio_sorrentino_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E1306C] transition-colors group"
              >
                Instagram
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://it.linkedin.com/in/alessio-sorrentino-005b43274"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0077B5] transition-colors group"
              >
                LinkedIn
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/Alessio1304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors group"
              >
                Github
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3} className="flex-1 max-w-lg">
            {/* 
              Integrazione della dark mode per i bordi e gli sfondi della foto
            */}
            <div className="relative w-full h-full aspect-square rounded-full overflow-hidden border-4 border-[#0A2540]/20 dark:border-blue-400/30 p-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-[#0A2540]/50 dark:hover:border-blue-400/60">
              <div className="bg-gradient-to-br from-[#0A2540]/10 to-[#0A2540]/30 dark:from-blue-500/10 dark:to-blue-500/30 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}IMG_9754.jpeg`}
                  alt="Alessio Sorrentino"
                  className="w-[90%] h-[90%] object-cover rounded-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-2 -right-2 bg-[#0A2540] dark:bg-blue-600 text-white text-xs py-1 px-3 rounded-full shadow-lg">
                Automation & Control
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.7} width="w-full">
          <div className="flex justify-center mt-16">
            <button
              onClick={scrollToAbout}
              className="rounded-full p-3 text-blue-900 dark:text-blue-400 hover:bg-blue-900/10 dark:hover:bg-blue-400/20 transition-all duration-300 hover:shadow-md"
              aria-label={t("hero.scrollDown")}
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
