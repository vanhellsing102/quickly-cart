import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const AllOrderProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [allOrder, setAllOrder] = useState([]);
    useEffect( () =>{
        axiosPublic.get('/all-order')
        .then(res =>{
            setAllOrder(res.data);
        })
    }, [])
    // console.log(allOrder)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Order Email</th>
                      <th>Order Date</th>
                      <th>Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                       allOrder.length > 0 && allOrder?.map((order, index) =>
                            <tr className="hover:bg-base-300">
                                <td>{index + 1}</td>
                                <td><img className='w-14 h-12' src={order?.image} alt="" /></td>
                                <td>{order?.name}</td>
                                <td>{order?.brand}</td>
                                <td>{order?.category}</td>
                                <td>${order?.totalPrice}</td>
                                <td>{order?.quantity}</td>
                                <td>{order?.userEmail}</td>
                                <td>{order?.date}</td>
                                <td className={`${order?.status === "success" ? "text-green-500" : "text-red-500"}`}>{order?.status}!</td>
                            </tr>
                        )
                    }
                  </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrderProduct;