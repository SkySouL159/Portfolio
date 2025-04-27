"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { BentoGridThirdDemo } from "./Grid";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="lg:pb-8 lg:pt-36" id="about">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div className="flex items-center h-screen w-full dark:bg-black-100 justify-center bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.02] absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      {/* Main content */}
      <div className="flex justify-center relative my-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[75vw] flex flex-col items-center justify-center"
        >
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experience"
            className="text-center text-[40px] md:text-5xl lg:text-6xl bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl"
          >
            Hey there! I&apos;m ༺SkY༻, turning ideas into fast, beautiful web
            experiences with Next.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href={"#projects"}>
              <MagicButton
                title="See What I’ve Built"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <BentoGridThirdDemo />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
