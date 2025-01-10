"use client"
import Image from 'next/image'
import React from 'react'
import cursor from '../assets/icon1.png'
import message from '../assets/icon2.png'
import profilePic from '../assets/profile.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B2066_25%,#8F5C59_60%,#DBAF69_80%)]' >
        <div>
            <div className='text-6xl text-white font-semibold italic text-center font-sans'>
                <h1>Hello, I am</h1>
                <h1>Elanur Bulbul</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero