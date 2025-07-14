"use client";

import Image from "next/image";
import React from "react";
import thread from "@/assets/ELEMENT.png";
import choose from "@/assets/choose.png";
import inradius from "@/assets/inradius.png";
import Link from "next/link";

const IPSection = () => {
  return (
    <div className="py-6">
      {/* Header Section */}
      <div className="border-y-1 border-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl uppercase font-primary font-extrabold py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-28">
        <h2 className="max-w-7xl mx-auto flex flex-col">
          <span>Intellectual</span>
          <span className="flex items-center justify-start ml-4 sm:ml-6 lg:ml-10">
            <Image
              className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto -mt-4"
              src={thread}
              alt="thread"
            />
            <span className="mt-2 sm:mt-3 lg:mt-5 ml-4 sm:ml-6 lg:ml-10">
              Properties
            </span>
          </span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-6 lg:px-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start">
            {/* Inradius Section */}
            <div className="flex flex-col items-start py-6 lg:py-8 lg:pr-8 xl:pr-12 flex-1">
              <div className="w-full flex justify-start mb-4">
                <Image
                  src={inradius}
                  alt="inradius"
                  width={200}
                  height={100}
                  className="w-auto p-1 h-auto max-w-[100px] sm:max-w-[180px] lg:max-w-[200px]"
                />
              </div>
              <p className="font-secondary pl-1 text-sm sm:text-base lg:text-base text-left leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
              <Link
                href={`https://inradius.in`}
                className="font-secondary font-bold underline underline-offset-2 pl-1 pt-4"
                target="_blank"
              >
                Learn more
              </Link>
            </div>

            {/* Choose Section */}
            <div className="flex flex-col items-start py-6 lg:py-8 lg:pl-8 xl:pl-12 flex-1">
              <div className="w-full flex justify-start mb-4">
                <Image
                  src={choose}
                  alt="choose"
                  width={200}
                  height={100}
                  className="w-auto h-auto max-w-[100px] sm:max-w-[180px] lg:max-w-[200px] object-contain"
                />
              </div>
              <p className="font-secondary text-sm pl-2.5 sm:text-base lg:text-base text-left leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
              <Link
                href={`https://choosepos.com`}
                className="font-secondary font-bold underline underline-offset-2 pt-4 pl-2.5"
                target="_blank"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Vertical Separator - Full Height extending to HR */}
        <div
          className="hidden lg:block absolute left-1/2 top-0 w-px bg-black transform -translate-x-1/2"
          style={{ height: "calc(100%)" }}
        ></div>
      </div>

      {/* Bottom Border */}
      <hr className="border-b-1 border-black/40" />
    </div>
  );
};

export default IPSection;
