import React from "react";
import Icon from "../Icons/Icon";
import { useState } from "react";
import Link from "next/link";

interface CommonButtonProps {
  title: string;
  link?: string;
  linkHref?: string;
  className?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    title,
    link,
    linkHref,
    className = "",
}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <Link
        href={linkHref ?? "#"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`font-primary text-lg lg:text-2xl px-4 py-2 border-2 border-black cursor-pointer ${hovered ? "bg-black text-white": ""} ${className}`}>
        <div className="flex items-center gap-2 whitespace-nowrap">
            <p>{title}</p>
            <Icon isBlack={!hovered} className="w-5 h-5" />
        </div>
        </Link>
    );
};

export default CommonButton;