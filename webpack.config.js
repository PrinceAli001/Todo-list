const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(jpeg|jpg|webp|svg|png|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
};