"use client";

import React from "react";
import Icon from "../Icons/Icon";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
// const Icon = () => (
//   <svg
//     className="w-10 h-10 md:w-20 md:h-20 object-contain"
//     viewBox="0 0 79 86"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <rect width="56.8588" height="17.9933" fill="black" />
//     <rect
//       x="51.1016"
//       y="67.2949"
//       width="32.0322"
//       height="17.9933"
//       transform="rotate(-89.8293 51.1016 67.2949)"
//       fill="black"
//     />
//     <rect
//       x="0.360352"
//       y="54.3397"
//       width="78.2251"
//       height="17.9933"
//       transform="rotate(-43.8564 0.360352 54.3397)"
//       fill="black"
//     />
//   </svg>
// );

const HeroSection = () => {
  return (
    <div className="lg:px-16 px-6">
      <div className="flex items-center mx-auto min-h-[90vh] max-w-7xl">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col font-primary text-4xl md:text-6xl lg:text-8xl uppercase font-extrabold"
        >
          <span className="flex">
            Great Results,
            <Icon color="w-8 h-8 md:w-20 md:h-20 object-contain -mt-2 md:-mt-5" />
            <br />
          </span>
          not just
          <br />
          Great Ideas!
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-secondary text-sm font-normal mt-4 md:mt-0 md:absolute md:left-[65%] md:top-[40%] w-full md:w-[405px]"
          >
            Not just great ideas, we are known for delivering sustainable
            results across Industries and Geographies.
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
