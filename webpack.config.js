const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

/**
 *
 * @type {{entry: {app: string}, output: {filename: string, path: (Promise.<T>|*)}, module: {rules: [null,null,null]}, plugins: [null,null]}}
 */
const webpackConfig={
   entry:{
       app:'./src/index.js'
   },
   output:{
       filename:'[name].bundle.js',
       path:path.resolve(__dirname,'dist')
   },
   module:{
       rules:[
           {
               test:/\.(css|less)$/,
               use:['style-loader','css-loader','less-loader']
           },
           {
               test:/\.(png|svg|jpg|gif)$/,
               use:['file-loader']
           },
           {
               test:/\.(woff|woff2|eot|ttf|otf)$/,
               use:['file-loader']
           },
           {
               test:/\.(js|jsx)$/,
               exclude:/node_module/,
               use:['babel-loader']
           }
       ]
   },
   plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
            title: '测试输出',
            template:'./public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
      contentBase: './dist',
      hot:true
  }
}

module.exports=webpackConfig