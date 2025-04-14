import SkillCard from "./SkillCard";
import { 
  Bookmark, 
  Camera, 
  PlusCircle, 
  Music 
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
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
              icon={<Bookmark className="h-6 w-6" />}
              title="Scrittura"
              description="Articoli, riflessioni e racconti su vari argomenti di interesse personale e attualità."
            />
            <SkillCard
              icon={<Camera className="h-6 w-6" />}
              title="Fotografia"
              description="Immagini che catturano momenti, luoghi e la bellezza della vita quotidiana."
            />
            <SkillCard
              icon={<PlusCircle className="h-6 w-6" />}
              title="Podcast"
              description="Conversazioni audio su temi di attualità, cultura e storie personali."
            />
            <SkillCard
              icon={<Music className="h-6 w-6" />}
              title="Musica"
              description="Condivisione di playlist, recensioni e riflessioni sul mondo musicale."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
