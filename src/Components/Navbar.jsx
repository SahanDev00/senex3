import React, { useContext, useEffect, useRef, useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FaUserLarge } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../Components/CartContext'; // Adjust the path as needed
import { IoClose, IoMenu } from 'react-icons/io5';
import Sidebar2 from './Sidebar2';
import logo from "../Assets/Images/logo.png"

const Navbar = () => {
    const location = useLocation();
    const { getTotalItems } = useContext(CartContext); // Get the total number of items from the context

    const isActive = (path) => {
        return location.pathname === path;
    };

    const [nav, setNav] = useState(false);
    const navRef = useRef(null);

    const [nav2, setNav2] = useState(false);
    const navRef2 = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNav(false);
                document.body.classList.remove('no-scroll');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove('no-scroll'); // Cleanup on unmount
        };
    }, [navRef]);

    // outside click for categories
    useEffect(() => {
        const handleClickOutside2 = (event) => {
            if (navRef2.current && !navRef2.current.contains(event.target)) {
                setNav2(false);
                document.body.classList.remove('no-scroll');
            }
        };

        document.addEventListener('mousedown', handleClickOutside2);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside2);
            document.body.classList.remove('no-scroll'); // Cleanup on unmount
        };
    }, [navRef2]);

    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const handleNav2 = () => {
        setNav2(!nav2);
        if (!nav2) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };
    
    return (
        <div className='w-[90%] md:w-[95%] lg:w-[85%] mx-auto relative'>
            <div className='flex justify-between items-center w-full h-[100px] md:h-[120px]'>
                <div>
                    <Link to='/' className='text-3xl md:text-4xl lg:text-6xl font-bold text-red-600 cursor-pointer mr-2 md:mr-0 flex justify-center items-center'>
                        <img src={logo} alt="" className='w-[180px] lg:w-[200px] bg-black/50' />
                    </Link>
                </div>
                <div className='flex items-center float-to-right'>
                    <ul className='hidden md:flex gap-2 md:gap-3 lg:gap-5 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-lg mr-3 sm:mr-6 md:mr-6 lg:mr-8'>
                        <Link to='/' exact className={`cursor-pointer hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>HOME</Link>
                        <Link to='/product' exact className={`cursor-pointer hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/product') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>STORE</Link>
                        <Link to='/service-center' exact className={`cursor-pointer hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/service-center') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>SERVICE CENTER</Link>
                        <Link to='/about-us' className={`cursor-pointer hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/about-us') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>ABOUT US</Link>
                        <Link to='/contact-us' className={`cursor-pointer hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/contact-us') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>CONTACT US</Link>
                    </ul>
                    <div className='md:flex items-center hidden gap-2 lg:gap-5'>
                        <Link to='/cart'>
                            <div className='relative'>
                                <TiShoppingCart className={`hover:text-red-600 cursor-pointer ${isActive('/cart') || isActive('/checkout') ? 'text-red-500' : 'text-white'}`} size={35}/>
                                {getTotalItems() > 0 && (
                                    <p className={`absolute -top-3 -right-2 font-semibold rounded-full p-1 px-2 text-xs ${isActive('/cart') || isActive('/checkout') ? 'bg-white text-red-600' : 'bg-red-600 text-white'}`}>
                                        {getTotalItems()}
                                    </p>
                                )}
                            </div>
                        </Link>
                        <Link to='/profile'>
                            <FaUserLarge className={`hover:text-red-600 cursor-pointer ${isActive('/profile') ? 'text-red-500' : 'text-white'}`} size={25}/>
                        </Link>
                    </div>

                    <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer text-white'>
                        {nav ? <IoClose size={30} className=''/> : <IoMenu size={30} className=''/>}
                    </div>

                </div>

                <div ref={navRef} className={nav ? "md:hidden fixed left-0 top-0 w-[80%] border h-full bg-black/90 ease-in-out duration-500 z-20" : 'fixed left-[-100%]'}>
                    <div className='mt-8'>
                        <div>
                            <Link to='/' className='text-3xl font-bold text-red-600 cursor-pointer ml-5 mb-4'>SENƎX</Link>
                        </div>
                        <div className='items-center mt-5 ml-5'>
                            <ul className='flex-col space-y-3'>
                                <Link to='/' exact className={`cursor-pointer block hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>HOME</Link>
                                <Link to='/product' exact className={`cursor-pointer block hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/product') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>PRODUCTS</Link>
                                <Link to='/service-center' exact className={`cursor-pointer block hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/service-center') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>SERVICE CENTER</Link>
                                <p onClick={handleNav2} className='cursor-pointer text-white block hover:text-red-600 pl-1 md:pl-2 font-poppins'>CATEGORIES</p>
                                <Link to='/about-us' className={`cursor-pointer block hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/about-us') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>ABOUT US</Link>
                                <Link to='/contact-us' className={`cursor-pointer block hover:text-red-600 pl-1 md:pl-2 font-poppins ${isActive('/contact-us') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>CONTACT US</Link>
                            </ul>
                        </div>
                    </div>
                    <div ref={navRef2} className={nav2 ? "md:hidden fixed left-0 top-0 w-[80%] border h-full bg-black/90 ease-in-out duration-500 z-20" : 'fixed left-[-100%]'}>
                    <div className='w-full h-full'>
                        <Sidebar2/>
                    </div>
                    </div>
                    <div className='mt-7 flex ml-5 gap-10 items-center'> 
                        <Link to='/cart'>
                            <div className='relative'>
                                <TiShoppingCart className={`hover:text-red-600 cursor-pointer ${isActive('/cart') || isActive('/checkout') ? 'text-red-500' : 'text-white'}`} size={35}/>
                                {getTotalItems() > 0 && (
                                    <p className={`absolute -top-3 -right-2 font-semibold rounded-full p-1 px-2 text-xs ${isActive('/cart') || isActive('/checkout') ? 'bg-white text-red-600' : 'bg-red-600 text-white'}`}>
                                        {getTotalItems()}
                                    </p>
                                )}
                            </div>
                        </Link>

                        <Link to='/profile'>
                            <FaUserLarge className={`hover:text-red-600 cursor-pointer ${isActive('/profile') ? 'text-red-500' : 'text-white'}`} size={25}/>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='border'/>
        </div>
    );
}

export default Navbar;
