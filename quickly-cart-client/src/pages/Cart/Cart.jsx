import React, { useState } from 'react';
import useCartProducts from '../../hooks/useCartProducts';
import { MdDeleteOutline } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Cart = () => {
    const [cartProducts, isLoading, refetch] = useCartProducts();
    const [discountAmount, setDiscountAmount] = useState(0);
    const coupon = "murad105";
    const axiosPublic = useAxiosPublic();

    const subTotal = cartProducts.reduce((acc, product)=> acc + product?.totalPrice, 0).toFixed(0);
    const handleCouponSubmit = e =>{
        e.preventDefault();
        if(e.target.coupon.value == coupon){
            const discountAmount = subTotal - (subTotal * 10) / 100;
            const discount = subTotal - discountAmount;
            setDiscountAmount(discount.toFixed(0));
        }else{
            setDiscountAmount(0);
        }
    }
    const handleDeleteCartProduct = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/cartProduct/${id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }
                })
            }
          });
    }   
    const totalAmount = subTotal - discountAmount;
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-6 text-red-500'>Your Cart (<span className='text-3xl font-medium text-slate-700'> {cartProducts.length} item</span> )</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                {/* product */}
                <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100 mt-6 md:col-span-2">
                    <table className="table md:table-fixed">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Categoty</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            cartProducts.length > 0 &&
                            cartProducts.map((product, index) =>
                                <tr key={product?._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img className='w-12 rounded-sm border border-gray-500 h-10' src={product?.image} alt="" />
                                    </td>
                                    <td>{product?.name}</td>
                                    <td>{product?.category}</td>
                                    <td>{product?.quantity}</td>
                                    <td>${product?.totalPrice}</td>
                                    <td>
                                        <button onClick={() =>handleDeleteCartProduct(product?._id)} className='cursor-pointer bg-gray-400 hover:bg-red-500 hover:scale-105 transition-all duration-200 p-1 rounded-full'><MdDeleteOutline className='text-xl text-white'></MdDeleteOutline></button>
                                    </td>
                                </tr>
                            )
                        }
                      </tbody>
                    </table>
                </div>
                <div className='mt-6 border border-gray-200 rounded-xl h-[430px]'>
                    <h2 className='text-2xl font-semibold text-center border-b border-gray-200 py-3'>Order Summary</h2>
                    <div className='border-b border-gray-200 p-5 flex gap-3 items-center flex-col'>
                        <p>Apply Coupon for Discount</p>
                        <form onSubmit={handleCouponSubmit} className='flex items-center'>
                            <input className='appearance-none outline-none px-4 py-1 border-orange-400 text-orange-600 font-bold bg-orange-200 border-r-0 rounded-tl-sm rounded-bl-sm' name='coupon' type="text" placeholder='Apply Coupon' />
                            <button className='bg-blue-600 py-[7px] rounded-tr-sm px-5 rounded-br-sm cursor-pointer'><BiSolidCoupon className='text-xl text-white'></BiSolidCoupon></button>
                        </form>
                    </div>
                    <div className='border-b border-gray-200'>
                        <div className='flex justify-between items-center pt-5 px-5 font-medium'>
                            <p>Sub Total</p>
                            <p>${subTotal}</p>
                        </div>
                        <div className='flex justify-between items-center pt-5 px-5 font-medium'>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className='flex justify-between items-center pt-5 px-5 font-medium'>
                            <p>Discount</p>
                            <p>${discountAmount}</p>
                        </div>
                        <div className='p-5 flex justify-between font-medium'>
                            <p>Total</p>
                            <p>=</p>
                            <p>${totalAmount}</p>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <Link to={`/checkout/${totalAmount}`}>
                            <button className='flex items-center gap-2 w-full justify-center group bg-blue-500 py-2 text-white cursor-pointer hover:scale-105 font-semibold'>Go to CheckOut<IoBagCheckOutline className='group-hover:translate-x-2 transition-all duration-200'></IoBagCheckOutline></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;