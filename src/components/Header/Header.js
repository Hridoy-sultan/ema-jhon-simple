import React from 'react';
import logo from '../../../src/images/logo.png';
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">shop</a>
                <a href="/manage">manage inventory</a>
                <a href="review">order review</a>
            </nav>
        </div>
    );
};

export default Header;