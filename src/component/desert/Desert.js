import React from 'react';
import { Card } from 'react-bootstrap';
import deserts from './DesertProduct'

const desert = deserts
console.log(deserts);

function Desert(props) {
    return (
        <div>
            <h1>
                Десерты
            </h1>
            {desert.map(a => (
                <Card >
                    <Card.Img variant="top" src={a.img} />
                    <Card.Body>
                        <Card.Title>{a.title}</Card.Title>
                        <Card.Text>{a.description}
                            <h2>{a.price}</h2>
                        </Card.Text>
                    </Card.Body>
                    <div className='border'></div>
                </Card>
            ))}

        </div>
    );
}

export default Desert;