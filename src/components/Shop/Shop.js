import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Items from '../Items/Items';
import Cart from '../Cart/Cart'
import './shop.css'
const Shop = () => {
    console.log(fakeData)
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleButton = (product) => {
        console.log('product added', product)
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-continar'>
            <div className='product-continar'>
                {
                    products.map(pd => <Items
                        handleButton={handleButton}
                        product={pd}>

                    </Items>)
                }

            </div>
            <div className="card-continar">
                <Cart cart={cart}> </Cart>
            </div>

        </div>
    );
};

export default Shop;