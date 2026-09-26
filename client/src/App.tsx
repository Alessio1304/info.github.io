import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  // Scroll to section when URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
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
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Hero />
            <About />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
