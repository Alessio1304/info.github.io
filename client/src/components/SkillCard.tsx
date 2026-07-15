import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  return (
    <div className="group h-full">
      <div className="h-full bg-white border border-border rounded-lg shadow-sm transition-all duration-700 hover:shadow-lg hover:border-blue-900/50">
        <div className="p-6">
          <div className="mb-4 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center bg-blue-900/10 group-hover:bg-blue-900/20 transition-all duration-300 shadow-md">
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
