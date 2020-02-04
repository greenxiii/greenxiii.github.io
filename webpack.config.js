const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: __dirname + '/js/App.js',
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs']
        }
      },
      {
        test: /\.(less)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!autoprefixer?browsers=last 2 version!less?sourceMap'),
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: ([
    new ExtractTextPlugin('./styles/global.css', {allChunks: true}),
    new BrowserSyncPlugin(
      {
        proxy: 'http://localhost:8080/'
      },
      {
        reload: false
      }
    )
  ]),
  stats: {colors: true},
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
