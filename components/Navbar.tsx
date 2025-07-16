"use client";

import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-between gap-6 uppercase font-kumbh font-bold cursor-pointer">
            {navData.map((item, index) => (
              <span key={index} className="py-1.5 px-2 rounded-md transition-all duration-300 hover:text-white hover:bg-black">
                {item.name}
              </span>
            ))}
          </div>
          {/* Burger Icon for Mobile */}
          <button
            className="flex flex-col justify-center items-center md:hidden w-10 h-10 z-50 relative"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-7 h-1 bg-black rounded mb-1"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-7 h-1 bg-black rounded mb-1"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-7 h-1 bg-black rounded"
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
     <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40"
          >
            {navData.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setTimeout(() => setMenuOpen(false), 200); // close after animation
                }}
                className={`text-2xl font-bold uppercase py-4 w-full text-center transition
                  ${activeIndex === index
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"}
                `}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

