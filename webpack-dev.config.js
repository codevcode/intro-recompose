const webpack = require('webpack')

const config = {
  entry: [
    './src/client.js',
  ],
  output: {
    filename: 'app.js',
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/, // prevent loader to be slow
      },
    ],
  },
  devServer: {
    contentBase: 'src/public',
    hot: false,
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: { colors: true, progress: true },
  },
}

module.exports = config
