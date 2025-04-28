"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { images } from "@/data";
import { motion } from "framer-motion";

export function Project() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="heading relative md:mb-8 my-8 "
      >
        A small selection of{" "}
        <span className="text-purple ">recent projects</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl md:mb-8  md:auto-rows-[20rem] rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800 mx-auto"
      >
        <ThreeDMarquee images={images} />
      </motion.div>
    </>
  );
}
