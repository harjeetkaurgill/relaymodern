import React from 'react';
import './category.scss';
import SavedVehicleWidget from './SavedVehicleWidget';
import ListData from './categorieslist.json';
import CategoriesList from './CategoriesList';
import RefineSearch from './RefineSearch';
import BannerWidget from '../../common/AdvertiseBannerWidget';
import PopularCategories from './PopularCategories';
import ShopByCategory from './ShopByCategory';
import Recommended from '../home/Widgets/Recommended';

const Category = () => (
  <section className="wrapper">
    <div className="body-container">
      <div className="container">
        <div className="row">
          <div className="taps-sm-3">
            <SavedVehicleWidget />
            <CategoriesList ListData={ListData} />
          </div>
          <div className="taps-sm-9">
            <BannerWidget
              className="banner-wizard mt40"
              imagesrc="/public/images/advertise/category-page.png"
            />
            <PopularCategories />
            <ShopByCategory />
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

export default Category;
