import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./MyCarousel.scss"
import Slide1 from "../../../../images/slider/1-1920x750.png"
import Slide2 from "../../../../images/slider/2-1920x750.png"
import {RiShoppingBagLine} from "react-icons/ri"
const MyCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      className='carousel'
    >
      <div className='slide'>
        <img src={Slide1} alt="Image 1" />
        <div className="slide__text">
          <h1>Jeweery & Diamonds</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button>Check More Products <RiShoppingBagLine/></button>
        </div>
      </div>
      <div className='slide'>
        <img src={Slide2} alt="Image 1" />
        <div className="slide__text">
          <h1>Jeweery & Diamonds</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button>Check More Products <RiShoppingBagLine/></button>

        </div>

      </div>

    </Carousel>
  );
};

export default MyCarousel;
