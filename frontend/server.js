const express = require('express');
const routes = require('./src/routes');

const app = express();

if (process.env.NODE_ENV === 'development') {

  console.log('using webpack')

  var webpack              = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackConfig        = require('./webpack.config');

  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
}


app.set('view engine', 'pug');
app.set('views', './src/views')

app.use('/', routes);

module.exports = app;