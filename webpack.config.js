const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const sassOptions = {
  includePaths: [
    './node_modules',
    './theme'
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
  // resolve: {
  //   alias: {
  //     // This is so the demo can import from 'svelte-material-ui'.
  //     'svelte-material-ui': path.resolve(__dirname, '..', 'svelte-material-ui'),
  //   },
  // },
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
              // importer: url => {
              //   // This is so the demo can @import from 'svelte-material-ui'.
              //   if (url.startsWith('svelte-material-ui/')) {
              //     return {file: url.replace(/^svelte-material-ui/, path.resolve(__dirname, '..', 'svelte-material-ui'))};
              //   }
              //   return null;
              // },
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