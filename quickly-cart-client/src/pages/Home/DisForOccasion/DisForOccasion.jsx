import React, { useState } from 'react';
import chicken from '../../../assets/disforoccasion/chicken.avif';
import cream from '../../../assets/disforoccasion/cream.avif';
import oil from '../../../assets/disforoccasion/oil.avif';
import perfume from '../../../assets/disforoccasion/perfume.avif';
import toy from '../../../assets/disforoccasion/toy.avif';
import tv from '../../../assets/disforoccasion/tv.avif';
import { Link } from 'react-router-dom';

const DisForOccasion = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center'>Discover products for every occasion</h2>
            <div className='grid grid-cols-2 justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-7'>
                {
                    categoriesData.map(({title, image, category, subcategory}, index) =>
                        <Link to={`/occasion-products/${subcategory}`} onClick={() =>handleSubCategory(subcategory)} key={index} className='cursor-pointer'>
                            <div className='flex flex-col justify-center items-center rounded-sm hover:shadow-2xl hover:shadow-slate-400 p-2 hover:scale-105 duration-300 w-[200px]' key={index}>
                                <img src={image} className='sm:h-[178px] sm:w-full w-[170px] h-[170px] rounded-full border-[1px]' alt="" />
                                <h3 className='text-center font-bold text-sm mt-2'>{title}</h3>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};
const categoriesData = [
    {
        title: "Feast & Flavor",
        image: chicken,
        category: "food",
        subcategory: "chicken shish kebab"
    },
    {
        title: "Lush Dew",
        image: cream,
        category: "beauty",
        subcategory: "cream"
    },
    {
        title: "Looking Handsome",
        image: oil,
        category: "beauty",
        subcategory: "body oil"
    },
    {
        title: "Secret Bliss",
        image: perfume,
        category: "beauty",
        subcategory: "perfume"
    },
    {
        title: "Feast & Flavor",
        image: toy,
        category: "food",
        subcategory: "bike",
    },
    {
        title: "Enjoy with family",
        image: tv,
        category: "electronics",
        subcategory: "monitor"
    }
]
export default DisForOccasion;