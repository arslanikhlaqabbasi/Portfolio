<div className='flex justify-between items-center flex-wrap'>
    <div className='flex justify-between m-6 items-center'>
        <div>
            <a><img src='https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-logo-icon.png' alt="Logo"></img></a>
        </div>
        <div>
            <h1 className='text-xl font-extrabold ml-2'>Call Center</h1>
            <h4 className='text-xl ml-2'>lets thrive!</h4>
        </div>
    </div>
    <div className='flex justify-between m-8 items-center'>
        <div className='ml-4 px-3 py-1 font rounded-full border-2 border-[#FFFFFF]  hover:border-[#FF0000]'>
            <NavLink activeClassName="active" to="/">Home</NavLink>
        </div>

        <div className='ml-4 px-3 py-1 rounded-full border-2 border-[#FFFFFF]  hover:border-[#FF0000]'>
            <NavLink activeClassName="active" to="contactus">Contact Us</NavLink>
        </div>

        <div className='ml-4 px-3 py-1 rounded-full border-2 border-[#FFFFFF]  hover:border-[#FF0000]'>
            <NavLink activeClassName="active">About Us</NavLink>
        </div>

        <div className="block lg:hidden ml-4">
            {/* Add your mobile menu icon here, for example, a hamburger icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
            >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </div>
    </div>
</div>