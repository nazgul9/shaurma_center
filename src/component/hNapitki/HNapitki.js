import React from 'react';
import hnapitkii from './napitkiProduct';
import { Card, Table } from 'react-bootstrap';
 
const  hnapitki =hnapitkii

function HNapitki(props) {
    return (
        <div>
         
          <h1> холодные напитки</h1>
          <Card.Img style={{width:"100%"}} variant="top" src='https://www.kartinki24.ru/uploads/gallery/main/514/kartinki24_ru_beverages_14.jpg' />
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>№</th>
      <th>напитки</th>
      <th>литр</th>
      <th>цена</th>
    </tr>
  </thead>
  <tbody>
      {hnapitki.map((a)=>{
          return(
    <tr>
      <td>{a.id}</td>
      <td>{a.title}</td>
      <td>{a.description}</td>
      <td>{a.price}</td>
    
    </tr>
    )
})}
  </tbody>
</Table>
        </div>
    );
}

export default HNapitki;