import React from "react";
import { useTheme } from "../theme-provider";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-16 w-auto" }: LogoProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center">
      <img
        src="https://res.cloudinary.com/dsegbtegv/image/upload/v1740843828/EE_q7uckg.png"
        alt="Eagle Eye Enterprise Logo"
        className="h-20 w-auto"
      />
    </div>
  );
};

export default Logo;
