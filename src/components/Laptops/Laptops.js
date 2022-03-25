import React, { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Laptops.css';


const Laptops = () => {
    const [laptops, setlaptops] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setlaptops(data));
    },[])

    return (
        
            <div className='laptop-container'>
                <div>
                <h3 style={{textAlign : 'center'}}>Here Your Laptops</h3>
                   <div className='laptops'>
                        {
                            laptops.map(laptop =><Laptop
                            laptop ={laptop}
                            key ={laptop.id}></Laptop>)
                        }
                   </div>
                </div>
                <div className='side-bar'>
                    <h3>Selected Laptops :</h3>
                    
                    <button>Choose for me</button>
                    <button>Choose Again</button>
                </div>
           </div>
    );
};

export default Laptops;