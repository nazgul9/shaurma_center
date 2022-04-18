import React from 'react';
import deserts from './DesertProduct';
import Cards from '../../app/Cards'
 
const desert = deserts

function Deserts(props) {
    return (
        <div>
            <h1>Десерт</h1>
            <Cards name={desert}/>
        </div>
    );
}

export default Deserts;