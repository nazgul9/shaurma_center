import {Carousel,  } from 'react-bootstrap'
import {useState, render } from 'react'
function Slider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 c1"
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQE1z8GlZgrXkA/company-background_10000/0/1584740138129?e=2159024400&v=beta&t=_IbR6EpngcH4sQFS0fJeViIkzMDPSWrNQvespgOufWE"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 c1"
            src="https://dinein.me/assets/dine-in-exceptional-dining.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100 c1"
            src="https://www.hoteloleana.com/wp-content/uploads/2018/02/stay-dine-01.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;





