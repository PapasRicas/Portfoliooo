import React from "react";
import ProjectCard from "./ProjectCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { projects, getFeaturedProjects } from "@/data/projects";

interface ProjectsGridProps {
  featuredOnly?: boolean;
  maxProjects?: number;
}

const ProjectsGrid = ({
  featuredOnly = false,
  maxProjects,
}: ProjectsGridProps) => {
  const projectsToShow = featuredOnly ? getFeaturedProjects() : projects;
  const limitedProjects = maxProjects
    ? projectsToShow.slice(0, maxProjects)
    : projectsToShow;

  return (
    <div className="w-full min-h-[60vh] bg-black p-8 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <TooltipProvider>
        <div className="max-w-6xl mx-auto space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {limitedProjects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  videoUrl={project.media?.find((m) => m.type === "video")?.url}
                />
              </div>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ProjectsGrid;
