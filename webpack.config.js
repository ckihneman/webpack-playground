const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './client.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'public/dist'),
	},
	context: path.resolve(__dirname, 'app'),
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test:   /\.scss$/,
				// loader: ExtractTextPlugin.extract(
				// 	"style",
				// 	"css!sass"
				// ),
				loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader']),
				// loader: "style-loader!css-loader!postcss-loader!sass-loader"
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css', {
			allChunks: true
		}),
	],
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		}),
	]
}
