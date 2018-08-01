// Imports
const PATH = require('path');
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');
require('babel-register');


// Webpack Configuration
const CONFIG = {
  // Entry
  entry: './client/src/index.jsx',
  // Output
  output: {
    path: PATH.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Image Files
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  // Plugins
  plugins: [
    new HTMLWEBPACKPLUGIN({
      template: './client/src/index.html'
    })
  ]
};

// Exports
module.exports = CONFIG;