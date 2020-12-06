import React from 'react';
import TourList from '../../../../app/componets/TourList';
import SpecialToursJSON from '../../../../services/specialTours.json';
import './specialTours.scss';

const SpecialTours = ({setCard}) => {      
 return (
    <>
        <div className='align-items-center'>
            <div className='sp-tour-container'>
                <div className='text-uppercase text-center sp-tour-maintext'>Тематичні тури</div>
                <div className='text-uppercase text-center sp-tour-secondarytext'>Перелік доступних тематичних турів</div>
                <TourList list = {SpecialToursJSON} setCard={setCard}/>
            </div>        
        </div>
    </>
 );
}

export default SpecialTours;