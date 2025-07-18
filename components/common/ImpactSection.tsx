'use client'
import React from "react";
import Heading from "./Heading";
import CommonButton from "./CommonButton";


interface ImpactSectionProps {
  titleLine1: string;
  titleLine2: string;
  buttonHref: string;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({
  titleLine1,
  titleLine2,
  buttonHref,
}) => {



  return (
    <section className="width-full px-6 lg:px-16 md:py-20 py-14 overflow-hidden">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-14">
           {/* Title Text */}
        <Heading className="" align="start">
          {titleLine1}
            <br />
        {titleLine2}
        </Heading>
        {/* Button */}
        <div className="flex items-center justify-start">
            <CommonButton
                title="Learn More"
                linkHref={buttonHref}
            />
        </div>
      </div>
      
    </section>
 )
} 
export default ImpactSection;