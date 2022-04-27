import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import burgers from '../component/burger/bugerproduct';
import sous from '../component/sous/sousProduct'
import shaurmas from '../component/shaurma/shaurmaProduct';
import deserts from '../component/desert/desertPRoduct';
import gnapitkii from '../component/gnapitki/napitkiProduct';
import hnapitkii from '../component/hNapitki/napitkiProduct';
import krylyshkii from '../component/krylyshki/krylyshkiProduct'
import samsa from '../component/samsa/samsaProduct';


function Menu() {
    return (
        <div className=' m-2 p-2 ' >
            <div className='text-center'><h1>МЕНЮ</h1></div>
            <Row>
               
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Burger">
                        <h2 >Бургер ({burgers.length})</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Desert">
                        <h2 >Десерт ({deserts.length}) </h2>
                    </Card>
                </Col>
               
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Gnapitki">
                        <h2 >Горячие напитки ({gnapitkii.length}) </h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/HNapitki">
                        <h2 >Холодные напитки ({hnapitkii.length}) </h2>
                    </Card>
                </Col>
                
                <Col  md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Shaurma">
                        <h2 >Шаурма ({shaurmas.length}) </h2>
                    </Card>
                </Col>
                <Col  md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Samsa">
                        <h2 >Самса ({samsa.length}) </h2>
                    </Card>
                </Col>
                <Col  md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Krylyshki">
                        <h2 >Крылышки ({krylyshkii.length}) </h2>
                    </Card>
                </Col>

                <Col  md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Sous">
                        <h2 >Соус ({sous.length})</h2>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Menu;