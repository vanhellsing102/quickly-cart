import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const History = () => {
    const axiosPublic = useAxiosPublic();
    const [paymentOrder, setPaymentOrder] = useState([]);
    useEffect( () =>{
        axiosPublic.get('/payment')
        .then(res =>{
            setPaymentOrder(res.data);
        })
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-medium my-7 flex items-center justify-center gap-2'><MdOutlineHistoryToggleOff></MdOutlineHistoryToggleOff>Payment History</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">Payment Email</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Transaction ID</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Payment Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        paymentOrder.length > 0 &&
                        paymentOrder.map(order => <tr key={order?._id}>
                            <td className="border border-gray-300 px-4 py-2">{order?.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{order?.tran_id}</td>
                            <td className="border border-gray-300 px-4 py-2">${order?.totalAmount}</td>
                            <td className="border border-gray-300 px-4 py-2">{order?.date}</td>
                            <td className="border border-gray-300 px-4 py-2">{order?.status}</td>
                        </tr>)
                    }
                  </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;