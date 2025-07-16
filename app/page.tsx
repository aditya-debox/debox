"use client";
import CardSection from "@/components/common/CardSection";
import Stats, { StatsProps } from "@/components/common/Stats";
import HeroSection from "@/components/home/HeroSection";
import { BsGraphUp } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import IPSection from "@/components/home/IPSection";
import ImpactSection from "@/components/common/ImpactSection";
import BlogCards from "@/components/common/BlogCards";
import CaiStore from "@/assets/The Cai Store.jpg";
import SectionLayout from "@/components/CardCarousel";
import InsightsCards from "@/components/cards/InsightsCard";

export enum DataType {
  number = "number",
  percentage = "percentage",
  none = "none",
  text = "text",
}

const data = [
  {
    count: 4,
    type: DataType.number,
    title: "COUNTRIES",
  },
  {
    count: 100,
    type: DataType.number,
    title: "CLIENTS",
  },
  {
    count: 20,
    type: DataType.number,
    title: "INDUSTRIES",
  },
  {
    count: 4,
    type: DataType.none,
    title: "IPs",
  },
];

const cardData = [
  {
    icon: BsGraphUp,
    title: "Business Consulting",
    desc: "Solving business problems and challenges with exceptional on-ground implementation.",
  },
  {
    icon: TbBulb,
    title: "Marketing Consulting",
    desc: "Delivering marketing strategies and marketing execution that deliver exceptional RO$.",
  },
  {
    icon: FaCode,
    title: "Technology Consulting",
    desc: "Delivering integrated technology solutions to solve complex business challenges to enable efficiency and scale.",
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
    subtitle: "DO THEY REALLY HELP? lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stats data={data} />
      <CardSection title="our verticals" data={cardData} isBlack={false} />
      <IPSection />
      {/* <ImpactSection titleLine1="Blogs &" titleLine2="insights," />
      <BlogCards data={blogData}  withBorder={false} /> */}
      <SectionLayout
        titleLine1="Blogs"
        titleLine2="and Insights"
        buttonTitle="Learn more"
        onButtonClick={() => console.log("Button clicked!")}
        showBorder={false}
      >
        {InsightsCardsData.map((card, index) => (
          <InsightsCards
            key={index}
            image={card.image}
            imageAlt={card.imageAlt}
            title={card.title}
            subtitle={card.subtitle}
            linkText={card.linkText}
            linkHref={card.linkHref}
          />
        ))}
      </SectionLayout>
    </div>
  );
}
