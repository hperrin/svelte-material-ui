const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    alias: {
      // This is so the demo can import from 'svelte-material-ui'.
      'svelte-material-ui': path.resolve(__dirname),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: 'bundle.[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: 'svelte-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: sassOptions,
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};