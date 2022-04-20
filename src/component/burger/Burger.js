import React from 'react';
import burgers from './bugerproduct';
import Cards from '../../app/Cards'

const burger = burgers

function Burger(props) {
    return (
        <div>
            <Cards name={burger}/>
        </div>
    );
}

export default Burger;