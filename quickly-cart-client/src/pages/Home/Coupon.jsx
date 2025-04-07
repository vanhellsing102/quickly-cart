import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import  './Coupon.css';

const Coupon = () => {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() =>{
        setOpenModal(true);
    }, []);
    const closeModal = () =>{
        setOpenModal(false);
    }
    return (
        <div>
            <Modal isOpen={openModal} onRequestClose={closeModal} contentLabel="Welcome Modal" style={{content: {  top: '50%',  left: '50%',  right: 'auto',  bottom: 'auto',  marginRight: '-50%',  transform: 'translate(-50%, -50%)',},}}>
                <div className='text-xl font-medium bg-slate-200 p-5 rounded-sm coupon'>
                    <h2 className='text-black text-center font-medium text-xl'>Coupon !!!</h2>
                    <p>Enjoy 10% off using (<span className='text-blue-600 font-medium'>murad105</span>) coupon code!!!</p>
                    <div className='flex justify-end mt-5'>
                        <button className='bg-slate-400 text-black px-2 rounded-sm' onClick={closeModal}>close</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Coupon;