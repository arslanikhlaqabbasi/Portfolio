import React from 'react'

export default function 
() {
  return (
    <div className='grid box-content font-mont py-8 sm:px-0 px-6 grid-cols-1 text-[#515151] justify-center justify-items-center'>
        <h1 className='sm:text-[40px] text-[25px] font-extralight'>
Contact Us
        </h1>
        <h1 className='mt-1 sm:text-[18px] text-[13px] text-center  font-extralight'>
        If you have any questions concerning our services, please fill out the contact form below.


        </h1><form className='py-8 text-center mx-auto'>
  <input
    className='sm:w-[350px] sm:h-14 w-[250px] h-10 mt-2 rounded-full border-2 focus:border-blue-500 border-red-500 p-3 placeholder-gray-500'
    placeholder='Name'
    type='text'
  /><br />
  <input
    className='sm:w-[350px] sm:h-14 w-[250px] h-10 mt-3 rounded-full border-2 focus:border-blue-500 border-red-500 p-3 placeholder-gray-500'
    placeholder='Email'
    type='text'
  /><br />

  <textarea
    id="comment"
    name="comment"
    rows="4"
    className="mt-3 sm:w-[350px] w-[250px] border-2 border-red-500 p-3 rounded-md focus:outline-none focus:border-blue-500 placeholder-gray-500"
    placeholder='Message'
  ></textarea><br />

  <button
    className="bg-red-500 mx-auto hover:border-blue-500 hover:border-2 border-2 hover:bg-white text-white hover:text-black mt-3 font-semibold py-3 px-12 rounded-full"
  >
    Submit
  </button>
</form>


    </div>
  )
}
