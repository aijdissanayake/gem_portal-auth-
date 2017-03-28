const path = require('path');


module.exports = {
  // entry file 
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // bundle file
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    }],
  },

  // to rebuild the bundle on changes
  watch: true
};