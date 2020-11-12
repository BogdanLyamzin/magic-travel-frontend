import React from 'react';
import { Card, Button, Container, Row, Col, Nav} from 'react-bootstrap'; 

const TourList = ({list}) => {
    // const headerStyle ={
    //     backgroundImage: `url(https://picsum.photos/300)`,
    //     height: '300px',
    //     width: '300px',        
    //   } 

const Array = list.map((item, index) => { 
    return (
        <Col key={index}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.keys}</Card.Text>
                        <Card.Text>${item.price}</Card.Text>
                        {/* <Button variant="primary">Див. деталі</Button> */}
                        <Nav.Link href={"/specialtour/6"}>Див. деталі</Nav.Link>
                    </Card.Body>
            </Card>
            {/* <button>{item.name}</button>
            <div style={headerStyle}></div>
            <span>price:{item.price}</span>
            <span>tags:{item.keys}</span>                             */}
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