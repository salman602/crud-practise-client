import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/products">Manage Products</Link>
                <Link to="/products/add">Add Product</Link>
            </nav>

        </div>
    );
};

export default Header;