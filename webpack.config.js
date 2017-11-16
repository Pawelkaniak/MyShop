const webpack = require('webpack');
const path = require('path');

const config = {

    // Where entry?
    entry: path.resolve('src/index.js'),

    // for bundle file
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                    'sass-loader'
                ]
            }
        ]
    },

// Dev server
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8800
    }
};
module.exports = config;