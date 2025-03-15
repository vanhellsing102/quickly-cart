import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProductsByBrandName = (brand) => {
    const axiosPublic = useAxiosPublic();
    const {data: products = []} = useQuery({
        queryKey: ["brand", brand],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/brandProducts/${brand}`);
            console.log(res.data);
            return res.data;
        }
    })
    return [products];
};

export default useProductsByBrandName;