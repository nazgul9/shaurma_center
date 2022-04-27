import React from 'react';
import shaurmas from './shaurmaProduct';
import Cards from '../../app/Cards';

const shaurma =shaurmas

function Shaurma(props) {
    return (
        <div>
            <h1>ШАУРМА</h1>
         <Cards name={shaurma} />   
        </div>
    );
}

export default Shaurma;