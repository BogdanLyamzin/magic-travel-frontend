import React from 'react';
import './tourPage.scss'; 

const TourPage = ({card}) => {  
    const result = card.buyDay.split('$$');
    const imgDays = JSON.parse(card.img_day);
    const daysDescription = result.map((item, index) => {        
    return(
    <div className='d-flex sp-tour-day' key={index}>
        <div className='day-number'>День {index+1}</div>
        <div className='day-details-box d-flex'>
            <div className='day-content-text'>{item}</div>
            <div className='day-content-image'>
                <img className='day-content-image-img'src={imgDays[index]} alt=""/>
            </div>
        </div>
    </div>)})
    return (    
        <div className='sp-tour-container'>
            <div>
                <div className='sp-tour-mainblock d-flex justify-content-between'>
                    <div className='sp-tour-mainimage'>
                        <div className='d-flex justify-content-between sp-tour-info'>    
                            <div className='sp-tour-name'>
                                {card.name}
                                    <div className='sp-tour-secondarytext'>
                                    <div className='sp-tour-length'>{result.length}дні(в)</div>
                                </div>
                            </div>
                            <div className='sp-tour-name'>Ціна туру від:{card.price}$</div>
                        </div>
                        <img className='sp-tour-titleimage' src={card.img} alt={card.name}/>
                        <div className='sp-tour-name sp-tour-name-main'>Коротко про тур</div>
                        <div>
                            {card.description}
                        </div>
                        <button className='sp-tour-order low'>Замовити зараз</button>
                    </div>
                    <div className='sp-tour-advert'>
                        <button className='sp-tour-order high'>Замовити зараз</button>
                        <img className='sp-tour-advertimage' src="./advert.jpg" alt=""/>
                    </div>
                </div>                             
            <div> 
                    {daysDescription}
                </div>
                
                </div>
        </div>   
    );
}

export default TourPage;