import React from 'react';
import burgers from './BurgerProduct'
import Cards from '../../app/Cards'

const burger = burgers
console.log(burgers);

function Burgers(props) {
    return (
        <div>
            <h1>Бургер</h1>
            <Cards name={burger} />
            
        </div>
    );
}

export default Burgers;