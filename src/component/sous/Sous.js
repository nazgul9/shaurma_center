import React from 'react';
import { Card, Image, Table } from 'react-bootstrap';

import sous from './SousProduct';
const sok = sous

function Sous(props) {
    return (
        <div>
            <Card>
        <h1>
           Соyc
        </h1>
        <Image src='https://www.patee.ru/r/x6/0f/91/f7/960m.jpg'/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>№</th>
                    <th>напитки</th>
                    {/* <th>литры</th> */}
                    <th>цена</th>
                </tr>
            </thead>
            <tbody>
                {sok.map(s => {

                    return (
                        <tr>
                            <td>{s.id}</td>
                            <td>{s.title}</td>
                            {/* <td>{s.description}</td> */}
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

export default Sous;