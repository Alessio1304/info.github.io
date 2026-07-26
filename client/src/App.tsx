import { Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
//import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider"; // Aggiunto import del ThemeProvider

// For GitHub Pages support
import { useHashLocation } from "./lib/github-pages";

interface AppProps {
  basename?: string;
}

function App({ basename = "/" }: AppProps) {
  // Scroll to section when URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial hash on load
    handleHashChange();

    // Listen for changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Avvolgiamo l'app nel ThemeProvider impostato su system */}
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router hook={useHashLocation} base={basename}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>
              <Route path="/">
                <>
                  <Hero />
                  <About />
                  <Resume />
                  <Contact />
                </>
              </Route>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
