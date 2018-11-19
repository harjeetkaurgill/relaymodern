import 'babel-polyfill';
import 'isomorphic-fetch';
import Helmet from 'react-helmet';
import { getFarceResult } from 'found/lib/server';
import { Resolver } from 'found-relay';
import ReactDOMServer from 'react-dom/server';
import RelayServerSSR from 'react-relay-network-modern-ssr/lib/server';
import serialize from 'serialize-javascript';
import createRelayEnvironment from '../src/createRelayEnvironment';
import { historyMiddlewares, render, routeConfig } from '../src/router';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { GAPI_PATH } from '../config/development';

export default ({ clientStats }) => async (req, res) => {
  const chunkNames = flushChunkNames();

  const { js, styles, cssHash, scripts, stylesheets } = flushChunks(
    clientStats,
    { chunkNames },
  );

  console.log('PATH', req.path);
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames);
  console.log('SCRIPTS SERVED', scripts);
  console.log('STYLESHEETS SERVED', stylesheets);
  console.log('STYLES SERVED', styles);
  console.log('JS SERVED', js);
  console.log('CSSHASH SERVED', cssHash);

  const relaySsr = new RelayServerSSR();

  const { redirect, status, element } = await getFarceResult({
    url: req.url,
    historyMiddlewares,
    routeConfig,
    resolver: new Resolver(createRelayEnvironment(relaySsr, GAPI_PATH)),
    render,
  });

  if (redirect) {
    res.redirect(302, redirect.url);
    return;
  }

  const relayData = await relaySsr.getCache();
  const Head = Helmet.rewind();
  const regexp = / data-react-helmet="true"/g;
  const title = Head.title.toString().replace(regexp, '');
  const meta = Head.meta.toString().replace(regexp, '');
  const script = Head.script.toString().replace(regexp, '');
  res.status(status).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${title}
      ${meta}
      ${script}
      ${styles}

      <link rel="stylesheet" href="/public/css/slick.css"></link>


      <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900,900i" rel="stylesheet">

      <script src="/public/javascript/jquery-1.11.1.min.js"></script>
      <style>
        button{
          background-color: transparent;
        }
      </style>

    </head>
    <body>
    <div id="root">${ReactDOMServer.renderToString(element)}</div>
    <script>
    window.__RELAY_PAYLOADS__ = ${serialize(JSON.stringify(relayData), {
      isJSON: true,
    })};
    </script>
    ${cssHash}
    ${js}
    </body>

    </html>
  `);
};
