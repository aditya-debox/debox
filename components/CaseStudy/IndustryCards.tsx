import React from 'react';



interface IndustryCardsProps {
  children: React.ReactNode;
  className?: string;
}



// This component renders a single card with a hover effect.
const IndustryCards: React.FC<IndustryCardsProps> = ({ children, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-7xl mx-auto px-6 lg:px-16 md:py-20 py-14 ${className}`}>
      {children}
    </div>
  );
};

export default IndustryCards;



