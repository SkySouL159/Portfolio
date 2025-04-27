"use client";
import { techStack } from "@/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <div className="mb-16 px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="heading">
          My <span className="text-purple">TechStack</span>
        </h1>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center"
      >
        {techStack.map((tech, index) => (
          <motion.button
            key={tech.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="relative inline-flex h-24 w-24 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black group"
          >
            <span
              style={{
                animation: `spin ${tech.spinSpeed} linear infinite`,
                animationDirection: tech.spinDirection,
              }}
              className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#00FFD5_0%,#3B82F6_25%,#C084FC_75%,#FB7185_100%)]"
            />

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 text-white backdrop-blur-3xl">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={40}
                height={40}
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              />
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
