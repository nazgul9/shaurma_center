import React from 'react';
import salats from './SalatProduct'

import Cards from '../../app/Cards'

const salat = salats

function Salats(props) {
    return (
        <div>
            <h1>Салат</h1>
            <Cards name={salat}/>
        </div>
    );
}

export default Salats;