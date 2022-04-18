import React from 'react';
import ryss from './RysProduct';
import Cards from '../../app/Cards'

const rys = ryss

function Ryss(props) {
    return (
        <div>
            <h1>Рис</h1>
            <Cards name={rys}/>

        </div>
    );
}

export default Ryss;