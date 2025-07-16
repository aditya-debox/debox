"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Card {
  title: string;
  description: string;
  items: string[];
  learnMoreText?: string;
}

interface StaggerCardsProps {
  data: Card[];
}

const StaggerCards: React.FC<StaggerCardsProps> = ({ data }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="w-full h-full max-w-7xl mx-auto p-6 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="bg-white border border-black overflow-hidden w-full h-f"
        >
          <div className="p-6">
            <div className="flex items-start justify-between border-b border-black pb-4 mb-4">
              <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight flex items-center gap-2">
                {card.title}
              </h2>
            </div>

            <div className="relative flex items-start gap-6">
              {/* Vertical line */}
              <div className="absolute left-[55%] top-0 bottom-0 w-px bg-black"></div>

              {/* Description */}
              <div className="w-[55%] text-sm text-black leading-relaxed space-y-4 pr-6">
                <p>{card.description}</p>

                {card.learnMoreText && (
                  <div
                    className="font-semibold hover:underline text-black text-sm cursor-pointer hover:underline-offset-2"
                  >
                    {card.learnMoreText}
                  </div>
                )}
              </div>

              {/* Items */}
              <div className="pl-6 flex-1 flex flex-wrap gap-3 items-start">
                {card.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={itemVariants}
                    className="border border-black text-xs text-black px-4 py-2 cursor-pointer hover:bg-gray-100 transition whitespace-nowrap"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerCards;
