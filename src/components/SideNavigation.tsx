import React from "react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Home, FolderGit2, User, Mail } from "lucide-react";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SideNavigationProps {
  items?: NavigationItem[];
  activeItem?: string;
}

const SideNavigation = ({
  items = [
    { label: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
    {
      label: "Projects",
      icon: <FolderGit2 className="w-5 h-5" />,
      path: "/projects",
    },
    { label: "About", icon: <User className="w-5 h-5" />, path: "/about" },
    { label: "Contact", icon: <Mail className="w-5 h-5" />, path: "/contact" },
  ],
  activeItem = "Home",
}: SideNavigationProps) => {
  return (
    <nav className="w-[200px] min-h-screen bg-black border-r border-white/20 p-4 flex flex-col fixed left-0 top-0">
      <TooltipProvider>
        <div className="space-y-6">
          {items.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-colors
                    ${
                      activeItem === item.label
                        ? "text-green-500 bg-green-500/10"
                        : "text-white/70 hover:text-green-500 hover:bg-green-500/10"
                    }`}
                >
                  <div className="font-mono">[</div>
                  {item.icon}
                  <span className="font-mono">{item.label}</span>
                  <div className="font-mono">]</div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p className="font-mono">Navigate to {item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      <div className="flex-1" />

      <div className="text-white/30 font-mono text-xs px-4 pb-4">
        {`> system.nav.active`}
        <br />
        {`>> ${activeItem}`}
      </div>
    </nav>
  );
};

export default SideNavigation;
