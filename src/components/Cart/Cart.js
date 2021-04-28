import React from 'react';

const Cart = (props) => {
    console.log('cart props', props);

    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    console.log('price', cart.price);

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 30) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 5;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const roundNum = Num => {
        const precision = Num.toFixed(2)
        return Number(precision);
    }

    const tax = roundNum(total / 10);
    const totalPrice = (shipping + total + Number(tax));

    return (
        <div>
            <h2>order summery</h2>
            <h3>Items ordered: {cart.length}</h3>
            <h4> price: {roundNum(total)}</h4>
            <p><small>Shipping Charge: {shipping}</small></p>
            <p><small> Estimated Tax: {tax}</small></p>
            <h3>Total price: {roundNum(totalPrice)}</h3>
        </div>
    );
};

export default Cart;