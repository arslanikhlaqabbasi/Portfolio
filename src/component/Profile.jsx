import React from 'react'
import { LocationMarkerIcon, MailIcon,ClockIcon, PhoneIcon } from '@heroicons/react/solid';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Profile() {
  return (<>
    <div className="sm:flex sm:h-[250px]  font-mont grid grid-cols-1 justify-items-center sm:items-center sm:justify-center bg-[url('https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-content-bg-5.jpg')]">
    <div className="lg:w-[15%]"></div>
    <div className="lg:w-[35%] sm:p-0 py-14">
      <div className='flex  justify-start items-center'>
        <h1 className='text-[30px] font-normal'> Profile</h1>
        <div className='border-2 border-red-500 w-12 h-[5px] ml-4 bg-red-500'></div>
      </div>
      <div className='flex justify-start mt-1'>
        <h1>Personal portfilio</h1>
      </div>
      </div>
    <div className="bg-cover sm:w-[50%] w-full h-[150px] sm:h-full bg-[url('https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-content-bg-6.jpg')]">
    </div>
  </div>
    <div className='sm:flex font-mont  sm:mx-8 mx-0 sm:px-0 px-4  sm:mt-20 sm:justify-center'>
        <div className='sm:w-[50%]  sm:py-6'>
            <div className='ml-4 sm:my-16 my-10 '>
                <h1 className='text-red-500 text-[18px] font-mont font-semibold'>
                    Profile
                </h1>
                <h1 className='sm:text-[40px] text-[25px] mt-2 font-light text-[#515151] leading-10 mb-4'>
Hasnat Sadaqat Abbasi                </h1>
                <h1 className='mt-4 lg:pr-20 font-light text-[15px] text-[#515151]'>
                If you have any questions concerning our services or want to schedule an appointment with one of our consultants - please contact us using the details
                    </h1>
                    <div className='mt-6'>
                        <div className='flex justify-start mt-2'><div></div><div>  <LocationMarkerIcon className="h-6 w-5 mr-2 " style={{ color: 'red' }}/></div><h1 className='text-[#414141] font-light text-[14px]'>1010 Avenue of the Moon, New York, NY 10018 US.</h1></div>
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
        <div className="bg-cover py-10 sm:w-[50%] w-full h-[300px] sm:h-auto bg-[url('https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2018/01/mt-1794-contact-img.jpg')]">

            
      </div>
    </div>
    </>
  )
}
