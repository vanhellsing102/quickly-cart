import React from 'react';
import { Link } from 'react-router-dom';

const KidsProductCard = ({product}) => {
    const {name, image, _id} = product;
    return (
        <Link to={`/product-details/${_id}`}>
            <div className='shadow-slate-200 shadow-2xl group relative overflow-hidden'>
                <img className='rounded-sm h-[180px] w-full' src={image} alt="" />
                <h3 className='absolute -top-20 group-hover:top-4/5 duration-700 ease-initial ml-3 font-bold text-violet-700 text-2xl'>{name}</h3>
            </div>
        </Link>
    );
};
export default KidsProductCard;