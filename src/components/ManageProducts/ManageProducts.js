import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete!');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Product has been deleted successfully.');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }

    }
    return (
        <div>
            <h3>this is manage Products</h3>
            <ol>
                {
                    products.map(product => <li
                        key={product._id}>
                        <b>Name: </b>{product.name}--- <b>Price: </b>{product.price}--- <b>Quantity: </b>{product.quantity}
                        <Link to={`/products/update/${product._id}`}><button>Update</button></Link>
                        <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default ManageProducts;