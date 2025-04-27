import React from "react";
import Image from "next/image"; // Import next/image
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mb-8 relative" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-purple">digital experience to next level?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:akash.ap111@outlook.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <p className="md:text-base text-sm md:font-normal font-light">
            © 2025 Akash Patel
          </p>
          <p className="text-gray-400 text-xs">
            Designed & Coded with ❤️ in Next.js
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-2 mt-2">
          {socialMedia.map((profile) => {
            return (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Link href={profile.url}>
                  <Image
                    src={profile.img}
                    alt={String(profile.id)}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
