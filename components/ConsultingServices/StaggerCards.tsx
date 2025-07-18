"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
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

// The Card sub-component with unified height logic
const Card: React.FC<{
  card: CardData;
  index: number;
  isMobile: boolean;
  unifiedHeight: number | null;
  onHeightMeasured: (height: number) => void;
}> = ({ card, index, isMobile, unifiedHeight, onHeightMeasured }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

  // Measure card height after render - only once
  useEffect(() => {
    if (cardRef.current && !isMobile) {
      const height = cardRef.current.offsetHeight;
      onHeightMeasured(height);
    }
  }, [isMobile]); 


  // Responsive stacking logic
  const headerHeightInRem = isMobile ? 4 : 5;
  const stackingOffset = isMobile ? 3 : headerHeightInRem;
  
  // Calculate top position based on device type
  const topPosition = isMobile 
    ? `calc(1rem + ${index * stackingOffset}rem)`
    : `calc(2rem + ${index * stackingOffset}rem)`;

  // Apply unified height on desktop, auto on mobile
  const cardStyle: React.CSSProperties = {
    top: topPosition,
    zIndex: index,
    ...(isMobile 
      ? { minHeight: "60vh" } 
      : unifiedHeight 
        ? { height: `${unifiedHeight}px` }
        : {}
    ),
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
      className="sticky bg-white border border-black overflow-hidden"
      style={cardStyle}
    >
      <div className="p-4 md:p-6 h-full flex flex-col">
        {/* Header with consistent height */}
        <div
          className="flex items-center border-b border-black pb-3 md:pb-4 mb-3 md:mb-4 relative flex-shrink-0"
          style={{ height: `${headerHeightInRem}rem` }}
        >
          <h2 className="text-xl md:text-2xl font-extrabold font-primary text-black uppercase tracking-tight mx-auto leading-tight">
            {card.title}
          </h2>
          <span className="absolute right-0 text-2xl font-bold text-black">
            <Icon isBlack={true} className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </div>

        {/* Content area - flexible on mobile, fixed on desktop */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 font-secondary flex-1">
          {/* Desktop vertical line - hidden on mobile/tablet */}
          <div className="hidden lg:block absolute left-[55%] top-0 bottom-0 w-[0.5px] bg-black"></div>
          
          {/* Description section */}
          <div className="w-full lg:w-[55%] text-sm text-black leading-relaxed space-y-3 md:space-y-4 lg:pr-6 flex flex-col justify-between">
            <p className="flex-1">{card.description}</p>
            {card.learnMoreText && (
              <div className="font-semibold hover:underline text-black text-sm cursor-pointer hover:underline-offset-2 mt-auto">
                {card.learnMoreText}
              </div>
            )}
          </div>
          
          {/* Mobile/tablet horizontal line - shown only on mobile/tablet */}
          <div className="lg:hidden w-full border-t border-black my-3 md:my-4"></div>
          
          {/* Items section */}
          <div className="w-full lg:pl-6 lg:flex-1 flex flex-wrap gap-2 md:gap-3 items-start content-start">
            {card.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="border border-black text-xs text-black px-3 py-1.5 md:px-4 md:py-2 whitespace-nowrap"
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

// The main component with height unification logic
const StackingCards: React.FC<StackingCardsProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [unifiedHeight, setUnifiedHeight] = useState<number | null>(null);
  const [measuredHeights, setMeasuredHeights] = useState<number[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle height measurement from cards
  const handleHeightMeasured = useCallback((height: number) => {
    setMeasuredHeights(prev => {
      const newHeights = [...prev, height];
      // Once we have measurements from all cards, set the unified height
      if (newHeights.length >= data.length) {
        const maxHeight = Math.max(...newHeights);
        setUnifiedHeight(maxHeight);
      }
      return newHeights;
    });
  }, [data.length]); // Only recreate if data length changes

  // Reset measurements when switching between mobile/desktop
  useEffect(() => {
    if (isMobile) {
      setUnifiedHeight(null);
      setMeasuredHeights([]);
    } else {
      // Reset for desktop measurement
      setMeasuredHeights([]);
    }
  }, [isMobile]);

  // Calculate container height based on unified height or fallback
  const containerHeight = isMobile 
    ? `${data.length * 80}vh`
    : unifiedHeight 
      ? `${(unifiedHeight * data.length) / 16 + 20}rem` // Convert px to rem with padding
      : `${data.length * 80}vh`; // Fallback while measuring

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-16 xl:px-0">
      <div 
        className="relative mb-[5vh] space-y-6 md:space-y-8"
        style={{ 
          minHeight: containerHeight,
          paddingBottom: isMobile ? '20vh' : '10vh'
        }}
      >
        {data.map((card, index) => (
          <Card 
            key={index} 
            index={index} 
            card={card} 
            isMobile={isMobile}
            unifiedHeight={unifiedHeight}
            onHeightMeasured={handleHeightMeasured}
          />
        ))}
      </div>
    </div>
  );
};

export default StackingCards;