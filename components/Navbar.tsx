"use client";

import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navData = [
  {
    name: "service",
    link: "/",
  },
  {
    name: "work",
    link: "/",
  },
  {
    name: "insights",
    link: "/",
  },
  {
    name: "contact us",
    link: "/",
  },
];

const Navbar = () => {
  const [hoverId, setHoverId] = useState<null | number>(null);
  return (
    <div className="fixed border-b-2 border-black w-full bg-white !z-50">
      <div className="left-0 right-0 top-4 my-1 w-full px-6 md:py-2 !z-50 max-w-7xl mx-auto bg-white">
        <div className="flex justify-between items-end">
          <Link
            href={"/"}
            prefetch={false}
            passHref
            className="relative w-[130px] md:!w-[160px] !h-[60px] min-w-[115px] min-h-[53px]"
          >
            <Image
              src={logo}
              alt="Debox Logo"
              className="!w-full !h-full object-contain"
            />
          </Link>
          <div className="flex items-center justify-between gap-6 uppercase font-kumbh font-bold cursor-pointer">
            {navData.map((item, index) => (
              <p
                onMouseEnter={() => setHoverId(index)}
                onMouseLeave={() => setHoverId(null)}
                key={index}
                className="py-1 px-2 relative"
              >
                {hoverId === index && (
                  <motion.span
                    layoutId="hover-spam"
                    className="absolute z-10 rounded-lg inset-0 bg-black"
                  />
                )}
                <span className="relative z-20">{item.name}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
