'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import Heading from '@/components/common/Heading';
import CommonButton from '@/components/common/CommonButton';

interface CardCarouselProps {
  // Header section props
  titleLine1: string;
  titleLine2: string;
  buttonTitle?: string;
  onButtonClick?: () => void;
  
  // Carousel props
  children: React.ReactNode; // Any card components you want to pass
  autoplayDelay?: number;
  showNavigationButtons?: boolean;
  carouselItemClassName?: string;
  loop?: boolean;
  align?: "start" | "center" | "end";
  
  // Layout customization
  showBorder?: boolean;
  sectionClassName?: string;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  titleLine1,
  titleLine2,
  buttonTitle = "Learn More",
  onButtonClick,
  children,
  autoplayDelay = 2000,
  showNavigationButtons = false,
  carouselItemClassName = "md:basis-1/2 lg:basis-1/3",
  loop = false,
  align = "start",
  showBorder = false,
  sectionClassName = "",
}) => {
  return (
    <section className={`w-full md:py-20 py-14 ${showBorder ? 'border-t-2 border-black' : ''} overflow-hidden ${sectionClassName}`}>
      <div className="mx-auto max-w-7xl flex flex-col">
        
        {/* Header Section - Impact Part */}
        <div className="w-full pl-6 lg:pl-16 xl:pl-0 mb-8">
          <div className="mx-auto flex max-w-7xl items-end justify-between ">
            {/* Title Text */}
            <Heading className="" align="start">
              {titleLine1}
              <br />
              {titleLine2}
            </Heading>
            
            {/* Button */}
            <div className="flex items-center justify-start pr-2 xl:pr-0">
              <CommonButton
                title={buttonTitle}
                onClick={onButtonClick || (() => {})}
              />
            </div>
          </div>
        </div>

        {/* Carousel Section - Cards Part */}
        <div className="ml-6 lg:-mr-30 lg:ml-16 xl:ml-16 2xl:ml-0">
          <Carousel
            opts={{
              align: align,
              loop: loop,
            }}
            plugins={[
              Autoplay({
                delay: autoplayDelay,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="">
              {React.Children.map(children, (child, index) => (
                <CarouselItem
                  key={index}
                  className={carouselItemClassName}
                >
                  {child}
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Optional Navigation Buttons */}
            {showNavigationButtons && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;