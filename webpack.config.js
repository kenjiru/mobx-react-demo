const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: "eval",
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin(),
        new CopyWebpackPlugin([{
            from: '*',
            context: 'static',
        }]),
    ],
    devServer: {
        contentBase: './static',
        openPage: '',
        open: true,
        port: 8080,
        stats: 'minimal',
    },
};
