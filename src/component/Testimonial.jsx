import React from 'react'

export default function Testimonial() {
  return (
    <div className='sm:flex sm:justify-between grid grid-cols-1 py-10 px-6 bg-red-600 '>
        <div className='sm:w-[75%] sm:ml-8 py-4'>
        <h1 className='font-mont  sm:text-[45px] text-[20px] text-center sm:text-left font-extrabold text-white'>Contact us if you have any questions

</h1>    
        <h1 className='mt-2 text-white font-medium text-xs text-center sm:text-left sm:text-2xl font-mont italic'>or are interested in establishing a partnership.</h1>
        </div>
        <div className=' '>
    <button className="ml-20 border-white border-2 hover:bg-white text-white hover:text-black justify-self-center sm:mt-10 mt-2 font-semibold sm:font-bold sm:py-2 py-3 px-8 sm:px-10  rounded-full sm:mx-8">
                Contact Us
              </button></div>
    </div>
  )
}
