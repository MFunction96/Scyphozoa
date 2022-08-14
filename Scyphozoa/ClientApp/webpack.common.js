const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/Root.tsx',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'MFBlog',
			template: 'public/index.hbs'
		}),
		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify('1.0.0.' + parseInt((Date.now() / 1000).toString()))
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader']
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					{
						loader: "sass-loader",
						options: {
							// Prefer `dart-sass`
							implementation: require.resolve("sass"),
						},
					}
				],
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/'
	}
};
