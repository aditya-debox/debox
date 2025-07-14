import CardSection from "@/components/common/CardSection";
import CommonHero from "@/components/common/CommonHero";
import Stats from "@/components/common/Stats";
import React from "react";
import LogoSlider from "@/components/common/LogoSlider";
import ImpactSection from "@/components/common/ImpactSection";
import CaseStudyCards from "@/components/common/CaseStudyCards";
import kalkiFashion from "@/assets/kalki fashion.png";
import CaiStore from "@/assets/The Cai Store.jpg";

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

const caseStudyData = [
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: CaiStore.src, // Use the image path as a string
  },
  {
    title: "THE CAI STORE",
    desc: "How we helped the fast-growing women's footwear startup to structure their growth.",
    image: CaiStore.src,
  },
  {
    title: "NIPPO",
    desc: "Implemented strategic improvements for Nippo’s business operations.",
    image: CaiStore.src,
  },
    {
    title: "NIPPO",
    desc: "Implemented strategic improvements for Nippo’s business operations.",
    image: CaiStore.src,
  },
    {
    title: "NIPPO",
    desc: "Implemented strategic improvements for Nippo’s business operations.",
    image: CaiStore.src,
  },
];

const Consulting = () => {
  return (
    <div>
      <CommonHero
        desc="We take pride in executing what we present."
        title1="Change"
        title2="Delivered,"
        title3="Consistently!"
      />
      <Stats data={data} />
      <CardSection data={cardData} title="Service Areas" isBlack />
      <LogoSlider/>
      <ImpactSection 
      titleLine1="REAL WORK,"
        titleLine2="REAL IMPACT!"
        
      />
       <CaseStudyCards
       
        data={caseStudyData}
      />
    </div>
  );
};

export default Consulting;
