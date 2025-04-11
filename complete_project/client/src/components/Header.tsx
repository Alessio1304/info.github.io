import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, FileDown, Linkedin, Instagram } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to download CV
  const downloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set link properties for CV file with the correct base path for GitHub Pages
    const basePath = import.meta.env.BASE_URL || '/';
    // Ensure we have a clean base path that doesn't end with a slash if we're adding one
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    link.href = `${cleanBasePath}/CV_Alessio_Sorrentino.pdf`;
    link.download = 'CV_Alessio_Sorrentino.pdf';
    // Append to the document
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

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
            <Avatar className="h-10 w-10 border-2 border-primary shadow-md transition-all duration-300 hover:scale-110">
              <AvatarImage src="https://ui-avatars.com/api/?name=AS&color=ffffff&background=0f766e" alt="Alessio Sorrentino" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-xl">Alessio Sorrentino</h1>
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
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Chi Sono
            </a>
            <a
              href="#blog"
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Blog
            </a>
            <a
              href="#resume"
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Curriculum
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contatti
            </a>
            <Button onClick={downloadCV} size="sm" className="gap-2 shadow-sm transition-transform duration-300 hover:shadow-md hover:translate-y-[-2px]">
              <FileDown className="h-4 w-4" /> CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 md:hidden z-50">
          {/* Overlay scuro semi-trasparente */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          
          {/* Menu mobile */}
          <div className="absolute top-0 left-0 right-0 bg-background shadow-lg">
            <div className="container mx-auto px-4">
              {/* Header del menu mobile - replica l'header principale */}
              <div className="flex justify-between items-center py-5">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-primary shadow-md">
                    <AvatarImage src="https://ui-avatars.com/api/?name=AS&color=ffffff&background=0f766e" alt="Alessio Sorrentino" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="font-semibold text-xl">Alessio Sorrentino</h1>
                  </div>
                </div>
                
                {/* Pulsante per chiudere */}
                <button
                  className="focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Chiudi menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            {/* Contenuto del menu */}
            <div className="border-t py-6 px-4">
              <div className="container mx-auto">
                <nav className="flex flex-col gap-4">
                  <a
                    href="#about"
                    className="text-sm font-medium py-3 hover:text-primary hover:pl-2 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Chi Sono
                  </a>
                  <a
                    href="#blog"
                    className="text-sm font-medium py-3 hover:text-primary hover:pl-2 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                  <a
                    href="#resume"
                    className="text-sm font-medium py-3 hover:text-primary hover:pl-2 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Curriculum
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium py-3 hover:text-primary hover:pl-2 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contatti
                  </a>
                  <div className="flex gap-3 mt-4">
                    <Button onClick={downloadCV} className="gap-2 flex-1" size="sm">
                      <FileDown className="h-4 w-4" /> CV
                    </Button>
                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                      <a href="https://www.instagram.com/alessio_sorrentino_/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                      <a href="https://it.linkedin.com/in/alessio-sorrentino-005b43274" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
