import React from 'react'
import { NavLink } from 'react-router-dom';
import { LocationMarkerIcon, MailIcon,ClockIcon, PhoneIcon } from '@heroicons/react/solid';

import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';



export default function () {
    return (
        <div className='grid  grid-cols-1    sm:justify-items-center  sm:grid-cols-7  bg-gray-800 text-yellow-50 py-5 px-5 :smpy-10 sm:px-10'>
            <div className=' col-span-1 lg:col-span-2 '>

                <div className='flex justify-start m-2         '>
                    <div className=''>
                        <a><img src='https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-logo-icon.png'></img></a>
                    </div>
                    <div>
                        <h1 className='text-[18px] font-extrabold ml-2 font-mont' >HasnatBPO</h1>
                        <h4 className='text-xl ml-2'>lets thrive!</h4>
                    </div>
                </div>
                <div className='sm:text-[16px] text-[13px] mt-3  font-thin'>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the
                    href value.  </div>
                <div className='flex justify-start mt-3'>
                    <div><FaFacebook className="icon h-6 w-6 " style={{ color: 'white' }} />
                    </div>

                    <div>      <FaTwitter className="icon h-6 w-6 ml-3" style={{ color: 'white' }} />
                    </div>
                    <div><FaLinkedin className="icon h-6 w-6 ml-3 " style={{ color: 'white' }} /></div>

                </div>
            </div>


            <div className=' sm:py-4 sm:px-4  mt-6 sm:mt-0 sm:text-[16px] text-[13px]  font-light'>
                <div className='mb-2 '>
                    <NavLink activeClassName="active" className='mb-10' to="/">Home</NavLink></div>
                <div className='mb-2' ><NavLink activeClassName="active" className='mb-10' to="/">About Us</NavLink></div>
                <div className='mb-2'><NavLink activeClassName="active" className='mb-10' to="/">Contact Us</NavLink></div>
                <div className='mb-2'><NavLink activeClassName="active" to="/">Project</NavLink></div>
                <div className='mb-2'><NavLink activeClassName="active" to="/">Profile</NavLink></div></div>


            <div className='col-span-1 mt-6 sm:mt-0 lg:col-span-2 p-2'>
                <div className='sm:text-[20px] text-[16px]  font-normal mb-4'>Contact Us</div>
                <div className='my-1 sm:text-[16px] text-[13px]  font-light flex '>  <LocationMarkerIcon className="h-8 w-6 mr-2 flex  " style={{ color: 'red' }}/><h1 className='text-[16px] font-light'>1010 Avenue of the Moon, New York, NY 10018 US.</h1></div>
                <div className='my-1 sm:text-[16px] text-[13px]  font-light flex items-center'> <ClockIcon className="h-6  w-5 mr-2 " style={{ color: 'red' }}/>Mon - Sat 8.00 - 18.00. Sunday CLOSED</div>
                <div className='my-2 sm:text-[16px] text-[13px]  font-light flex items-center'><PhoneIcon className="h-6 w-5 mr-2 " style={{ color: 'red' }}/>800-2345-6789</div>

            </div>


            <div className='col-span-1 lg:col-span-2  mt-6 sm:mt-0 pt-4 '>
                <div className='sm:text-[20px] text-[16px]  font-normal'>Signup for updates</div>
                <div className='my-4'><form >
                    <input type='text' className='rounded-full h-12 w-30 border-2 border-red-500 bg-gray-800 focus:outline-none focus:border-blue-800 p-4' placeholder='Email' /></form></div>
                <div className='mt-2'>    <button className="bg-red-500 hover:bg-white text-white hover:text-black justify-self-center  font-semibold sm:font-bold py-3 px-8 rounded-full ">Subscribe</button>
                </div>
            </div>

        </div>
    )
}
