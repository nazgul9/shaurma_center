import React from 'react';
import { Card, Col } from 'react-bootstrap'


function Home(props) {
    return (
        <div>
            <Col>
            <Card>
                <Card.Img variant="top" src="https://oshfood.kg/image_by_id/2000" />
            </Card>
            </Col>
        </div>
    );
}

export default Home;