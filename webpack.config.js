const path = require('path');
const preprocess = require('svelte-preprocess');

const sassOptions = {
  includePaths: [
    './node_modules',
    './theme'
  ],
  importer: url => {
    // This is so the demo can @import from 'svelte-material-ui'.
    if (url.startsWith('svelte-material-ui/')) {
      return {file: url.replace(/^svelte-material-ui/, path.resolve(__dirname))};
    }
    return null;
  }
};

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'demo', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'demo', 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.html', '.svelte', '.css', '.scss'],
    alias: {
      // This is so the demo can import from 'svelte-material-ui'.
      'svelte-material-ui': path.resolve(__dirname)
    }
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: preprocess({
              scss: sassOptions
            })
          }
        },
      },
      {
        test: /\.s?css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: sassOptions
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