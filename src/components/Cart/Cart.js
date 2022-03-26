import React from 'react';
import './Cart.css';

const Cart = (props) => {
        //console.log(props.selectedItem);
    const cart = props.selectedItem;
    //console.log(cart.length);
    let showCart;
    for(const item of cart){
        // console.log(item.name);
         showCart =item.name;
     }
   //console.log(showCart);

    return (
        <div className='cart'>
                <h3>Selected Laptops :</h3>
                    <div>
                        <h3>
                            {
                                cart.map(x => <p>{x.name}</p>)
                            }
                        </h3>
                    </div>
                    <button>CHOOSE 1 FOR ME</button>
                    <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;