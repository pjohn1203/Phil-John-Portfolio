import React from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechBadgeProps {
  name?: string;
  icon?: React.ReactNode;
  level?: number;
  description?: string;
  className?: string;
}

const TechBadge = ({
  name = "React",
  icon = null,
  level = 80,
  description = "Experienced with building modern web applications",
  className = "",
}: TechBadgeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "relative group bg-background px-4 py-2 rounded-full border border-border",
              "hover:border-purple-600 hover:shadow-lg transition-all duration-300",
              "cursor-pointer flex items-center space-x-2",
              className,
            )}
          >
            {/* Icon */}
            {icon && <span className="text-foreground/80">{icon}</span>}

            {/* Tech Name */}
            <span className="text-sm font-medium text-foreground">{name}</span>

            {/* Progress Indicator */}
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ width: `${level}%` }}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <p className="font-semibold mb-1">{name}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
            <div className="mt-1 h-1 w-full bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechBadge;
