import React from 'react';
import burgers from './bugerproduct';
import Cards from '../../app/Cards'

const burger = burgers

function Burger(props) {
    return (
        <div>
            <h1>БУРГЕР</h1>
            <Cards name={burger}/>
        </div>
    );
}

export default Burger;