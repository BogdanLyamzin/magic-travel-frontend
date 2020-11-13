import React from 'react';
import { Card, Button, Container, Row, Col, Nav} from 'react-bootstrap';
import {Redirect, Router, Route, Link, useHistory} from 'react-router-dom';   

const TourList = ({list, setCard}) => {    

    let history = useHistory();
  
    const redirect = (item) => {
      setCard(item);        
      history.push('/specialtour')
    }

const Array = list.map((item, index) => { 
    return (
        <Col key={index}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.keys}</Card.Text>
                        <Card.Text>${item.price}</Card.Text>
                        <button onClick={()=>redirect(item)}>Redirect</button>
                    </Card.Body>
            </Card>            
        </Col>       
    )});
    return (        
            <Container fluid>
                <Row md={3}>
                    {Array}
                </Row>            
            </Container>        
    )
};

export default TourList;