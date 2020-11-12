import React from 'react';
import TourList from '../../../../app/componets/TourList';
import SpecialToursJSON from '../../../../services/specialTours.json';
import { Card, Button, Container, Row, Col, Nav} from 'react-bootstrap'; 

const TourPage = ({bla}) => {          
 return (    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>   
 );
}

export default TourPage;