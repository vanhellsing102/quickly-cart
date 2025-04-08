import { BsCartCheckFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import useCartProducts from "../../hooks/useCartProducts";
import useProducts from "../../hooks/useProducts";

const Dashboard = () => {
    const [cartProducts] = useCartProducts();
    const [products] = useProducts();
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-7'>
            <div className='flex items-center gap-3 bg-amber-400 justify-center py-5 rounded-sm'>
                <BsCartCheckFill className="text-xl"></BsCartCheckFill>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Total Order</h2>
                    <p className="text-lg font-medium">{cartProducts.length}</p>
                </div>
            </div>
            <div className='flex items-center gap-3 bg-cyan-400 justify-center py-5 rounded-sm'>
                <FaWallet className="text-xl"></FaWallet>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Total Revenue</h2>
                    <p className="text-lg font-medium">1000</p>
                </div>
            </div>
            <div className='flex items-center gap-3 bg-fuchsia-400 justify-center py-5 rounded-sm'>
                <MdOutlineProductionQuantityLimits className="text-xl"></MdOutlineProductionQuantityLimits>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Total Product</h2>
                    <p className="text-lg font-medium">{products.length}</p>
                </div>
            </div>
            <div className='flex items-center gap-3 bg-indigo-400 justify-center py-5 rounded-sm'>
                <FaWallet className="text-xl"></FaWallet>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Total Revenue</h2>
                    <p className="text-lg font-medium">1000</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;