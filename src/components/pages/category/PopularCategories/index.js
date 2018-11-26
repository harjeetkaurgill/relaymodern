import React from 'react';
import Productdata from './PopularCategories.json';
import SliderWidget from '../../../common/SliderWidget';

const PopularCategory = () => (
  <SliderWidget
    label="Popular Categories"
    Productdata={Productdata}
    className="popular-categories"
  />
);

export default PopularCategory;
