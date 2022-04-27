import React from 'react';
import sous from './sousProduct';
import { Card, Image, Table } from 'react-bootstrap';

const s = sous

function Sous(props) {
  return (
<>
<div>
  <h1>СОУС</h1>
<Card.Img style={{width:"100%"}} variant="top" src='https://www.kamis-pripravy.ru/upload/medialibrary/09a/09abe4b865840cfda96a8ab885b0a7fe.jpg' />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>соус</th>
            <th>цена</th>
          </tr>
        </thead>
        <tbody>
          {s.map((a) => {
            return (
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
    </>
  );
}

export default Sous;