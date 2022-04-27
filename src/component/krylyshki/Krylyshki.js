import React from 'react';
import krylyshkii from './krylyshkiProduct';
import Cards from '../../app/Cards'

const krylyshki = krylyshkii

function Krylyshki(props) {
    return (<>
    <h1>КРЫЛЫШКИ</h1>
    <div className='container'>
            <Cards name={krylyshki} />
            
        </div></>
    );
}

export default Krylyshki;