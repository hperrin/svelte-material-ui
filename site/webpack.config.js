const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const sassOptions = {
  includePaths: [
    './theme',
    './node_modules',
    // This is only needed because we're using a local module. :-/
    // Normally, you would not need this line.
    path.resolve(__dirname, '..', 'node_modules')
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
  resolve: {
    alias: {
      // Since we're using local modules, we want to always require the same
      // Svelte and Svelte Material UI packages. Normally, you wouldn't do this.
      'svelte': path.resolve(__dirname, 'node_modules', 'svelte'),
      '@svelte-material-ui/button': path.resolve(__dirname, '..', 'packages', 'button'),
      '@svelte-material-ui/card': path.resolve(__dirname, '..', 'packages', 'card'),
      '@svelte-material-ui/checkbox': path.resolve(__dirname, '..', 'packages', 'checkbox'),
      '@svelte-material-ui/chips': path.resolve(__dirname, '..', 'packages', 'chips'),
      '@svelte-material-ui/common': path.resolve(__dirname, '..', 'packages', 'common'),
      '@svelte-material-ui/data-table': path.resolve(__dirname, '..', 'packages', 'data-table'),
      '@svelte-material-ui/dialog': path.resolve(__dirname, '..', 'packages', 'dialog'),
      '@svelte-material-ui/drawer': path.resolve(__dirname, '..', 'packages', 'drawer'),
      '@svelte-material-ui/fab': path.resolve(__dirname, '..', 'packages', 'fab'),
      '@svelte-material-ui/floating-label': path.resolve(__dirname, '..', 'packages', 'floating-label'),
      '@svelte-material-ui/form-field': path.resolve(__dirname, '..', 'packages', 'form-field'),
      '@svelte-material-ui/icon-button': path.resolve(__dirname, '..', 'packages', 'icon-button'),
      '@svelte-material-ui/image-list': path.resolve(__dirname, '..', 'packages', 'image-list'),
      '@svelte-material-ui/line-ripple': path.resolve(__dirname, '..', 'packages', 'line-ripple'),
      '@svelte-material-ui/linear-progress': path.resolve(__dirname, '..', 'packages', 'linear-progress'),
      '@svelte-material-ui/list': path.resolve(__dirname, '..', 'packages', 'list'),
      '@svelte-material-ui/menu': path.resolve(__dirname, '..', 'packages', 'menu'),
      '@svelte-material-ui/menu-surface': path.resolve(__dirname, '..', 'packages', 'menu-surface'),
      '@svelte-material-ui/notched-outline': path.resolve(__dirname, '..', 'packages', 'notched-outline'),
      '@svelte-material-ui/paper': path.resolve(__dirname, '..', 'packages', 'paper'),
      '@svelte-material-ui/radio': path.resolve(__dirname, '..', 'packages', 'radio'),
      '@svelte-material-ui/ripple': path.resolve(__dirname, '..', 'packages', 'ripple'),
      '@svelte-material-ui/select': path.resolve(__dirname, '..', 'packages', 'select'),
      '@svelte-material-ui/slider': path.resolve(__dirname, '..', 'packages', 'slider'),
      '@svelte-material-ui/snackbar': path.resolve(__dirname, '..', 'packages', 'snackbar'),
      '@svelte-material-ui/switch': path.resolve(__dirname, '..', 'packages', 'switch'),
      '@svelte-material-ui/tab': path.resolve(__dirname, '..', 'packages', 'tab'),
      '@svelte-material-ui/tab-bar': path.resolve(__dirname, '..', 'packages', 'tab-bar'),
      '@svelte-material-ui/tab-indicator': path.resolve(__dirname, '..', 'packages', 'tab-indicator'),
      '@svelte-material-ui/tab-scroller': path.resolve(__dirname, '..', 'packages', 'tab-scroller'),
      '@svelte-material-ui/textfield': path.resolve(__dirname, '..', 'packages', 'textfield'),
      '@svelte-material-ui/top-app-bar': path.resolve(__dirname, '..', 'packages', 'top-app-bar'),
    },
  },
};