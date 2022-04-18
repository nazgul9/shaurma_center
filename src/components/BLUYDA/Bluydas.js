import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Cards from '../../app/Cards';
import bluyda from './BluydaProduct';

const blud = bluyda

// console.log(bluyda);

function Bluydas(props) {
  return (
    <div className='d-flex'>
      <>
      
        <Row>
          <Col xl={10} >
            <h1>Блюда</h1>
          <Cards name={blud} />
          </Col>
          </Row>

        </>

      </div>
      );
}

      export default Bluydas;