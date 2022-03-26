import React, { useEffect, useState } from 'react';
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
    //console.log(selectedItem);
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
                    <h3>Selected Laptops :</h3>
                    <div>
                        {
                            selectedItem.map(item => <p key={item.id}>{item.name}</p>)
                        }
                    </div>
                    <button>CHOOSE 1 FOR ME</button>
                    <button>CHOOSE AGAIN</button>
                </div>
           </div>
    );
};

export default Laptops;