import React from 'react';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ManageProduct = () => {
    const [products ,isError, isLoading, refetch] = useProducts();
    const axiosPublic = useAxiosPublic();
    const handleDeleteProduct = id =>{
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
                axiosPublic.delete(`delete-product/${id}`)
                .then(res =>{
                    if(res.data.deletedCount){
                        toast.error(`Deleted Product`, {
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
                })
            }
          });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        products?.map((product, index) =>
                            <tr key={product._id} className="hover:bg-base-300">
                                <th>{index + 1}</th>
                                <td><img className='w-14 rounded-sm h-12 border border-slate-800' src={product?.image} alt="" /></td>
                                <td>{product?.name}</td>
                                <td>{product?.category}</td>
                                <td>${product?.price}</td>
                                <td className='space-x-10'>
                                    <Link to={`edit-product/${product?._id}`} className='text-xl'><MdOutlineEditNote></MdOutlineEditNote></Link>
                                    <button onClick={() =>handleDeleteProduct(product?._id)} className='cursor-pointer text-lg hover:bg-red-500 rounded-full p-1 hover:text-white'><AiOutlineDelete></AiOutlineDelete></button>
                                </td>
                            </tr>
                        )
                    }
                  </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageProduct;