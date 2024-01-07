import React from 'react'

const About = () => {
  return (
    <div name = "about" className ="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat id tenetur culpa velit! At totam sit enim tempora 
                ipsam provident corrupti similique illum iste vitae eligendi
                 rem quidem distinctio fuga, doloribus dignissimos, 
                dolorum inventore. Asperiores saepe fugit nobis nihil in.
                </p>

                <br/>
                <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Eos consequuntur temporibus aut explicabo, sed excepturi 
                     sapiente, iusto reprehenderit porro vitae expedita itaque
                      et. Dolorum, similique. Maxime natus ducimus error sed, 
                      nihil expedita ab fugit non delectus perferendis fugiat 
                      fuga sunt, minus ipsa. Quidem maiores consequatur amet,
                       nostrum voluptates nemo aliquid?
                       </p>
        </div>
    </div>
  )
}

export default About