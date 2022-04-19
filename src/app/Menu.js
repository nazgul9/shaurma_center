import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <div className=' m-2 p-2 ' >
            <div className='text-center'><h1>МЕНЮ</h1></div>
            <Row>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Bluydas" >
                        <h2 >Блюда</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Burgers">
                        <h2 >Бургер</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Deserts">
                        <h2 >Десерт</h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Hlep">
                        <h2 >Хлеб</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Kofes">
                        <h2 >Кофе</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Kokteils">
                        <h2 >Коктейл</h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Limonats">
                        <h2 >Лимонад</h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Napitkis">
                        <h2 >Напитки</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Pizzas">
                        <h2 >Пицца</h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Rollys">
                        <h2 >Ролл</h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Ryss">
                        <h2 >Рис</h2>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Salats">
                        <h2 >Салат</h2>
                    </Card>
                </Col>
                <Col md={6} >
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Savtraks">
                        <h2 >Завтрак</h2>
                    </Card>
                </Col>
                <Col  md={6}>
                    <Card className=' m-2 texth1' style={{ borderRadius: "50px" }} as={Link} to="/Shaurmas">
                        <h2 >Шаурма</h2>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Menu;