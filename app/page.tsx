import Stats, { StatsProps } from "@/components/common/Stats";
import HeroSection from "@/components/home/HeroSection";

export enum DataType {
  number = "number",
  percentage = "percentage",
  none = "none",
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

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Stats data={data} />
    </div>
  );
}
