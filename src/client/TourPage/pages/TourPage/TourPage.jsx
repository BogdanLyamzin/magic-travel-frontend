import React from 'react';
import { Card, Button} from 'react-bootstrap'; 

const TourPage = ({card}) => {       
 return (    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>${card.price}</Card.Text>
            <Card.Text>
            {card.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>   
 );
}

export default TourPage;