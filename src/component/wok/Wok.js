import React from 'react';
import { Card, Image, Table } from 'react-bootstrap';
import woks from './WokProduct';

const woki = woks

function wok(props) {
    return (
        <div>
            <Card>
                
        <h1>
           Вок
        </h1>
        <Image src='https://media.istockphoto.com/photos/mix-of-vegetables-fried-in-a-wok-picture-id1056690094'/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>№</th>
                    <th>порция</th>
                    {/* <th>литры</th> */}
                    <th>цена</th>
                </tr>
            </thead>
            <tbody>
                {woki.map(s => {

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

export default wok;