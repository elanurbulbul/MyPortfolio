"use client"
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700
                    pt-4 flex justify-between items-center' >
        <h1 className='pl-2 text-2xl font-bold'>Elanur Bulbul</h1>                
    <div className='flex pr-2 space-x-6 mt-4'>
        <a href="https://www.linkedin.com/in/elanur-bulbul/" className='hover:text-gray-300'>
            <FaLinkedin/>
        </a>
        <a href="https://github.com/elanurbulbul" className='hover:text-gray-300'>
            <FaGithub/>
        </a>
        <a href="https://www.instagram.com/elanr_bulbull/" className='hover:text-gray-300'>
            <FaInstagram/>
        </a>
    </div>
    </div>
  )
}

export default Footer