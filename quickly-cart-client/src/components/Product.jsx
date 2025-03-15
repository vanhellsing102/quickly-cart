import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const Product = ({product}) => {
    const {name, _id, price, image, like, subcategory, description} = product;
    return (
        <Link to={`/product-details/${_id}`} className='space-y-1 border border-slate-300 rounded-sm hover:shadow-[0px_20px_80px_rgba(0,0,0,0.6)] hover:scale-[105%] duration-200 h-[290px] overflow-hidden group'>
            <img className='h-[160px] w-full rounded-t-sm border-b border-slate-300' src={image} alt="" />
            <h3 className='text-center text-cyan-500 font-semibold'>{name.length > 15 ? name.slice(0,15) : name}</h3>
            <p className='text-center'>{description.slice(0,45)}....</p>
            <div className='flex justify-between items-center px-3'>
                <p className='font-bold text-green-500'>${price}</p>
                <FaLongArrowAltRight className='text-green-500 mr-3 font-bold text-xl group-hover:translate-x-4 transition-all duration-500'></FaLongArrowAltRight>
            </div>
        </Link>
    );
};

export default Product;