import React from 'react';
import SavedVehicleWidget from './../category/SavedVehicleWidget';
import BannerWidget from '../../common/AdvertiseBannerWidget';
import ListData from '../category/categorieslist.json';
import CategoriesList from './CategoriesList';
import Recommended from '../home/Widgets/Recommended';
import Breadcrumbs from '../../common/Breadcrumbs';
import RefineSearch from '../category/RefineSearch';
import ListingWidget from '../../common/ListingWidget';
import PopularCategory from '../category/PopularCategories';

const Category = () => (
  <section className="wrapper">
    <div className="body-container">
      <div className="container">
        <div className="row">
          <div className="taps-sm-3">
            <SavedVehicleWidget />
            <CategoriesList ListData={ListData} />
            <RefineSearch ListData={ListData} />
          </div>
          <div className="taps-sm-9">
            <Breadcrumbs />
            <BannerWidget
              className="banner-wizard"
              imagesrc="/public/images/advertise/sub-category-page.png"
            />
            <PopularCategory />
            <ListingWidget />
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
