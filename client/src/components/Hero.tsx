import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    // Attivare le animazioni dopo che il componente è montato
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Ciao, sono{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
                Alessio Sorrentino
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Ingegnere Informatico | Automation & Cyber-Physical Systems
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Benvenuto. Costruisco il ponte tra il rigore del software e la
              complessità del mondo fisico. Progetto architetture ad alte
              prestazioni e sistemi di controllo avanzati, dove la precisione
              non è un'opzione, ma lo standard.
            </p>
            <div className="space-x-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-900 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
              >
                Contattami
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
          </div>

          <div
            className={`flex-1 max-w-lg transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* 
              Qui ho sostituito i border e i background con [#0A2540] 
              per garantire un blu profondo e professionale, senza tracce di viola.
            */}
            <div className="relative w-full h-full aspect-square rounded-full overflow-hidden border-4 border-[#0A2540]/20 p-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-[#0A2540]/50">
              <div className="bg-gradient-to-br from-[#0A2540]/10 to-[#0A2540]/30 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://github.com/Alessio1304/Components/blob/main/IMG_9754.jpeg?raw=true"
                  alt="Alessio Sorrentino"
                  className="w-[90%] h-[90%] object-cover rounded-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-2 -right-2 bg-[#0A2540] text-white text-xs py-1 px-3 rounded-full shadow-lg">
                Automation & Control
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center mt-16 transition-opacity duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="rounded-full p-3 text-blue-900 hover:bg-blue-900/10 transition-all duration-300 hover:shadow-md"
            aria-label="Scorri fino alla sezione Chi Sono"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
