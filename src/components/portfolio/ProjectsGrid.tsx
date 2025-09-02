import React from "react";
import ProjectCard from "./ProjectCard";
import krakImage from "../../assets/krak.png";
import clothesFinderImage from "../../assets/Clothesfinder.png";
import nutrAiImage from "../../assets/NutrAI.png";

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
        "A mobile app that finds clothing for sale by taking a photo. Features an intuitive UI with UIKit, image processing via CoreML, and shopping results from Google Shopping via SerpAPI.",
      imageUrl: clothesFinderImage,
      technologies: ["UIKit", "Swift", "Firebase", "SerpAPI", "CoreML"],
      url: "#",
    },
    {
      name: "Krak",
      description:
        "An iOS/web app for short-form podcast content with personalized experiences. Built with UIKit, Firebase for data storage, and AVFoundation for audio playback. Features RSS feed parsing and offline caching.",
      imageUrl: krakImage,
      technologies: ["UIKit", "Firebase Firestore", "Python"],
      url: "https://trykrak.framer.ai",
    },
    {
      name: "NutrAI (Coming Soon)",
      description:
        "NutrAI is an iOS calorie tracker designed to simplify meal logging through natural language input. Instead of requiring users to break down recipes or input meals ingredient by ingredient, NutrAI lets users describe their meals in plain text. ",
      imageUrl: nutrAiImage,
      technologies: ["SwiftUI", "Firebase Firestore", "SwiftData", "OpenAI", "ExpressJS", "Firebase Authentication", "AWS Secret Manager"],
    }
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
