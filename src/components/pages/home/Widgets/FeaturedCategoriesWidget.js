import React from 'react';
import './widget.scss';
import Heading from '../../../common/WidgetHeading';
import CategoryWidget from '../../../common/CategoryWidget';
import data from '../data.json';

const FeaturedCategoriesWidget = () => {
  const firstfive = 5;
  const nextfive = 10;
  return (
    <div className="widget">
      <Heading label="Featured Categories" />
      <div className="widget-body">
        <div className="featured-category-container">
          {data.slice(0, firstfive).map(value => (
            <CategoryWidget
              imagesrc={value.imagesrc}
              heading={value.heading}
              hoverlistarray={value.listarray}
            />
          ))}
        </div>
        <div className="featured-category-container">
          {data.slice(5, nextfive).map(value => (
            <CategoryWidget
              imagesrc={value.imagesrc}
              heading={value.heading}
              hoverlistarray={value.listarray}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategoriesWidget;
