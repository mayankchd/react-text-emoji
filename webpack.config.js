var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/components/App.js',
  output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
  module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015' , 'react' ]
            }
        }
    ]
  }
};
