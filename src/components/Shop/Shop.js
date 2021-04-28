import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Items from '../Items/Items';
import './shop.css'
const Shop = () => {
    console.log(fakeData)
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    return (
        <div className='shop-continar'>
            <div className='product-continar'>
                {
                    products.map(pd => <Items product={pd}></Items>)
                }

            </div>
            <div className="card-continar">
                <h1>this is card</h1>
            </div>

        </div>
    );
};

export default Shop;