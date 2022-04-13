import React from 'react';
import { Card, Image, Table } from 'react-bootstrap';
import Gnapitkis from './GnapitkiProduct';

const d = Gnapitkis
console.log(Gnapitkis);

function Napitki(props) {
    return (
        <div className='m-2'>
            <Card>
            <h1>
                Напитки
            </h1>
            <Image style={{padding:'7px'}} src='https://img.freepik.com/free-photo/halloween-thanksgiving-traditional-autumn-winter-drinks-and-cocktails-spicy-hot-pumpkin-sangria-with-apple-cinnamon-anise-on-a-white-marble-table-in-glass-mugs-selective-focus-close-view_136595-11837.jpg'/>
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