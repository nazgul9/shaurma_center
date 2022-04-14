import React from 'react';
import { Image, Table } from 'react-bootstrap';
import soku from './SociProduct';

const sok = soku

function Soci(props) {
    return (
        <div className='m-2'>
            <h1>
               Сок
            </h1>
            <Image style={{padding:'7px',height:'300px', width:'100%'}} src='https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3138-6431-4135-b532-303539346463__smoothies-2253423_12.jpg'/>
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