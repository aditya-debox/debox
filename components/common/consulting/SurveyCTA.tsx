'use client';

import React from 'react';
import CommonButton from '@/components/common/CommonButton';

interface SurveyCTAProps {
  heading?: string;
  subheading?: string;
  buttonText: string;
  buttonHref?: string; // <-- add this
  onButtonClick?: () => void;
  theme?: 'light' | 'dark';
}


const SurveyCTA: React.FC<SurveyCTAProps> = ({
  heading,
  subheading,
  buttonText, 
  buttonHref,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  
  return (
    <section className={`w-full py-16 md:py-20 border-t-2 ${
      isDark 
        ? 'bg-black border-white' 
        : 'bg-white border-black'
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className={`font-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-2 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {heading}
          </h2>
          
          {/* Subheading */}
          <p className={`font-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-8 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {subheading}
          </p>

          {/* Button */}
          <CommonButton
            title={buttonText}
            linkHref={buttonHref}
            theme={theme}
            className={`border-2 bg-transparent px-6 py-3 uppercase transition-colors duration-300 ${
              isDark 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default SurveyCTA;