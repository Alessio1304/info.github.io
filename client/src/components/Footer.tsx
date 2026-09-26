import { Instagram, Linkedin, Github, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 bg-blue-900 dark:bg-background dark:border-t dark:border-blue-900/30 text-white relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Alessio Sorrentino</h3>
            <p className="text-white/80 dark:text-muted-foreground text-sm mb-6 text-center md:text-left"></p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/alessio_sorrentino_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-blue-900/20 dark:hover:bg-blue-400/20 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://it.linkedin.com/in/alessio-sorrentino-005b43274"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-blue-900/20 dark:hover:bg-blue-400/20 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Alessio1304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-blue-900/20 dark:hover:bg-blue-400/20 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">{t("footer.nav")}</h4>
            <nav className="flex flex-col space-y-2 items-center">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:underline dark:hover:text-blue-400 dark:text-gray-300 transition-all hover:translate-x-1 duration-300"
              >
                {t("header.about")}
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="hover:underline dark:hover:text-blue-400 dark:text-gray-300 transition-all hover:translate-x-1 duration-300"
              >
                {t("header.resume")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:underline dark:hover:text-blue-400 dark:text-gray-300 transition-all hover:translate-x-1 duration-300"
              >
                {t("header.contact")}
              </button>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="mb-6 text-center md:text-right max-w-xs"></div>

            <div className="w-20 h-1 bg-blue-400 dark:bg-blue-500 mb-4 rounded-full"></div>

            <p className="text-sm text-white/70 dark:text-muted-foreground">
              &copy; {currentYear} Alessio Sorrentino. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-blue-900 border border-white/20 shadow-lg z-50 transition-all duration-300 hover:bg-blue-800 dark:bg-background dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-400/20 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label={t("footer.backToTop")}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
