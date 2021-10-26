import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const qunatityRef = useRef();
    const handleAddProduct = (e) =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = qunatityRef.current.value;
        const newProduct = {name, price, quantity};
        console.log(newProduct);

        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Prodcut Added successfully.');
                e.target.reset()
            }
        })
    }
    return (
        <div>
            <h3>This is add product</h3>
            <form onSubmit={handleAddProduct}>
                <input ref={nameRef} type="text" name="" id="" placeholder="Name" /><br />
                <input ref={priceRef} type="number" name="" id="" placeholder="Price" /><br />
                <input ref={qunatityRef} type="number" name="" id="" placeholder="Quantity" /><br />
                <input type="submit" value="Add Product" /> 
            </form>
        </div>
    );
};

export default AddProduct;