import React from 'react';
import './widget.scss';
import Productdata from '../Productdata.json';
import SliderWidget from '../../../common/SliderWidget';

const Recommended = () => (
  <SliderWidget
    label="Recommended"
    Productdata={Productdata}
    className="recommended-slider"
  />
);

export default Recommended;
