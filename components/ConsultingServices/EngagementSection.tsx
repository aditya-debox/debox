import React from 'react';

import Heading from '../common/Heading';
// Define the type for a single approach object
interface ApproachProps {
  title: string;
  subtitle: string;
  description: string;
  learnMoreLink: string;
}

// Define the type for the props of the main section component
interface EngagementApproachProps {
  heading1: string;
  heading2: string;
  approaches: ApproachProps[];
}

const EngagementApproachSection: React.FC<EngagementApproachProps> = ({ heading1, heading2, approaches }) => {
  return (
    <div className="px-6 lg:px-16 md:py-20 py-14 overflow-hidden">
      <div className="flex flex-col max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="pb-4 md:pb-10">
          <Heading align="start">{heading1}</Heading>
          <Heading align="start">{heading2}</Heading>
        </div>
        
        {/* Single border line */}
        <div className="border-t-2 border-black mb-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"></div>
        
        {/* Approaches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-1">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-black hover:bg-secondary text-white cursor-pointer w-full px-8 py-6 md:py-14 min-h-[300px] md:min-h-[440px] h-full flex flex-col"
            >
              <div className="flex flex-col gap-4 py-8 flex-grow">
                <p className="font-kumbh font-bold uppercase text-xl !leading-8 tracking-wider md:!leading-10 md:text-3xl">
                  {approach.title}
                </p>
                <div className="border-t-2 border-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4"></div>
                <p className="text-sm font-bold tracking-wider mb-4">{approach.subtitle}</p>
                <p className="font-secondary text-base md:text-lg pt-3 max-w-[300px]">
                  {approach.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngagementApproachSection;