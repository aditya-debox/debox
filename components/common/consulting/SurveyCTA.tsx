'use client';

import React from 'react';
import CommonButton from '@/components/common/CommonButton';

interface SurveyCTAProps {
  heading?: string;
  subheading?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const SurveyCTA: React.FC<SurveyCTAProps> = ({
  heading,
  subheading,
  buttonText, 
  onButtonClick,
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-20 border-t-2 border-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="font-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black mb-2">
            {heading}
          </h2>
          
          {/* Subheading */}
          <p className="font-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black mb-8">
            {subheading}
          </p>

          {/* Button */}
          <CommonButton
            title={buttonText}
            onClick={onButtonClick}
            className="border-2 border-black bg-transparent text-black hover:bg-black hover:text-white transition-colors duration-300 px-6 py-3 uppercase"
          />
        </div>
      </div>
    </section>
  );
};

export default SurveyCTA;