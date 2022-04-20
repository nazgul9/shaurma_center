import React from 'react';
import shaurmas from './shaurmaProduct';
import Cards from '../../app/Cards';

const shaurma =shaurmas

function Shaurma(props) {
    return (
        <div>
         <Cards name={shaurma} />   
        </div>
    );
}

export default Shaurma;