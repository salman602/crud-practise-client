import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRef } from 'react/cjs/react.development';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleProductName = (e) =>{
        const updatedProductName = e.target.value;
        const updatedProduct = {name: updatedProductName, price: product?.price, quantity: product?.quantity};
        setProduct(updatedProduct)
    }
    
    const handleProductPrice = (e) =>{
        const updatedProductPrice = e.target.value;
        const updatedProduct = {name: product?.name, price: updatedProductPrice, quantity: product?.quantity};
        setProduct(updatedProduct)
    }

    const handleProductQuantity = (e) =>{
        const updatedProductQuantity = e.target.value;
        const updatedProduct = {name: product?.name, price: product?.price, quantity: updatedProductQuantity};
        setProduct(updatedProduct)
    }
    
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/products/${id}`;
        fetch(url,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.matchedCount > 0){
                alert('Product updated successfully!!');
                // e.target.reset();
            }
            
        })
        

    }
    return (
        <div>
            <h3>This is update product page.</h3>
            <h4>Product Name : {product?.name}</h4>
            <form onSubmit={handleUpdateProduct}>
                <input onChange={handleProductName} value={product?.name || ''} type="text" name="" id="" placeholder="Name" /><br />
                <input onChange={handleProductPrice} value={product?.price || ''} type="number" name="" id="" placeholder="Price" /><br />
                <input onChange={handleProductQuantity} value={product?.quantity || ''} type="number" name="" id="" placeholder="Quantity" /><br />
                <input type="submit" value="Update Product" />
                {/* <button onClick={()=>handleUpdateProduct(product._id)}>Update product</button> */}
            </form>
        </div>
    );
};

export default UpdateProduct;