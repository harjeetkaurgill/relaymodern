import React from 'react';
import './banner.scss';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="homeslider">
      <div>
        <img src="/public/images/slider.jpg" alt="banner" />
      </div>
      <div>
        <img src="/public/images/slider.jpg" alt="banner" />
      </div>
    </Slider>
  );
};

export default Banner;
