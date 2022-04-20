import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <div className=' m-2 p-2 ' >
            <div className='text-center'><h1>МЕНЮ</h1></div>
            <Row>
               
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Burger">
                        <h2 >Бургер</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Desert">
                        <h2 >Десерт</h2>
                    </Card>
                </Col>
               
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Gnapitki">
                        <h2 >Напитки 1</h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/HNapitki">
                        <h2 >Напитки 2</h2>
                    </Card>
                </Col>
                
                <Col  md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Shaurma">
                        <h2 >Шаурма</h2>
                    </Card>
                </Col>
                <Col  md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Sous">
                        <h2 >Соус</h2>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Menu;