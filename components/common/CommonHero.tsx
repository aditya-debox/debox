"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface CommonHeroProps {
  title1: string;
  title2?: string;
  title3?: string;
  desc: string;
}

const CommonHero: React.FC<CommonHeroProps> = ({
  desc,
  title1,
  title2,
  title3,
}) => {
  return (
    <div className="lg:px-16 px-6 py-20">
      <div className="flex items-center mx-auto min-h-[60vh] md:min-h-[90vh] max-w-7xl">
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col font-primary text-4xl md:text-6xl lg:text-8xl uppercase font-extrabold"
        >
          {title1}
          <br />
          {title2 && title2}
          <br />
          {title3 && title3}
          <motion.span
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-secondary text-sm md:text-xl font-normal normal-case mt-4 w-full md:w-[405px] pl-1"
          >
            {desc}
          </motion.span>
        </motion.p>
      </div>
    </div>
  );
};

export default CommonHero;
