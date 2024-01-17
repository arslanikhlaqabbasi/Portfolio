import React from 'react'
import { LocationMarkerIcon, MailIcon,ClockIcon, PhoneIcon } from '@heroicons/react/solid';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';



export default function Intouch() {
  return (
    <div className='sm:flex font-mont py-2 sm:py-10  sm:justify-center'>
        <div className='sm:w-[55%] sm:py-4 sm:px-8 py-2 px-4'>
            <div className='ml-4 sm:my-16 my-6 '>
                <h1 className='text-red-500 text-[18px] font-mont font-semibold' >
                    Get In Touch
                </h1>
                <h1 className='sm:text-[40px] text-[25px] mt-2 font-light text-[#515151] leading-10 mb-4'>
                We would be happy to <br></br>answer your questions.
                </h1>
                <h1 className='mt-4 lg:pr-20 font-light text-[15px] text-[#515151]'>
                If you have any questions concerning our services or want to schedule an appointment with one of our consultants - please contact us using the details
                    </h1>
                    <div className='mt-6 sm:pr-0 pr-4'>
                        <div className='flex justify-start mt-2'><div></div><div>  <LocationMarkerIcon className="h-6 w-5 mr-2 " style={{ color: 'red' }}/></div><h1 className='text-[#414141] font-light text-[14px]'>1010 Avenue of the Moon, New York, NY 10018 US.</h1></div>
                        <div className='flex justify-start mt-2'><div></div><div><ClockIcon className="h-4 w-4 mr-2 " style={{ color: 'red' }}/></div> <h1 className='text-[#414141] font-light text-[14px]'>Mon - Sat 8.00 - 18.00. Sunday CLOSED </h1></div>
                        <div className='flex justify-start mt-2'><div></div><div> 
      <PhoneIcon className="h-4 w-4 mr-2 " style={{ color: 'red' }}/></div><h1 className='text-[#414141] font-light text-[14px]'>(123) 456-7890</h1></div>
                        <div className='flex justify-start mt-2'><div></div><div> <MailIcon className="h-4 w-4 mr-2 " style={{ color: 'red' }}/></div><h1 className='text-[#414141] font-light text-[14px]'>arcticaircompany@mail.com</h1></div>

                    </div>
                    <div className='flex justify-start mt-6'>
                        <div><FaFacebook className="icon h-8 w-6 " style={{color:'red'}} />
      </div>
      
                        <div>      <FaTwitter className="icon h-8 w-6 ml-3" style={{color:'red'}}  />
</div>
<div><FaLinkedin className="icon h-8 w-6 ml-3 " style={{color:'red'}}  /></div>

                    </div>
                    
            </div>

        </div>
        <div className="bg-cover sm:w-[45%] w-full h-[300px] sm:h-auto bg-[url('https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2018/01/mt-1794-contact-img.jpg')]">

            
      </div>
    </div>
  )
}
