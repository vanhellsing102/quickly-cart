import React from 'react';
import cashback from '../../assets/cashback/cashback2-Photoroom.png';
import exited from '../../assets/cashback/exited-Photoroom.png';
import rewards from '../../assets/cashback/rewards-Photoroom.png';

const Cashback = () => {
    return (
        <div className='md:space-y-0 space-y-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                <div className='flex justify-center'>
                    <img className='md:w-[300px] w-[350px] rounded-full bg-fuchsia-300' src={cashback} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-fuchsia-300'>Get Rewarded for Every Purchase</h2>
                    <p className='text-xl text-slate-600'>We’ve already paid over $3.6 billion in Cash Back to our members! No wonder we’re the #1 Cash Back shopping companion. Join a community of 21+ million smart shoppers who earn rewards every time they shop.</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className='text-center md:w-1/2'>
                    <h2 className='text-4xl font-bold text-cyan-200'>Shop More, Earn More</h2>
                    <p className='text-xl text-slate-600'>From fashion and electronics to dining and ride-sharing, every purchase adds up to savings. We bring you the best deals on your favorite brands, apps, and services—all with Cash Back on top.</p>
                </div>
                <div className='flex justify-center md:w-1/2'>
                    <img className='md:w-[300px] w-[350px] rounded-full bg-cyan-300' src={exited} alt="" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='flex justify-center md:w-1/2'>
                    <img className='md:w-[300px] w-[350px] rounded-full bg-amber-300' src={rewards} alt="" />
                </div>
                <div className='text-center md:w-1/2'>
                    <h2 className='text-4xl font-bold text-amber-200'>Shop More, Earn More</h2>
                    <p className='text-xl text-slate-600'>From fashion and electronics to dining and ride-sharing, every purchase adds up to savings. We bring you the best deals on your favorite brands, apps, and services—all with Cash Back on top.</p>
                </div>
            </div>
        </div>
    );
};

export default Cashback;