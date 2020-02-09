const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: __dirname + '/js/App.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]"
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
    ),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ]),
  stats: {colors: true},
  resolve: {
    extensions: ['*', '.js', '.es6']
  }
};
