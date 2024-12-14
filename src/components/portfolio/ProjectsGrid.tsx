import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects?: Array<{
    name: string;
    description: string;
    imageUrl?: string;
    technologies: string[];
    url?: string;
  }>;
}

const ProjectsGrid = ({
  projects = [
    {
      name: "ClothesFinder",
      description:
        "Developed a mobile application that enables users to find clothing styles for sale by simply snapping a photo of an article of clothing. Designed an intuitive and accessible UI using UIKit to facilitate image upload and provide users with shopping results from Google Shopping, based on tags returned by a CoreML Model. Integrated CoreML for seamless image processing and SerpAPI for Google Shopping integration to deliver relevant product information in real-time.",
      imageUrl:
        "https://dummyimage.com/600x400/4a9eff/ffffff&text=ClothesFinder",
      technologies: ["UIKit", "Swift", "Firebase", "SerpAPI", "CoreML"],
      url: "#",
    },
    {
      name: "Krak",
      description:
        "Developed an iOS app for delivering short-form podcast content using audio RSS feeds, providing personalized user experiences through Firebase for secure session management and data storage. Designed in Figma and built with UIKit for a responsive and smooth user interface across devices. Handled RSS/XML parsing and used URLSession for network calls, ensuring asynchronous data retrieval and offline caching. Integrated AVFoundation for seamless audio playback, including background audio and media controls. Implemented CI/CD pipelines and testing via TestFlight for efficient app deployment.",
      imageUrl: "https://dummyimage.com/600x400/9d4edd/ffffff&text=Krak",
      technologies: ["UIKit", "Firebase Firestore", "Python"],
      url: "https://trykrak.framer.ai",
    },
  ],
}: ProjectsGridProps) => {
  return (
    <section className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-300"
            >
              <ProjectCard
                title={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                liveUrl={project.url || "#"}
                githubUrl="#"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
