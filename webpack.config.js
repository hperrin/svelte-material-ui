const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const sassOptions = {
  includePaths: [
    './theme',
    './node_modules',
    // This is only needed because we're using a local module. :-/
    // Normally, you would not need this line.
    path.resolve(__dirname, '..', 'svelte-material-ui', 'node_modules')
  ]
};

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'index.js'),
    'top-app-bar': path.resolve(__dirname, 'component-demos', 'TopAppBar', 'demo.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      // Since we're using a local module, we want to always require the same
      // Svelte package.
      'svelte': path.resolve(__dirname, 'node_modules', 'svelte'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[id].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
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
            options: {
              ...sassOptions
            },
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