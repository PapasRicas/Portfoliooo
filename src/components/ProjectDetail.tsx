import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Terminal, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { projects, MediaItem } from "@/data/projects";

const MediaViewer = ({ item }: { item: MediaItem }) => {
  if (item.type === "video") {
    return (
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={item.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <img src={item.url} className="w-full h-full object-cover" />
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id) || projects[0];

  useEffect(() => {
    const mainContent = document.querySelector(".overflow-y-auto");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <div className="min-h-screen bg-black p-8">
      <Card className="max-w-4xl mx-auto bg-black border-green-500 border-2">
        <div className="relative h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
            }}
          />
          <div className="absolute inset-0 bg-green-500/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-mono text-green-500 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-green-500/80 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-mono text-green-500">
              $ project.details
            </h2>
            <p className="text-green-500/80 leading-relaxed whitespace-pre-wrap">
              {project.longDescription}
            </p>
          </div>

          {project.media && project.media.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-mono text-green-500">
                $ project.media
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.media.map((item, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative group cursor-pointer">
                        {item.type === "video" ? (
                          <div className="aspect-video w-full bg-black/50 rounded-lg border-2 border-green-500/50 group-hover:border-green-500 flex items-center justify-center overflow-hidden">
                            <img
                              src={item.thumbnailUrl || item.url} // Use the thumbnail URL if available
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video w-full rounded-lg border-2 border-green-500/50 group-hover:border-green-500 overflow-hidden">
                            <img
                              src={item.url}
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                        )}
                        {item.caption && (
                          <p className="mt-2 text-sm font-mono text-green-500/70 text-center">
                            {item.caption}
                          </p>
                        )}
                      </div>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl bg-black border-green-500">
                      <MediaViewer item={item} />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-xl font-mono text-green-500">$ project.tech</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-1 rounded border border-green-500/50 text-green-500/80 text-sm font-mono"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.demoUrl && (
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/100 hover:text-black"
                onClick={() => window.open(project.demoUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/100 hover:text-black"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                View Source
              </Button>
            )}
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/100 hover:text-black ml-auto"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetail;
