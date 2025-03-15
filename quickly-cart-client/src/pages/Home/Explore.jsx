import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../../components/Product';

const Explore = () => {
    const [products] = useProducts();
    return (
        <div>
            <div className='uppercase font-bold text-center'>
                <h1 className='text-4xl text-pink-400'>🌸Spring Sale🌸</h1>
                <h2 className='text-3xl text-slate-500'>Explore your interest</h2>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center lg:grid-cols-5 gap-5 mt-5'>
                {
                    products.slice(10, 30).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='mt-5 flex justify-center'>
                <Link to={'/shop'}><button className='bg-gradient-to-l to-purple-300 cursor-pointer font-bold px-5 py-1 rounded-sm from-cyan-400 hover:to-purple-200 duration-300 hover:scale-105 hover:from-cyan-300'>See All</button></Link>
            </div>
        </div>
    );
};

export default Explore;