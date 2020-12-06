import React from 'react';
import { useHistory } from 'react-router-dom';
import './tourList.scss';   

const TourList = ({list, setCard}) => {    

    let history = useHistory();
  
    const redirect = (item) => {
      setCard(item);        
      history.push('/specialtour')
    }

const Array = list.map((item, index) => { 
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 m-b30 sp-tour" key={index}>
            <div>
                <div className='sp-tour-price'>${item.price}</div>
                <div className='sp-tour-view'>                                   
                    <img className="card-img-top sp-tour-img" src={item.img} alt={item.name}/>                                           
                </div>    
                    <div className='sp-tour-content'>                            
                        <div className='text-center sp-tour-name'>{item.name}</div>
                        <div className='text-center sp-tour-tags'>{item.keys}</div>
                        <button className='sp-tour-button'onClick={()=>redirect(item)}>Дивитись тур</button>
                    </div>
            </div>            
        </div>       
    )});
    return (           
        <div className='row'>{Array}</div>       
    )
};

export default TourList;