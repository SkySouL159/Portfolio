"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <div className=" relative" id="projects">
      <h1 className="heading mb-4">
        All my <span className="text-purple ">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center mx-10 gap-x-8 gap-y-8 md:mt-4">
        {projects.map(({ id, title, des, img, iconLists, link }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.tagName.toLowerCase() !== "a") {
                e.preventDefault();
              }
            }}
            className="sm:h-[30rem] h-[25rem] lg:min-h-[35.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] " // Added border color
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full"
            >
              <PinContainer title={title}>
                {/* Project Image Section */}
                <div className="relative flex items-center justify-center sm:w-[545px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-auto h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    layout="intrinsic"
                    width={500}
                    height={300}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                {/* Title and Description */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                {/* Tech Icons and Live Link */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 w-8 h-8 flex justify-center items-center" // Added border color
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          width={32}
                          height={32}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Check Live Site Button with Animated Arrow */}
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex items-center justify-center"
                  >
                    <div
                      onClick={() => window.open(link, "_blank")}
                      className="flex items-center lg:text-xl md:text-xs text-sm text-purple cursor-pointer"
                    >
                      Check Live Site
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </motion.div>
                </div>
              </PinContainer>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
