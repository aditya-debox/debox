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
import Icon from '../Icons/Icon';   // Assuming Icon component exists
import { IconType } from 'react-icons';

// Define the structure of the data for each card
interface CardData {
  icon?: IconType;
  title: string;
  desc?: string;
  image?: string; // Image URL for the card background
}

// Define the props for the main component
interface CaseStudyCarouselProps {

  data: CardData[];
}

export const CaseStudyCards: React.FC<CaseStudyCarouselProps> = ({
  data,
}) => {

    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="px-6 lg:px-16 md:py-20 py-14 overflow-hidden border-t-2 border-black">
      <div className="flex flex-col max-w-7xl mx-auto">

        {/* ShadCN Carousel Component */}
        <div className='w-screen relative left-1/2 right-1/2 -mx-[50vw]'>
          <Carousel
          opts={{
            align: 'start',
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
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                  className={`
                     md:basis-1/2 lg:basis-1/3
                    ${index === 0 ? 'ml-6 md:ml-36' : ''}
                    ${index === data.length - 1 ? 'mr-6 md:mr-36' : ''}
                `}
              >
                <div className="flex flex-col gap-4">
                  {/* This is your custom card design */}
                  <div className="group relative h-[340px] w-full cursor-pointer overflow-hidden md:h-[440px]">
                    {/* Background Image */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 z-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    {/* Content on top of the image */}
                    <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white transition-opacity duration-500">
                      <p className="font-secondary mb-4">{item?.desc}</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold underline underline-offset-2">
                          Learn more
                        </span>
                        <Icon isBlack={false} className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title BELOW the card */}
                  <h3 className="font-kumbh text-xl font-bold uppercase text-black md:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        </div>
        
      </div>
    </div>
  );
};
export default CaseStudyCards;