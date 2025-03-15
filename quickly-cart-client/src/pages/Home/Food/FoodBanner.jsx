import React from 'react';
import image1 from '../../../assets/food/pexels-photo-708488.jpeg';
import image2 from '../../../assets/food//pexels-photo-808941.jpeg';
import image3 from '../../../assets/food/pexels-photo-940302.webp';


const FoodBanner = () => {
    return (
        <div className='grid md:grid-cols-5 h-40 bg-indigo-400 rounded-sm'>
            <div className='sm:col-span-2 flex justify-center items-center flex-col text-center py-5 px-2'>
                <h2 className='text-4xl font-bold text-yellow-400'>All Things Easter</h2>
                <p className='text-lg text-white'>Discover spring docor, sweet treats, crafts & more.</p>
            </div>
            <img className='hidden sm:block h-40 w-full' src={image1} alt="" />
            <img className='h-40 hidden md:block w-full' src={image2} alt="" />
            <img className='md:rounded-r-sm h-40 w-full' src={image3} alt="" />
        </div>
    );
};

export default FoodBanner;