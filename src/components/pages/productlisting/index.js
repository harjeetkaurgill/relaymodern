import React from 'react';
import './category.scss';
import SavedVehicleWidget from './../category/SavedVehicleWidget';
import ListData from '../category/categorieslist.json';
import CategoriesList from './CategoriesList';
import Recommended from '../home/Widgets/Recommended';
import Breadcrumbs from '../../common/Breadcrumbs';
import RefineSearch from '../category/RefineSearch';
import ListingWidget from '../../common/ListingWidget';

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
