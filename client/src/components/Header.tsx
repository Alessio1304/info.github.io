import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  FileDown,
  Linkedin,
  Instagram,
  Github,
  User,
  Briefcase,
  Mail,
  ChevronRight,
  Globe,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Track mount state for CSS transitions (enter + exit)
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    closeMobileMenu();
  };

  // Open: mount DOM first, then trigger CSS transition on next frame
  const openMobileMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsMobileMenuOpen(true);
    setMenuMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMenuVisible(true);
      });
    });
  };

  // Close: trigger CSS transition out, then unmount DOM after duration
  const closeMobileMenu = () => {
    setMenuVisible(false);
    closeTimeoutRef.current = setTimeout(() => {
      setMenuMounted(false);
      setIsMobileMenuOpen(false);
      closeTimeoutRef.current = null;
    }, 400); // matches longest CSS transition
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Function to download CV
  const downloadCV = () => {
    const cvUrl = `${import.meta.env.BASE_URL}Sorrentino Alessio CV.pdf`;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sorrentino_Alessio_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'it' ? 'en' : 'it';
    i18n.changeLanguage(newLang);
  };

  const menuItems = [
    { label: t("header.about"), section: "about", icon: User },
    { label: t("header.resume"), section: "resume", icon: Briefcase },
    { label: t("header.contact"), section: "contact", icon: Mail },
  ];

  return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-blue-900 dark:border-blue-400 shadow-md transition-all duration-300 hover:scale-110">
              <AvatarImage
                src="https://ui-avatars.com/api/?name=AS&color=ffffff&background=1e3a8a"
                alt="Alessio Sorrentino"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-xl text-foreground">
                Alessio Sorrentino
              </h1>
              <div className="flex items-center mt-1 space-x-2">
                <a
                  href="https://www.instagram.com/alessio_sorrentino_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#E1306C] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://it.linkedin.com/in/alessio-sorrentino-005b43274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#0077B5] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/Alessio1304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-blue-900 dark:hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              {t("header.about")}
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="text-sm font-medium hover:text-blue-900 dark:hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              {t("header.resume")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-blue-900 dark:hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              {t("header.contact")}
            </button>
            <div className="flex items-center gap-3">
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className="gap-2 text-foreground font-medium"
              >
                <Globe className="h-4 w-4" /> {i18n.language.toUpperCase()}
              </Button>
              <Button
                onClick={downloadCV}
                size="sm"
                className="gap-2 shadow-sm bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-transform duration-300 hover:shadow-md hover:translate-y-[-2px]"
              >
                <FileDown className="h-4 w-4" /> {t("header.downloadCV")}
              </Button>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="gap-1 px-2 text-foreground font-medium"
            >
              <Globe className="h-4 w-4" /> {i18n.language.toUpperCase()}
            </Button>
            
            {/* Mobile Menu Button — animated hamburger / X */}
            <button
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm focus:outline-none transition-all duration-300 hover:shadow-md active:scale-95"
              onClick={() =>
                isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
              }
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-full bg-foreground rounded-full transition-all duration-300 origin-center ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-[7px]"
                      : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-foreground rounded-full transition-all duration-200 ${
                    isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-foreground rounded-full transition-all duration-300 origin-center ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-[7px]"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile Navigation (animated slide-down with glassmorphism) ─── */}
      {menuMounted && (
        <div className="fixed inset-0 md:hidden z-[60]">
          {/* Backdrop overlay */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
              menuVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMobileMenu}
          />

          {/* Menu panel — slides down from top */}
          <div
            className={`absolute top-0 left-0 right-0 transition-all duration-400 ${
              menuVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl rounded-b-3xl">
              {/* Menu header */}
              <div className="container mx-auto px-5 pt-5 pb-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border-2 border-blue-900 dark:border-blue-400 shadow-lg ring-2 ring-blue-900/10 dark:ring-blue-400/10">
                      <AvatarImage
                        src="https://ui-avatars.com/api/?name=AS&color=ffffff&background=1e3a8a"
                        alt="Alessio Sorrentino"
                      />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-semibold text-lg text-foreground">
                        Alessio Sorrentino
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        {t("header.role")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/60 hover:bg-muted transition-colors duration-200 active:scale-95"
                      onClick={closeMobileMenu}
                      aria-label="Chiudi menu"
                    >
                      <X className="h-5 w-5 text-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Divider with gradient */}
              <div className="mx-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Navigation items — staggered entrance */}
              <nav className="px-5 py-4">
                <div className="space-y-1">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.section}
                        onClick={() => scrollToSection(item.section)}
                        className={`
                          group w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl
                          text-foreground hover:bg-blue-900/5 dark:hover:bg-blue-400/10
                          active:bg-blue-900/10 dark:active:bg-blue-400/20
                          transition-all duration-300 ease-out
                        `}
                        style={{
                          transitionDelay: menuVisible
                            ? `${80 + index * 60}ms`
                            : "0ms",
                          opacity: menuVisible ? 1 : 0,
                          transform: menuVisible
                            ? "translateX(0)"
                            : "translateX(-20px)",
                        }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-900/10 dark:bg-blue-400/10 flex items-center justify-center group-hover:bg-blue-900/20 dark:group-hover:bg-blue-400/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-[18px] w-[18px] text-blue-900 dark:text-blue-400" />
                        </div>
                        <span className="font-medium text-[15px]">
                          {item.label}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </button>
                    );
                  })}
                </div>
              </nav>

              {/* Divider */}
              <div className="mx-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Bottom actions — staggered entrance */}
              <div
                className="px-5 py-5 flex items-center gap-3"
                style={{
                  transitionDelay: menuVisible ? "260ms" : "0ms",
                  opacity: menuVisible ? 1 : 0,
                  transform: menuVisible
                    ? "translateY(0)"
                    : "translateY(10px)",
                  transition:
                    "opacity 300ms ease-out, transform 300ms ease-out",
                }}
              >
                <Button
                  onClick={() => {
                    downloadCV();
                    closeMobileMenu();
                  }}
                  className="gap-2 flex-1 bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl h-11 shadow-lg shadow-blue-900/20 dark:shadow-blue-600/20 active:scale-[0.98] transition-all duration-200"
                  size="sm"
                >
                  <FileDown className="h-4 w-4" /> {t("header.downloadCV")}
                </Button>

                <div className="flex gap-2">
                  {[
                    {
                      href: "https://www.instagram.com/alessio_sorrentino_/",
                      icon: Instagram,
                      hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]/30",
                      label: "Instagram",
                    },
                    {
                      href: "https://it.linkedin.com/in/alessio-sorrentino-005b43274",
                      icon: Linkedin,
                      hoverColor: "hover:text-[#0077B5] hover:border-[#0077B5]/30",
                      label: "LinkedIn",
                    },
                    {
                      href: "https://github.com/Alessio1304",
                      icon: Github,
                      hoverColor: "hover:text-foreground hover:border-foreground/30",
                      label: "GitHub",
                    },
                  ].map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`
                          w-11 h-11 rounded-xl border border-border/50 bg-muted/40
                          flex items-center justify-center
                          text-muted-foreground ${social.hoverColor}
                          active:scale-95 transition-all duration-200
                        `}
                      >
                        <SocialIcon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
