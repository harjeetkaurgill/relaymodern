import React from 'react';
import '../pages/home/Widgets/widget.scss';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import classnames from 'classnames';

const SliderWidget = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const { Productdata, label, className } = props;
  return (
    <div className={classnames('widget', className)}>
      <div className="widget-header">{label}</div>
      <div className="widget-body">
        <Slider {...settings}>
          {Productdata.map((value, index) => (
            <ProductCard
              key={index}
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
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Productdata: PropTypes.instanceOf(Array).isRequired,
};

export default SliderWidget;
