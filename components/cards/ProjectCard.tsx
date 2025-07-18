"use client";
import React from "react";
import Icon from "../Icons/Icon";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  image?: string;
  title: string;
  description?: string;
  linkHref?: string;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  linkHref,
  className = "",
  imageClassName = "",
  contentClassName = "",
  titleClassName = "",
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Card with image and overlay content */}
      <div className="group relative h-[340px] w-full cursor-pointer overflow-hidden md:h-[440px]">
        {/* Background Image */}
        {image && (
          <Image
            fill
            src={image}
            alt={title}
            className={`absolute inset-0 z-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 ${imageClassName}`}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Content on top of the image */}
        <div
          className={`relative z-20 flex h-full flex-col justify-end p-6 text-white transition-opacity duration-500 ${contentClassName}`}
        >
          <p className="font-secondary mb-4">{description}</p>

          <Link
            href={linkHref ?? "#"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="hover:underline hover:underline-offset-2">
              Learn more
            </span>

            <Icon isBlack={false} className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>

      {/* Title BELOW the card */}
      <h3
        className={`font-kumbh text-xl font-bold uppercase text-black md:text-2xl ${titleClassName}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default ProjectCard;
