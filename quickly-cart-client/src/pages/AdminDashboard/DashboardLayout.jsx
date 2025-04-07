import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdDashboard, MdManageHistory } from "react-icons/md";
import { IoMdAdd, IoIosNotifications } from "react-icons/io";
import { RiUser6Fill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";

const DashboardLayout = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div>
            <div className='flex'>
                <Link to={'/'} className='w-32 flex items-center justify-center text-red-500 font-semibold' style={{ textShadow: "2px 2px 5px rgba(255, 0, 0, 0.8)"}}>Quick Cart</Link>
                <div className='md:w-[calc(100%-128px)] w-full flex text-xl justify-end  items-center h-10 pr-10 gap-3 bg-blue-200 py-3'>
                    <Link><IoIosNotifications></IoIosNotifications></Link>
                    <Link><RiUser6Fill></RiUser6Fill></Link>
                    <button onClick={() =>setOpenMenu(!openMenu)} className='block md:hidden'><CgMenuMotion></CgMenuMotion></button>
                </div>
            </div>
            <div className='flex'>
                <div className={`md:flex ${openMenu ? "flex" : "hidden"}`}>
                    <div className='w-32 bg-slate-200 min-h-screen flex justify-center items-center gap-3 flex-col'>
                        <NavLink onClick={() =>setOpenMenu(false)} to={''} className='p-2' end>
                            <MdDashboard className='text-2xl'></MdDashboard>
                        </NavLink>
                        <NavLink onClick={() =>setOpenMenu(false)} to={'add-product'} className='p-2' end>
                            <IoMdAdd className='text-2xl'></IoMdAdd>
                        </NavLink>
                        <NavLink onClick={() =>setOpenMenu(false)} to={'manage-product'} className='p-2' end>
                            <MdManageHistory  className='text-2xl'></MdManageHistory>
                        </NavLink>
                        <NavLink onClick={() =>setOpenMenu(false)} to={'order-product'} className='p-2' end>
                            <FaOpencart className='text-2xl'></FaOpencart>
                        </NavLink>
                    </div>
                </div>
                <div className='md:p-10 p-4 w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;