const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		index: './src/index.js',
	},
	module: {
		rules: [
			/* {
			test: /\.html$/,
			use: ["html-loader"]
			}, */
			{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
			},
			{
			test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
			type: 'asset/resource',  //<-- Assets module - asset/resource
			generator: {
			filename: 'images/[name][ext]'
			}
			},
		],
	},
};