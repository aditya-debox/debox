'use client';
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay"
import "swiper/css/navigation";
import "swiper/modules"
// import { Autoplay, FreeMode, Pagination } from "swiper";
import Image from "next/legacy/image";
import type { StaticImageData } from "next/image";
import Kalki from "@/assets/kalki.png";
import Cai from "@/assets/Cai.png";
import nippo from "@/assets/nippo.png";
import Payworld from "@/assets/Payworld.png";
import Schbang from "@/assets/schbang.png";

interface LogoSliderProps {
  space?: boolean;
}


const data = [
  {
    img: Kalki,
    alt: "Kalki Logo",
  },
  {
    img: Cai,
    alt: "Cai Logo",
  },
  {
    img: nippo,
    alt: "Nippo Logo ",
  },
  {
    img: Payworld,
    alt: "Payworld Logo",
  },
  {
    img: Schbang,
    alt: "Schbang Logo",
  },
   {
    img: Schbang,
    alt: "Schbang Logo",
  },
   {
    img: Schbang,
    alt: "Schbang Logo",
  },
   {
    img: Schbang,
    alt: "Schbang Logo",
  },
   {
    img: Schbang,
    alt: "Schbang Logo",
  },
   {
    img: Schbang,
    alt: "Schbang Logo",
  },
   {
    img: Schbang,
    alt: "Schbang Logo",
  },
];

const LogoSlider: React.FC<LogoSliderProps> = ({ }) => {
  const [clientLogos, setClientLogos] = useState<
    { img: StaticImageData; alt: string }[]
  >([]);

  useEffect(() => {
    setClientLogos(data);
  }, []);
  return (
    <>
      <div className="w-full  py-10 ">  
        <div className="border-solid border-t-2 border-b-2 border-black mb-2" >
            <div className="text-center mx-auto w-full logo-scroller py-2 md:py-4">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    loop={true}
                    speed={3000}
                    draggable={false}
                    allowTouchMove={false}
                    grabCursor={false}
                    freeMode={true}
                    autoplay={{
                    delay: 1,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                    }}
                    pagination={false}
                    navigation={false}
                    modules={[Autoplay]}
                    breakpoints={{
                    510: {
                        slidesPerView: 4,
                        spaceBetween: 8,
                    },
                    750: {
                        slidesPerView: 6,
                        spaceBetween: 12,
                    },
                    }}
                >
                    {clientLogos.map((el, idx) => (
                    <SwiperSlide
                        key={`${el.alt}-${idx}`}
                        className="self-center flex justify-center items-center"
                    >
                        <div className="w-40 px-4">
                        <Image
                            src={el.img}
                            alt={el.alt}
                            width={100}
                            height={100}
                            className="h-full w-full "
                            objectFit="contain"
                        />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
</>
    
  );
};

export default LogoSlider;
