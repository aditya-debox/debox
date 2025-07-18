import CardSection from "@/components/common/CardSection";
import CommonHero from "@/components/common/CommonHero";
import Stats from "@/components/common/Stats";
import React from "react";
import LogoSlider from "@/components/common/LogoSlider";
import ImpactSection from "@/components/common/ImpactSection";
import CaseStudyCards from "@/components/common/CaseStudyCards";
import kalkiFashion from "@/assets/The Cai Store.jpg";
import CaiStore from "@/assets/The Cai Store.jpg";
import Review from "@/components/common//Review";
import BlogCards from "@/components/common/BlogCards";
import SurveyCTA from "@/components/common/consulting/SurveyCTA";
import CardCarousel from "@/components/CardCarousel";
import InsightsCards from "@/components/cards/InsightsCard";
import ReviewCard from "@/components/cards/ReviewCard";
import ProjectCard from "@/components/cards/ProjectCard";
import StaggerCards from "@/components/ConsultingServices/StaggerCards";
import IndustriesSection from "@/components/ConsultingServices/IndustriesSection";
import EngagementApproachSection from "@/components/ConsultingServices/EngagementSection";
import Marquee from "@/components/common/Marquee";

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
    title: "Building Scalable Apps",
    desc: "Discover how to build applications that scale effortlessly across platforms.",
    image: CaiStore.src,
  },
  {
    title: "React Performance Tips",
    desc: "Boost your React apps with these proven performance optimization strategies.",
    image: CaiStore.src,
  },
  {
    title: "Mastering UI/UX",
    desc: "Learn key principles of user experience and interface design.",
    image: CaiStore.src,
  },
  {
    title: "Mastering UI/UX",
    desc: "Learn key principles of user experience and interface design.",
    image: CaiStore.src,
  },
  {
    desc: "Learn key principles of user experience and interface design.",
    image: CaiStore.src,
  },
  {
    desc: "Learn key principles of user experience and interface design.",
    image: CaiStore.src,
  },
  {
    desc: "Learn key principles of user experience and interface design.",
    image: CaiStore.src,
  },
  // Add more blog items as needed
];

const InsightsCardsData = [
  {
    image: CaiStore.src,
    imageAlt: "Business consultation meeting",
    title: "CONSULTANTS-",
    subtitle: "DO THEY REALLY HELP?",
    linkText: "Learn more",
    linkHref: "/consultation",
  },
  {
    image: CaiStore.src,
    imageAlt: "Business consultation meeting",
    title: "CONSULTANTS-",
    subtitle:
      "DO THEY REALLY HELP? lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkText: "Learn more",
    linkHref: "/consultation",
  },
  {
    image: CaiStore.src,
    imageAlt: "Business consultation meeting",
    title: "CONSULTANTS-",
    subtitle: "DO THEY REALLY HELP?",
    linkText: "Learn more",
    linkHref: "/consultation",
  },
  {
    image: CaiStore.src,
    imageAlt: "Business consultation meeting",
    title: "CONSULTANTS-",
    subtitle: "DO THEY REALLY HELP?",
    linkText: "Learn more",
    linkHref: "/consultation",
  },
  {
    image: CaiStore.src,
    imageAlt: "Business consultation meeting",
    title: "CONSULTANTS-",
    subtitle: "DO THEY REALLY HELP?",
    linkText: "Learn more",
    linkHref: "/consultation",
  },
  {
    image: CaiStore.src,
    imageAlt: "Business consultation meeting",
    title: "CONSULTANTS-",
    subtitle: "DO THEY REALLY HELP?",
    linkText: "Learn more",
    linkHref: "/consultation",
  },
  {
    image: CaiStore.src,
    imageAlt: "Business consultation meeting",
    title: "CONSULTANTS-",
    subtitle: "DO THEY REALLY HELP?",
    linkText: "Learn more",
    linkHref: "/consultation",
  },
  // ... more card data
];

