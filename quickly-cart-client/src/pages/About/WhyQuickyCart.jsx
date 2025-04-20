import React from 'react';
import { FcNext } from "react-icons/fc";

const WhyQuickyCart = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold text-blue-600 mb-1'>Who Quicky Cart:</h2>
            <ul>
                <li className='flex items-center gap-2'>
                    <FcNext></FcNext>
                    <span className='underline-offset-4 underline text-lg font-medium'>Fast & Real-Time:</span>
                    <span>Experience instant cart updates and real-time product interaction.</span>
                </li>
                <li className='flex items-center gap-2'>
                    <FcNext></FcNext>
                    <span className='underline-offset-4 underline text-lg font-medium'>Secure & Reliable:</span>
                    <span>User authentication and backend are built with robust technologies like Express.js, MongoDB, and JWT.</span>
                </li>
                <li className='flex items-center gap-2'>
                    <FcNext></FcNext>
                    <span className='underline-offset-4 underline text-lg font-medium'>User-Friendly UI:</span>
                    <span>Clean, minimal, and responsive design ensures a smooth experience on both desktop and mobile.</span>
                </li>
                <li className='flex items-center gap-2'>
                    <FcNext></FcNext>
                    <span className='underline-offset-4 underline text-lg font-medium'>Seamless Checkout:</span>
                    <span>No long forms or confusing steps — just quick and easy purchases.</span>
                </li>
            </ul>
        </div>
    );
};

export default WhyQuickyCart;