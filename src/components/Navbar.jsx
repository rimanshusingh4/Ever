import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
        <div className='h-20 w-4/5  shadow-md'>
            <nav className='h-20 flex flex-wrap justify-between items-center w-full'>
                    <div className='w-1/8  ml-8'>
                        <Link to="/">
                            <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" className=' h-16'/>
                        </Link>
                    </div>
                    <div className='flex justify-around w-1/4 size text-lg ml-40 font-medium'>   
                        <NavLink 
                        to=""
                        className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`                    }
                        >Home</NavLink>
                        <NavLink 
                        to="/contact-us"
                        className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`                    }
                        >Contact-us</NavLink>
                        <NavLink 
                        to="/about-us"
                        className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`                    }
                        >About-us</NavLink>
                        <NavLink 
                        to="/services"
                        className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`                    }
                        >Services</NavLink>
                    </div>
                    <div className='flex justify-center w-1/4 '>
                        <button className='size text-lg font-medium	bg-gray-800 px-6 py-2 rounded-3xl	cursor-pointer text-white'>
                            Login
                        </button>
                        <button className='size text-lg font-medium	bg-orange-700 px-6 py-2 mx-2 rounded-3xl cursor-pointer	 text-white'>
                            Sign-up
                        </button>
                    </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar