import React from 'react';
import { Card,Table } from 'react-bootstrap';

import samsa from './samsaProduct';

const s = samsa

function Samsa() {
    return (
        <div>
          <h1>САМСА</h1>
          <Card.Img style={{width:"100%"}} variant="top" src='https://static.1000.menu/img/content-v2/95/10/16882/samsa-s-farshem-iz-sloenogo-testa_1644498633_0_max.jpg' />
             <Table striped bordered hover>
  <thead>
    <tr>
      <th>№</th>
      <th>Самса</th>

      <th>Цена</th>
    </tr>
  </thead>
  <tbody>
      {s.map((a)=>{
          return(
    <tr>
      <td>{a.id}</td>
      <td>{a.title}</td>
      <td>{a.price}</td>

    </tr>
    )
})}
  </tbody>
</Table>
        </div>
    );
}

export default Samsa;


