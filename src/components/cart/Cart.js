import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart= props.cart;
   let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let course = cart[i];
        total = total+ course.price;
        
    }
    
        
    

    
    return (
        <div className='course'>
            <h3>Course Summar:{cart.length}</h3>
           <p>Price:{total}</p>
            
            
            
        </div>
    );
};

export default Cart;