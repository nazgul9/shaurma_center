import React from 'react';
import kokteils from './KokteilProduct';
import Cards from '../../app/Cards'

const kokteil =kokteils

function Kokteils(props) {
    return (
        <div>
            <h1>Коктейл</h1>
            <Cards name={kokteil}/>
        </div>
    );
}

export default Kokteils;