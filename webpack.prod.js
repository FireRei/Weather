const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: 'production',
  output: {
	filename: "main.js",
	path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"/* , "sass-loader" */],
      },
	  {
		test: /\.(?:js|mjs|cjs)$/,
      	exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', { targets: "defaults" }]
				]
			}
		}
	  }
    ],
  },
  optimization: {
 /*    runtimeChunk: 'single', */
	splitChunks: {
		chunks: 'all',
	},
	minimize: true,
	minimizer: [
		new TerserPlugin({
			minify: TerserPlugin.uglifyJsMinify,
			// `terserOptions` options will be passed to `uglify-js`
			// Link to options - https://github.com/mishoo/UglifyJS#minify-options
			terserOptions: {},
 	 }),
	new CssMinimizerPlugin(),
	new HtmlWebpackPlugin({
		template: "./src/index.html",
		// favicon: "./src/assets/icons/favicon.ico",
		minify: {
		  removeAttributeQuotes: true,
		  collapseWhitespace: true,
		  removeComments: true
		}
	  })
	],
  },
  plugins: [new MiniCssExtractPlugin()],
});