import React, { useState, useCallback, useRef } from "react";
import Navigation from "./portfolio/Navigation";
import HeroSection from "./portfolio/HeroSection";
import ExperienceTimeline from "./portfolio/ExperienceTimeline";
import TechStack from "./portfolio/TechStack";
import ProjectsGrid from "./portfolio/ProjectsGrid";
import ContactSection from "./portfolio/ContactSection";

const Home = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) return;

    scrollTimeout.current = setTimeout(() => {
      const scrollPosition = window.scrollY;
      setIsNavVisible(scrollPosition > 100);
      scrollTimeout.current = undefined;
    }, 100);
  }, []);

  // Optimized section click handler
  const handleSectionClick = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen w-full bg-[#0f172a]">
      <Navigation
        isVisible={isNavVisible}
        onSectionClick={handleSectionClick}
      />

      <main className="relative">
        <div id="about" className="min-h-screen">
          <HeroSection
            name="Phil John"
            title="Software Developer & Engineer"
            subtitle="Pursuing my curiosity with technology"
            onExploreClick={() => handleSectionClick("experience")}
          />
        </div>

        <div id="experience" className="pt-16">
          <ExperienceTimeline />
        </div>

        <div id="skills" className="pt-16">
          <TechStack />
        </div>

        <div id="projects" className="pt-16">
          <ProjectsGrid />
        </div>

        <div id="contact" className="pt-16">
          <ContactSection
            email="pkjohn1203@gmail.com"
            socialLinks={{
              github: "https://github.com/pjohn1203",
              linkedin: "https://www.linkedin.com/in/philjohn1203/",
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default React.memo(Home);
