'use client';
import React from 'react';
import Icon from '../Icons/Icon';
import Link from 'next/link';

interface ReviewCardProps {
  name: string;
  role: string;
  company: string;
  paragraph: string;
  linkHref?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ 
  name, 
  role, 
  company, 
  paragraph, 
   linkHref,
}) => {
  return (
    <div className="border font-secondary border-black flex flex-col h-full min-h-[280px] bg-white text-black shadow-lg">
      <div className="p-4 font-secondary">
        <div className="font-bold text-xl">
          {name}
        </div>
        <div className="font-bold text-xl">
          {role}
        </div>
        <div className="font-bold text-xl">
          {company}
        </div>
      </div>
      <div className="border-t border-black" />
      <div className="p-4 flex flex-col justify-between flex-1">
        <p className="mb-4 text-black">
          "{paragraph}"
        </p>
        <Link
          className="flex items-center gap-2 cursor-pointer"
           href={linkHref ?? "#"}
        >
          <span className="hover:underline hover:underline-offset-2 font-secondary font-bold">
            See more
          </span>
          {/* <Icon
            isBlack={true}
            className="h-5 w-5 text-black"
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;