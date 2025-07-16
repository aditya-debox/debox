import React from 'react';

// Define the type for the component's props
interface IndustriesProps {
  headingLine1: string;
  headingLine2: string;
  leftColumn: string[];
  rightColumn: string[];
}

const IndustriesSection: React.FC<IndustriesProps> = ({ headingLine1, headingLine2, leftColumn, rightColumn }) => {
  return (
    <div className="bg-white text-black font-primary w-full border-t-2 border-b-2 border-black ">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto">
        <div className="p-8 md:p-12">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter uppercase">
            {headingLine1}<br />
            {headingLine2}
          </h2>
        </div>
      </div>
      {/* Industries Grid with full-width border */}
      <div className="w-full border-t-2 border-black font-bold">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          {/* Left Column */}
          <div className="p-8 md:p-12">
            <ul className="space-y-6">
              {leftColumn.map((industry, index) => (
                <li key={`left-col-${index}`} className="text-lg md:text-xl font-medium">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="p-8 md:p-12 border-t-2 md:border-t-0 md:border-l-2 border-black font-bold">
            <ul className="space-y-6">
              {rightColumn.map((industry, index) => (
                <li key={`right-col-${index}`} className="text-lg md:text-xl font-medium">
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