import React from "react";
import { Code, Database, Globe, Layout, Server } from "lucide-react";
import TechBadge from "./TechBadge";

interface TechStackProps {
  skills?: Array<{
    name: string;
    icon: React.ReactNode;
    keywords: string[];
    description: string;
  }>;
}

const TechStack = ({
  skills = [
    {
      name: "Languages",
      icon: <Code className="h-5 w-5" />,
      keywords: ["Java", "Swift", "Oracle SQL", "TypeScript", "Python"],
      description: "Programming languages I specialize in",
    },
    {
      name: "Technologies",
      icon: <Server className="h-5 w-5" />,
      keywords: [
        "UIKit",
        "SwiftUI",
        "SpringBoot",
        "Spring Batch",
        "IBM DataStage",
        "Oracle",
        "Firebase",
        "OCF/PCF",
        "Azure",
      ],
      description: "Frameworks and platforms I work with",
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

        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center space-x-3">
                <div className="text-purple-600">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.keywords.map((skill, skillIndex) => (
                  <TechBadge
                    key={skillIndex}
                    name={skill}
                    level={85}
                    description={`Experienced with ${skill}`}
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-accent/5">
          <h4 className="text-lg font-semibold mb-2">Continuous Learning</h4>
          <p className="text-foreground/80">
          I’m currently deepening my knowledge in the medical device space, driven by a strong interest in using code to make a real impact on people’s health. I’m actively building projects to apply my experience with data engineering and iOS development, especially focusing on how data can be explored and leveraged to support better health outcomes. I’m also learning more about ISO/IEC standards to better understand how to build safe, reliable, and compliant software for healthcare environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
