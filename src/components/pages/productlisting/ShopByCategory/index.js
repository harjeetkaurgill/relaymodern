import React from 'react';
import Categorydata from '../../home/data.json';
import CategoryCard from '../../../common/CategoryCard';

const ShopByCategory = () => {
  const size = 8;
  return (
    <div className="widget">
      <div className="widget-header mb20">Shop by Category</div>
      <div className="widget-body">
        <div className="row">
          {Categorydata.slice(0, size).map((category, i) => (
            <div className="taps-sm-6" key={i}>
              <CategoryCard
                categoryImage={category.imagesrc}
                categoryName={category.heading}
                subcategoryArray={category.listarray}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
