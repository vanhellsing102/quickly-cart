import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProductBySubcategory = (subCategory) => {
    const axiosPublic = useAxiosPublic();
    const {data: productsSubcategory = []} = useQuery({
        queryKey: ['subcategory', subCategory],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/subcategoryProducts/${subCategory}`);
            return res.data;
        }
    })
    return [productsSubcategory];
};

export default useProductBySubcategory;