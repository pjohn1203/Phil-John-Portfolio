import React, { useState } from "react";
import TimelineEvent from "./TimelineEvent";

interface ExperienceTimelineProps {
  experiences?: Array<{
    title: string;
    company: string;
    date: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies?: string[];
  }>;
}

const ExperienceTimeline = ({
  experiences = [
    {
      title: "Software Engineer",
      company: "General Motors",
      location: "Austin, TX",
      date: "March 2021 - Present",
      description:
        "Full-stack software engineer focused on developing scalable enterprise applications using modern technologies and best practices.",
      responsibilities: [
        "Developed dynamic front-end interfaces leveraging KendoUI and Angular TypeScript, delivering responsive and intuitive user experiences for complex business workflows",
        "Built scalable backend services using Spring Boot, Spring Batch, and RabbitMQ, ensuring efficient data processing, scheduling, and message-driven communication",
        "Optimized and designed complex Oracle database queries, including stored procedures, performance tuning, and schema design to enhance application efficiency and scalability.",
        "Managed ETL pipelines and data integrations using IBM DataStage, enabling seamless data transformation and loading across enterprise systems.",
        "Spearheaded full-stack projects, implementing responsive UI designs and scalable backend systems hosted on PCF/OCF/Azure that supported seamless user experiences and improved operational efficiency.",
        "Collaborated with cross-functional teams to identify and implement solutions that met both technical and business requirements.",
        "Conducted rigorous testing and debugging for front-end and back-end components using JUnit, ensuring high-quality software standards and robust application performance.",
        "Documented technical workflows and system architectures to support ongoing maintenance and onboarding of new team members.",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "Spring Boot",
        "Oracle",
        "RabbitMQ",
        "Azure",
        "KendoUI",
        "JUnit",
      ],
    },
    {
      title: "Software Developer (Quality Engineering)",
      company: "Tata Consultancy Services",
      location: "San Jose, CA",
      date: "September 2019 - March 2021",
      description:
        "Quality Engineering focused on API testing, performance analysis, and load testing for a major consumer electronics company.",
      responsibilities: [
        "Developed and executed TestNG-based automation scripts for API testing, ensuring seamless integration and functionality across services.",
        "Analyzed service VMs and database metrics to design and implement testing solutions for load testing, service performance, and database performance analysis.",
        "Utilized Locust Framework with Python to simulate high-load scenarios, assess system reliability, and identify performance bottlenecks.",
        "Was contracted to a Big Tech consumer electronics company in Cupertino",
      ],
      technologies: [
        "Python",
        "TestNG",
        "Locust",
        "API Testing",
        "Performance Testing",
        "Load Testing",
      ],
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
