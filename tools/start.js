var browserSync = require('browser-sync')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('../webpack.config.js')

var compiler = webpack(webpackConfig)

var bs = browserSync.create()

