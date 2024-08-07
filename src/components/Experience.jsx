import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import expressJs from "../assets/expressJs.png";
import nodeJs from "../assets/nodeJs.png";
import redux from "../assets/redux.png";
import mongoDB from "../assets/mongoDB.png";
import java from "../assets/java.png";
import socket from "../assets/portfolio/socket.png"

const Experience = () => {
    const technologies = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JAVASCRIPT",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "REACT",
        style: "shadow-cyan-500",
      },
      {
        id: 5,
        src: tailwind,
        title: "TAILWIND",
        style: "shadow-sky-500",
      },
      {
        id: 6,
        src: nodeJs,
        title: "NODEJS",
        style: "shadow-green-500",
      },
      {
        id: 7,
        src: expressJs,
        title: "EXPRESSJS",
        style: "shadow-yellow-500",
      },
      {
        id: 8,
        src: mongoDB,
        title: "MONGODB",
        style: "shadow-green-500",
      },
      {
        id: 9,
        src: redux,
        title: "REDUX",
        style: "shadow-violet-500",
      },
      {
        id: 10,
        src: github,
        title: "GITHUB",
        style: "shadow-gray-400",
      },
      {
        id: 11,
        src: java,
        title: "JAVA",
        style: "shadow-blue-400",
      },
      {
        id: 12,
        src: socket,
        title: "SOCKET.IO",
        style: "shadow-cyan-400",
      },
    ];
  return (
    <div name ="experience"
    className='bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className ="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>Technologies I have worked </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
            text-center py-8 px-12 sm:px-0'>



            {
                technologies.map((tech) =>(
                    <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>


                    <img src={tech.src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{tech.title}</p>
                </div>

                ))
            }


                
            </div>
        </div>
    </div>
  )
}

export default Experience