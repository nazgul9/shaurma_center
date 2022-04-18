import React from 'react';
import rollys from './RollyProduct';

import Cards from '../../app/Cards'

const rolly = rollys


function Rollys(props) {
    return (
        <div>
            <h1>Ролл</h1>
            <Cards name={rolly}/>
        </div>
    );
}

export default Rollys;