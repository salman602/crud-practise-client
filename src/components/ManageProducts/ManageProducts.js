import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h3>this is manage Products</h3>
            <ol>
                {
                    products.map(product => <li
                    key={product._id}>
                        <b>Name: </b>{product.name}--- <b>Price: </b>{product.price}--- <b>Quantity: </b>{product.quantity}
                    </li>)
                }
            </ol>
        </div>
    );
};

export default ManageProducts;