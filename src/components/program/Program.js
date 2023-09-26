import React, { useState } from 'react';
import "./program.css"
import ClassItem from '../classItem/ClassItem';
import weabData from "../weabData/products.json"
import Cart from '../cart/Cart';

const Program = () => {
    const first  = weabData;
    const [corch, setCorch]= useState(first);
    const [cart, setCart] = useState([]);

    const hendelAddCorch= (value)=>{
       const newCart = [...cart, value];
       
       setCart(newCart)
      
    
    }
    // console.log('cilick me', value);
    
    return (
        <div className='program-container'>
            <div className="program">
             {
                corch.map(val=> <ClassItem
                    hendelCorch = {hendelAddCorch}
                     value= {val}>

                     </ClassItem>)
             }
            </div>

            <div className="cart">
               <Cart cart = {cart}></Cart>
               

            </div>
        </div>
    ); 
};

export default Program;