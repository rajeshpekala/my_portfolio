import React from 'react'

const About = () => {
  return (
    <div name = "about" className ="w-full h-3/4 bg-gradient-to-b
    from-gray-800 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>A Full Stack Web Developer with a passion for crafting seamless 
            digital experiences. My journey in the world of coding began with a curiosity that evolved into  love for 
            creating dynamic and user-friendly websites. 
            Proficient in both front-end and back-end technologies,I have a wide range of skills to offer.
                </p>

                <br/>
                <p className='text-xl'>From translating design concepts into responsive interfaces to optimizing server-side functionalities, 
                I thrive on turning ideas into functional, visually appealing websites. I'm constantly exploring 
                new technologies and frameworks to stay ahead in the ever-evolving tech landscape.</p>

                <br/>
                 <p className='text-xl'>
                Beyond coding, I'm a problem solver at heart, always eager to tackle challenges and find elegant solutions. 
                Collaboration is key in my approach, and I enjoy working with cross-functional teams to bring projects to life.
                       </p>
        </div>
    </div>
  )
}

export default About