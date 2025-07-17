import React from "react";

interface MarqueeProps {
  text: string;
  speed?: number; // animation duration in seconds
  repetitions?: number; // how many times to repeat the text
  fontSize?: string;
  fontWeight?: string;
  spacing?: string;
  borderTop?: string;
  className?: string;
  fontFamily?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  speed = 12,
  repetitions = 10,
  fontFamily = "font-primary",
  fontSize = "2rem",
  fontWeight = "bold",
  spacing = "2rem",
  borderTop = "2px solid black",
  className = ""
}) => (
  <div 
    className={className}
    style={{ 
      overflow: "hidden", 
      whiteSpace: "nowrap", 
      borderTop,
      width: "100%" 
    }}
  >
    <div style={{
      display: "inline-block",
      animation: `marquee ${speed}s linear infinite`
    }}>
      {Array(repetitions).fill(text).map((t, i) => (
        <span 
          key={i} 
          style={{ 
            fontWeight, 
            fontSize, 
            marginRight: spacing,
            fontFamily
          }}
        >
          {t}
        </span>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default Marquee;