import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const BrandSection = () => {
    const axiosPublic = useAxiosPublic();
    const [brands, setBrands] = useState([]);
    useEffect( () =>{
        axiosPublic.get('/brandName')
        .then(res =>{
            setBrands(res.data);
        })
    }, []);
    // console.log(brands);
    return (
        <div className='mb-16'>
            <div className='flex flex-col lg:flex-row items-center gap-7'>
                <h1 className='text-5xl text-gray-700 font-bold text-center lg:text-start'>Explore millions of offerings <br /> tailored to your business needs</h1>
                <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                    <div className='border-l-[7px] rounded-sm border-gray-500 pl-3'>
                        <h3 className='text-5xl font-semibold text-red-500'>200M+</h3>
                        <p className='text-xl font-medium text-slate-600'>Products</p>
                    </div>
                    <div className='border-l-[7px] rounded-sm border-gray-500 pl-3'>
                        <h3 className='text-5xl font-semibold text-red-500'>200K+</h3>
                        <p className='text-xl font-medium text-slate-600'>Suplier</p>
                    </div>
                    <div className='border-l-[7px] rounded-sm border-gray-500 pl-3'>
                        <h3 className='text-5xl font-semibold text-red-500'>5000</h3>
                        <p className='text-xl font-medium text-slate-600'>Products Categories</p>
                    </div>
                    <div className='border-l-[7px] rounded-sm border-gray-500 pl-3'>
                        <h3 className='text-5xl font-semibold text-red-500'>200+</h3>
                        <p className='text-xl font-medium text-slate-600'>Countries & Regions</p>
                    </div>
                </div>
            </div>
            <Swiper cssMode={true} navigation={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard]} onSlideChange={20} slidesPerGroup={2} slidesPerView={2} spaceBetween={10} breakpoints={{
                992: {
                    slidesPerView: 7,
                    slidesPerGroup: 7,
                },
                768: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                480: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            }} className="mySwiper mt-10">
                {
                    brands.map((brand, index) => 
                        <SwiperSlide key={index}>
                            <Link to={`/brand-products/${brand.brand}`} className='border-4 border-fuchsia-500 hover:border-cyan-500 rounded-full h-40 w-40 flex items-center justify-center'>
                                <h1 className='text-xl font-medium text-slate-800'>{brand.brand}</h1>
                            </Link>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default BrandSection;