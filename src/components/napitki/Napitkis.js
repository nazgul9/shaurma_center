import React from 'react';
import napitkis from './NapitkiProduct';
import Cards from '../../app/Cards'

const napitki = napitkis

function Napitkis(props) {
    return (
        <div>
            <h1>Напитки</h1>
            <Cards name={napitki}/>
        </div>
    );
}

export default Napitkis;