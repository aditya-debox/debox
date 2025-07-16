import CardSection from "@/components/common/CardSection";
import CommonHero from "@/components/common/CommonHero";
import Stats from "@/components/common/Stats";
import React from "react";
import LogoSlider from "@/components/common/LogoSlider";
import ImpactSection from "@/components/common/ImpactSection";
import CaseStudyCards from "@/components/common/CaseStudyCards";
import kalkiFashion from "@/assets/kalki fashion.png";
import CaiStore from "@/assets/The Cai Store.jpg";
import Review from "@/components/common//Review";
import BlogCards from "@/components/common/BlogCards";
import SurveyCTA from "@/components/common/consulting/SurveyCTA";

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

const EDheadingContent = (
  <>
    EXPECTATIONS DELIVERED,
    <br />
    CONSISTENTLY!
  </>
);

const testimonialData = [
  {
    name: "Ritika Gupta",
    role: "Director",
    company: "Kalki Fashion",
    paragraph: "We had the privilege to work with Debox at Kalki...",
  },
  {
    name: "Aditya Shah",
    role: "Partner",
    company: "Juno's Hospitality LLP",
    paragraph: "Debox are very focused in their approach...",
  },

  {
    name: "Aditya Shah",
    role: "Partner",
    company: "Juno's Hospitality LLP",
    paragraph: "Debox are very focused in their approach...",
  },

  {
    name: "Aditya Shah",
    role: "Partner",
    company: "Juno's Hospitality LLP",
    paragraph: "Debox are very focused in their approach...",
  },

  {
    name: "Aditya Shah",
    role: "Partner",
    company: "Juno's Hospitality LLP",
    paragraph:
      "Debox are very focused in their approach... lorem ipsum dolor sit amet, consectetur adipiscing elit. lor",
  },

  {
    name: "Aditya Shah",
    role: "Partner",
    company: "Juno's Hospitality LLP",
    paragraph: "Debox are very focused in their approach...",
  },

  {
    name: "Aditya Shah",
    role: "Partner",
    company: "Juno's Hospitality LLP",
    paragraph: "Debox are very focused in their approach...",
  },
];

const blogData = [
  {
    
    title: 'Building Scalable Apps',
    desc: 'Discover how to build applications that scale effortlessly across platforms.',
    image: CaiStore.src,
  },
  {
    
    title: 'React Performance Tips',
    desc: 'Boost your React apps with these proven performance optimization strategies.',
     image: CaiStore.src,
  },
  {
   
    title: 'Mastering UI/UX',
    desc: 'Learn key principles of user experience and interface design.',
    image: CaiStore.src,
    
  },
    {
   
    title: 'Mastering UI/UX',
    desc: 'Learn key principles of user experience and interface design.',
    image: CaiStore.src,
    
  },
    {
   
    
    desc: 'Learn key principles of user experience and interface design.',
    image: CaiStore.src,
    
  },
    {
   
    
    desc: 'Learn key principles of user experience and interface design.',
    image: CaiStore.src,
    
  },
    {
   
    
    desc: 'Learn key principles of user experience and interface design.',
    image: CaiStore.src,
    
  },
  // Add more blog items as needed
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
      <LogoSlider />
      <ImpactSection titleLine1="REAL WORK," titleLine2="REAL IMPACT!" />
      <CaseStudyCards data={caseStudyData} />

      <Review heading={EDheadingContent} testimonials={testimonialData} />
      <ImpactSection titleLine1="Blogs &" titleLine2="insights," />
      <BlogCards data={blogData} withBorder={true} />
      <SurveyCTA
        heading="See where your company stands"
        subheading="in our Culture & Sustainability Survey."
        buttonText="Take A Survey"
      />
    </div>
  );
};

export default Consulting;
