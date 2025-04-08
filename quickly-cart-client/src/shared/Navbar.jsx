import React, { useContext, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { IoIosContact } from "react-icons/io";
import './Navbar.css';
import { AuthContext } from '../Providers/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useCartProducts from '../hooks/useCartProducts';

const Navbar = () => {
    const [swapNav, setSwapNav] = useState(false);
    const[openProfile, setOpenProfile] = useState(false);
    const {user, logoutUser} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [cartProducts] = useCartProducts();
    const isPaymentCartProduct = cartProducts.filter(product => product.status === "pending");
    const handleLogOut = () =>{
        logoutUser()
        .then(() =>{
            axiosPublic.post('/clearCookie')
            .then(res =>{
                // console.log(res.data);
            })
            toast.success('Logout Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        })
        .catch(error =>{
            toast.error(`${error}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        })
    }
    return (
        <div className='sticky top-0 z-10 bg-white border-b-2 border-slate-300'>
            <div className='relative'>
            <div className='px-4 md:px-12 py-2 flex justify-between items-center'>
            <div className='lg:hidden block'>
                <label  className="btn btn-circle swap w-7 h-7 swap-rotate">
                    <input onClick={() => setSwapNav(!swapNav)} type="checkbox" />
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"> <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"> <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
                <div className='w-[300px] z-10 absolute top-[48px] left-0'>
                    {
                        swapNav &&
                        <motion.div 
                            initial={{opacity: 0, x: -100, rotate: 180}}
                            animate={{opacity: 1, x: 0, rotate: 0}}
                            exit={{opacity: 0, x: 100}}>
                                <ul className='flex w-1/2 rounded-sm flex-col py-4 bg-slate-200 justify-center items-center'>
                                    {
                                        navLinks.map(link => <NavLink className="font-medium py-1 px-1 text-gray-700 hover:text-black duration-200" key={link.id} to={link.link}>{link.title}</NavLink>)
                                    }
                                </ul>
                        </motion.div>
                    }
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <Link className='text-2xl font-bold text-red-500' to="/" style={{ textShadow: "2px 2px 5px rgba(255, 0, 0, 0.8)"}}>Quickly cart</Link>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-5'>
                        {
                            navLinks.map((item, index) =>
                                <li key={index}>
                                    <NavLink onClick={() =>setSwapNav(false)} className="font-medium py-1 px-1 text-gray-700 hover:text-black duration-200" to={item.link}>{item.title}</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='relative'>
                    <button className='cursor-pointer flex items-center' onClick={() => setOpenProfile(!openProfile)}>
                        <IoIosContact className='text-xl hover:text-2xl hover:text-red-500'></IoIosContact>
                    </button>
                    <div>
                        {
                            openProfile && 
                            <div className='absolute w-[150px] top-6 bg-slate-200 p-2 -left-16 rounded-sm flex flex-col items-center gap-2'>
                                <ul>
                                    {
                                        profileLinks.map(link =>
                                            <li className='mt-3 text-center' key={link.id}>
                                                <NavLink onClick={() =>setOpenProfile(false)} to={link?.link} className="font-medium py-1 px-1 text-gray-700 hover:text-black duration-200 hover:bg-white rounded-sm">{link.title}</NavLink>
                                            </li>
                                        )
                                    }
                                </ul> 
                                {
                                    user ?
                                    <button className="font-medium cursor-pointer text-gray-600 hover:text-black duration-200" onClick={handleLogOut}>Logout</button> :
                                    <NavLink to={'/login'} className="font-medium text-gray-600 hover:text-black duration-200">Login</NavLink>
                                }
                            </div>
                        }
                    </div>
                </div>
                <Link to={'/cart'} className='relative cursor-pointer'>
                    <FaCartShopping className='hover:text-xl hover:text-red-500'></FaCartShopping>
                    <p className='absolute -top-1 -right-[5px] bg-red-600 h-3 flex items-center justify-center w-3 rounded-full text-white text-[10px] font-bold'>{isPaymentCartProduct.length}</p>
                </Link>
            </div>
        </div>
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};
const navLinks = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "About",
        link: "/about"
    },
    {
        id: 3,
        title: "Shop",
        link: "/shop"
    },
    {
        id: 4,
        title: "Blogs",
        link: "/blogs"
    }
]
const profileLinks = [
    {
        id: 1,
        title: "My Cart",
        link: "/cart"
    },
    {
        id: 2,
        title: "My Orders",
        link: "/orders"
    },
    {
        id: 3,
        title: "My History",
        link: "/history"
    },
]
export default Navbar;