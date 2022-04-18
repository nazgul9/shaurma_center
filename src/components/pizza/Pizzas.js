import React from 'react';
import Cards from '../../app/Cards'
import pizzas from './PizzaProduct';

const pizza = pizzas

function Pizzas(props) {
    return (
        <div>
            <h1>Пицца</h1>
            <Cards name={pizza}/>

        </div>
    );
}

export default Pizzas;