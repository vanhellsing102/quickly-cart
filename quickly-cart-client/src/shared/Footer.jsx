import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
    <footer className='bg-slate-200 md:p-10 p-3 mt-20'>
             <div className='grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-0'>
                <h1 className='text-4xl font-semibold text-rose-500' style={{ textShadow: "2px 2px 5px rgba(255, 0, 0, 0.8)" }}>Quickly Cart</h1>
                <div>
                    <h2 className='text-xl font-semibold'>Pages</h2>
                    <ul className='text-[15px]'>
                        {
                            navLinks.map(item =>
                            <li key={item.id}>
                                <Link to={item.link}>{item.title}</Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Learn</h2>
                    <ul className='text-[15px]'>
                        <li><Link>Blog</Link></li>
                        <li><Link>FAQs</Link></li>
                        <li><Link>Help Center</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Company</h2>
                    <ul className='text-[15px]'>
                        <li><Link>About Us</Link></li>
                        <li><Link>Career</Link></li>
                        <li><Link>News</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><Link>Trust Centre</Link></li>
                        <li><Link>Security Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Support</h2>
                    <ul className='text-[15px]'>
                        <li><Link>Technical Insigths</Link></li>
                        <li><Link>Events</Link></li>
                        <li><Link>My Ferroque</Link></li>
                        <li><Link>Client Support</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Products</h2>
                    <ul className='text-[15px]'>
                        <li><Link>Overview</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Solutions</Link></li>
                        <li><Link>Tutorials</Link></li>
                        <li><Link>Pricing</Link></li>
                        <li><Link>Releases</Link></li>
                    </ul>
                </div>
             </div>
             <div className='mt-6 flex justify-center'>
                <form>
                    <div>
                        <input className='outline-none rounded-tl-sm rounded-bl-sm border-gray-400 py-1 px-3' type="email" placeholder='example@gmail.com'/>
                        <button className='bg-red-300 py-1 border cursor-pointer border-gray-400 rounded-tr-sm rounded-br-sm px-2 font-medium'>Subscribe</button>
                    </div>
                </form>
             </div>
             <div className='mt-6 text-gray-500'>
                <h2 className='text-xl font-semibold text-center mb-1 text-gray-700'>Our Social</h2>
                <div className='flex items-center justify-center text-xl gap-5 mb-3 text-blue-500'>
                    <Link className='bg-gray-300 p-2 hover:bg-green-300 rounded-full'><FaSquareXTwitter></FaSquareXTwitter></Link>
                    <Link className='bg-gray-300 p-2 hover:bg-green-300 rounded-full'><FaFacebookSquare></FaFacebookSquare></Link>
                    <Link className='bg-gray-300 p-2 hover:bg-green-300 rounded-full'><FaGithubSquare></FaGithubSquare></Link>
                    <Link className='bg-gray-300 p-2 hover:bg-green-300 rounded-full'><FaLinkedin></FaLinkedin></Link>
                    <Link className='bg-gray-300 p-2 hover:bg-green-300 rounded-full'><FaYoutube ></FaYoutube></Link>
                </div>
                <div className='text-center'>
                    <p><span className='font-medium text-gray-700'>Info:</span> Support marketing</p>
                    <p><Link>Terms of Use</Link> || <Link>Privacy Policy</Link></p>
                </div>
                <p className='text-center'>&#xa9; {year} clarity money</p>
             </div>
        </footer>
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
export default Footer;