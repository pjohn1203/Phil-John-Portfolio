import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Building2Icon, ExternalLinkIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TimelineEventProps {
  title?: string;
  company?: string;
  date?: string;
  description?: string;
  responsibilities?: string[];
  technologies?: string[];
  onClick?: () => void;
  isActive?: boolean;
}

const TimelineEvent = ({
  title = "Software Engineer",
  company = "Tech Company Inc.",
  date = "Jan 2023 - Present",
  description = "Led development of key features and improvements to the platform.",
  responsibilities = [
    "Developed and maintained core platform features",
    "Collaborated with cross-functional teams",
    "Improved application performance",
  ],
  technologies = ["React", "TypeScript", "Node.js"],
  onClick = () => {},
  isActive = false,
}: TimelineEventProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-background">
      {/* Timeline Event Card */}
      <Card
        className={`w-full p-6 transition-all duration-300 hover:shadow-lg hover:border-purple-600 cursor-pointer ${
          isActive ? "border-purple-600 shadow-lg" : ""
        }`}
        onClick={() => {
          onClick();
          setIsOpen(true);
        }}
      >
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <div className="flex items-center text-muted-foreground mt-1">
                <Building2Icon className="h-4 w-4 mr-2" />
                <span>{company}</span>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span>{date}</span>
            </div>
          </div>

          {/* Preview Description */}
          <p className="text-foreground/80 line-clamp-2">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm rounded-full bg-accent text-accent-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>

      {/* Detailed Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto pb-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center justify-between text-foreground/80 mt-2">
                <div className="flex items-center">
                  <Building2Icon className="h-4 w-4 mr-2" />
                  <span>{company}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{date}</span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4 overflow-y-auto pr-1">
            {/* Full Description */}
            <p className="text-foreground/80">{description}</p>

            {/* Responsibilities */}
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Key Responsibilities
              </h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-accent text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="hover:bg-accent hover:bg-purple-700 text-white bg-purple-600"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TimelineEvent;
