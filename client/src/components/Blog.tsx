import { useState, useEffect, useRef, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, MessageSquare, Tag } from "lucide-react";

// --- Componente Helper per l'animazione allo scroll ---
const RevealOnScroll = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};
// --------------------------------------------------------

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  comments: number;
  views: number;
}

const BlogPost = ({
  title,
  excerpt,
  date,
  readTime,
  tags,
  imageUrl,
  comments,
  views,
}: BlogPostProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] hover:border-blue-900/30 dark:hover:border-blue-400/30 group bg-card">
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 dark:group-hover:bg-blue-400/10 transition-colors duration-500 pointer-events-none" />
      </div>
      <CardHeader className="p-5 pb-0">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1 bg-blue-900/10 text-blue-900 hover:bg-blue-900/20 dark:bg-blue-400/10 dark:text-blue-400 dark:hover:bg-blue-400/20 border-none transition-colors"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="flex items-center text-xs mt-2 gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {readTime}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-5 flex-grow">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-between items-center mt-auto">
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-blue-900 hover:text-blue-800 hover:bg-blue-900/10 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-400/10 transition-colors"
        >
          Leggi l'articolo
        </Button>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" /> {comments}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" /> {views}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

const Blog = () => {
  // Dati simulati aggiornati con temi ingegneristici pertinenti al tuo profilo
  const blogPosts = [
    {
      id: 1,
      title:
        "Architetture distribuite in Rust: la mia esperienza con Georuggine",
      excerpt:
        "Come ho ingegnerizzato un sistema client/server full-duplex tramite WebSocket per tracciare flotte di veicoli con la massima efficienza.",
      date: "15 Mag 2026",
      readTime: "6 min",
      tags: ["Rust", "Sistemi Distribuiti"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      comments: 12,
      views: 450,
    },
    {
      id: 2,
      title:
        "Sicurezza predittiva HRC: integrare modelli LSTM in ambito industriale",
      excerpt:
        "Dalla rilevazione alla previsione: come le reti neurali possono anticipare le collisioni e rendere sicura la collaborazione uomo-robot.",
      date: "28 Apr 2026",
      readTime: "8 min",
      tags: ["Deep Learning", "Robotica"],
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      comments: 8,
      views: 382,
    },
    {
      id: 3,
      title: "Introduzione al Feedback Linearization per veicoli autonomi",
      excerpt:
        "Un'analisi su come trasformare un sistema non lineare complesso in modelli lineari a doppio integratore per la gestione di ASV.",
      date: "10 Mar 2026",
      readTime: "7 min",
      tags: ["Controllo", "MATLAB"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      comments: 15,
      views: 512,
    },
    {
      id: 4,
      title: "Smart Home IoT: Comunicazione MQTT e Backend Scalabile",
      excerpt:
        "Costruire un'infrastruttura domotica resiliente utilizzando sensori Arduino, server CherryPy e protocolli di messaggistica leggeri.",
      date: "22 Gen 2026",
      readTime: "5 min",
      tags: ["IoT", "Python"],
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
      comments: 9,
      views: 310,
    },
    {
      id: 5,
      title: "Sviluppo Embedded su ARM Cortex-M3: Tetris Hardware",
      excerpt:
        "Gestire ADC, interrupt hardware e risorse di memoria limitate programmando un Cortex-M3 in C puro per applicazioni real-time.",
      date: "12 Nov 2025",
      readTime: "9 min",
      tags: ["Embedded", "C"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      comments: 21,
      views: 890,
    },
  ];

  const [visiblePosts, setVisiblePosts] = useState(3);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <section id="blog" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">I Miei Articoli</h2>
            <div className="h-1 w-20 bg-blue-900 dark:bg-blue-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Condivido appunti, case study e riflessioni sulle sfide tecniche
              che affronto quotidianamente nel campo dell'automazione e dello
              sviluppo software.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <RevealOnScroll
              key={post.id}
              delay={index * 100}
              className="h-full"
            >
              <BlogPost
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                tags={post.tags}
                imageUrl={post.imageUrl}
                comments={post.comments}
                views={post.views}
              />
            </RevealOnScroll>
          ))}
        </div>

        {visiblePosts < blogPosts.length && (
          <RevealOnScroll delay={300}>
            <div className="mt-12 flex justify-center">
              <Button
                onClick={loadMorePosts}
                variant="outline"
                size="lg"
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
              >
                Carica altri articoli
              </Button>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
};

export default Blog;
