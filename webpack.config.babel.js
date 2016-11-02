/*eslint no-unused-vars:0*/
import webpack from 'webpack';

export default {

    entry: './src/app.js',

    output: {
      path: './public',
      publicPath: '/',
      filename: 'bundle.js'
    },

    watch: true,

    watchOptions: {
      aggregateTimeout: 100
    },

    devServer: {
        historyApiFallback: true,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }]
    },

    devtool: 'source-map',

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel', 'eslint']
        },
        {
          test: /\.(scss|sass)$/,
          loaders: ['style', 'css', 'sass']
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        }
      ]
    }
};
