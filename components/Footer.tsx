import Image from "next/image";
import React from "react";
import LogoWhite from "@/assets/logo-white.png";
import Link from "next/link";

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  isBlack?: boolean;
}

const Icon: React.FC<IconProps> = ({
  height,
  width,
  className,
  isBlack = true,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 79 86"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ml-2 sm:ml-4 lg:ml-10 ${className}`}
    >
      <rect width="56.8588" height="17.9933" fill={`#7A7A7A`} />
      <rect
        x="51.1016"
        y="67.2949"
        width="32.0322"
        height="17.9933"
        transform="rotate(-89.8293 51.1016 67.2949)"
        fill={`#7A7A7A`}
      />
      <rect
        x="0.360352"
        y="54.3397"
        width="78.2251"
        height="17.9933"
        transform="rotate(-43.8564 0.360352 54.3397)"
        fill={`#7A7A7A`}
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-white font-secondary">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="border-b border-white px-6 py-8">
          <Link
            href={"/"}
            prefetch={false}
            passHref
            className="relative inline-block w-[100px] h-[45px] mb-6"
          >
            <Image
              src={LogoWhite}
              alt="Debox Logo"
              className="!w-full !h-full object-contain"
            />
          </Link>
          <p className="font-primary text-3xl sm:text-4xl font-extrabold uppercase">
            drop us a line
          </p>
        </div>

        <div className="border-b border-white px-6 py-6">
          <h3 className="font-primary uppercase text-xl font-extrabold mb-4">
            locations
          </h3>
          <div className="space-y-4">
            <div className="font-secondary">
              <h4 className="font-bold">Thane Office</h4>
              <p className="font-normal text-sm">
                815, Lodha Supremus - Tower B, Lodha Business District 2,
                Kolshet Rd, Thane, Maharashtra 400607.
              </p>
            </div>
            <div className="font-secondary">
              <h4 className="font-bold">Atlanta USA Office</h4>
              <p className="text-sm">
                WeWork - 1155 Perimeter Center West Atlanta, GA 30338.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-white px-6 py-6">
          <h3 className="font-primary uppercase text-xl font-extrabold mb-4">
            follow us
          </h3>
          <div className="flex flex-col items-start font-normal space-y-2">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="border-b border-white px-6 py-6">
          <h3 className="font-primary uppercase text-xl font-extrabold mb-4">
            contact us
          </h3>
          <div className="flex flex-col items-start font-normal space-y-2">
            <a
              href="mailto:darshan@debox.co.in"
              className="underline tracking-wide underline-offset-2 hover:text-gray-300 transition-colors"
            >
              darshan@debox.co.in
            </a>
          </div>
        </div>

        <div className="border-b border-white px-6 py-6">
          <h3 className="font-primary uppercase text-xl font-extrabold mb-4">
            quick links
          </h3>
          <div className="flex flex-col items-start font-normal space-y-2">
            <Link
              href="/services"
              className="hover:text-gray-300 transition-colors"
            >
              Service
            </Link>
            <Link
              href="/work"
              className="hover:text-gray-300 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/insights"
              className="hover:text-gray-300 transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-b border-white px-6 py-6 text-sm tracking-wide">
          <p>
            Thank you for visiting our website. Our dedicated team is here to
            assist you with any questions you may have. Your messages are
            important to us, and we aim to respond promptly during our business
            hours. We appreciate your interest and look forward to hearing from
            you.
          </p>
        </div>

        <div className="px-6 py-8">
          <p className="font-primary text-secondary text-3xl sm:text-4xl font-extrabold uppercase">
            <span className="flex items-center">
              Your
              <Icon className="" />
            </span>
            <span>Mail</span>
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-2 grid-rows-3">
        <div className="col-span-1 row-span-2 flex flex-col justify-between border-r border-b border-white px-12 xl:px-24 py-10">
          <Link
            href={"/"}
            prefetch={false}
            passHref
            className="relative w-[130px] xl:w-[160px] h-[60px] min-w-[115px] min-h-[53px]"
          >
            <Image
              src={LogoWhite}
              alt="Debox Logo"
              className="!w-full !h-full object-contain"
            />
          </Link>
          <p className="font-primary text-5xl xl:text-6xl 2xl:text-8xl font-extrabold uppercase">
            drop us a line
          </p>
        </div>
        <div className="col-span-1 row-span-2 border-b border-white h-full">
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="flex flex-col border-r border-b border-white py-10 px-6">
              <h3 className="font-primary uppercase text-2xl font-extrabold">
                locations
              </h3>
              <div className="flex flex-col space-y-2 mt-2">
                <div className="font-secondary">
                  <h4 className="font-bold">Thane Office</h4>
                  <p className="font-normal text-sm">
                    815, Lodha Supremus - Tower B, Lodha Business District 2,
                    Kolshet Rd, Thane, Maharashtra 400607.
                  </p>
                </div>
                <div className="font-secondary">
                  <h4 className="font-bold">Atlanta USA Office</h4>
                  <p className="text-sm">
                    WeWork - 1155 Perimeter Center West Atlanta, GA 30338.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b border-white py-10 px-6">
              <h3 className="font-primary uppercase text-2xl font-extrabold">
                follow us
              </h3>
              <div className="flex flex-col items-start font-normal space-y-1 mt-2">
                <Link
                  href="https://instagram.com/debox.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="https://facebook.com/debox.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  href="https://linkedin.com/company/debox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="border-r h-80 border-white py-10 px-6">
              <h3 className="font-primary uppercase text-2xl font-extrabold">
                contact us
              </h3>
              <div className="flex flex-col underline tracking-wide underline-offset-2 items-start font-normal space-y-1 mt-2">
                <a
                  href="mailto:darshan@debox.co.in"
                  className="hover:text-gray-300 transition-colors"
                >
                  darshan@debox.co.in
                </a>
              </div>
            </div>
            <div className="py-10 px-6">
              <h3 className="font-primary uppercase text-2xl font-extrabold">
                quick links
              </h3>
              <div className="flex flex-col items-start font-normal space-y-1 mt-2">
                <Link
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Service
                </Link>
                <Link
                  href="/work"
                  className="hover:text-gray-300 transition-colors"
                >
                  Work
                </Link>
                <Link
                  href="/insights"
                  className="hover:text-gray-300 transition-colors"
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border-r border-white py-10 px-12 xl:px-24 text-base tracking-wide">
          <p>
            Thank you for visiting our website. Our dedicated team is here to
            assist you with any questions you may have. Your messages are
            important to us, and we aim to respond promptly during our business
            hours. We appreciate your interest and look forward to hearing from
            you.
          </p>
        </div>
        <div className="col-span-1 row-span-1 p-4 py-10 px-6">
          <p className="font-primary text-secondary text-5xl xl:text-6xl 2xl:text-8xl font-extrabold uppercase">
            <span className="flex items-center">
              Your
              <Icon className="" />
            </span>
            <span>Mail</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
