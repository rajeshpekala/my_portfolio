import React from 'react';
import Foodapp from '../assets/portfolio/Foodapp.png';
import chat from '../assets/portfolio/chat.png'
// import installNode from '../assets/portfolio/installNode.jpg';
// import navbar from '../assets/portfolio/navbar.jpg';
// import reactParallax from '../assets/portfolio/reactParallax.jpg';
// import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
// import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: Foodapp,
        href: "https://prem-app.vercel.app/",
        code: "https://github.com/rajeshpekala/Foodish_app",
      },
      {
        id: 2,
        src: chat,
        href: "https://github.com/rajeshpekala/chat-application",
        code: "https://chat-application-toop.onrender.com",
      },
      // {
      //     id:2,
      //     src:reactParallax
      // },
      // {
      //     id:3,
      //     src:reactSmooth
      // },
      // {
      //     id:4,
      //     src:installNode
      // },
      // {
      //     id:5,
      //     src:navbar
      // },
      // {
      //     id:6,
      //     src:reactWeather
      // },
    ];
  return (
    <div name ="portfolio" 
    className='bg-gradient-to-b from-black to-gray-800 w-full
      text-white md:h-screen' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
         w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out Some of my work right here</p>
             </div>

             <div  className ="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portfolios.map(({id,src,href,code})=>(

                    
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                     <img src={src} alt= "" className='rounded-md hover:scale-105 duration-200 '/>
                   <div className='flex items-center justify-center '>
                 <a href={href} target='blank'><button className='w-1/2 px6 py-3 m-4 hover:scale-105 duration-300 '>Demo</button></a>
                 <a href={code} target='blank'><button className='w-1/2 px6 py-3 m-4 hover:scale-105 duration-300 '>Code</button></a>
              </div>

            </div>

       

                ))
            }
            

            </div>
              
        </div>
    </div>
  )
}

export default Portfolio