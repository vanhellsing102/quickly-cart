import React from 'react';
import { useParams } from 'react-router-dom';
import useProductsByBrandName from '../hooks/useProductsByBrandName';
import Product from './Product';

const BrandProducts = () => {
    const {brand} = useParams();
    const [products] = useProductsByBrandName(brand);
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center lg:grid-cols-5 gap-5 mt-5'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default BrandProducts;