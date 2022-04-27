import { Carousel, } from 'react-bootstrap'
import { useState, render } from 'react'
import b from './img/b.jpg'
import bb from './img/bb.jpg'
import sh from './img/sh.jpeg'
import sh1 from './img/sh1.jpeg'
// import sh2 from './img/sh2.jpeg'
import sh3 from './img/sh3.jpeg'
import sh4 from './img/sh4.jpeg'
import sh5 from './img/sh5.jpeg'

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
          src={b}
          alt="besoft"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src={bb}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src={sh}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src={sh1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src={sh2}
          alt="Second slide"
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src={sh3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src={sh4}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src={sh5}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;





