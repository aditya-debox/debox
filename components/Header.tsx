import Logo from '@/assets/logo.png'
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
    const tabs = [
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        { label: "Insights", href: "/insights" },
        { label: "Contact Us", href: "/contact" },
      ];

    return (
    <div className="">
      <div className="flex justify-between items-center py-4 px-6 border-b">
        <Link href="/" 
        className="relative w-[130px] md:!w-[160px] !h-[60px] min-w-[115px] min-h-[53px]"
        >
        <Image src={Logo} alt="debox" className="!w-full !h-full object-contain" />
        </Link>
         <div className="flex items-center gap-8">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="text-base font-medium hover:underline"
          >
            {tab.label}
          </Link>
        ))}
      </div>
      </div>
      </div>
    );
  }
  