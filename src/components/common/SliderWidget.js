import React from 'react';
import '../pages/home/Widgets/widget.scss';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const SliderWidget = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const { Productdata, label } = props;
  return (
    <div className="widget">
      <div className="widget-header">{label}</div>
      <div className="widget-body">
        <Slider {...settings}>
          {Productdata.map(value => (
            <ProductCard
              imagesrc={value.imagesrc}
              title={value.title}
              price={value.price}
              linkvalue={value.linkvalue}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
SliderWidget.propTypes = {
  label: PropTypes.string.isRequired,
  Productdata: PropTypes.instanceOf(Array).isRequired,
};

export default SliderWidget;