const ReviewCardData = [
  {
    name: "Ritika Gupta",
    role: "Director",
    company: "Kalki Fashion",
    paragraph:
      "We had the privilege to work with Debox at Kalki they really helped us structure all our reports and also give a defined checklist and tasks for every team. Because of that, we can now quantify the work done in every department.",
    linkHref: "/consultation",
  },
  {
    name: "Aditya Shah",
    role: "Partner",
    company: "Juno's Hospitality LLP",
    paragraph:
      "Debox are very focused in their approach and have delivered exceptional results for our hospitality business. Their systematic methodology has transformed how we manage our operations.",
    linkHref: "/consultation",
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "TechVision Solutions",
    paragraph:
      "Working with Debox has been a game-changer for our tech company. They provided clear insights and actionable strategies that helped us scale our operations efficiently.",
    linkHref: "/consultation",
  },
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "Kumar Industries",
    paragraph:
      "The team at Debox exceeded our expectations with their professional approach and deep understanding of our industry. They delivered results that directly impacted our bottom line.",
    linkHref: "/consultation",
  },
  {
    name: "Sneha Patel",
    role: "Operations Head",
    company: "GreenTech Innovations",
    paragraph:
      "Debox helped us streamline our green technology processes and implement sustainable practices that not only improved efficiency but also reduced our environmental impact.",
    linkHref: "/consultation",
  },
  {
    name: "Vikram Singh",
    role: "Founder",
    company: "StartupHub Delhi",
    paragraph:
      "As a startup founder, I was impressed by Debox's ability to understand our unique challenges and provide tailored solutions that helped us achieve rapid growth.",
    linkHref: "/consultation",
  },
  {
    name: "Anita Desai",
    role: "HR Director",
    company: "People First Corp",
    paragraph:
      "Debox transformed our HR processes and helped us build a more efficient team management system. Their expertise in organizational development is truly remarkable.",
    linkHref: "/consultation",
  },
  {
    name: "Karan Mehta",
    role: "Chief Technology Officer",
    company: "Digital Solutions Inc",
    paragraph:
      "The technical expertise and innovative solutions provided by Debox have been instrumental in our digital transformation journey. They truly understand modern business needs.",
    linkHref: "/consultation",
  },
  {
    name: "Meera Joshi",
    role: "Marketing Manager",
    company: "Creative Agency Pro",
    paragraph:
      "Debox helped us revolutionize our marketing strategies with data-driven insights and creative solutions that significantly boosted our client engagement rates.",
    linkHref: "/consultation",
  },
  {
    name: "Arjun Reddy",
    role: "Finance Director",
    company: "Global Finance Corp",
    paragraph:
      "The financial restructuring and process optimization provided by Debox resulted in substantial cost savings and improved operational efficiency across all departments.",
    linkHref: "/consultation",
  },
  // ... more testimonial data
];

const ProjectCardData = [
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: kalkiFashion.src,
    linkHref: "/consultation",
  },
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: kalkiFashion.src,
    linkHref: "/consultation",
  },
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: kalkiFashion.src,
    linkHref: "/consultation",
  },
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: kalkiFashion.src,
    linkHref: "/consultation",
  },
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: kalkiFashion.src,
    linkHref: "/consultation",
  },
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: kalkiFashion.src,
    linkHref: "/consultation",
  },
  {
    title: "KALKI FASHION",
    desc: "We helped a fast-growing women’s fashion brand scale by creating a Performance Management process with data trackers and dashboards for better insights.",
    image: kalkiFashion.src,
    linkHref: "/consultation",
  },
];

