const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //  vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config. 安装>=13的版本
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'] //  vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config. 安装>=13的版本
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'], //解决import时扩展名不能简写的问题
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('版权所有者--崔喜人'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new uglifyJsWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }

}
