import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

const HeroSection = ({
  name = "Phil John",
  title = "Software Engineer",
  subtitle = "Pursuing my curiosity with technology",
  onExploreClick = () => {},
  onContactClick = () => {},
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg shadow-purple-600/20">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-white/80">{title}</p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mt-6">
            {subtitle}
          </p>
        </div>

        <div className="flex justify-center items-center mt-12">
          <Button
            onClick={onExploreClick}
            variant="outline"
            size="lg"
            className="mr-4 border-purple-600 text-white hover:bg-purple-600/20"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={onContactClick}
            variant="outline"
            size="lg"
            className="border-purple-600 text-white hover:bg-purple-600/20"
          >
            Contact Me
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