const sampleData = [
  {
    title: "Getting Started",
    description:
      "Learn how to set up your project and get started quickly with best practices. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    items: ["Installation", "Setup Guide", "First Steps"],
    learnMoreText: "Learn More",
  },
  {
    title: "Advanced Features",
    description:
      "Dive deeper into more advanced features to enhance your application.",
    items: [
      "API ",
      "Performance Optimization",
      "Security Best Practices",
      "API Integration",
      "Performance Optimization",
      "Security Best Practices",
      "API Integration",
      "Performance Optimization",
      "Security Best Practices",
    ],
    learnMoreText: "Explore Features",
  },
  {
    title: "Community Resources",
    description: "Connect with the community and access valuable resources.",
    items: ["Forums", "Documentation", "Tutorials"],
    learnMoreText: "Join the Community",
  },
  {
    title: "Advanced Features",
    description:
      "Dive deeper into more advanced features to enhance your application.",
    items: [
      "API ",
      "Performance Optimization",
      "Security Best Practices",
      "API Integration",
      "Performance Optimization",
      "Security Best Practices",
      "API Integration",
      "Performance Optimization",
      "Security Best Practices",
    ],
    learnMoreText: "Explore Features",
  },
  {
    title: "Advanced Features",
    description:
      "Dive deeper into more advanced features to enhance your application.",
    items: [
      "API ",
      "Performance Optimization",
      "Security Best Practices",
      "API Integration",
      "Performance Optimization",
      "Security Best Practices",
      "API Integration",
      "Performance Optimization",
      "Security Best Practices",
    ],
    learnMoreText: "Explore Features",
  },
];

const leftIndustries = [
  "Real Estate",
  " Retail & E-Commerce",
  "F&B (Food and Beverage)",
];

const rightIndustries = ["Gaming", "Education", "Luxury & Life"];

const engagementData = {
  heading1: "ENGAGEMENT",
  heading2: "APPROACH",
  approaches: [
    {
      title: "FOUNDATION",
      subtitle: "STRATEGY & OBJECTIVES",
      description:
        "Foundation is for brands that need clear strategy and positioning to move forward with focus.",
      learnMoreLink: "#foundation",
    },
    {
      title: "FLAGSHIP",
      subtitle: "STRATEGY & OBJECTIVES + EXECUTION",
      description:
        "Flagship is for rebrands of refreshers, delivering strategy, identity, and guidelines to launch with clarity.",
      learnMoreLink: "#flagship",
    },
    {
      title: "FULLSAIL",
      subtitle: "STRATEGY & OBJECTIVES + EXECUTION + DIGITISATION",
      description:
        "Fullsail is for companies in high-growth mode, aligning brand build plus market activation.",
      learnMoreLink: "#fullsail",
    },
  ],
};
const ConsultingServices = () => {
  return (
    <div>
      <CommonHero
        desc="We partner with executive teams to transform brand strategy, 
        positioning, and identity into a brand that aligns culture and accelerates growth."
        title1="Consulting"
        title2="services"
      />
      <LogoSlider />

      <StaggerCards data={sampleData} />

      <IndustriesSection
        headingLine1="INDUSTRIES"
        headingLine2="WE WORK IN"
        leftColumn={leftIndustries}
        rightColumn={rightIndustries}
      />

      <CardCarousel
        titleLine1="EXPECTATIONS DELIVERED,"
        titleLine2="CONSISTENTLY!"
        buttonHref="/learn-more"
        showBorder={true}
        useBlackBackground={true}
        useAlternativeHeading={true}
      >
        {ReviewCardData.map((Review, index) => (
          <ReviewCard
            key={index}
            name={Review.name}
            role={Review.role}
            company={Review.company}
            paragraph={Review.paragraph}
            linkHref={Review.linkHref}
          />
        ))}
      </CardCarousel>

      <EngagementApproachSection
        heading1={engagementData.heading1}
        heading2={engagementData.heading2}
        approaches={engagementData.approaches as any}
      />

      <Marquee text="LET’S TALK" speed={10} className="bg-black text-black" />
      <SurveyCTA
        heading="START THE CONVERSATION"
        buttonText="Book A Call"
        theme="dark"
      />


    </div>
  );
};

export default ConsultingServices;
