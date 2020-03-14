const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/assets/moon.svg"
    })
  ],
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
      }
    ]
  }
};