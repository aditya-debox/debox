import React from 'react';

// Define the type for a single approach object
interface ApproachProps {
  title: string;
  subtitle: string;
  description: string;
  learnMoreLink: string;
}

// Define the type for the props of the main section component
interface EngagementApproachProps {
  title: string;
  approaches: ApproachProps[];
}

const EngagementApproachSection: React.FC<EngagementApproachProps> = ({ title, approaches }) => {
  return (
    <div className="bg-white text-black font-sans w-full max-w-7xl mx-auto border-t-2 border-black p-8">
      {/* Section Title */}
      <div className="p-8 md:p-12 border-b border-gray-300">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase" dangerouslySetInnerHTML={{ __html: title }}>
        </h2>
      </div>

      {/* Approaches Grid */}
      <div className="grid md:grid-cols-3 border-t-2 border-black">
        {approaches.map((approach, index) => (
           <div key={index} className={index < 2 ? 'md:border-r border-gray-300' : ''}>
             {/* Card content is now directly inside the map */}
             <div className="bg-black text-white p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold tracking-wide mb-4">{approach.title}</h3>
                  <div className="border-t border-gray-600 mb-4"></div>
                  <p className="text-sm font-bold tracking-wider mb-4">{approach.subtitle}</p>
                  <p className="text-base font-light leading-relaxed">{approach.description}</p>
                </div>
                <a href={approach.learnMoreLink} className="mt-8 inline-flex items-center justify-between text-base underline">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementApproachSection;

