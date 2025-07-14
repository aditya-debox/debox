import CardSection from "@/components/common/CardSection";
import CommonHero from "@/components/common/CommonHero";
import Stats from "@/components/common/Stats";
import React from "react";

export enum DataType {
  number = "number",
  percentage = "percentage",
  none = "none",
  text = "text",
}

const cardData = [
  {
    title: "Strategic Business Roadmap & Direction",
  },
  {
    title: "Culture and Performance Management",
  },
  {
    title: "Process Improvements & Digitization",
  },
];

const data = [
  {
    type: DataType.text,
    title: "COUNTRIES",
    text: "Solving business problems and challenges with exceptional on-ground implementation using Logical Reasoning, Human Centered Approach and Data Insights.",
  },
  {
    count: 8,
    type: DataType.number,
    title: "YEARS",
  },
  {
    count: 15,
    type: DataType.number,
    title: "INDUSTRIES",
  },
  {
    count: 80,
    type: DataType.percentage,
    title: "REFERRAL RATE",
  },
];

const Consulting = () => {
  return (
    <div>
      <CommonHero
        desc="We take pride in executing what we present."
        title1="Change"
        title2="Delivered,"
        title3="
Consistently!"
      />
      <Stats data={data} />
      <CardSection data={cardData} title="Service Areas" isBlack />
    </div>
  );
};

export default Consulting;
