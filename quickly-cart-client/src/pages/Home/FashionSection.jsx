import './FashionSection.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useProductBySubcategory from '../../hooks/useProductBySubcategory';
import useProductsByCategory from '../../hooks/useProductsByCategory';

const FashionSection = () => {
    const [productsSubcategory] = useProductBySubcategory("lehenga");
    const[productsCategory] = useProductsByCategory("fashion");

    const chunkArray = (productsCategory, size) => {
        return productsCategory.reduce((acc, _, i) => 
            (i % size ? acc : [...acc, productsCategory.slice(i, i + size)]), []);
    };
    const productChunks = chunkArray(productsCategory, 6);

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div className='grid grid-cols-3 gap-5 items-end px-5 min-h-[500px] pb-3 banner'>
                {
                    productsSubcategory.slice(0, 3).map((product) =>
                        <div key={product._id}>
                            <Link to={`/product-details/${product._id}`} className='h-[280px] hover:rotate-6 bg-slate-300 flex flex-col justify-between cursor-pointer duration-300 group overflow-hidden'>
                            <img className='h-[200px] w-full group-hover:scale-110 duration-300' src={product?.image} alt="" />
                            <div className='p-2'>
                                <h3 className='font-medium text-center'>{product?.name}</h3>
                                <p className='text-green-400 font-semibold text-xl'>${product?.price}</p>
                            </div>
                        </Link>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center items-center'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        productChunks.map((chunk, index) => (
                            <SwiperSlide key={index}>
                                <div className='grid grid-cols-2 gap-5'>
                                    {chunk.map((product, index) => (
                                        <Link key={index} to={`/product-details/${product?._id}`} className='grid grid-cols-2 bg-slate-200 p-5 h-[170px] rounded-sm'>
                                            <h2 className='text-fuchsia-500 text-xl font-semibold drop-shadow-md'>{product.title}</h2>
                                            <img key={product._id} src={product.image} className='h-[130px] rounded-sm w-full' alt="" />
                                        </Link>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default FashionSection;