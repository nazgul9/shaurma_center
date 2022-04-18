import { Carousel, } from 'react-bootstrap'
import { useState, render } from 'react'
import b from './img/b.jpg'
import bb from './img/bb.jpg'


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
          src="https://img.restaurantguru.com/w320/h220/r6f7-Ema-Burger-Fast-Food-poster.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src="https://b.zmtcdn.com/data/pictures/3/18694083/9f2f843523d0e8b9ecd9ee9ee32c1c46.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c1"
          src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/241855918_258137956314790_6828099869840842318_n.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;





