import React from 'react';
import limon from './LimonatProduct';

import Cards from '../../app/Cards'

const limonat= limon

function Limonats(props) {
    return (
        <div>
            <h1>Лимонад</h1>
            <Cards name={limonat}/>
        </div>
    );
}

export default Limonats;