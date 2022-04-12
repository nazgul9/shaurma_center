import React from 'react';
import { Table } from 'react-bootstrap';
import soku from './SociProduct';

const sok = soku

function Soci(props) {
    return (
        <div>
            <h1>
               Сок
            </h1>
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
                    {sok.map(s => {

                        return (
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
        </div>

    );
}

export default Soci;