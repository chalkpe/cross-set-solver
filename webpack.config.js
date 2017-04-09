const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const vueLoaders = {
  html: 'pug-loader',
  css: ExtractTextPlugin.extract({
    use: 'css-loader',
    fallback: 'vue-style-loader'
  })
}

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlPlugin({ template: 'app/app.pug', title: 'cross-set-solver' })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: vueLoaders }
      }, {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]?[hash]' }
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false }
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true })
  ])
}
