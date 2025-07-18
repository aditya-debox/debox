"use client";

import React from "react";
import { motion } from "framer-motion";
import { DataType } from "@/app/page";



export interface StatsProps {
  data: {
    count?: number;
    title: string;
    type: DataType;
    text?: string;
  }[];
}

const Stats: React.FC<StatsProps> = ({ data }) => {
  // Animation variants for the vertical line
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut" as const,
      },
    },
  };

  // Animation variants for the item content
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  // Animation variants for the border
  const borderVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`w-full text-primary font-primary text-6xl py-5 md:py-10 flex relative ${
              index % 2 === 0
                ? "pl-10 md:pl-32 pr-0 justify-start"
                : "pr-[30%] pl-0 justify-end"
            }`}
          >
            {/* Border animation - appears from left for even, right for odd */}
            <motion.div
              variants={borderVariants}
              className={`absolute top-0 h-px bg-primary ${
                index % 2 === 0 ? "left-0 origin-left" : "right-0 origin-right"
              }`}
              style={{ width: "100%" }}
            />

            {/* Vertical line - positioned left for even, right for odd */}
            <motion.div
              variants={lineVariants}
              className={`absolute top-0 h-full w-px bg-primary ${
                item.type === DataType.text ? "hidden" : ""
              } ${
                index === 2
                  ? "left-[70%]"
                  : index === 1
                  ? "md:right-[60%] right-[70%]"
                  : index === 3
                  ? "md:right-[60%] right-[50%]"
                  : "right-[40%]"
              }`}
            />

            {/* Content container */}
            <motion.div
              variants={itemVariants}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-start gap-4`}
            >
              <p
                className={`${
                  item.text
                    ? "font-secondary max-w-[730px] flex text-base md:text-lg font-medium"
                    : "font-kumbh flex text-4xl md:text-7xl font-bold"
                }`}
              >
                {item.count ?? item.text}
                {item.type == DataType.number
                  ? "+"
                  : item.type == DataType.percentage
                  ? "%"
                  : ""}{" "}
                <span className="font-secondary font-semibold md:text-2xl text-sm">
                  {!item.text ? item.title : ""}
                </span>
              </p>
            </motion.div>

            {/* Bottom border for last item */}
            {index === data.length - 1 && (
              <motion.div
                variants={borderVariants}
                className={`absolute bottom-0 h-px bg-primary ${
                  index % 2 === 0
                    ? "left-0 origin-left"
                    : "right-0 origin-right"
                }`}
                style={{ width: "100%" }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
