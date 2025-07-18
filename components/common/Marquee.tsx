import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  className = ' text-white font-primary uppercase', 
  speed = 40,
}) => {
  const marqueeText = `${text}`;
  // Option 2: Using individual spans with margin (alternative approach)
  const repeatedTextArray = Array(20).fill(marqueeText);

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee linear infinite;
          }
        `}
      </style>

      <div
        className={`w-full flex overflow-hidden border-t-2 border-black select-none bg-white text-black ${className}`}
      >
        <div
          className="flex-shrink-0 flex items-center justify-center whitespace-nowrap animate-marquee"
          style={{ animationDuration: `${speed}s` }}
        >
          {repeatedTextArray.map((text, index) => (
            <span 
              key={index} 
              className="py-3 text-2xl md:text-3xl lg:text-4xl font-bold uppercase mr-15"
            >
              {text}
            </span>
          ))}
        </div>
       
      </div>
    </>
  );
};

export default Marquee;
