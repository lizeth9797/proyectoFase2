const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/js/recipe.js'],
  entry: {
    index: './src/js/index.js',
    recipe: './src/js/recipe.js',
    header: './src/js/header.js',
    results: './src/js/results.js',
    countries: './src/js/countries.js',
    categories: './src/js/categories.js'
  },  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'  
  },
  optimization:{
      splitChunks:{
        chunks:'all'
      }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'recipe.html',
      template: './src/recipe.html',
      chunks:['recipe']
    }),
    new HtmlWebpackPlugin({
      filename: 'results.html',
      template: './src/results.html',
      chunks:['results']
    }),
    new HtmlWebpackPlugin({
      filename: 'countries.html',
      template: './src/countries.html',
      chunks:['countries']
    }),
    new HtmlWebpackPlugin({
      filename: 'categories.html',
      template: './src/categories.html',
      chunks:['categories']
    })  
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, 
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}
