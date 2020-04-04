const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'dist')],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'styled-components': path.resolve('node_modules', 'styled-components'),
            react: path.resolve('node_modules', 'react'),
            'react-dom': path.resolve('node_modules', 'react-dom'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('public/index.html'),
            favicon: 'public/favicon.ico',
            manifest: 'public/manifest.json',
        }),
        new Dotenv(),
    ],
};
