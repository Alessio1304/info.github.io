import { useState } from "react";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, MessageSquare, Tag } from "lucide-react";

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
  views 
}: BlogPostProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-5 pb-0">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
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
      <CardContent className="p-5">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-between items-center">
        <Button variant="ghost" size="sm" className="text-sm">
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
  // Questa è una simulazione di dati che potrai sostituire con i tuoi contenuti reali
  const blogPosts = [
    {
      id: 1,
      title: "Le migliori app per organizzare il lavoro da remoto",
      excerpt: "Scopri quali sono le applicazioni più utili per gestire il lavoro a distanza e mantenere alta la produttività anche da casa.",
      date: "15 Mar 2025",
      readTime: "5 min",
      tags: ["Tecnologia", "Lavoro"],
      imageUrl: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
      comments: 8,
      views: 342
    },
    {
      id: 2,
      title: "Fotografia con smartphone: consigli pratici",
      excerpt: "Come scattare foto professionali utilizzando semplicemente il tuo smartphone. Tecniche, app e suggerimenti per risultati sorprendenti.",
      date: "10 Feb 2025",
      readTime: "6 min",
      tags: ["Fotografia", "Smartphone"],
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      comments: 5,
      views: 421
    },
    {
      id: 3,
      title: "Playlist per concentrarsi meglio durante lo studio",
      excerpt: "Una selezione di brani musicali ideali per migliorare la concentrazione durante le sessioni di studio o lavoro.",
      date: "3 Feb 2025",
      readTime: "4 min",
      tags: ["Musica", "Produttività"],
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      comments: 3,
      views: 298
    },
    {
      id: 4,
      title: "Riscoprire la lettura nel mondo digitale",
      excerpt: "Come tornare ad apprezzare i libri cartacei nell'era degli e-book e dei contenuti digitali. Riflessioni e consigli pratici.",
      date: "20 Gen 2025",
      readTime: "7 min",
      tags: ["Lettura", "Lifestyle"],
      imageUrl: "https://images.unsplash.com/photo-1513001900722-370f803f498d",
      comments: 9,
      views: 387
    },
    {
      id: 5,
      title: "Podcast italiani da ascoltare nel 2025",
      excerpt: "I migliori podcast italiani di quest'anno, divisi per categoria: cultura, storia, attualità, intrattenimento e molto altro.",
      date: "5 Gen 2025",
      readTime: "9 min",
      tags: ["Podcast", "Media"],
      imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc",
      comments: 14,
      views: 624
    }
  ];
  
  const [visiblePosts, setVisiblePosts] = useState(3);
  
  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length));
  };

  return (
    <section id="blog" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Il Mio Blog</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Condivido riflessioni, esperienze e consigli su diversi argomenti che mi appassionano.
            Esplora gli ultimi articoli e lascia un commento con i tuoi pensieri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              tags={post.tags}
              imageUrl={post.imageUrl}
              comments={post.comments}
              views={post.views}
            />
          ))}
        </div>

        {visiblePosts < blogPosts.length && (
          <div className="mt-12 flex justify-center">
            <Button onClick={loadMorePosts} variant="outline" size="lg">
              Carica altri articoli
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
