import React from "react";
import Icon from "../Icons/Icon";
import { useState } from "react";

interface CommonButtonProps {
  title: string;
  link?: string;
  onClick?: () => void;
  className?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    title,
    link,
    onClick,
    className = "",
}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`font-primary text-lg lg:text-2xl px-4 py-2 border-2 border-black cursor-pointer ${hovered ? "bg-black text-white": ""} ${className}`}>
        <div className="flex items-center gap-2 whitespace-nowrap">
            <p>{title}</p>
            <Icon isBlack={!hovered} className="w-5 h-5" />
        </div>
        </button>
    );
};

export default CommonButton;