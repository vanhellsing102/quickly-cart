import React from 'react';
import enjoykids from '../../../assets/bannerkids/enjoykids-Photoroom.png';
import Product from '../../../components/Product';
import useProductsByCategory from '../../../hooks/useProductsByCategory';
import { FcLandscape } from "react-icons/fc";
import './Kids.css';

const KidsAllProducts = () => {
    const [productsCategory] = useProductsByCategory("toy");
    return (
        <div className='mt-5'>
            <div>
                <h2 className='text-5xl font-semibold text-sky-300 drop'>Welcome to Our Kids'</h2>
                <h2 className='text-5xl font-semibold text-red-300 text-center mt-1 flex justify-center items-center gap-2'>Wonderland <FcLandscape></FcLandscape></h2>
                <p className='text-center mt-3 text-xl text-slate-500'>Discover a magical world of fun and learning with our amazing <br /> collection of kids' products! From exciting toys to educational games, <br /> we have everything to bring joy to your little ones.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center lg:grid-cols-5 gap-5 mt-5'>
                    <img className='md:w-[500px] col-span-2 md:col-span-2 drop' src={enjoykids} alt="" />
                    {
                        productsCategory.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default KidsAllProducts;