import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing its main features and purpose.",
  imageUrl = "https://dummyimage.com/600x400/4a9eff/ffffff&text=Project+Preview",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  liveUrl = "#",
  githubUrl = "#",
}: ProjectCardProps) => {
  return (
    <Card className="h-full overflow-hidden bg-background">
      <div className="aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-accent/50">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-4 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
          <Button
            size="sm"
            onClick={() => window.open(liveUrl, "_blank")}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Demo
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
