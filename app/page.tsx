import CardSection from "@/components/common/CardSection";
import Stats, { StatsProps } from "@/components/common/Stats";
import HeroSection from "@/components/home/HeroSection";
import { BsGraphUp } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import IPSection from "@/components/home/IPSection";

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

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stats data={data} />
      <CardSection title="our verticals" data={cardData} isBlack={false} />
      <IPSection />
    </div>
  );
}
