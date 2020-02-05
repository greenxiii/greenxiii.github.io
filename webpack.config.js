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
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-3'],
          plugins: ['react-html-attrs']
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:8].[ext]'
          },
        }]
      },
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
    extensions: ['*', '.js', '.es6']
  }
};
