import React from 'react';
import { getCategoryImages } from '../../../../helpers/CategoryImages';
import CategoryCard from '../../../common/CategoryCard';

const ShopByCategory = props => {
  const size = 8;
  return (
    <div className="widget">
      <div className="widget-header mb20">Shop by Category</div>
      <div className="widget-body">
        <div className="row">
          {props.ListData.store.categoryfilter.categorylist
            .slice(0, size)
            .map((categoryItem, i) => (
              <div className="taps-sm-6" key={i}>
                <CategoryCard
                  categoryImage={
                    getCategoryImages()[
                      getCategoryImages()
                        .map(category => category.categoryName)
                        .indexOf(categoryItem.category)
                    ].imagePath
                  }
                  categoryName={categoryItem.category}
                  subcategoryArray={categoryItem.subcategoryList}
                  ListData={props.ListData.params}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
