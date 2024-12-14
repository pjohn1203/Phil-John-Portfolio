import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  onExploreClick?: () => void;
  imageUrl?: string;
}

const HeroSection = ({
  name = "John Doe",
  title = "Software Engineer",
  subtitle = "Crafting digital experiences with code",
  onExploreClick = () => {},
  imageUrl = "https://dummyimage.com/300/4a9eff/ffffff&text=JD",
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <div className="mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg shadow-purple-600/20">
            <img
              src={imageUrl}
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

        <Button
          onClick={onExploreClick}
          variant="outline"
          size="lg"
          className="mt-12 border-purple-600 text-white hover:bg-purple-600/20"
        >
          Explore My Work
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
