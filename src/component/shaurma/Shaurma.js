import React from 'react';
import { Card } from 'react-bootstrap';
import shaurma from './ShaurmaProduct';

const roll = shaurma


function Shaurma(props) {
    return (
        <div className='m-2'>
           <h1>Шаурма, Гамбургер, Хот-Дог</h1>
        {roll.map(a=>{
            return(
                <Card >
                <Card.Img variant="top"style={{padding:'7px'}} src={a.img} />
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

export default Shaurma;