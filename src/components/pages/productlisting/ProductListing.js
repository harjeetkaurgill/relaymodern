import React from 'react';
import './category.scss';
import { createFragmentContainer, graphql } from 'react-relay';
import categorylist from '../category/categorieslist.json';
import SavedVehicleWidget from './../category/SavedVehicleWidget';
import CategoriesList from './CategoriesList';
import Recommended from '../home/Widgets/Recommended';
import Breadcrumbs from '../../common/Breadcrumbs';
import RefineSearch from '../category/RefineSearch';
import ListingWidget from '../../common/ListingWidget';

const ProductListing = props => {
  console.log('these are the props in ProductListing page. : ', props);
  return (
    <section className="wrapper">
      <div className="body-container">
        <div className="container">
          <div className="row">
            <div className="taps-sm-3">
              <SavedVehicleWidget data={props.params} />
              <CategoriesList
                ListData={props.store.categoryfilter.categorylist}
              />
              <RefineSearch ListData={categorylist} />
            </div>
            <div className="taps-sm-9">
              <Breadcrumbs />
              <ListingWidget data={props.store.skuList.skus} />
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
};

export default createFragmentContainer(ProductListing, {
  store: graphql`
    fragment ProductListing_store on Store {
      ...Category_store @relay(mask: false)
      skuList(
        year: $year
        make: $make
        model: $model
        submodel: $submodel
        engine: $engine
        partType: $partType
        category: $category
        subcategory: $subcategory
      ) {
        skus {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
              Title
              PartNumber
              brand
              Category
              Subcategory
              ImageURL
              price
              Availability
              Description
            }
          }
        }
      }
    }
  `,
});
