import React from 'react'
import {HomeIcon} from "@heroicons/react/outline";
import { FaPhone, FaHospital, FaGraduationCap } from 'react-icons/fa';



export default function Industries() {
  return (
    <div className=" bg-cover font-mont sm:my-16 my-6  px-12">
    <div>
    </div>
    <div>
        <h1 className='text-center  text-[#515151] font-light py-5 sm:py-10'>BeePPP has worked in 35+ industries and scheduled appointments in 20+ countries.</h1>
    </div>
    <div className='grid sm:grid-cols-4 grid-cols-1  gap-10 justify-items-center'>
        <div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <HomeIcon className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>Medical</h1></div></div></div>
          <div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <FaHospital className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>Education</h1></div></div></div><div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <FaGraduationCap className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>Stores</h1></div></div></div><div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <FaHospital className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>Medical</h1></div></div></div><div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <FaPhone className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>Universities</h1></div></div></div><div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <FaPhone className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>Hospital</h1></div></div></div><div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <FaGraduationCap className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>Medical</h1></div></div></div><div><img src=''/><div className='grid grid-cols-1 justify-items-center'>
          <HomeIcon className='w-24  h-24 text-red-500'/><div><h1 className='mt-4 font-mont font-base text-[18px]'>School</h1></div></div></div>
       

    </div>
    </div>
  )
}
