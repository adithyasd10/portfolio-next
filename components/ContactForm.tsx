import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex bg-black/50 backdrop-blur-lg rounded-xl shadow-xl mx-auto max-w-[600px] w-full max-h-[600px] h-full m-6 shadows-md '>
      <div className='flex flex-col justify-center items-center my-4 py-20 w-full max-w-[800px] mx-auto'>
    <h1 className='font-bold text-3xl text-gray-300 P-2'>
      Contact Me 
    </h1>
    <hr className='text-white w-full mx-auto max-w-[500px] my-4 shadows-md '/>
    <form className=' flex flex-col my-2 justify-start items-start'>
      <label className='px-2 text-gray-300'>Name</label>
      <input type='text' placeholder='Your name' className='flex bg-gray-600 rounded-lg w-80 sm:w-100 md:w-120 py-2 my-2 px-2 hover:scale-98 transition-all duration-400'/>
    </form>
    <form className=' flex flex-col my-2 justify-start items-start'>
      <label className='px-2 text-gray-300'>Email</label>
      <input type='text' placeholder='Your email' className='flex bg-gray-600 backdrop-blur-lg rounded-lg w-80 sm:w-100 md:w-120 py-2 my-2 px-2 hover:scale-98 transition-all duration-400'/>
    </form>
    <form className=' flex flex-col my-2 justify-start items-start'>
      <label className='px-2 text-gray-300'>Message</label>
      <textarea placeholder='Yor message' rows={5} className='flex bg-gray-600 rounded-lg w-80 sm:w-100 md:w-120 my-2 p-5 sm:p-2 hover:scale-98 transition-all duration-400'/>
    </form>
    <button className='flex justify-center items-center bg-gray-700 rounded-md py-2 px-4 m-2 shadows-md hover:scale-105 hover:bg-gray-800 transition-all duration-400 '>Submit</button>
   </div>
    </div>
  )
}

export default ContactForm
