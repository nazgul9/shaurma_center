import React from 'react';
import hleps from './HlepProduct';
import Cards from '../../app/Cards'

const hlep = hleps
console.log(hlep);

function Hlep(props) {
    return (
        <div>
            <h1>Хлеб</h1>
            <Cards name={hlep}/>
        </div>
    );
}

export default Hlep;