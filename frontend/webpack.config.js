var path                = require('path')
var webpack             = require('webpack')
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
var merge               = require('webpack-merge');


var ROOT_PATH           = path.resolve(__dirname);
var APP_PATH            = path.resolve(ROOT_PATH, 'src/web/app/');
var BUILD_PATH          = path.resolve(ROOT_PATH, 'src/web/build/');


var TARGET              = process.env.npm_lifecycle_event;
process.env.BABEL_ENV   = TARGET;


var common =  {

  resolve: {
    extensions: ['.js', '.jsx']
  },

   output: {
      path: BUILD_PATH,
      filename: '[name].js',
      publicPath : '/static/'
   }
}

const extractSass = new ExtractTextPlugin({
    filename: "./styles.css"
});

  
console.log('target = ' + TARGET);
console.log('webpack start ///')
  

var config = merge(common, {

  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    publicPath : '/static/'
 },

  entry: {
     app : [APP_PATH +  '/styles/main.scss','babel-polyfill', APP_PATH + '/index.jsx', 'webpack-hot-middleware/client']
  },

  module: {
     rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [APP_PATH],
          query: {
            presets: [ 'react-hmre' ]
          }
        },
        {
          test: /\.scss$/,
          use: extractSass.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
          })
        }
     ]
  },

  devtool: 'source-map',

  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;