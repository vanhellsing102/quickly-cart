import React from 'react';
import banner from '../../../assets/bannerkids/kinds-Photoroom.png'
import { Link } from 'react-router-dom';
import KidsProductCard from '../../../components/KidsProductCard';
import useProductsByCategory from '../../../hooks/useProductsByCategory';

const GiftForKids = () => {
    const [productsCategory] = useProductsByCategory("toy");
    return (
        <div className='grid grid-cols-1 lg:grid-rows-[200px] gap-5 md:grid-cols-3'>
            <div className='md:col-span-2'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <div className='col-span-2'>
                        <h3 className='text-2xl font-light'>Editors’ Picks</h3>
                        <h2 className='text-4xl font-bold mt-1'>Gifts for Kids</h2>
                        <Link to={`/kids-products`}>
                            <button className='bg-slate-200 hover:scale-[103%] duration-300 mt-2 px-3 font-medium cursor-pointer hover:bg-slate-300 py-1 rounded-xl'>See More</button>
                        </Link>
                    </div>
                    {
                        productsCategory.slice(0, 6).map(product => <KidsProductCard key={product._id} product={product}></KidsProductCard>)
                    }
                </div>
            </div>
            <div className='md:row-span-2'>
                <img className='h-[300px] lg:h-full w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default GiftForKids;