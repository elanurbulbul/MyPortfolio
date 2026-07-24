"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="  text-white/70 py-4  mx-auto border-t border-gray-700
                     "
    >
      <div className="px-6 lg:px-12 flex justify-between items-center">
        <p className=" text-2xl font-bold">Elanur Bülbül</p>
        <div className="flex space-x-6 ">
          <a
            href="https://www.linkedin.com/in/elanur-bulbul/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/elanurbulbul"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/elanr_bulbull/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
