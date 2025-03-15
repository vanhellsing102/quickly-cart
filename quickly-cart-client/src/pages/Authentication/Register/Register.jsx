import React, { useContext, useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Register = () => {
    const [openEye, setOpenEye] = useState(false);
    const {register, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) =>{
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        if(password == confirmPassword){
            createUser(email, password)
            .then(userCredential =>{
                const user = userCredential.user;
                // console.log(user);
                if(user){
                    toast.success('Register Successfully', {
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
                    navigate('/');
                }
                const newUser = {
                    email: email,
                    password: password,
                    role: "user"
                }
                axiosPublic.post('/createUser', newUser)
                .then(res =>{
                    // console.log(res.data);
                })
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
    }
    return (
        <div className="register h-screen">
            <div className="flex justify-center items-center h-full px-10 md:px-0">
                <div className='w-full md:w-2/3 lg:w-2/5 px-5 space-y-5 border border-white rounded-sm py-5 backdrop-blur-[100px]'>
                    <h2 className="text-5xl font-semibold text-gray-300 text-center">Sign Up</h2>
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
                        <div className='relative'>
                            <input placeholder='Confirm Password' className='rounded-sm outline-none border border-white px-5 py-1 w-full' type={`${openEye ? "text" : "password"}`} {...register("confirmPassword", {required: true})} />
                            <span onClick={() =>setOpenEye(!openEye)} className='absolute right-2 top-2 cursor-pointer'>
                                {
                                    openEye ? <PiEyeThin></PiEyeThin> : <PiEyeSlashThin></PiEyeSlashThin>
                                }
                            </span>
                        </div>
                        <input className='bg-gradient-to-l to-purple-300 cursor-pointer font-bold text-black py-1 rounded-sm from-cyan-400 hover:to-purple-200 duration-300 hover:scale-[102%] hover:from-cyan-300' type="submit" value={"Register"}/>
                    </form>
                    <div className="divider divider-error"></div>
                    <div className='flex justify-center'>
                        <Link className='font-semibold text-black border-2 border-white rounded-lg py-1 px-4 bg-gray-400' to={'/login'}>Login Quickly Cart Account</Link>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;