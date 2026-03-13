"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/data/translations";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);
  const navLinks = [
    {
      title: t.nav.about,
      path: "#about",
    },
    {
      title: t.nav.portfolio,
      path: "#portfolio",
    },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 30,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 30,
        damping: 15,
      },
    },
  };

  return (
    <div className="  md:min-h-5 min-h-24 text-white/70 py-2">
      <div className="hidden md:flex items-center justify-center gap-8 px-4 py-1 mx-auto max-w-[760px]">
        <ul className="flex text-lg flex-row p-4 space-x-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p>{link.title}</p>
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="group">
              <h6 className="text-lg font-bold text-white/70 cursor-pointer">
                {t.nav.contact}
              </h6>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="absolute mt-1 w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
        <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setLanguage("tr")}
            className={`rounded-full px-3 py-1 text-sm transition ${language === "tr" ? "bg-orange-500 text-white" : "text-white/65"}`}
          >
            TR
          </button>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-full px-3 py-1 text-sm transition ${language === "en" ? "bg-orange-500 text-white" : "text-white/65"}`}
          >
            EN
          </button>
        </div>
      </div>
      <div
        onClick={toggleNav}
        className=" md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div className="md:hidden absolute top-6 left-5 z-50 flex items-center rounded-full border border-white/15 bg-black/30 p-1">
        <button
          type="button"
          onClick={() => setLanguage("tr")}
          className={`rounded-full px-3 py-1 text-xs transition ${language === "tr" ? "bg-orange-500 text-white" : "text-white/65"}`}
        >
          TR
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-full px-3 py-1 text-xs transition ${language === "en" ? "bg-orange-500 text-white" : "text-white/65"}`}
        >
          EN
        </button>
      </div>
      <motion.div
        initial={false}
        animate= {nav ? 'open' : 'closed'}
        variants={menuVariants}
        className="md:hidden fixed left-0 h-full top-0 w-full z-40 bg-black/60"
      >
        <ul className="text-3xl font-semibold my-24 text-center space-y-4">
        {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                <p >{link.title}</p>
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" onClick={closeNav}>
              <p>{t.nav.contact}</p>
            </Link>
          </li>
        </ul>  
      </motion.div>
    </div>
  );
};

export default Navbar;
