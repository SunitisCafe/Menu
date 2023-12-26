import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row'
import Photo1 from '../../assets/img/carousal/photo1.jpg';
import Photo2 from '../../assets/img/carousal/photo2.jpg';
import Photo3 from '../../assets/img/carousal/photo3.jpg';
import Photo4 from '../../assets/img/carousal/photo4.jpg';
import Photo5 from '../../assets/img/carousal/photo5.jpg';
import Photo6 from '../../assets/img/carousal/photo6.jpg';
import Photo7 from '../../assets/img/carousal/photo7.jpg';
import AspectRatio from 'react-aspect-ratio';
import ScrollDown from '../scroll-down/scroll-down.component';

import './my-carousal.style.css'





function MyPhotos() {
  return (
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <Row className="justify-content-center mb-2 mr-2">
      <img
      className="d-block w-90 custom-img"
      src={Photo1}
      alt="First slide"
    />
      
       </Row>
        <Carousel.Caption>
          <h5>Pizza Italiano</h5>
          <p >Experience the essence of Italy with our Pizza Italiano, featuring premium mozzarella, ripe tomatoes, and hand-selected herbs on a crispy golden crust.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Row className="justify-content-center mb-2 mr-2">
      <img
      className="d-block w-90 custom-img"
      src={Photo2}
      alt="First slide"
    />
    </Row>
      
       
        
      </Carousel.Item>
      <Carousel.Item>
      <Row className="justify-content-center mb-2 mr-2">
      <img
      className="d-block w-90 custom-img"
      src={Photo3}
      alt="First slide"
    />
    </Row>
      
      </Carousel.Item>

      <Carousel.Item>
      <Row className="justify-content-center mb-2 mr-2">
      <img
      className="d-block w-90 custom-img"
      src={Photo4}
      alt="First slide"
    />
    </Row>
      
      </Carousel.Item>

      <Carousel.Item>
      <Row className="justify-content-center mb-2 mr-2">
      <img
      className="d-block w-90 custom-img"
      src={Photo5}
      alt="First slide"
    />
    </Row>
      
      </Carousel.Item>

      <Carousel.Item>
      <Row className="justify-content-center mb-2 mr-2">
      <img
      className="d-block w-90 custom-img"
      src={Photo6}
      alt="First slide"
    />
    </Row>
      
      </Carousel.Item>
      <Carousel.Item>
      <Row className="justify-content-center mb-2 mr-2">
      <img
      className="d-block w-80 custom-img"
      src={Photo7}
      alt="First slide"
    />
    </Row>
      
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}

export default MyPhotos;