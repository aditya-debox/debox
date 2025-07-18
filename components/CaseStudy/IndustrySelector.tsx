"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Heading from '../common/Heading';

interface Industry {
  id: string;
  name: string;
}

interface IndustrySelectorProps {
  titleLine1?: string;
  titleLine2?: string;
  industries: Industry[]; // Made required since we want it passed from parent
  onIndustrySelect?: (industry: Industry) => void;
  selectedIndustry?: string;
  className?: string;
  navigateTo?: string; // Target page path
  useNavigation?: boolean; // Whether to use navigation or callback
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({
  titleLine1,
  titleLine2,
  industries = [],
  onIndustrySelect,
  selectedIndustry,
  className = "",
  navigateTo = "/CaseStudy",
  useNavigation = true
}) => {
  const router = useRouter();

  const handleIndustryClick = (industry: Industry) => {
    if (useNavigation) {
      // Navigate to the target page with query parameter
      router.push(`${navigateTo}?Category=${industry.id}`);
    } else if (onIndustrySelect) {
      // Use callback instead of navigation
      onIndustrySelect(industry);
    }
  };

  return (
    <div className={`lg:px-16 px-6 py-20 border-b-2 border-black  ${className}`}>
      <div className="flex flex-col items-center mx-auto mt-10 max-w-7xl lg:px-16 px-6">
        {titleLine1 && <Heading>{titleLine1}</Heading>}
        {titleLine2 && <Heading>{titleLine2}</Heading>}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mt-10">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleIndustryClick(industry)}
              className={`
                px-6 py-3 border-2 cursor-pointer border-black text-black font-medium
                hover:bg-black hover:text-white transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                ${selectedIndustry === industry.id 
                  ? 'bg-black text-white' 
                  : 'bg-white'
                }
              `}
            >
              {industry.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrySelector;