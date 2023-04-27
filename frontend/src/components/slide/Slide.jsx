import React from "react";
import "./Slide.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Slide = ({ children, slidesToShow, arrowsScroll }) => {

  const sliderOptions = {
    slidesToShow: 4,
    pauseOnFocus: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className="slide">
      <div className="container">
        <Slider {...sliderOptions}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
