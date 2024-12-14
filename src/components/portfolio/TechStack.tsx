import React from "react";
import { Code, Database, Globe, Layout, Server } from "lucide-react";

interface TechStackProps {
  technologies?: Array<{
    name: string;
    icon: React.ReactNode;
    level: number;
    description: string;
  }>;
}

const TechStack = ({
  technologies = [
    {
      name: "Frontend Development",
      icon: <Layout className="h-5 w-5" />,
      level: 90,
      description: "Expert in modern frontend frameworks and responsive design",
    },
    {
      name: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      level: 85,
      description: "Proficient in building scalable server-side applications",
    },
    {
      name: "Database Management",
      icon: <Database className="h-5 w-5" />,
      level: 80,
      description: "Experienced with SQL and NoSQL databases",
    },
    {
      name: "Web Technologies",
      icon: <Globe className="h-5 w-5" />,
      level: 95,
      description: "Deep understanding of web protocols and standards",
    },
    {
      name: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      level: 88,
      description: "Proficient in multiple programming languages and paradigms",
    },
  ],
}: TechStackProps) => {
  return (
    <section className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-background"
            >
              <div className="text-purple-600">{tech.icon}</div>
              <div>
                <h3 className="font-medium">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
