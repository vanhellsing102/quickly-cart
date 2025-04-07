import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { useContext, useState } from 'react';
import StarRatings from 'react-star-ratings';
import useProductsByCategory from '../hooks/useProductsByCategory';
import Product from './Product';
import { AuthContext } from '../Providers/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import useCartProducts from '../hooks/useCartProducts';

const ProductDetails = () => {
    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [cartProducts, isLoading, refetch] = useCartProducts();
    const date = new Date();
    const day = date.toLocaleDateString();

    const {data: product = {}} = useQuery({
        queryKey: ['id', id],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/product/${id}`);
            return res.data;
        }
    })
    const [quantity, setQuantity] = useState(1);
    const handleIncreament = () =>{
        setQuantity(quantity + 1);
    }
    const handleDecreament = () =>{
        quantity > 1 && setQuantity(quantity - 1);
    }
    const[productsCategory] = useProductsByCategory(product?.category);
    const handleAddToCart = (product) =>{
        const cartProduct = {
            productId: product._id,
            name: product.name,
            brand: product.brand,
            title: product.title,
            category: product.category,
            subcategory: product.subcategory,
            image: product.image,
            totalPrice: quantity * product?.price,
            userEmail: user?.email,
            quantity,
            date: day,
            paymentStatus: "pending"
        }
        axiosPublic.post('/cart', cartProduct)
        .then(res =>{
            if(res.data.insertedId){
                toast.success('Your product has been added to your Cart', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                refetch();
            }
            if(res.data.message){
                toast.error(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        })
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                <div>
                    <img className='w-full h-[400px] rounded-sm' src={product?.image} alt="" />
                </div>
                <div className='space-y-1'>
                    <h1 className='text-4xl font-medium'>{product?.title}</h1>
                    <p className='text-xl font-medium text-gray-500'>Brand: <span className='text-green-500'>{product?.brand}</span></p>
                    <p className='text-xl font-medium text-gray-500'>Category: <span className='text-green-500'>{product?.subcategory}</span></p>
                    <p className='text-xl font-medium text-gray-500'>Price: <span className='text-green-500'>${product?.price}</span></p>
                    <p className='text-sm text-gray-400'>{product?.description}</p>
                    <div className='text-md flex items-center gap-10'>
                        <button className='flex items-center gap-1'><IoMdHeartEmpty></IoMdHeartEmpty><p>{product?.like}</p></button>
                        {
                            product.rating &&
                            <StarRatings rating={Math.floor(product?.rating)} starDimension="20px" starRatedColor="yellow" starSpacing="2px" numberOfStars={5} name='rating'/>
                        }
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='inline-block'>
                            <div className='flex items-center gap-4 border border-gray-400 px-3 rounded-sm text-lg'>
                                <button onClick={handleDecreament} className='cursor-pointer border-r pr-3 border-gray-400'>-</button>
                                <p>{quantity}</p>
                                <button onClick={handleIncreament} className='cursor-pointer border-l pl-3 border-gray-400'>+</button>
                            </div>
                        </div>
                        <div className='font-medium flex items-center gap-3'>
                            <p>Total Price:</p>
                            <span className='text-green-500 font-bold'>${product?.price * quantity}</span>
                        </div>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <button onClick={() =>handleAddToCart(product)} className='bg-gradient-to-l to-purple-300 cursor-pointer font-medium px-5 py-1 rounded-sm from-cyan-400 hover:to-purple-200 duration-300 hover:scale-105 hover:from-cyan-300 flex justify-center items-center gap-7'>
                            <FaOpencart></FaOpencart><span>Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>
            <h1 className='mt-24 text-4xl font-semibold text-gray-600 text-center'>More Such Product Collections</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center lg:grid-cols-5 gap-5 mt-7'>
                {
                    productsCategory.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;