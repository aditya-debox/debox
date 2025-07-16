"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Icon from "../Icons/Icon";
// Interfaces remain the same
interface CardData {
  title: string;
  description: string;
  items: string[];
  learnMoreText?: string;
}

interface StackingCardsProps {
  data: CardData[];
}

// The Card sub-component with the corrected stacking logic
const Card: React.FC<{
  card: CardData;
  index: number;
}> = ({ card, index }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // --- THE FIX ---
  // 1. Define a single, reliable value for the header's height.
  // 5rem (h-20 in Tailwind) is a safe value that accommodates two lines of title text.
  const headerHeightInRem = 5;

  // 2. Use this reliable value to calculate the card's stopping position.
  const topPosition = `calc(2rem + ${index * headerHeightInRem}rem)`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      variants={cardVariants}
      className="sticky bg-white border border-black overflow-hidden min-h-72"
      style={{
        top: topPosition,
        zIndex: index,
      }}
    >
      <div className="p-6">
        
        <div
          className="flex items-center border-b border-black pb-4 mb-4 relative"
          style={{ height: `${headerHeightInRem}rem` }}
        >
          <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight mx-auto">
            {card.title}
          </h2>
          <span className="absolute right-0 text-2xl font-bold text-black">
            <Icon isBlack={true} className="w-5 h-5" />
          </span>
        </div>

        <div className="relative flex items-stretch gap-6 min-h-[200px]">
          <div className="absolute left-[55%] top-0 bottom-0 w-px bg-black"></div>
          <div className="w-[55%] text-sm text-black leading-relaxed space-y-4 pr-6 flex flex-col justify-between">
            <p>{card.description}</p>
            {card.learnMoreText && (
              <div className="font-semibold hover:underline text-black text-sm cursor-pointer hover:underline-offset-2">
                {card.learnMoreText}
              </div>
            )}
          </div>
          <div className="pl-6 flex-1 flex flex-wrap gap-3 items-start">
            {card.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="border border-black text-xs text-black px-4 py-2 whitespace-nowrap"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// The main component remains unchanged as its structure is correct.
const StackingCards: React.FC<StackingCardsProps> = ({ data }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="relative mb-[50vh] space-y-8">
        {data.map((card, index) => (
          <Card key={index} index={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default StackingCards;


