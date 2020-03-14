const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    plugins: [

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, 'src', 'assets', 'logo.svg')
      }),
      new Dotenv()
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: { loader: 'babel-loader' } 
        },
        {
          test: /\.css$/,
          use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]
        },
        {
          test: /.*\.(gif|png|jpe?g)$/i,
          use: { loader: 'file-loader' }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ]
    },
    
  }
}