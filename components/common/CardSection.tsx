import React from "react";

interface CardSectionProps {
  title: string;
  data: {
    icon?: string;
    title: string;
    desc?: string;
    color?: string;
  };
}

const CardSection: React.FC<CardSectionProps> = ({ data, title }) => {
  return (
    <div className="px-6 lg:px-16 md:py-20 py-10">
      <div className="flex max-w-7xl mx-auto">
        <h2></h2>
      </div>
    </div>
  );
};

export default CardSection;
