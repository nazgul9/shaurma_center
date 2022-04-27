import React from 'react';
import { Card, Table } from 'react-bootstrap';
import gnapitkii from './napitkiProduct';

const gnapitki = gnapitkii

function Gnapitki(props) {
    return (
        <div>
           <h1>горячие напитки</h1>
          <Card.Img style={{width:"100%"}} variant="top" src='https://vilkin.pro/wp-content/uploads/2018/08/fruktovyi-chai-770x513.jpg' />
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>№</th>
      <th>напитки</th>
      <th>цена</th>
    </tr>
  </thead>
  <tbody>
      {gnapitki.map((a)=>{
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

export default Gnapitki;