import FoodBanner from './FoodBanner';
import flower from '../../../assets/food/flower-Photoroom.png';
import banner from '../../../assets/food/banner-Photoroom.png';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useProductsByCategory from '../../../hooks/useProductsByCategory';
import { Link } from 'react-router-dom';

const Food = () => {
    const [productsCategory] = useProductsByCategory("food");
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
          perView: 5,
          spacing: 20,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 15,
                },
            },
            "(max-width: 768px)": {
                slides: {
                    perView: 2,
                    spacing: 10,
                },
            },
        },
    })
    // console.log(productsCategory);
    return (
        <div className='space-y-9'>
            <FoodBanner></FoodBanner>
            <div className='md:mt-0 mt-40'>
                <div className='flex justify-around h-60 items-center bg-lime-300 rounded-t-sm'>
                    <img className='h-full hidden md:block scale-150 pb-6' src={flower} alt="" />
                    <div className='text-center'>
                        <h1 className='text-7xl text-sky-500 font-semibold'>Fresh & Fun</h1>
                        <p className='text-lg font-semibold text-slate-500'>Checkout what's a new & trending for spring</p>
                    </div>
                </div>
                <div className='bg-fuchsia-400'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 p-10'>
                        <div className='text-center bg-pink-300 flex flex-col justify-center px-6 py-3 rounded-sm'>
                            <h2 className='text-4xl font-bold'>Delicious Delights</h2>
                            <p className='font-medium text-slate-500 mt-2'>Explore our wide variety of mouthwatering dishes, carefully crafted to satisfy every taste. Whether you're in the mood for something light or indulgent, our menu has something for everyone.</p>
                        </div>
                        <div className='bg-rose-300 flex justify-center items-center py-4 rounded-sm'>
                            <img className='w-[450px]' src={banner} alt="" />
                        </div>
                    </div>
                    <div ref={sliderRef} className="keen-slider bg-yellow-100 py-10 rounded-b-sm}">
                        {
                            productsCategory.map(food =>
                                <Link to={`/product-details/${food?._id}`} key={food?._id} className="keen-slider__slide number-slide1 bg-slate-300 p-3">
                                    <img className='h-[230px] w-full' src={food?.image} alt="" />
                                    <h2 className='text-xl font-semibold text-blue-600 text-center'>{food?.name}</h2>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;