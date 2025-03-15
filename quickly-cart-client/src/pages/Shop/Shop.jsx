import React, { useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import AllProducts from '../Shop/AllProducts';
import useProductsByCategory from '../../hooks/useProductsByCategory';
import { IoSearchOutline } from 'react-icons/io5';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useProducts from '../../hooks/useProducts';

const Shop = () => {
    const [products, isError] = useProducts();
    const axiosPublic = useAxiosPublic();
    // console.log(products, isError, isLoading);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [category, setCategory] = useState();
    const [productsCategory, isLoading] = useProductsByCategory(category);
    const handleProductCategory = (category) =>{
        setCategory(category);
    }

    const [searchText, setSearchText] = useState('');
    const [searchingProducts, setSearchingProducts] = useState([]);
    const handleSearchText = e =>{
        setSearchText(e.target.value);
    }
    const handleSearch = async() =>{
        const res = await axiosPublic.get(`/search?query=${searchText}`);
        setSearchingProducts(res.data);
    }
    return (
        <div>
            <div>
            <div className={` flex justify-center py-2 bg-gradient-to-l to-slate-200 from-slate-500`}>
                <div className="join">
                    <div>
                      <label className="input validator join-item">
                        <input onChange={handleSearchText} type="search" placeholder="Search" className='outline-none border-none' required/>
                      </label>
                    </div>
                    <button onClick={handleSearch} className="btn btn-neutral join-item">
                        <IoSearchOutline className='text-xl font-bold'></IoSearchOutline>
                    </button>
                </div>
            </div>
                <button className='cursor-pointer text-2xl mt-2 bg-gradient-to-t to-cyan-200 from-cyan-500 w-[100px] flex justify-center py-1 rounded-xl group' onClick={toggleDrawer}><AiOutlineMenuUnfold className='group-hover:translate-x-5 duration-500'></AiOutlineMenuUnfold></button>
                <Drawer open={isOpen} onClose={toggleDrawer} direction='left' className='flex flex-col justify-center gap-2 items-center'>
                    {
                        categoriesLink.map(data => 
                        <button onClick={() =>handleProductCategory(data.category)} className='hover:text-slate-600 text-slate-800 cursor-pointer bg-gradient-to-l py-2 w-1/2 to-cyan-200 from-cyan-500 rounded-sm font-bold' key={data.id}>
                            {data.name}
                        </button>)
                    }
                </Drawer>
            </div>
            <AllProducts allProducts={category == null ? searchingProducts.length > 0 ? searchingProducts : products : productsCategory} isLoading={isLoading}></AllProducts>
        </div>
    );
};
const categoriesLink = [
    {
        id: 1,
        category: "electronics",
        name: "Electronics"
    },
    {
        id: 2,
        category: "food",
        name: "Food"
    },
    {
        id: 3,
        category: "furniture",
        name: "Furniture"
    },
    {
        id: 4,
        category: "mobile",
        name: "Mobile"
    },
    {
        id: 5,
        category: "beauty",
        name: "Beauty"
    },
    {
        id: 6,
        category: "fashion",
        name: "Fashion"
    },
    {
        id: 7,
        category: "toy",
        name: "Toy"
    }
]
export default Shop;