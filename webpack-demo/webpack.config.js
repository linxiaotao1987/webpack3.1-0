const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry:{
        app:'./src/index.js',
        // print:'./src/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Hot Module Replacement'
        }),        
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
};