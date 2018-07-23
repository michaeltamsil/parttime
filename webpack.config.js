// const polyfill = require('babel-polyfill');
require('babel-polyfill');
const path = require('path');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = () => ({
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    path.join(__dirname, './src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: '#eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
                'stage-2',
              ],
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    hot: true,
    port: 8080
  },
});
