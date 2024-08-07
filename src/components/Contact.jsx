import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800
    p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Contact</p>
        <p className='py-6'>Get in Touch with me by submitting the form</p>
        </div> 
        <div className='flex justify-center '>
          <form action='https://getform.io/f/aab1d022-2e65-4ef7-be4b-2ad85f569284'
          method="POST"
          className='flex flex-col w-full '>
            <input type="text" name = "name " placeholder ="Enter your Name"
            className='p-2 bg-transparent border-2 rounded-md text-white 
            focus:outline-none'/>
            
            <input type="text" name = "email" placeholder ="Enter your email Address.."
            className='p-2 bg-transparent border-2 rounded-md text-white 
            focus:outline-none my-4'/>
            <textarea name="message" rows="10"
             placeholder='Enter Your Message here..'

            className='p-2 bg-transparent border-2 rounded-md text-white 
            focus:outline-none' ></textarea>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
             mx-auto flex items-center rounded-md hover:scale-105 duration-200'>
              Submit!
             </button>
          </form>
          </div>
          </div> 
    </div>
  )
}

export default Contact