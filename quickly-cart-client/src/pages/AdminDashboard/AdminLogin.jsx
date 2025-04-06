import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const AdminLogin = () => {
    const {register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = (data) =>{
        const adminData = {
            userName: data.userName,
            password: data.password
        }
        axiosPublic.post('/admin', adminData)
        .then(res =>{
            if(res.data._id){
                navigate('/adminProfile');
            }else{
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
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 md:w-1/3 bg-slate-200 p-7 rounded-sm'>
                <div>
                    <label htmlFor="userName" className='text-sm font-semibold text-slate-700 block'>User Name:</label>
                    <input placeholder='User name' className='rounded-sm outline-none w-full border border-slate-500 px-5 py-1' type="text" {...register("userName", {required: true})} />
                </div>
                <div>
                    <label htmlFor="password" className='text-sm font-semibold text-slate-700 block'>Password:</label>
                    <input placeholder='Username' className='rounded-sm outline-none w-full border border-slate-500 px-5 py-1' type="text" {...register("password", {required: true})} />
                </div>
                <input className='bg-gradient-to-l to-purple-300 cursor-pointer font-bold text-black py-1 rounded-sm from-cyan-400 hover:to-purple-200 duration-300 hover:scale-[102%] hover:from-cyan-300' type="submit" value={"Login"}/>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AdminLogin;