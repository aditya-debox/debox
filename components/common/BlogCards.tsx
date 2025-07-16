'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Autoplay from "embla-carousel-autoplay"
import Icon from '../Icons/Icon';   


// Define the structure of the data for each blog card
interface BlogData {
  desc?: string;
  image?: string; 
  handleLearnMore?: () => void; 
  
}

// Define the props for the main component
interface BlogCarouselProps {
  data: BlogData[];
  withBorder?: boolean; 
}

export const BlogCards: React.FC<BlogCarouselProps> = ({
  data,
  withBorder = false
}) => {

    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className={`w-full  overflow-hidden ${withBorder ? 'border-t-2 border-black md:py-20 py-14' : 'pb-14'}`}>
      <div className="mx-auto max-w-7xl flex flex-col ">
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
            <CarouselContent className="">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="flex flex-col">
                    {/* Image section */}
                    <div className="group relative h-[200px] w-full cursor-pointer overflow-hidden md:h-[300px]">
                      {/* Background Image */}
                      {item.image && (
                        <img
                          src={item.image}
                          alt="Blog Image"
                          className="absolute inset-0 z-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        />
                      )}
                    </div>

                    {/* Black section below image */}
                    <div className="bg-black p-4 text-white">
                      <p className="font-secondary mb-4 text-sm">{item?.desc}</p>
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => item.handleLearnMore?.()}
                      >
                        <span className="hover:underline hover:underline-offset-2 text-sm">
                          Learn more
                        </span>
                        <Icon
                          isBlack={false}
                          className="h-4 w-4 text-white"
                        />
                      </div>
                    </div>

                    {/* Title BELOW the card */}
                    {/* <h3 className="font-kumbh text-lg font-bold uppercase text-black md:text-xl mt-3">
                      {item.title}
                    </h3> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
          <CarouselNext /> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;