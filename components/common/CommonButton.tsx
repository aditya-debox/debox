import React from "react";
import Icon from "../Icons/Icon";
import { useState } from "react";
import Link from "next/link";

interface CommonButtonProps {
  title: string;
  link?: string;
  linkHref?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

const CommonButton: React.FC<CommonButtonProps> = ({
    title,
    link,
    linkHref,
    className = "",
    theme = 'light'
}) => {
    const [hovered, setHovered] = useState(false);
    const isDark = theme === 'dark';
    
    // Logic for icon color based on theme and hover state
    const getIconColor = () => {
        if (isDark) {
            console.log("hovered", hovered);
            return hovered; // true = black, false = white
        } else {
            return !hovered;  // hovered = black, not hovered = white
        }
    };
    
    return (
        <Link
        href={linkHref ?? "#"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`font-primary text-lg lg:text-2xl px-4 py-2 border-2 cursor-pointer transition-colors duration-300 ${
            isDark 
                ? `border-white ${hovered ? "bg-white text-black" : "text-white"}` 
                : `border-black ${hovered ? "bg-black text-white" : "text-black"}`
        } ${className}`}>
        <div className="flex items-center gap-2 whitespace-nowrap">
            <p>{title}</p>
            <Icon isBlack={getIconColor()} className="w-5 h-5" />
        </div>
        </Link>
    );
};

export default CommonButton;