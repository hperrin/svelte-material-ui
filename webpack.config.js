const path = require('path');
const sass = require('svelte-preprocess-sass').sass;

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'demo', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'demo', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.html', '.svelte', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: {
              style: sass({
                includePaths: ['./node_modules'],
              })
            }
          }
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};