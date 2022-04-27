import React from 'react';
import { Card} from 'react-bootstrap';

function Cards(props) {
    return (
        <div className='d-flex justify-content-around flex-wrap w-100'> 
            {props.name.map(n => (
                <>
                <div>   
                    <Card style={{ margin:"5px",padding:'10px'}} >
                    <Card.Img  className={'a1'} style={{height:"250px"}} variant="top" src={n.img} />
                    <Card.Body>
                        <Card.Title >{n.title}</Card.Title>
                        <Card.Text>
                            <p className='overflow-ellipsis'>{n.description}</p>
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