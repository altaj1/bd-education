import React from 'react';
import "./classitem.css"

const ClassItem = (props) => {
    
   
    return (
        <div className='topic'>
            <div className="program-img">
              <img src={props.value.img} alt="" />
              <h3>{props.value.name}</h3>
              <h6>Price:${props.value.price}</h6>
              <button onClick={()=>props.hendelCorch(props.value)} className='button'>By Now</button>
            </div>
            
        </div>
    );
};

export default ClassItem;