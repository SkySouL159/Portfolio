import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="relative mt-12 md:mx-12 lg:mx-12">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => {
          return (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              className="flex-1 text-white border-natural-200 dark:border-slate-800"
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                  width={128} // Adjust width as needed
                  height={128} // Adjust height as needed
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
