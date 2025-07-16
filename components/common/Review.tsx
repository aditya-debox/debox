"use client";
import React from "react";
import Heading from "@/components/common/Heading";
import CommonButton from "@/components/common/CommonButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Icon from "../Icons/Icon";


interface Testimonial {
  name: string;
  role: string;
  company: string;
  paragraph: string;
  handleSeeMore?: () => void;
}

interface ReviewProps {
  heading: React.ReactNode;
  testimonials: Testimonial[];
}

const Review: React.FC<ReviewProps> = ({
  heading,
  testimonials,
}) => (
  <div className="bg-black py-8 w-full font-primary overflow-hidden">
    {/* Heading */}
    <div className="container mx-auto max-w-7xl px-4">
      <Heading className="p-8 w-full" color="white" align="center" size="6xl">
        {heading}
      </Heading>
    </div>

    {/* Horizontal line */}
    <div className="border-t border-white " />
    {/* This section now contains the carousel */}
    <div className="bg-black md:py-20 py-14">
      <div className="container mx-auto max-w-7xl">
        <div className="ml-6 lg:-mr-30 lg:ml-16 xl:ml-16 2xl:ml-0">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className={`
                    md:basis-1/2 lg:basis-1/3
                  `}
                >
                  <div className="border border-black flex flex-col h-full min-h-[280px] bg-white text-black shadow-lg">
                    <div className="p-4 font-secondary">
                      <div className="font-bold text-xl">
                        {testimonial.name}
                      </div>
                      <div className="font-bold text-xl">
                        {testimonial.role}
                      </div>
                      <div className="font-bold text-xl">
                        {testimonial.company}
                      </div>
                    </div>

                    <div className="border-t border-black" />

                    <div className="p-4 flex flex-col justify-between flex-1">
                      <p className="mb-4 text-gray-700">
                        "{testimonial.paragraph}"
                      </p>
                      <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => testimonial.handleSeeMore?.()}
                        >
                          <span className=" hover:underline hover:underline-offset-2">
                            Learn more
                          </span>
                          <Icon
                            isBlack={true}
                            className="h-5 w-5 text-black"
                          />
                        </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);

export default Review;
