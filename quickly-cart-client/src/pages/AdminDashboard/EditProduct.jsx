import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { LuImagePlus } from 'react-icons/lu';
import axios from 'axios';

const imageApiKey = import.meta.env.VITE_IMAGEAPIKEY;
const imageApiUrl = `https://api.imgbb.com/1/upload?key=${imageApiKey}`

const EditProduct = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    const [product, setProduct] = useState({});
    const {register, handleSubmit, watch } = useForm();
    const selectCategory = watch("category");

    const onSubmit = async(data) =>{
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append("image", imageFile);
        const res =await axios.post(imageApiUrl, formData);
        const imageUrl = res.data.data.display_url;
        const updateProductData = {
            name: data.productName,
            brand: data.productBrand,
            category: data.category,
            subcategory: data.subcategory,
            title: data.title,
            price: parseInt(data.price),
            description: data.description,
            rating: parseInt(data.rating),
            like: 0,
            image: imageUrl ? imageUrl : data.image
        }
        console.log(updateProductData)
        axiosPublic.patch(`/update-product/${id}`, updateProductData)
        .then(res =>{
            if(res.data.modifiedCount > 0){
                toast.success('Update Product Successfully', {
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
    useEffect(() =>{
        axiosPublic.get(`/product/${id}`)
        .then(res =>{
            setProduct(res.data);
        })
    }, [id]);
    return (
        <div className='md:p-10 p-4 rounded-sm bg-slate-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'> 
                <div className='md:flex gap-3 items-center'>
                    <div className='w-full'>
                        <label className='text-sm' htmlFor="product-name">Product Name:</label>
                        <input type="text" defaultValue={product?.name} {...register("productName")} className='w-full rounded-sm outline-none py-1 px-5' />
                    </div>
                    <div className='w-full'>
                        <label className='text-sm' htmlFor="Brand">Product Brand:</label>
                        <input type="text" defaultValue={product?.brand} {...register("productBrand")} className='w-full rounded-sm outline-none py-1 px-5' />
                    </div>
                </div>
                <div className='md:flex gap-3 items-center'>
                    <div className='w-full'>
                        <label className='text-sm' htmlFor="category">Category:</label>
                        <select defaultValue={product?.category} className='w-full rounded-sm outline-none py-1' {...register("category")} name="category" id="category">
                            <option value="" disabled>Choose a Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="food">Food</option>
                            <option value="furniture">Furniture</option>
                            <option value="mobile">Mobile</option>
                            <option value="beauty">Beauty</option>
                            <option value="fashion">Fashion</option>
                            <option value="toy">Toy</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className='text-sm' htmlFor="subcategory">Subcategory:</label>
                        <select className='w-full rounded-sm outline-none py-1' {...register("subcategory")} name="subcategory" id="subcategory" defaultValue={product?.subcategory}>
                            <option value="" disabled>Choose a Subcategory</option>
                            {
                                selectCategory && subcategories[selectCategory].map(item =>
                                    <option key={item} value={item.toLowerCase()}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='w-full'>
                        <label className='text-sm' htmlFor="title">Title:</label>
                        <input type="text" defaultValue={product?.title} {...register("title")} className='w-full rounded-sm outline-none py-1 px-5' />
                    </div>
                    <div className='w-full'>
                        <label className='text-sm' htmlFor="price">Price:</label>
                        <input type="number" defaultValue={product?.price} {...register("price")} className='w-full rounded-sm outline-none py-1 px-5' />
                    </div>
                </div>
                <div>
                    <label className='block text-sm' htmlFor="description">Description:</label>
                    <textarea defaultValue={product?.description} className='w-full outline-none px-5 py-2 rounded-sm' {...register("description")} name="description" id="description">
                    </textarea>
                </div>
                <div className='grid grid-cols-2'>
                    <div>
                        <label className='text-sm block' htmlFor="">Product Image:</label>
                        <label className='text-2xl cursor-pointer' htmlFor="image"><LuImagePlus></LuImagePlus></label>
                        <input type="file" defaultValue={product?.image} name='image' {...register("image")} id='image' className='hidden'/>
                    </div>
                    <div className='w-full'>
                        <label className='text-sm' htmlFor="product-rating">Product Rating:</label>
                        <input type="number" defaultValue={product?.rating} {...register("rating", {min:1, max: 5})} className='w-full rounded-sm outline-none py-1 px-5' />
                    </div>
                </div>
                <input className='bg-gradient-to-l to-purple-300 cursor-pointer font-bold text-black py-1 rounded-sm from-cyan-400 mt-2 hover:to-purple-200 duration-300 hover:scale-[102%] w-full hover:from-cyan-300' type="submit" value={"Update Product"}/>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};
const subcategories = {
    electronics: [
      "Balp", "Computer", "Air Conditioner", "Fan", "Freeze", "Laptop", "Oven", "Monitor"
    ],
    food: [
      "Pizza", "Braised Potato", "Chicken Shish Kebab", "Soup", "Pepper Stuffed"
    ],
    furniture: [
      "Sofa", "Chair"
    ],
    mobile: [
      "iPhone", "Samsung", "Vivo", "Oppo", "Mi"
    ],
    beauty: [
      "Cream", "Perfume", "Body Oil"
    ],
    fashion: [
      "Frock", "Tops", "Lehenga", "Jeans", "Trousers", "T-Shirt", "Sweetshirt", "Shirt"
    ],
    toy: [
      "Bike", "Plane", "Truck", "Car", "Doll"
    ]
};
export default EditProduct;