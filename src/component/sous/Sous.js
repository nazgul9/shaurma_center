import React from 'react';
import sous from './sousProduct';
import Cards from '../../app/Cards'

const s =sous

function Sous(props) {
    return (
        <div>
            <Cards name={s} />
        </div>
    );
}

export default Sous;