import React from 'react';
import './category.scss';
import { createFragmentContainer, graphql } from 'react-relay';
import SavedVehicleWidget from './SavedVehicleWidget';
import CategoriesList from './CategoriesList';
import BannerWidget from '../../common/AdvertiseBannerWidget';
import PopularCategories from './PopularCategories';
import ShopByCategory from './ShopByCategory';
import Recommended from '../home/Widgets/Recommended';

const Category = props => (
  <section className="wrapper">
    <div className="body-container">
      <div className="container">
        <div className="row">
          <div className="taps-sm-3">
            <SavedVehicleWidget data={props.params} />
            <CategoriesList
              ListData={props.store.categoryfilter.categorylist}
            />
          </div>
          <div className="taps-sm-9">
            <BannerWidget
              className="banner-wizard mt40"
              imagesrc="/public/images/advertise/category-page.png"
            />
            <PopularCategories />
            <ShopByCategory ListData={props} />
          </div>
        </div>
      </div>
    </div>
    <div className="body-container">
      <div className="container">
        <Recommended />
      </div>
    </div>
  </section>
);

export default createFragmentContainer(Category, {
  store: graphql`
    fragment Category_store on Store {
      categoryfilter(
        year: $year
        make: $make
        model: $model
        submodel: $submodel
        engine: $engine
      ) {
        categorylist {
          category
          subcategoryList {
            key
            value
          }
        }
      }
    }
  `,
});
