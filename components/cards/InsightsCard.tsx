"use client";
import Icon from "../Icons/Icon";
import Link from "next/link";
import Image from "next/image";

interface ConsultationCardProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  linkText: string;
  linkHref?: string;
  className?: string;
}

export default function ConsultationCard({
  image,
  imageAlt,
  title,
  subtitle,
  linkText,
  linkHref,
  className = ""
}: ConsultationCardProps) {
  return (
    <div className={`w-full max-w-m h-full bg-black shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col ${className}`}>
      {/* Image Section - Taller for thin/long effect */}
      <div className="relative min-h-50 md:min-h-100 grayscale transition-all duration-500 hover:grayscale-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className=" object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>
      
      {/* Content Section - Compact for thin effect */}
      <div className="p-4 font-secondary flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-bold text-white mb-1 leading-tight">
            {title}
          </h2>
          <p className="text-sm font-semibold text-white mb-3 leading-tight">
            {subtitle}
          </p>
        </div>
        
        {/* Learn More Link  */}
        <Link 
          href={linkHref ?? "#"}
          className="inline-flex  font-secondary items-center gap-2 text-white font-medium  justify-between mt-auto hover:underline hover:underline-offset-2"
        >
          <span className="text-sm">{linkText}</span>
          <Icon isBlack={false} className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}