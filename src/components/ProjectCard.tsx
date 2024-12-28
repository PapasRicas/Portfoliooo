import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Terminal, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectButton {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface ProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  buttons?: ProjectButton[];
}

const ProjectCard = ({
  id = "1",
  title = "Project Alpha",
  description = "A retro-styled game built with modern web technologies. Features pixel-perfect graphics and old-school gameplay mechanics.",
  imageUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=300",
  buttons,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const defaultButtons: ProjectButton[] = [
    {
      label: "View Details",
      icon: <Terminal className="h-4 w-4 mr-2" />,
      onClick: () => navigate(`/project/${id}`),
    },
  ];

  const projectButtons = buttons || defaultButtons;

  return (
    <Card
      className="w-[350px] h-[400px] bg-black border-white border-2 hover:border-green-500 
        transition-all duration-300 flex flex-col group cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[200px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: `url(${imageUrl})`,
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-green-500/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-mono text-green-500">{title}</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Terminal className="h-5 w-5 text-green-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p>View Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="flex-1 font-mono text-sm text-green-500/80">
          {description}
        </p>

        <div className="h-px w-full bg-green-500/100 group-hover:bg-green-500 transition-colors mt-4" />

        <div className="flex gap-2 mt-4">
          {projectButtons.map((button, index) => (
            <Button
              key={index}
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/100 hover:text-black"
              onClick={button.onClick}
            >
              {button.icon}
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
