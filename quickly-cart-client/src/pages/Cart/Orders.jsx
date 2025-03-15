import React from 'react';
import useCartProducts from '../../hooks/useCartProducts';

const Orders = () => {
    const [cartProducts, isLoading, refetch] = useCartProducts();
    return (
        <div className='mt-16'>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">Order No</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Product ID</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Order Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        cartProducts.length > 0 &&
                        cartProducts.map((product, index) =>
                            <tr className='text-slate-600 text-[15px]' key={product._id}>
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.productId}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.date}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
                                <td className="border border-gray-300 px-4 py-2">${product.totalPrice}</td>
                            </tr>
                        )
                    }
                  </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;