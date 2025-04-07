import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const EditProduct = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    const [product, setProduct] = useState({});

    useEffect(() =>{
        axiosPublic.get(`/product/${id}`)
        .then(res =>{
            setProduct(res.data);
        })
    }, [id])
    console.log(product)
    return (
        <div>
            edit product
        </div>
    );
};

export default EditProduct;