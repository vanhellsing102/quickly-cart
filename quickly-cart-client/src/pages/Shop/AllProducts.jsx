import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Product from '../../components/Product';

const AllProducts = ({allProducts, isLoading}) => {
    const itemPerPage = 25;
    const totalPage = Math.ceil(allProducts.length / itemPerPage);
    const pageNumbers = [];
    for(let i = 1; i <= totalPage; i++){
        pageNumbers.push(i);
    }
    const [currentPage, setCurrentPage] = useState(1);
    const handleChangePage = pageNumber =>{
        if(pageNumber < 1 || pageNumber > totalPage){
            return;
        }
        setCurrentPage(pageNumber);
    }
    const handlePrevious = () =>{
        if(currentPage === 1){
            return;
        }
        setCurrentPage(currentPage - 1);
    }
    const handleNext = () =>{
        if(totalPage === currentPage){
            return;
        }
        setCurrentPage(currentPage + 1);
    }
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return (
        <div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center lg:grid-cols-5 gap-5 mt-5'>
                {
                    allProducts.length > 0 &&
                    allProducts.slice(startIndex, endIndex).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='flex justify-center items-center gap-3 mt-10'>
                <button onClick={handlePrevious} className='border p-1 cursor-pointer'>
                    <GrFormPrevious></GrFormPrevious>
                </button>
                {
                    pageNumbers.map((number) =>
                        <button key={number} onClick={() => handleChangePage(number)} className={`border px-2 cursor-pointer ${currentPage === number && "bg-blue-600 text-white"}`}>{number}</button>
                    ) 
                }
                <button onClick={handleNext} className='border p-1 cursor-pointer'>
                    <GrFormNext></GrFormNext>
                </button>
            </div>
        </div>
    );
};

export default AllProducts;