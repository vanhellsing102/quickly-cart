import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from "react-hook-form";
import useCartProducts from '../../hooks/useCartProducts';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Checkout = () => {
    // const {totalAmount} = useParams();
    const [cartProducts] = useCartProducts();
    const cartProductIds = cartProducts.map(product => product?._id);
    const isPaymentProduct = cartProducts.filter(product => product.status === "pending");
    const totalAmount = isPaymentProduct.reduce((acc, product) => acc + product.totalPrice, 0)
    // console.log(totalAmount)
    const {user} = useContext(AuthContext);
    const { register, handleSubmit} = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) =>{
        const payOrderData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: {
                country: data.country,
                city: data.city,
                zipecode: data.zipecode
            },
            totalAmount: parseInt(totalAmount),
            cartProductIds: cartProductIds,
            currency: "USD"
        }
        axiosPublic.post(`/create-payment`, payOrderData)
        .then(res =>{
            window.location.replace(res?.data?.url);
        })
        // console.log(payOrderData);
    }

    return (
        <div className='flex justify-center flex-col md:flex-row items-center h-full mt-10 gap-10'>
            <h2 className='text-4xl font-semibold'>Checkout</h2>
            <div className='md:w-1/3 w-full bg-slate-100 p-7 rounded-sm text-whi'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='block text-[15px] font-semibold' htmlFor="name">Full Name</label>
                        <input {...register("name", { required: true })} className='appearance-none outline-none w-full px-3 py-1 rounded-sm border-slate-500' type="text" placeholder='Full Name' />
                    </div>
                    <div className='mt-2'>
                        <label className='block text-[15px] font-semibold' htmlFor="phone">Phone Number</label>
                        <input {...register("phone", { required: true })} className='appearance-none outline-none w-full px-3 py-1 rounded-sm border-slate-500' type="number" placeholder='Your Phone' />
                    </div>
                    <div className='mt-2'>
                        <label className='block text-[15px] font-semibold' htmlFor="email">Email</label>
                        <input {...register("email", { required: true })} value={user?.email} className='appearance-none outline-none w-full px-3 py-1 rounded-sm border-slate-500' type="email" placeholder='Your Email' />
                    </div>
                    <div className='flex flex-col md:flex-row w-full items-center gap-3 mt-2'>
                        <div className='w-full'>
                            <label className='block text-[15px] font-semibold' htmlFor="country">Country</label>
                            <input {...register("country", { required: true })} className='appearance-none outline-none w-full px-3 py-1 rounded-sm border-slate-500' type="text" placeholder='Your Country' />
                        </div>
                        <div className='w-full'>
                            <label className='block text-[15px] font-semibold' htmlFor="city">City</label>
                            <input {...register("city", { required: true })} className='appearance-none outline-none w-full px-3 py-1 rounded-sm border-slate-500' type="text" placeholder='Your City' />
                        </div>
                        <div className='w-full'>
                            <label className='block text-[15px] font-semibold' htmlFor="zipecode">Zipecode</label>
                            <input {...register("zipecode", { required: true })} className='appearance-none outline-none w-full px-3 py-1 rounded-sm border-slate-500' type="number" placeholder='Your Zipecode' />
                        </div>
                    </div>
                    <p className='mt-2 text-[17px] text-blue-600 font-semibold'><span className='text-black'>Total Ammout:</span> ${totalAmount}</p>
                    <button className='bg-blue-500 w-full mt-2 py-1 cursor-pointer rounded-sm hover:bg-blue-600 text-white font-medium hover:scale-[102%] duration-300 transition-all'>Pay Now</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;