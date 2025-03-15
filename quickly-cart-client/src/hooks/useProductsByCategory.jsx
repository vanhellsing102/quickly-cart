import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProductsByCategory = (category) => {
    const axiosPublic = useAxiosPublic();
    const {data: productsCategory = [], isLoading} = useQuery({
        queryKey: ['category', category],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/categoryProducts/${category}`);
            return res.data;
        }
    })
    return [productsCategory, isLoading];
};

export default useProductsByCategory;