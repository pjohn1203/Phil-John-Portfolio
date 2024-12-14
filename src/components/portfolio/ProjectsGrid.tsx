import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects?: Array<{
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    detailedDescription: string;
    features: string[];
  }>;
}

const ProjectsGrid = ({
  projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with real-time inventory management and secure payment processing.",
      imageUrl:
        "https://dummyimage.com/600x400/4a9eff/ffffff&text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      detailedDescription:
        "A full-featured e-commerce solution with advanced inventory management, secure payment processing, and real-time order tracking.",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "User authentication",
        "Order management system",
      ],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with real-time data visualization.",
      imageUrl:
        "https://dummyimage.com/600x400/9d4edd/ffffff&text=Social+Dashboard",
      technologies: ["Vue.js", "D3.js", "Firebase", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      detailedDescription:
        "A comprehensive social media analytics dashboard providing real-time insights and data visualization for multiple platforms.",
      features: [
        "Real-time analytics",
        "Custom data visualization",
        "Multi-platform integration",
        "Automated reporting",
      ],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team features.",
      imageUrl:
        "https://dummyimage.com/600x400/4a9eff/ffffff&text=Task+Management",
      technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      detailedDescription:
        "A collaborative task management solution featuring real-time updates, team collaboration tools, and advanced project tracking capabilities.",
      features: [
        "Real-time collaboration",
        "Team management",
        "Project analytics",
        "Resource allocation",
      ],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-300"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
