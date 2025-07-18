"use client"
import React from 'react';
import Heading from '../common/Heading';
// Define the type for the component's props
interface IndustriesProps {
  headingLine1: string;
  headingLine2: string;
  leftColumn: string[];
  rightColumn: string[];
}

const IndustriesSection: React.FC<IndustriesProps> = ({ headingLine1, headingLine2, leftColumn, rightColumn }) => {
  return (
    <div className="bg-white text-black font-primary w-full border-t-2 border-b-2 border-black  font-bold">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto">
        <div className="py-8 md:py-12 px-6 xl:px-0 text-left">
          <Heading className="text-4xl md:text-7xl uppercase text-left">
            {headingLine1}<br />
            {headingLine2}
          </Heading>
        </div>
      </div>
      {/* Industries Grid with full-width border */}
      <div className="w-full border-t-2 border-black font-bold">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          {/* Left Column */}
          <div className="py-8 md:py-12 px-6 xl:px-0 ">
            <ul className="space-y-6">
              {leftColumn.map((industry, index) => (
                <li key={`left-col-${index}`} className="text-lg md:text-xl ">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="py-8 md:py-12 px-6 lg:px-16  md:border-l-2 border-black font-bold">
            <ul className="space-y-6">
              {rightColumn.map((industry, index) => (
                <li key={`right-col-${index}`} className="text-lg md:text-xl ">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;