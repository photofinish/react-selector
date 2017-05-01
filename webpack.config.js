var path = require('path');
var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    resolve : {
        extensions: ['.js','.jsx']
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loaders: ['style-loader', 'css-loader'],
                include: APP_PATH
            },
            {
                test: /\.jsx?$/,
                loader: ['react-hot-loader', 'babel-loader'],
                include: APP_PATH,
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}