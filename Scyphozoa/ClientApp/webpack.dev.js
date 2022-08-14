const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		hot: true,
		port: 44418,
		historyApiFallback: true
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEBUG__: JSON.stringify(true)
		})
	]
});
