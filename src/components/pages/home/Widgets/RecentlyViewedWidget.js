import React from 'react';
import './widget.scss';
import Productdata from '../Productdata.json';
import SliderWidget from '../../../common/SliderWidget';

const RecentlyViewedWidget = () => (
  <SliderWidget label="Recently Viewed" Productdata={Productdata} />
);

export default RecentlyViewedWidget;
