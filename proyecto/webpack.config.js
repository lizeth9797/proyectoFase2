const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    index: './src/js/index.js',
    recipe: './src/js/recipe.js'
    //recipe: ['@babel/polyfill','./src/js/recipe.js']
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
