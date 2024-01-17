import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'
import '../App.css'


export default function Menu() {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);



    const [navbarOpen, setNavbarOpen] = React.useState(false);
   

    const DropdownExample = () => {
      const [isDropdownOpen, setDropdownOpen] = React.useState(false);}
    
      const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
      };




  return (
<>
<div className='sm:grid sm:grid-cols-2 grid grid-cols-1   bg-black font-mont sm:text-[13px] text-[11px] px-2 sm:px-10 pt-5 pb-3  text-white'>
    <div className='  justify-items-end items-end '>
<h1>Welcome To Our Call Center Company</h1>
    </div>
    <div className='justify-self-end sm:pt-0 pt-4'>
    PAKISTAN CALL (123) 456 7890   |   US CALL: (123) 456 7899
    </div>
</div>



<nav className="relative flex flex-wrap items-center justify-between sm:px-12  sm:py-3 py-1 bg-white sm:my-3 mb-2">
        <div className="container px-4   lg:flex lg:flex-wrap lg:items-start lg:justify-between grid justify-center grid-cols-1">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className='flex justify-between sm:ml-6 ml-1 mt-1 items-center'>
        <div>
            <a><img src='https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-logo-icon.png' alt="Logo"></img></a>
        </div>
        <div className='p-1'>
            <h1 className='sm:text-[22px] text-base  font-sans font-extrabold ml-2'>HasnatBPO</h1>
            <h4 className='sm:text-xl text-base text-[#515151] font-ops ml-2'>lets thrive!</h4>
        </div>
    </div>
            <button
  className="text-red cursor-pointer text-xl leading-none  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
  type="button"
  onClick={() => setNavbarOpen(!navbarOpen)}
>
<MenuIcon className="h-8 w-8 text-red-500 "/>
</button>
          </div>
          <div
            className={
              "lg:flex lg:flex-grow lg:justify-end  lg:mt-5  grid-cols-1 " +
              (navbarOpen ? " grid gap-2 sm:gap-0  justify-items-center  " : " hidden")
            }
            id="example-navbar-danger"
          >
        <div className=' px-1  mr-1   font-xl text-center w-full sm:w-auto rounded-full bg-red-500  sm:bg-white sm:text-black text-white'>
            <NavLink activeClassName="active " className='text-[18px] px-[10px]   font-light inline-block sm:border-[2px] sm:border-white rounded-full hover:border-[#FF0000]' to="/">Home</NavLink>
        </div>

        <div className='px-1  mr-1   font-xl text-center w-full sm:w-auto rounded-full bg-red-500  sm:bg-white sm:text-black text-white'>
            <NavLink activeClassName="active" className='text-[18px] px-[10px] py-0  font-light inline-block sm:border-[2px] sm:border-white rounded-full hover:border-[#FF0000]' to="contactus">Contact Us</NavLink>
        </div>

        <div className='relative w-full sm:w-auto services inline-block'>
      <div
        className='px-1  mr-1   font-xl text-center w-full sm:w-auto rounded-full bg-red-500  sm:bg-white sm:text-black text-white'
      
      >
        <NavLink activeClassName='active' className='text-[18px] px-[10px] py-0  font-light inline-block sm:border-[2px] border-white rounded-full hover:border-[#FF0000]' to='/Services'>
          Services
        </NavLink>
      </div>
     
      
        <div className='absolute z-10 sm:w-auto w-full px-2  bg-white border rounded-lg shadow-lg sub '
       >
          {/* Dropdown content goes here */}
          <NavLink
            activeClassName='active'
            className=' block px-4 sm:py-2 text-[18px] sm:px-[10px] py-1  font-light sm:bg-white bg-red-500  text-white text-center  border-[2px] border-white rounded-full hover:border-[#FF0000] text-sm sm:text-gray-700 hover:bg-grey-100 '
            to='/Services'
          >
             Inbound
          </NavLink>
          <NavLink
            activeClassName='active'
            className=' block px-4 sm:py-2 text-[18px] sm:px-[10px] py-1  font-light sm:bg-white bg-red-500  text-white text-center  border-[2px] border-white rounded-full hover:border-[#FF0000] text-sm sm:text-gray-700 hover:bg-grey-100'
            to='/Services2'
          >
    Outbound      </NavLink>
          {/* Add more NavLink items as needed for your dropdown */}
        </div>
        </div>

        <div className=' px-1  mr-1   font-xl text-center w-full sm:w-auto rounded-full bg-red-500  sm:bg-white sm:text-black text-white'>
            <NavLink activeClassName="active" className='text-[18px] px-[10px] py-0  font-light inline-block sm:border-[2px] border-white rounded-full hover:border-[#FF0000]' to='profile'>Profile</NavLink>
        </div>
        </div>
          </div>
      </nav>



</>  )
}
