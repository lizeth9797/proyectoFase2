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
          use:  ["style-loader", "css-loader", "sass-loader"]
        },

        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader', 
            }, 
            {
              loader: 'css-loader', 
            },
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader' 
            }
          ]
        }
    ]
  },

}
