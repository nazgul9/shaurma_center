import React from 'react';
import { Card, Image, Table } from 'react-bootstrap';
import Gnapitkis from './GnapitkiProduct';

const d = Gnapitkis

function Napitki(props) {
    return (
        <div className='m-2'>
             <h1>
                Горячии напитки
            </h1>
            <Card>
           
            <Image style={{padding:'7px', }} src='https://kulinaria1955.ru/uploads/posts/2020-12/1608818085_2.jpg   '/>
            <Table striped bordered hover>
            <thead>
    <tr>
      <th>№</th>
      <th>напитки</th>
      <th>литры</th>
      <th>цена</th>
    </tr>
  </thead>
  <tbody>
      {d.map(s=>{
    
        return(
            <tr>
      <td>{s.id}</td>
      <td>{s.title}</td>
      <td>{s.description}</td>
      <td>{s.price}</td>
    </tr>
        )
   })}
    
  </tbody>

            </Table>
            </Card>
        </div>
    );
}
export default Napitki;