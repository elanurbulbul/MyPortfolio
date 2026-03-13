"use client"
import React from 'react'
import { FaNodeJs, FaReact, FaJava } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa6'
import { RiNextjsFill, RiTailwindCssFill, RiVuejsFill } from 'react-icons/ri'
import { SiMui, SiMongodb, SiMysql, SiRedux, SiSocketdotio } from 'react-icons/si'
import { useLanguage } from "./LanguageProvider"
import { getTranslations } from "@/data/translations"

const skillIcons = [
    {icon: <FaJs size={100}/>, label: "JavaScript"},
    {icon: <FaReact size={100}/>, label: "React.js"},
    {icon: <RiNextjsFill size={100}/>, label: "Next.js"},
    {icon: <RiVuejsFill size={100}/>, label: "Vue.js"},
    {icon: <FaNodeJs size={100}/>, label: "Node.js"},
    {icon: <FaJava size={100}/>, label: "Java"},
    {icon: <SiMysql size={100}/>, label: "MySQL"},
    {icon: <SiMongodb size={100}/>, label: "MongoDB"},
    {icon: <RiTailwindCssFill size={100}/>, label: "Tailwind CSS"},
    {icon: <SiMui size={100}/>, label: "Material UI"},
    {icon: <SiRedux size={100}/>, label: "RTK Query"},
    {icon: <SiSocketdotio size={100}/>, label: "Socket.IO"},

]

const Skills = () => {
  const { language } = useLanguage()
  const t = getTranslations(language)

  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] '>
        <div className='text-white max-w-[1400px]  mx-auto px-10 lg:px-16 xxl:px-0 py-16 lg:py-24 lg:mb-8 text-center'>
            <h2 className='font-sans font-semibold mb-8'>{t.skills.title}</h2>
            <p className='max-w-[760px] mx-auto text-white/70 text-lg mb-10'>
                {t.skills.description}
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'>
                {skillIcons.map((skill,index) => (
                    <div
                        key={index}
                        className='h-[180px] w-full flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'
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
