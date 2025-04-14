import { useEffect } from "react";
import Header from "@assets/Header";
import Hero from "@assets/Hero";
import About from "@/components/About";
import Blog from "@assets/Blog";
import Resume from "@assets/Resume";
import Contact from "@assets/Contact";
import Footer from "@assets/Footer";

const Home = () => {
  // Update document title
  useEffect(() => {
    document.title = "Alessio Sorrentino - Blog Personale";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
