var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var buildPath = path.resolve(__dirname, 'public');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
    entry: [
        './src/index.js'
    ],
    devtool: 'source-map',
    output: {
        path: buildPath,
        filename: '/bundle.js',
    },
    resolve: {
        extensions: ['', '.jsx', '.es6', '.js', '.less'],
        moduleDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                exclude: /node_modules/,
                
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            },
            {
                include: /\.json$/,
                loaders: ['json-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            environment: JSON.stringify('production')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            Promise: 'exports?global.Promise!es6-promise',
            fetch: 'exports?self.fetch!whatwg-fetch'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
}
