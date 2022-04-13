import React from 'react';
import { Card, Image, Table } from 'react-bootstrap';
import napitki from './NapitkiProduct';

const desert = napitki
console.log(napitki);

function Napitki(props) {
    return (
        <div className='m-2'>
            <Card>
            <h1>
                Напитки
            </h1>
            <Image style={{padding:'7px'}} src='https://avatars.mds.yandex.net/get-zen_doc/1640581/pub_5f7b647f71c44f0829c7caf5_5f7b6498952c3b370e5aac46/scale_1200'/>
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
      {desert.map(s=>{
    
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