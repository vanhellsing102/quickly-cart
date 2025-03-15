import React from 'react';
import { useParams } from 'react-router-dom';
import useProductBySubcategory from '../../../hooks/useProductBySubcategory';
import Product from '../../../components/Product';

const OccasionProducts = () => {
    const {subcategory} = useParams();
    const [productsSubcategory] = useProductBySubcategory(subcategory);
    // console.log(productsSubcategory);
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center lg:grid-cols-5 gap-5 mt-5'>
            {
                productsSubcategory.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default OccasionProducts;