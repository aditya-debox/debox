"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Heading from "@/components/common/Heading";
import CommonButton from "@/components/common/CommonButton";

interface CardCarouselProps {
  // Header section props
  titleLine1: string;
  titleLine2: string;
  buttonTitle?: string;
  buttonHref?: string;

  // Carousel props
  children: React.ReactNode; // Any card components you want to pass
  autoplayDelay?: number;
  showNavigationButtons?: boolean;
  carouselItemClassName?: string;
  loop?: boolean;
  align?: "start" | "center" | "end";

  // Layout customization
  showBorder?: boolean;
  ClassName?: string;

  // New optional props for alternative styling
  useBlackBackground?: boolean;
  useAlternativeHeading?: boolean;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  titleLine1,
  titleLine2,
  buttonTitle,
  buttonHref,
  children,
  autoplayDelay = 2000,
  showNavigationButtons = false,
  carouselItemClassName = "md:basis-1/2 lg:basis-1/3",
  loop = false,
  align = "start",
  showBorder = false,
  ClassName = "",
  useBlackBackground = false,
  useAlternativeHeading = false,
}) => {
  const sectionClasses = `w-full md:py-20 py-14 overflow-hidden ${
    useBlackBackground ? "bg-black" : ""
  } ${ClassName}`;

  const headingContent = useAlternativeHeading ? (
    <div className="text-center mb-8 font-primary uppercase">
      <h2 className="text-white text-4xl md:text-6xl font-bold tracking-wide">
        {titleLine1}
        <br />
        {titleLine2}
      </h2>
    </div>
  ) : (
    <div className="w-full pl-6 lg:pl-16 xl:pl-0 mb-8 font-primary">
      <div className="mx-auto flex max-w-7xl items-end justify-between">
        {/* Title Text */}
        <Heading className="" align="start">
          {titleLine1}
          <br />
          {titleLine2}
        </Heading>

        {/* Button */}
        
        <div className="flex items-center justify-start pr-2 xl:pr-0">
          <CommonButton
            title={buttonTitle ?? "Learn more"}
            linkHref={buttonHref}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className={sectionClasses}>
      {/* Heads Section - Cards Part */}
      <div className="mx-auto max-w-7xl flex flex-col">
        {/* Header Section - Impact Part */}
        {headingContent}
      </div>

      {showBorder && (
        <div
          className={`w-screen border-b-2 mb-6 ${
            useBlackBackground ? "border-white" : "border-black"
          }`}
        ></div>
      )}

      {/* Carousel Section - Cards Part */}
      <div className="mx-auto max-w-7xl flex flex-col">
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
                <CarouselItem key={index} className={carouselItemClassName}>
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
