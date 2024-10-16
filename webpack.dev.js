const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
	devtool: 'source-map',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
           /*  {
            test: /\.css$/i,
            use: [
                "style-loader", //2. Inject styles into DOM
                "css-loader", //1. Turns css into commonjs
            ]
            } */
            /* {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            } */
        ]
    }
});