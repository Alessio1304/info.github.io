import { Instagram, Linkedin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Alessio Sorrentino</h3>
            <p className="text-primary-foreground/80 text-sm mb-6 text-center md:text-left">
              Blogger e appassionato di tecnologia, condivido le mie esperienze e riflessioni 
              attraverso questo spazio personale.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/alessio_sorrentino_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://it.linkedin.com/in/alessio-sorrentino-005b43274" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-medium mb-4">Navigazione</h4>
            <nav className="flex flex-col space-y-2 items-center">
              <a href="#about" className="hover:underline transition-all hover:translate-x-1 duration-300">Chi Sono</a>
              <a href="#blog" className="hover:underline transition-all hover:translate-x-1 duration-300">Blog</a>
              <a href="#resume" className="hover:underline transition-all hover:translate-x-1 duration-300">Curriculum</a>
              <a href="#contact" className="hover:underline transition-all hover:translate-x-1 duration-300">Contatti</a>
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-6 text-center md:text-right max-w-xs">
              <p className="italic text-primary-foreground/90">
                "La scrittura è l'unica cosa che, quando la condivido con gli altri, diventa più grande."
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">— Paulo Coelho</p>
            </div>
            
            <div className="w-20 h-1 bg-accent mb-4"></div>
            
            <p className="text-sm text-primary-foreground/70">
              &copy; {currentYear} Alessio Sorrentino. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-primary shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Torna in cima"
      >
        <ArrowUp className="h-5 w-5 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;
