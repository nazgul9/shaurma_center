import React from 'react';
import shaurmas from './ShaurmaProduct';
import Cards from '../../app/Cards'

const shaurma = shaurmas

function Shaurmas(props) {
    return (
        <div>
            <h1>Шаурма</h1>
            <Cards name={shaurma}/>
        </div>
    );
}

export default Shaurmas;