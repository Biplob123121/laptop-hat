import React from 'react';
import './Laptop.css';

const Laptop = (props) => {
     //console.log(props);
     const {getSelectedItem, laptop} = props;
     const {picture, name, price, brand} = laptop;
    return (
        <div className='cart'>
            <img src={picture} alt="" />
            <div className='cart-info'>
                <h4>Name : {name}</h4>
                <p>Price : {price}</p>
                <p><small>Brand : {brand}</small></p>
            </div>
            <div >
                <button onClick={() =>getSelectedItem(props.laptop)} className='cart-btn'>CHOOSE NOW</button>
            </div>
        </div>
    );
};

export default Laptop;