import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.selectedItem;
    let showCart;
    for(const item of cart){
         console.log(item.name);
     }

    return (
        <div className='cart'>
                <h3>Selected Laptops :</h3>
                    <div>
                        <h3>
                            {
                            }
                        </h3>
                    </div>
                    <button>CHOOSE 1 FOR ME</button>
                    <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;