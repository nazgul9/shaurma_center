import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'
import Menu from './Menu';

function Home(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <div className='border'></div>
                            <Card.Img variant="top" src="https://oshfood.kg/image_by_id/2000" />
                            <div className='border'></div>
                            <Menu />
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Home;