const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/index.jsx',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
    })],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
    },
};