import React from 'react';
import hnapitkii from './napitkiProduct';
import Cards from '../../app/Cards'
 
const  hnapitki =hnapitkii

function HNapitki(props) {
    return (
        <div>
            <Cards name={hnapitki} />
        </div>
    );
}

export default HNapitki;