import BrowserProtocol from 'farce/lib/BrowserProtocol';
import createInitialFarceRouter from 'found/lib/createInitialFarceRouter';
import { Resolver } from 'found-relay';
import React from 'react';
import ReactDOM from 'react-dom';
import RelayClientSSR from 'react-relay-network-modern-ssr/lib/client';

import createRelayEnvironment from './createRelayEnvironment';
import { historyMiddlewares, render, routeConfig } from './router';
import { hot } from 'react-hot-loader';
import { GAPI_PATH } from '../config/development';

async function renderApp() {
  const resolver = new Resolver(
    createRelayEnvironment(
      // eslint-disable-next-line no-underscore-dangle
      new RelayClientSSR(window.__RELAY_PAYLOADS__),
      GAPI_PATH,
    ),
  );

  const Router = await createInitialFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares,
    routeConfig,
    resolver,
    render,
  });

  const HotRouter = hot(module)(Router);
  ReactDOM.hydrate(
    <HotRouter resolver={resolver} />,
    document.getElementById('root'),
  );
}

renderApp();
