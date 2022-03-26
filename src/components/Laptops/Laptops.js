import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import './Laptops.css';


const Laptops = () => {
    const [laptops, setlaptops] = useState([]);
    const [selectedItem, setSelectedItem] = useState ([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setlaptops(data));
    },[])

    const getSelectedItem = (laptop) =>{
        //console.log(laptop);
        const newItem = [...selectedItem, laptop];
        setSelectedItem(newItem);   
    }

    return (
        
            <div className='laptop-container'>
                <div>
                <h3 style={{textAlign : 'center'}}>Here Your Laptops</h3>
                   <div className='laptops'>
                        {
                            laptops.map(laptop =><Laptop
                            laptop ={laptop}
                            key ={laptop.id}
                            getSelectedItem ={getSelectedItem}></Laptop>)
                        }
                   </div>
                </div>
                <div className='side-bar'>
                        <Cart
                        selectedItem={selectedItem}
                        key={selectedItem.id}></Cart>
                </div>
           </div>
    );
};

export default Laptops;