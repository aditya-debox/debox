import React from "react";
import Heading from "./Heading";
import { IconType } from "react-icons";
import Icon from "../Icons/Icon";

interface CardSectionProps {
  title: string;
  data: {
    icon?: IconType;
    title: string;
    desc?: string;
  }[];
  isBlack?: boolean;
}

const CardSection: React.FC<CardSectionProps> = ({
  data,
  title,
  isBlack = true,
}) => {
  return (
    <div className="px-6 lg:px-16 md:py-20 py-14">
      <div className="flex flex-col max-w-7xl mx-auto">
        <Heading clasName="pb-4 md:pb-10" align="start">
          {title}
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-1">
          {data.map((item, index) => (
            <div
              key={index}
              className={`text-white cursor-pointer w-full px-4 py-6 md:py-10 min-h-[300px] md:min-h-[440px] h-full flex flex-col ${
                isBlack
                  ? "bg-black hover:bg-secondary md:py-14 px-8"
                  : "bg-secondary hover:bg-black"
              }`}
            >
              {item.icon && (
                <p className="bg-white rounded-full w-fit p-2 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-secondary" />
                </p>
              )}
              <div className="flex flex-col gap-4 py-8 flex-grow">
                <p
                  className={`font-kumbh font-bold uppercase ${
                    isBlack
                      ? "text-xl !leading-8 tracking-wider md:!leading-10 md:text-3xl"
                      : "text-lg max-w-[200px] md:text-2xl"
                  }`}
                >
                  {item.title}
                </p>
                <p className="font-secondary text-base md:text-lg pt-3 max-w-[300px]">
                  {item?.desc}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                {isBlack && (
                  <p className="text-base md:text-lg underline underline-offset-2">
                    Learn more
                  </p>
                )}
                <Icon isBlack={false} className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
