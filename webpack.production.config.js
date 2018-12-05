const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./webpack.config.js');

module.exports = merge(config, {
    devtool: "#cheap-module-source-map",
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CompressionPlugin(),
    ]
});
