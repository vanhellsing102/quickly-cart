import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useProducts = () => {
    const axiosPublic = useAxiosPublic();
    const {data: products = [], isLoading, isError} = useQuery({
        queryKey: ['products'],
        queryFn: async() =>{
            // console.log('fetching data');
            const res = await axiosPublic.get('/allProducts', {timeout: 3000})
            // console.log('api data', res.data);
            return res.data;
        }, 
        // retry: 1
    })
    return [products, isError, isLoading];
};

export default useProducts;