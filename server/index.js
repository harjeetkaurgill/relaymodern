require('colors');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const noFavicon = require('express-no-favicons');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientConfig = require('../webpack/client.dev');
const serverConfig = require('../webpack/server.dev');
const clientConfigProd = require('../webpack/client.prod');
const serverConfigProd = require('../webpack/server.prod');
const config = require('../config/development');
const compression = require('compression');

const { publicPath } = clientConfig.output;
const outputPath = clientConfig.output.path;
const DEV = process.env.NODE_ENV === 'development';
const app = express();
app.use(noFavicon());
// Serve static resources
const publicDir = express.static(path.join(__dirname, '../src/public'));

app.use('/public', publicDir);
app.use(compression());
let isBuilt = false;

const done = () =>
  !isBuilt &&
  app.listen(config.SERVER_PORT, () => {
    isBuilt = true;
    console.log(
      `BUILD COMPLETE -- Listening @ http://localhost:${config.SERVER_PORT}`
        .magenta,
    );
  });

if (DEV) {
  const compiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = compiler.compilers[0];
  const options = { publicPath, stats: { colors: true } };
  const devMiddleware = webpackDevMiddleware(compiler, options);

  app.use(devMiddleware);
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler));

  devMiddleware.waitUntilValid(done);
} else {
  const prodCompiler = webpack([clientConfigProd, serverConfigProd]);
  prodCompiler.run((err, stats) => {
    const clientStats = stats.toJson().children[0];
    const serverRender = require('../buildServer/main.js').default;

    app.use(publicPath, express.static(outputPath));
    app.use(serverRender({ clientStats }));

    done();
  });
}
