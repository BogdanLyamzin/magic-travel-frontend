import React from 'react';
import TourList from '../../../../app/componets/TourList';
import SpecialToursJSON from '../../../../services/specialTours.json';

const SpecialTours = () => {      
 return (
    <>
        <TourList list = {SpecialToursJSON}/>        
    </> 
 );
}

export default SpecialTours;