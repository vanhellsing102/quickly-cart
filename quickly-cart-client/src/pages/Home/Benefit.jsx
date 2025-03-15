import React from 'react';
import { FaCarSide } from "react-icons/fa6";
import { FaChevronCircleRight, FaWallet, FaHeadphones, FaArrowsAltH } from "react-icons/fa";

const Benefit = () => {
    return (
        <div className="md:px-12 flex flex-col lg:flex-row justify-between items-center text-white gap-5">
            <div className='flex gap-4 items-center justify-center bg-gradient-to-l to-slate-500 from-slate-700 py-3 rounded-sm px-5'>
                <FaCarSide className='text-2xl text-fuchsia-500'></FaCarSide>
                <div>
                    <h3 className='text-xl font-bold'>Free Shopping</h3>
                    <p className='text-sm'>Free shoppong on all order</p>
                </div>
            </div>
            <FaArrowsAltH className='text-blue-600 text-3xl rotate-90 lg:rotate-0'></FaArrowsAltH>
            <div className='flex gap-4 items-center justify-center bg-gradient-to-l to-slate-500 from-slate-700 py-3 rounded-sm px-5'>
                <FaChevronCircleRight className='text-2xl rotate-90 text-fuchsia-500'></FaChevronCircleRight>
                <div>
                    <h3 className='text-xl font-bold'>Save Money</h3>
                    <p className='text-sm'>Free shoppong on all order</p>
                </div>
            </div>
            <FaArrowsAltH className='text-blue-600 text-3xl rotate-90 lg:rotate-0'></FaArrowsAltH>
            <div className='flex gap-4 items-center justify-center bg-gradient-to-l to-slate-500 from-slate-700 py-3 rounded-sm px-5'>
                <FaWallet className='text-2xl text-fuchsia-500'></FaWallet>
                <div>
                    <h3 className='text-xl font-bold'>Secure Payment</h3>
                    <p className='text-sm'>Free shoppong on all order</p>
                </div>
            </div>
            <FaArrowsAltH className='text-blue-600 text-3xl rotate-90 lg:rotate-0'></FaArrowsAltH>
            <div className='flex gap-4 items-center justify-center bg-gradient-to-l to-slate-500 from-slate-700 py-3 rounded-sm px-5'>
                <FaHeadphones className='text-2xl text-fuchsia-500'></FaHeadphones>
                <div>
                    <h3 className='text-xl font-bold'>Affordable Price</h3>
                    <p className='text-sm'>Free shoppong on all order</p>
                </div>
            </div>
        </div>
    );
};

export default Benefit;