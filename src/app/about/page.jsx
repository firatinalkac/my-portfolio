"use client";
import { useRef } from "react";
import BrainIcon from "@/components/BrainIcon";
import Image from "next/image";
import { useInView, useScroll } from "framer-motion";

const AboutPage = () => {
  const skills = [
    "Javascript",
    "Typescript",
    "Node.js",
    "Vue.js",
    "React.js",
    "Redux",
    "NextJS",
    "SCSS",
    "Tailwind",
    "Git",
    "Webpack",
    "Vite",
    "Jest",
    "Vitest",
  ];
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div
      className="lg:flex lg:gap-24 h-full overflow-scroll"
      ref={containerRef}
    >
      {/*TEXT CONTAINER*/}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xlg:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:w-[60%] xl:gap-64 lg:pr-0 xl:w-1/2">
        {/*BIOGRAPHY CONTAINER*/}
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa
            eveniet modi odio quaerat quam ratione, repudiandae sint voluptate.
            Iure nemo pariatur placeat quidem quo repellat velit.
          </p>
          <span className="italic">Lorem ipsum dolor sit amet.</span>
          <Image
            className="self-end"
            src="signature.svg"
            alt="sign"
            width={100}
            height={100}
          />
        </div>
        {/*SKILLS CONTAINER*/}
        <div className="flex flex-col gap-12 justify-center">
          <h1 className="font-bold text-2xl">SKILLS</h1>
          {/*SKILL LIST*/}
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded p-2 cursor-pointer bg-black text-white hover:text-black hover:bg-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/*EXPERIENCE CONTAINER*/}
        <div className="flex flex-col gap-12 justify-center pb-48">
          <h1 className="font-bold text-2xl">EXPERIENCE</h1>
          <div className="experience-lists">
            <div className="flex justify-between h-48">
              <div className="w-1/3 flex flex-col gap-2">
                <div className="bg-white rounded-lg px-3 py-2 font-semibold">
                  Senior Frontend Developer
                </div>
                <div className="text-sm italic">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="text-red-400 text-sm font-semibold">
                  March 2021 - March 2022
                </div>
                <div className="px-2 py-1 rounded bg-white text-sm font-semibold w-fit">
                  Observer Tech
                </div>
              </div>
              <div className="w-fit">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2" />
                </div>
              </div>
              <div className="w-1/3" />
            </div>
            <div className="flex justify-between h-48">
              <div className="w-1/3" />
              <div className="w-fit">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2" />
                </div>
              </div>
              <div className="w-1/3 flex flex-col gap-2">
                <div className="bg-white rounded-lg px-3 py-2 font-semibold">
                  Senior Frontend Developer
                </div>
                <div className="text-sm italic">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="text-red-400 text-sm font-semibold">
                  March 2021 - March 2022
                </div>
                <div className="px-2 py-1 rounded bg-white text-sm font-semibold w-fit">
                  Observer Tech
                </div>
              </div>
            </div>
            <div className="flex justify-between h-48">
              <div className="w-1/3 flex flex-col gap-2">
                <div className="bg-white rounded-lg px-3 py-2 font-semibold">
                  Senior Frontend Developer
                </div>
                <div className="text-sm italic">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="text-red-400 text-sm font-semibold">
                  March 2021 - March 2022
                </div>
                <div className="px-2 py-1 rounded bg-white text-sm font-semibold w-fit">
                  Observer Tech
                </div>
              </div>
              <div className="w-fit">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2" />
                </div>
              </div>
              <div className="w-1/3" />
            </div>
          </div>
        </div>
      </div>
      {/*SVG CONTAINER*/}
      <div className="hidden lg:block w-[40%] sticky top-0 z-30 xl:w-1/2">
        <BrainIcon scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default AboutPage;
