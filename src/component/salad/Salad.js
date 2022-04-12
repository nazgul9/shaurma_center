import React from 'react';
import { Card } from 'react-bootstrap';
import Salats from './SaladProduct';

const roll = Salats

function Salad(props) {
    return (
        <div>
           <h1>Салат</h1>
            {roll.map(a=>{
            return(
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
            )
        })}
        </div>
    );
}

export default Salad;