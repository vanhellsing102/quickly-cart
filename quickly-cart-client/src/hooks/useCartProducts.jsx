import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useCartProducts = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email;
    const axiosPublic = useAxiosPublic();
    const {data: cartProducts = [], isLoading, refetch} = useQuery({
        queryKey: ["email", email],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/cartProducts/${email}`);
            return res.data;
        }
    })
    return [cartProducts, isLoading, refetch];
};

export default useCartProducts;