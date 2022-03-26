import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    //console.log(props);
    const [showProuduct, setShowProduct] =useState([]);
    const cart = props.selected;


    //  const chooseOne = () =>{
    //     nCart = 0;
    //  }

    return (
        <div className='cart'>
                <h3>Selected Laptops :</h3>
                    <div>
                       {cart.map(item =><h4 key={item.id}>{item.name}</h4>)}
                    </div>
                    <button className='cart-btn'>CHOOSE 1 FOR ME</button>
                    <button className='cart-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;