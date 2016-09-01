
module.exports = {
    entry: __dirname + '/js/App.es6',
    output: {
        path: __dirname ,
        filename: 'app.js'
    },
    watch: true,
	module: {
		preLoaders: [
	    	{
	        	test: /\.js$/,
	        	exclude: /node_modules/,
	        	loader: 'jshint-loader'
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
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.es6']
	}
};