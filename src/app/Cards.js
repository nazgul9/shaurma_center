import React from 'react';
import { Card} from 'react-bootstrap';

function Cards(props) {
    return (
        <div className='d-flex justify-content-around flex-wrap w-100'> 
            {props.name.map(n => (
                <>
                <div>   
                    <Card style={{width:"18rem", margin:"5px",}} >
                    <Card.Img style={{width:"18rem",height:"16rem"}} variant="top" src={n.img} />
                    <Card.Body>
                        <Card.Title >{n.title}</Card.Title>
                        <Card.Text>{n.description}
                            <h2>{n.price}</h2>
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <div className='border'></div>
                  
                
                </div>
               
      
                </>
            ))}
        </div>
    );
}

export default Cards;