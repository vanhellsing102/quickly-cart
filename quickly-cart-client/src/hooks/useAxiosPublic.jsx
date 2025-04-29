import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: "https://quickly-cart-server.vercel.app",
    // baseURL: "http://localhost:3000",
    withCredentials: true,
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;