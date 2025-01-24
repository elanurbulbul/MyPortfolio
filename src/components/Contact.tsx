"use client";
import React from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div
      className="max-w-[1400px] mx-auto grid grid-cols-12 gap-4 lg:gap-12 items-center text-white/70 px-10 lg:px-16 xxl:px-0 py-16 lg:py-24"
      id="contact"
    >
      <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start justify-around lg:space-y-8">
        <div className="flex flex-row items-center mb-2 sm:mb-0 lg:mb-4">
          <Image src={phone} alt="phone" className="h-[70px] md:h-[110px] w-auto mr-2  xl:mr-4" />
          <a href="tel:+905348557050">
            <p className="text-xl">0534 855 7050</p>
          </a>
        </div>
        <div className="flex flex-row items-center">
          <Image src={mail} alt="mail" className="md:h-[110px] h-[70px] w-auto mr-2 xl:mr-4" />
          <a href="mailto:elanrbulbul@gmail.com">
            <p className="text-xl">elanrbulbul@gmail.com</p>
          </a>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8 bg-slate-900 p-6 rounded-xl">
        <h2 className="lg:text-start text-center font-semibold font-sans text-orange-400 mb-8">
          Let&apos;s connect
        </h2>
        <p className="text-white/70 mb-6 lg:text-start text-center">
          Send me a message and let&apos;s schedule a call!
        </p>
        <form
          className="space-y-4"
          action="https://getform.io/f/bejjprqa"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              type="text"
              name="first_name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="First Name"
            />
            <input
              required
              type="text"
              name="last_name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Last Name"
            />
            <input
              required
              type="email"
              name="email"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Email"
            />
            <input
              required
              type="phone"
              name="phone"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Phone"
            />
          </div>
          <div className="flex flex-col items-center">
            <textarea
              required
              name="message"
              className="bg-black/70 w-full rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Message"
            />
            <button className="bg-orange-700 hover:bg-orange-500 text-white py-2 px-12 mx-auto font-semibold text-xl rounded-xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;