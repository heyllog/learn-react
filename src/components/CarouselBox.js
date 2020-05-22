import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/CarouselCaption";

import Forest1 from '../img/forest1.jpg';
import Forest2 from '../img/forest2.jpg';

class CarouselBox extends Component {
   render() {
      return (
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100 carousel-img"
                  src={Forest1}
                  alt="forest1"
               />
               <CarouselCaption>
                  <h3>First Forest</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt.</p>
               </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 carousel-img"
                  src={Forest2}
                  alt="forest2"
               />
               <CarouselCaption>
                  <h3>Second Forest</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt.</p>
               </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 carousel-img"
                  src={Forest2}
                  alt="forest2"
               />
               <CarouselCaption>
                  <h3>Second Forest</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sunt.</p>
               </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100 carousel-img"
                  src={Forest1}
                  alt="forest1"
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