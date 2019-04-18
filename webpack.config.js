var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var buildPath = path.resolve(__dirname, 'public');

module.exports = {
	entry: {
		setmine: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./src/index.jsx'
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './public', // where webpack-dev-server should look for static files
		historyApiFallback: true,
		colors: true,
		host: '127.0.0.1',
		port: 8080,
		hot: true
	},
	output: {
		path: buildPath, // where webpack saves bundled files
		filename: '[name]-bundle.js', // name of output file
		pathinfo: true
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.less'],
		moduleDirectories: ['node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index-dev.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'Promise': 'exports?global.Promise!es6-promise',
			'fetch': 'exports?self.fetch!whatwg-fetch'
		})
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['react-hot', 'babel'], // plugins & presets in .babelrc file
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: 'style!css-loader!less',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpeg|svg)$/,
				loader: 'file',
				exclude: /node_modules/
			}
		]
	}
};