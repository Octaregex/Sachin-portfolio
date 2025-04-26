import React from 'react'
import hero from "../assets/sachin.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";



function Home() {
  return (
    <div 
    name= "home"
    className='h-screen w-full bg-gradient-to-b from-gray-500 to-gray-950 text-gray-900'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row'>
        <div className=' flex flex-col justify-center h-full'>
          <h2 className='text-gray-200 hover:text-gray-900 text-4xl sm:text-7xl font-bold'>I'm a Full Stack Java Developer </h2>
          <p className='text-gray-200 py-4 max-w-md'>Enthusiastic and detail-oriented Java Developer with a solid understanding of core Java,object-oriented programming (OOP), and data structures. Skilled in building simple applications
             using Java, JDBC, and basic frameworks like Spring Boot. Familiar with web technologies (HTML, CSS, JavaScript)
             and database systems like MySQL. Strong problem-solving skills and a passion for clean code, learning new technologies, and contributing to team success.</p>
        <div>
          <Link
          to="portfolio"
              smooth
              duration={500} 
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-300 to-amber-200 cursor-pointer"
          >
           portfolio
           <span className='group-hover:animate-pulse duration-300'>
            <BsArrowRightCircleFill size={20} className="ml-1"/>
           </span>
          </Link>
        </div>
        </div>
        <div>
          <img src={hero} 
           alt="my-profile" 
           className='rounded-2xl mx-auto max-w-xs md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home
