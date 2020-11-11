import React from 'react';

const TourList = ({list}) => {
    const headerStyle ={
        backgroundImage: `url(https://picsum.photos/300)`,
        height: '300px',
        width: '300px',        
      }    
const Array = list.map((item, index) => {    
    return (
        <div key={index}>
            <button>{item.name}</button>
            <div style={headerStyle}></div>
            <span>price:{item.price}</span>
            <span>tags:{item.keys}</span>                             
        </div>
        
    )});
    return (
        <div>{Array}</div>
    )
};

export default TourList;