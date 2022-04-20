import React from 'react';
import krylyshkii from './krylyshkiProduct';
import Cards from '../../app/Cards'

const krylyshki =krylyshkii

function Krylyshki(props) {
    return (
        <div>

            <Cards name={krylyshki} />
            
        </div>
    );
}

export default Krylyshki;