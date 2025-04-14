import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  return (
    <div className="group h-full">
      <div className="h-full bg-white border border-border rounded-lg shadow-sm transition-all duration-700 hover:shadow-lg hover:border-primary/50">
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

export default SkillCard;
