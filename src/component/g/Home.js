import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'
import Menu from './Menu';
import Slider from './Slider';

function Home(props) {
    return (
        <div className='m-2'>
           
                <Row>
                    <Col>
                        <Card>
                            <Slider/>
                            <div className='border'></div>
                            <Card.Img variant="top" src="https://oshfood.kg/image_by_id/2000" />
                            <div className='border'></div>
                            <Menu />
                        </Card>
                    </Col>
                </Row>
            

        </div>
    );
}

export default Home;