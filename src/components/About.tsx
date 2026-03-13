"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import experience from "../assets/experience.png";
import skills from "../assets/skills.png";
import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/data/translations";

const About = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="py-16 lg:py-24 max-w-[1400px] px-10 lg:px-16 xxl:px-0 mx-auto mb-6" id="about">
      <h2 className="text-white text-center font-semibold px-4 mb-8 font-sans">
        {t.about.title} 
        <span className="text-orange-500"> {t.about.accent}</span>
      </h2>

      <div className="grid grid-cols-12 gap-4 place-items-center">
        <div className="w-full flex items-center col-span-12 lg:col-span-5 lg:min-h-[260px] relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col grid-cols-12 items-center md:flex-row py-6 lg:py-10 px-6 ">
            <Image src={book} alt="book" className="w-auto h-[180px] lg:h-[130px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">{t.about.educationTitle}</h4>
              <p className="text-lg text-white/70 mt-2">
                {t.about.educationDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center  col-span-12 lg:col-span-7 lg:min-h-[260px] relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col items-center md:flex-row py-6 lg:py-10 px-6">
            <Image src={pc} alt="book" className="w-auto h-[180px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">{t.about.focusTitle}</h4>
              <p className="text-lg text-white/70 mt-2">
                {t.about.focusDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:min-h-[454px] xl:min-h-[340px] flex items-center col-span-12 lg:col-span-7 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col items-center md:flex-row lg:py-2 py-6 px-6">
            <Image src={experience} alt="book" className="w-auto h-[180px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">{t.about.experienceTitle}</h4>
              <p className="text-lg text-white/70 mt-2">
                {t.about.experienceDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  lg:min-h-[454px] xl:min-h-[340px] flex items-center col-span-12 lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col items-center md:flex-row lg:py-2 py-6 px-6">
            <Image src={skills} alt="book" className="w-auto h-[180px]" />
            <div className="flex flex-col mt-4">
              <h4 className=" font-bold text-white/80">{t.about.skillsTitle}</h4>
              <p className="text-lg text-white/70 mt-2">
                {t.about.skillsDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
