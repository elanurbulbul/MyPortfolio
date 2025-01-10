"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className=" bg-black text-white/70 pt-6">
      <div className="hidden md:flex items-center px-4 py-1 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-4 space-x-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p>{link.title}</p>
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="group">
              <h1 className="txt-lg font-bold text-white/70 cursor-pointer">
                Contact Me
              </h1>
              <div className="relative">
                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                <div className="absolute mt-1 w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div onClick={toggleNav}>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>} 
      </div>
    </div>
  );
};

export default Navbar;
