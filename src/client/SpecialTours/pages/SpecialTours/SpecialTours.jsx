import React from 'react';
import TourList from '../../../../app/componets/TourList';
import SpecialToursJSON from '../../../../services/specialTours.json';

const SpecialTours = ({setCard}) => {      
 return (
    <>
        <TourList list = {SpecialToursJSON} setCard={setCard}/>        
    </> 
 );
}

export default SpecialTours;