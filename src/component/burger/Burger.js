import React from 'react';
import { Card } from 'react-bootstrap';
import Burgers from './burgerProduct'

const product = Burgers
{console.log(product)}


function Burger(props) {
    return (
        <div>
            <h1>Гамбургеры</h1>
            {product.map(a=>(
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

export default Burger;