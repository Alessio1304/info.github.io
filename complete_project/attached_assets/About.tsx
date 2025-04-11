import { Bookmark, Camera, Headphones, Music } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SkillCard = ({ title, description, icon }: SkillCardProps) => {
  return (
    <div className="group h-full">
      <div className="h-full bg-background border border-border rounded-lg shadow-sm transition-all duration-700 hover:shadow-lg hover:border-primary/50">
        <div className="p-6">
          <div className="mb-4 text-primary rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 shadow-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Chi Sono</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Un appassionato di tecnologia e spazio
            </h3>
            <p className="text-muted-foreground mb-6">
              Ciao, sono Alessio e questo è il mio angolo di web dove condivido pensieri e fornisco informazioni su me stesso.
              La mia avventura nel mondo del blogging è iniziata alcuni anni fa, spinto dalla voglia di 
              esprimere idee e connettermi con persone che condividono i miei stessi interessi.
            </p>
            <p className="text-muted-foreground mb-6">
              Credo fortemente nel potere della condivisione di esperienze e nella capacità della narrazione
              di creare connessioni autentiche. In questo spazio troverai contenuti personali, riflessioni
              e racconti delle mie passioni più grandi.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-primary/5 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="font-medium mb-1">Nome:</p>
                <p className="text-muted-foreground">Alessio Sorrentino</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="font-medium mb-1">Email:</p>
                <p className="text-muted-foreground">alessiosor1304@gmail.com</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="font-medium mb-1">Località:</p>
                <p className="text-muted-foreground">Torino, Italia</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="font-medium mb-1">Social:</p>
                <p className="text-muted-foreground">Instagram, LinkedIn</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SkillCard 
              title="Scrittura"
              description="Articoli, riflessioni e racconti su vari argomenti di interesse personale e attualità."
              icon={<Bookmark className="h-6 w-6" />}
            />
            <SkillCard 
              title="Fotografia"
              description="Immagini che catturano momenti, luoghi e la bellezza della vita quotidiana."
              icon={<Camera className="h-6 w-6" />}
            />
            <SkillCard 
              title="Podcast"
              description="Conversazioni audio su temi di attualità, cultura e storie personali."
              icon={<Headphones className="h-6 w-6" />}
            />
            <SkillCard 
              title="Musica"
              description="Condivisione di playlist, recensioni e riflessioni sul mondo musicale."
              icon={<Music className="h-6 w-6" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
