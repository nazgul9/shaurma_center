import React from 'react';
import deserts from './desertPRoduct';
import Cards from '../../app/Cards'
 
const desert = deserts

function Desert(props) {
    return (
        <div>
            <Cards name={desert}/>
        </div>
    );
}

export default Desert;