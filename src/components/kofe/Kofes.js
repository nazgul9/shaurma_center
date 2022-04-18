import React from 'react';
import Cards from '../../app/Cards';
import koffes from './KofeProduct';

const kofe = koffes

function Kofes(props) {
    return (
        <div>
            <h1>Кофе</h1>
            <Cards name={kofe}/>
        </div>
    );
}

export default Kofes;