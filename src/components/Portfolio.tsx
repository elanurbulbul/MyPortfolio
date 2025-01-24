"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import proje1 from "../assets/proje1.png"
import proje2 from "../assets/proje2.png"
import proje3 from "../assets/proje3.png"

const projects = [
    {
        title:"Healhy Nutrition Map",
        desc:"A React app for diet planning and healthy recipe discovery, enabling users to explore recipes and plan meals with integrated API data sources.",
        devStack:"React.js, Bootstrap, CSS, Fetch API, Axios",
        link:"https://healthy-nutrition-map.vercel.app/",
        gitHub:"https://github.com/elanurbulbul/HealthyNutritionMap",
        src:proje1
    },
    {
        title:"Film Folio",
        desc:"A platform for discovering movies and TV shows, featuring personalized watchlists and detailed actor filmographies for an engaging user experience.",
        devStack:"React.js, Bootstrap, Context API, Axios, Chakra UI, Vite",
        link:"https://film-folio-eight.vercel.app/",
        gitHub:"https://github.com/elanurbulbul/FilmFolio",
        src:proje2
    },
    {
        title:"Portfolio Website",
        desc:"Portfolio site where I showcase my expertise in developing modern and user-friendly web applications. Learn more about my projects and technical skills.",
        devStack:"Next.js, Tailwind, Framer Motion",
        link:"https://elanur-bulbul.vercel.app/",
        gitHub:"https://github.com/elanurbulbul/MyPortfolio",
        src:proje3
    },

]

const Portfolio = () => {
  return (
    <div className=' text-white bg-gradient-to-b from-black to-[#381a5f] py-16 lg:py-24 pb-20 lg:pb-28 ' id='portfolio'>
         <h2 className="text-white   font-sans text-center mx-auto font-semibold mb-8">Selected 
            <span className="text-orange-500"> Projects</span></h2>

        <div className='max-w-[1400px] px-10 lg:px-16 xxl:px-0 mx-auto space-y-24 '>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{opacity:0 , y:75}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5, delay:0.25}}
                    className={`gap-8  flex justify-between ${index % 2 === 1 ? "flex-col-reverse lg:flex-row-reverse " : "flex-col lg:flex-row"}`}
                >
                    <div className='space-y-2 max-w-full lg:max-w-[460px] xl:max-w-[600px] mb-2'>
                        <h4 className='  text-white/70'>{`0${index + 1}`}</h4>
                        <h4 className='font-bold '>{project.title}</h4>
                        <p className='text-xl text-white/70 break-words '>{project.desc}</p>
                        <p className='text-xl text-orange-500 font-semibold'>{project.devStack}</p>
                        <div className='w-64 h-[1px] bg-gray-400 my-8 '>
                            <a href={project.link} className='mr-6  cursor-pointer'>Link</a>
                            <a href={project.gitHub} className='cursor-pointer'>GitHub</a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image alt={project.title} src={project.src} className='h-auto aspect-[2/1] rounded-xl  w-full '/>
                    </div>

                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio