const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'categories.html',
      template: './src/app/categories/categories.html'
    })/* ,
    new HtmlWebpackPlugin({
      filename: 'countries.html',
      template: './src/app/countries/countries.html'
    })*/,
    new HtmlWebpackPlugin({
      filename: 'recipe.html',
      template: './src/app/recipe/recipe.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'results.html',
      template: './src/app/results/results.html'
    })  
  ],

  devServer: {
      contentBase: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
        { 
          test: /\.css$/, 
          use: ['style-loader', 'css-loader'] 
        },

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
          loader: "html-loader",
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

}