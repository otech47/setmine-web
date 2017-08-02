var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		setmine: [
			'babel-polyfill',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'react-hot-loader/patch',
			'./src/index.js'
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist' // where webpack should look for static files
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // where webpack saves bundled files
		publicPath: '/',
		filename: 'bundle.js', // name of output file
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.less', '.jpg', '.jpeg', '.png']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
		new webpack.ProvidePlugin({
			'Promise': 'exports?global.Promise!es6-promise',
			'fetch': 'exports?self.fetch!whatwg-fetch'
		})
	],
	module: {
		loaders: [
			{
				test: /\.(jsx|js)?$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: 'style!css!less',
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|jpeg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                exclude: /node_modules/,
                query: {
                    name: '[path][name].[ext]'
                }
			}
		]
	}
}