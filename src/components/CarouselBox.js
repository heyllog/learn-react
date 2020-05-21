import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";

import Forest1 from '../img/forest1.jpg';
import Forest2 from '../img/forest2.jpg';

class CarouselBox extends Component {
   render() {
      const imgStyle = {
         height: 600,
         objectFit: 'cover',
      };
      return (
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={Forest1}
                  alt="forest1"
                  style={imgStyle}
               />
               <CarouselCaption>
                  <h3>First Forest</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt.</p>
               </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={Forest2}
                  alt="forest2"
                  style={imgStyle}
               />
               <CarouselCaption>
                  <h3>Second Forest</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt.</p>
               </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={Forest2}
                  alt="forest2"
                  style={imgStyle}
               />
               <CarouselCaption>
                  <h3>Second Forest</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt.</p>
               </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={Forest1}
                  alt="forest1"
                  style={imgStyle}
               />
               <CarouselCaption>
                  <h3>First Forest</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt.</p>
               </CarouselCaption>
            </Carousel.Item>
         </Carousel>
      );
   }
}

export default CarouselBox;