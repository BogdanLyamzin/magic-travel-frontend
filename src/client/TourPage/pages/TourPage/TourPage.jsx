import React from 'react';
import { Card} from 'react-bootstrap';
import './tourPage.scss'; 

const TourPage = ({card}) => {  
    const result = card.buyDay.split('$$')
    const daysDescription = result.map((item, index) => <div className='d-flex sp-tour-day' key={index}><div className='day-number'>День {index+1}</div><div className='day-details-box'>{item}</div></div>)
    return (    
        <div className='sp-tour-container'>
            <div><div className='d-flex justify-content-between sp-tour-info'>    
                    <div className='sp-tour-name'>{card.name}<div className='sp-tour-secondarytext'><div className='sp-tour-length'>{result.length}дні(в)</div></div></div>
                    <div>Ціна туру від:{card.price}$</div>
                </div>
                <img className='card-img-top' src={card.img}/>
                <div className='sp-tour-name'>Коротко про тур</div>
                <div>
                {card.description}
                </div>
                <button className='sp-tour-order'>Замовити зараз</button>
            <div> 
                    {daysDescription}
                </div>
                
                </div>
        </div>   
    );
}

export default TourPage;