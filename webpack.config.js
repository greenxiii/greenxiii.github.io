ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + '/js/App.es6',
    output: {
        path: __dirname ,
        filename: 'app.js'
    },
    devtool: 'source-map',
	module: {
		preLoaders: [
	    	{
	        	test: /\.js$/,
	        	exclude: /node_modules/,
	        	loader: ['jshint-loader','source-map'],
		    }
	   ],
		loaders: [
			{
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
					plugins: ['react-html-attrs'],
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
		new ExtractTextPlugin('./styles/global.css', { allChunks: true })
	]),
	stats: { colors: true },
	resolve: {
		extensions: ['', '.js', '.es6']
	}
};