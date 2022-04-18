import React from 'react';
import savtraks from './SavtrakProduct';
import Cards from '../../app/Cards'

const savtrak =savtraks

function Savtraks(props) {
    return (
        <div>
            <h1>Завтрак</h1>
            <Cards name={savtrak}/>
        </div>
    );
}

export default Savtraks;