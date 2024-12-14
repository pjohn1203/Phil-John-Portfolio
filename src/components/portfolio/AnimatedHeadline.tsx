import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
  text?: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetweenLines?: number;
  className?: string;
}

const AnimatedHeadline = ({
  text = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Arduino Hobbyist",
    "Mobile Developer",
  ],
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetweenLines = 2000,
  className = "",
}: AnimatedHeadlineProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      const currentLine = text[currentIndex];

      if (isTyping) {
        if (displayText.length < currentLine.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentLine.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, delayBetweenLines);
        }
      } else {
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, deleteSpeed);
        } else {
          setCurrentIndex((prev) => (prev + 1) % text.length);
          setIsTyping(true);
        }
      }
    };

    animateText();

    return () => clearTimeout(timeout);
  }, [
    displayText,
    currentIndex,
    isTyping,
    text,
    typingSpeed,
    deleteSpeed,
    delayBetweenLines,
  ]);

  return (
    <div
      className={cn(
        "bg-background min-h-[120px] flex items-center justify-center p-4",
        className,
      )}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {displayText}
        </span>
        <span className="animate-pulse ml-1 inline-block w-[3px] h-8 md:h-10 lg:h-12 bg-purple-600 align-middle">
          |
        </span>
      </h1>
    </div>
  );
};

export default AnimatedHeadline;
