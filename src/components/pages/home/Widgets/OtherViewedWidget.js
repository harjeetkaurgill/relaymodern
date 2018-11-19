import React from 'react';
import './widget.scss';
import Productdata from '../viewed.json';
import SliderWidget from '../../../common/SliderWidget';

const OtherViewedWidget = () => (
  <SliderWidget label="Other Viewed" Productdata={Productdata} />
);

export default OtherViewedWidget;
