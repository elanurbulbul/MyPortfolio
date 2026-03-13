"use client";
import Image from "next/image";
import React from "react";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilePic from "../assets/profile.png";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/data/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="py-12  relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B2066_25%,#8F5C59_60%,#DBAF69_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_80%,#2B2066)] top-[600px] left-[50%] -translate-x-1/2 -z-1"></div>
      <div className="">
        <div className=" text-white font-semibold italic text-center font-sans">
          <h1 className="text-[#98B4CE]">{t.hero.greeting}</h1>
          <h1 className="text-[#E48A57]">Elanur Bülbül</h1>
        </div>
        <p className="text-center text-base md:text-xl font-semibold tracking-[0.28em] uppercase text-white/65 mt-5 px-6">
          {t.hero.role}
        </p>
        <motion.div
          className="absolute top-[10px] left-[20px] w-20 md:w-40 md:top-[80px] lg:left-[160px] lg:top-[170px]"
          drag
        >
          <Image
            alt="cursor"
            src={cursor}
            height="190"
            width="190"
            className=""
            draggable="false"
          />
        </motion.div>
        <motion.div
          className=" absolute top-[10px] right-[20px] w-20 md:w-40  md:right-[40px] md:top-[10px] lg:right-[220px] lg:top-[20px]"
          drag
        >
          <Image
            alt="cursor"
            src={lightning}
            height="120"
            width="120"
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-lg md:text-xl max-w-[840px] mx-auto mt-6 text-white/80 px-6 leading-8">
          {t.hero.description}
        </p>
        <div>
          <Image
            alt="profile picture"
            src={profilePic}
            className="h-auto w-auto mx-auto relative "
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
