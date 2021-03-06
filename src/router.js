import queryMiddleware from 'farce/lib/queryMiddleware';
import createRender from 'found/lib/createRender';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import Home from './components/pages/home/Home';
import { graphql } from 'react-relay';
import App from './shared/App';
import Category from './components/pages/category/Category';
import ProductListing from './components/pages/productlisting/ProductListing';
import SubCategory from './components/pages/subcategory';

export const historyMiddlewares = [queryMiddleware];

const AppQuery = graphql`
  query router_App_Query {
    store {
      ...App_store
    }
  }
`;

const CategoryQuery = graphql`
  query router_Category_Query(
    $year: String!
    $make: String!
    $model: String!
    $submodel: String!
    $engine: String!
  ) {
    store {
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
  }
`;
const ProductListingQuery = graphql`
  query router_ProductListing_Query(
    $year: String!
    $make: String!
    $model: String!
    $submodel: String!
    $engine: String!
    $partType: String!
    $category: String!
    $subcategory: String!
  ) {
    store {
      ...ProductListing_store
    }
  }
`;

export const routeConfig = makeRouteConfig(
  <Route path="/" Component={App} query={AppQuery}>
    <Route onUpdate={() => window.scrollTo(0, 80)} path="/" Component={Home} />
    <Route
      onUpdate={() => window.scrollTo(0, 80)}
      path="/category/:year/:make/:model/:submodel/:engine"
      Component={Category}
      query={CategoryQuery}
    />
    <Route
      onUpdate={() => window.scrollTo(0, 80)}
      path="/listing/:year/:make/:model/:submodel/:engine/:partType/:category/:subcategory"
      Component={ProductListing}
      query={ProductListingQuery}
      prepareVariables={params => ({
        ...params,
      })}
    />
    <Route
      onUpdate={() => window.scrollTo(0, 80)}
      path="/subcategory"
      Component={SubCategory}
    />
  </Route>,
);

export const render = createRender({
  renderError: ({ error }) => (
    <div>
      {error.status === 404 ? (
        <div className="agileinfo-row">
          <h2>404</h2>
          <h3>
            This page was Swollen By Blackhole
            <a href="/">Back to home</a>
          </h3>
        </div>
      ) : (
        'Error'
      )}
    </div>
  ),
});
