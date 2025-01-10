"use client"
import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa'       
import { FaJs } from 'react-icons/fa6'

const skillIcons = [
    {icon: <FaHtml5 size={140}/>, label: "HTML"},
    {icon: <FaCss3Alt size={140}/>, label: "CSS"},
    {icon: <FaJs size={140}/>, label: "JavaScript"},
    {icon: <FaReact size={110}/>, label: "React"},
    {icon: <FaBootstrap size={140}/>, label: "Bootstrap"},

]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white sm:max-w-[800px] lg:max-w-[1000px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I do</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {skillIcons.map((skill,index) => (
                    <div
                        key={index}
                        className='h-[200px] w-full flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'
                    >
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills