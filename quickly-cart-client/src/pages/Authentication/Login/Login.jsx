import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [openEye, setOpenEye] = useState(false);
    const navigate = useNavigate();
    const {register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const location = useLocation()?.state?.from;
    // console.log(location);
    const onSubmit = (data) =>{
        const email = data.email;
        const password = data.password;
        axiosPublic.post(`/jwt`, {email})
        .then(res =>{
            console.log(res.data);
        })
        loginUser(email, password)
        .then((userCredential) =>{
            const user = userCredential.user;
            if(user){
                toast.success('Login Successfully', {
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
                location ? navigate(location) : navigate('/');
            }
        })
        .catch((error) =>{
            // console.log(error);
            toast.error(`${error}`, {
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
        })
    }
    return (
        <div className="login h-screen">
            <div className="flex justify-center items-center h-full px-10 md:px-0">
                <div className='w-full md:w-2/3 lg:w-2/5 px-5 space-y-5 border border-white rounded-sm py-5 backdrop-blur-[100px]'>
                    <h2 className="text-5xl font-semibold text-gray-300 text-center">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 text-white'>
                        <input placeholder='Email' className='rounded-sm outline-none border border-white px-5 py-1' type="email" {...register("email", {required: true})} />
                        <div className='relative'>
                            <input placeholder='Password' className='rounded-sm outline-none border border-white px-5 py-1 w-full' type={`${openEye ? "text" : "password"}`} {...register("password", {required: true})} />
                            <span onClick={() =>setOpenEye(!openEye)} className='absolute right-2 top-2 cursor-pointer'>
                                {
                                    openEye ? <PiEyeThin></PiEyeThin> : <PiEyeSlashThin></PiEyeSlashThin>
                                }
                            </span>
                        </div>
                        <input className='bg-gradient-to-l to-purple-300 cursor-pointer font-bold text-black py-1 rounded-sm from-cyan-400 hover:to-purple-200 duration-300 hover:scale-[102%] hover:from-cyan-300' type="submit" value={"Login"}/>
                    </form>
                    <div className="divider divider-error"></div>
                    <div className='flex justify-center'>
                        <Link className='font-semibold text-black border-2 border-white rounded-lg py-1 px-4 bg-gray-400' to={'/register'}>Create An Quickly Cart Account</Link>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;