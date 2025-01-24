"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import experience from "../assets/experience.png";
import skills from "../assets/skills.png";

const About = () => {
  return (
    <div className="py-16 lg:py-24 max-w-[1400px] px-10 lg:px-16 xxl:px-0 mx-auto my-4" id="about">
      <h2 className="text-white text-center font-semibold px-4 mb-8 font-sans">
        About 
        <span className="text-orange-500"> Me</span>
      </h2>

      <div className="grid grid-cols-12 gap-4 place-items-center">
        <div className="w-full flex items-center col-span-12 lg:col-span-5 lg:min-h-[260px] relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col grid-cols-12 items-center md:flex-row py-6 lg:py-10 px-6 ">
            <Image src={book} alt="book" className="w-auto h-[180px] lg:h-[130px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">Education</h4>
              <p className="text-lg text-white/70 mt-2">
                I graduated with a degree in Computer Engineering from Abant
                Izzet Baysal University.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center  col-span-12 lg:col-span-7 lg:min-h-[260px] relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col items-center md:flex-row py-6 lg:py-10 px-6">
            <Image src={pc} alt="book" className="w-auto h-[180px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">
                Problem-Solving
              </h4>
              <p className="text-lg text-white/70 mt-2">
                I specialize in solving frontend challenges using React,
                JavaScript, and CSS to build responsive, fast, and user-friendly
                web applications.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:min-h-[454px] xl:min-h-[340px] flex items-center col-span-12 lg:col-span-7 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col items-center md:flex-row lg:py-2 py-6 px-6">
            <Image src={experience} alt="book" className="w-auto h-[180px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">Experience</h4>
              <p className="text-lg text-white/70 mt-2">
                I have worked on several projects, developing frontend
                applications using React and Next.js, and backend applications
                with Node.js and .NET. Additionally, I interned as a Frontend Developer
                at Code and More from 01.2024 to 04.2024 and worked as a Junior
                Frontend Developer at Barfas from 07.2024 to 12.2024.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  lg:min-h-[454px] xl:min-h-[340px] flex items-center col-span-12 lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col items-center md:flex-row lg:py-2 py-6 px-6">
            <Image src={skills} alt="book" className="w-auto h-[180px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">
                Technical Skills
              </h4>
              <p className="text-lg text-white/70 mt-2">
                I am skilled in React, Bootstrap, Tailwind CSS, JavaScript, and
                state management with RTK. Currently, I am learning .NET
                for back-end development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
