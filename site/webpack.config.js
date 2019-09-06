const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'index.js'),
    'top-app-bar': path.resolve(__dirname, 'demos', 'TopAppBar', 'demo.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  './theme',
                  './node_modules',
                  // This is only needed because we're using a local module. :-/
                  // Normally, you would not need this line.
                  path.resolve(__dirname, '..', 'node_modules')
                ]
              }
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
  resolve: {
    alias: {
      // Since we're using local modules, we want to always require the same
      // Svelte and Svelte Material UI packages. Normally, you wouldn't do this.
      'svelte': path.resolve(__dirname, 'node_modules', 'svelte'),
      '@smui/button': path.resolve(__dirname, '..', 'packages', 'button'),
      '@smui/card': path.resolve(__dirname, '..', 'packages', 'card'),
      '@smui/checkbox': path.resolve(__dirname, '..', 'packages', 'checkbox'),
      '@smui/chips': path.resolve(__dirname, '..', 'packages', 'chips'),
      '@smui/common': path.resolve(__dirname, '..', 'packages', 'common'),
      '@smui/data-table': path.resolve(__dirname, '..', 'packages', 'data-table'),
      '@smui/dialog': path.resolve(__dirname, '..', 'packages', 'dialog'),
      '@smui/drawer': path.resolve(__dirname, '..', 'packages', 'drawer'),
      '@smui/fab': path.resolve(__dirname, '..', 'packages', 'fab'),
      '@smui/floating-label': path.resolve(__dirname, '..', 'packages', 'floating-label'),
      '@smui/form-field': path.resolve(__dirname, '..', 'packages', 'form-field'),
      '@smui/icon-button': path.resolve(__dirname, '..', 'packages', 'icon-button'),
      '@smui/image-list': path.resolve(__dirname, '..', 'packages', 'image-list'),
      '@smui/line-ripple': path.resolve(__dirname, '..', 'packages', 'line-ripple'),
      '@smui/linear-progress': path.resolve(__dirname, '..', 'packages', 'linear-progress'),
      '@smui/list': path.resolve(__dirname, '..', 'packages', 'list'),
      '@smui/menu': path.resolve(__dirname, '..', 'packages', 'menu'),
      '@smui/menu-surface': path.resolve(__dirname, '..', 'packages', 'menu-surface'),
      '@smui/notched-outline': path.resolve(__dirname, '..', 'packages', 'notched-outline'),
      '@smui/paper': path.resolve(__dirname, '..', 'packages', 'paper'),
      '@smui/radio': path.resolve(__dirname, '..', 'packages', 'radio'),
      '@smui/ripple': path.resolve(__dirname, '..', 'packages', 'ripple'),
      '@smui/select': path.resolve(__dirname, '..', 'packages', 'select'),
      '@smui/slider': path.resolve(__dirname, '..', 'packages', 'slider'),
      '@smui/snackbar': path.resolve(__dirname, '..', 'packages', 'snackbar'),
      '@smui/switch': path.resolve(__dirname, '..', 'packages', 'switch'),
      '@smui/tab': path.resolve(__dirname, '..', 'packages', 'tab'),
      '@smui/tab-bar': path.resolve(__dirname, '..', 'packages', 'tab-bar'),
      '@smui/tab-indicator': path.resolve(__dirname, '..', 'packages', 'tab-indicator'),
      '@smui/tab-scroller': path.resolve(__dirname, '..', 'packages', 'tab-scroller'),
      '@smui/textfield': path.resolve(__dirname, '..', 'packages', 'textfield'),
      '@smui/top-app-bar': path.resolve(__dirname, '..', 'packages', 'top-app-bar'),
    },
  },
};