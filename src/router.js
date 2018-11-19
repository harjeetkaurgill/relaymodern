import queryMiddleware from 'farce/lib/queryMiddleware';
import createRender from 'found/lib/createRender';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';
import Home from './components/pages/home/';
import { graphql } from 'react-relay';
import App from './shared/App';

export const historyMiddlewares = [queryMiddleware];

const AppQuery = graphql`
  query router_App_Query {
    store {
      ...App_store
    }
  }
`;

export const routeConfig = makeRouteConfig(
  <Route path="/" Component={App} query={AppQuery}>
    <Route path="/" Component={Home} />
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
