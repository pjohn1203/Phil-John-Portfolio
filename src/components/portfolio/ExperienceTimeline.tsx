import React, { useState } from "react";
import TimelineEvent from "./TimelineEvent";

interface ExperienceTimelineProps {
  experiences?: Array<{
    title: string;
    company: string;
    date: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
  }>;
}

const ExperienceTimeline = ({
  experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      date: "2022 - Present",
      description:
        "Leading development of cloud-native applications and mentoring junior developers.",
      responsibilities: [
        "Architected and implemented scalable microservices",
        "Led team of 5 developers in agile environment",
        "Reduced system latency by 40%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      date: "2020 - 2022",
      description:
        "Developed and maintained full-stack web applications for enterprise clients.",
      responsibilities: [
        "Built responsive web applications",
        "Implemented RESTful APIs",
        "Optimized database performance",
      ],
      technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      date: "2018 - 2020",
      description:
        "Created engaging user interfaces and interactive web experiences.",
      responsibilities: [
        "Developed responsive layouts",
        "Implemented UI/UX designs",
        "Optimized frontend performance",
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Vue.js"],
    },
  ],
}: ExperienceTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 opacity-30" />

          {/* Timeline Events */}
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative ${index % 2 === 0 ? "lg:ml-auto lg:pl-8" : "lg:mr-auto lg:pr-8"} lg:w-1/2`}
            >
              {/* Connection Line */}
              <div className="absolute top-8 hidden lg:block">
                <div
                  className={`w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 ${index % 2 === 0 ? "-left-8" : "-right-8"}`}
                />
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-purple-600 bg-background ${index % 2 === 0 ? "-left-10" : "-right-10"}`}
                >
                  <div className="absolute inset-0.5 rounded-full bg-purple-600 animate-pulse" />
                </div>
              </div>

              {/* Timeline Event Card */}
              <div
                className={`transform transition-all duration-300 ${activeIndex === index ? "scale-105" : "scale-100"}`}
              >
                <TimelineEvent
                  {...experience}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
