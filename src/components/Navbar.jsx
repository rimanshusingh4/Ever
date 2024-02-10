import React, { useState } from 'react';
import { account } from '../config/Auth';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import svg from '../assets/profilesvg.svg'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/user/userSlice';

function Navbar() {

    const { currentUser } = useSelector((state) => state.user);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const logoutFunc= async ()=>{
        try {
            dispatch(logout());
            await account.deleteSessions();
            navigate("/login");
            console.log(currentUser);
            
        } catch (error) {
            console.log(error);
        }
      }

    return (
        <div className='h-20 w-4/5 shadow-md'>
            <nav className='h-20 flex flex-wrap justify-between items-center w-full'>
                <div className='w-1/8 ml-8'>
                    <Link to="/">
                        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" className='h-16' />
                    </Link>
                </div>
                <div className='flex justify-around w-1/4 size text-lg ml-40 font-medium'>
                    <NavLink
                        to=""
                        className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                    >Home</NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                    >Contact-us</NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                    >About-us</NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                    >Services</NavLink>
                </div>

                {currentUser ? (
                    <div className='relative flex flex-wrap justify-end mr-8 w-1/4'>
                        <button onClick={toggleDropdown} className="text-gray-700 mr-4"><img src={svg} className='h-12 w-12' alt='profile svg'/></button>
                        {isDropdownOpen && (
                            <div className="absolute top-full  w-36 bg-white shadow-md py-1 rounded-xl text-center">
                                <Link to="uprofile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><b>Profile</b></Link>
                                <p onClick={logoutFunc} className="block px-4 py-2 text-orange-700 hover:bg-gray-100 cursor-pointer"><b>Logout</b></p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='flex justify-center w-1/4'>
                        <Link to="login"><Button className='bg-gray-700 mr-1 active:bg-orange-700'>Login</Button></Link>
                        <Link to="signup"><Button className='bg-orange-700 active:bg-gray-700'>Sign-up</Button></Link>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
