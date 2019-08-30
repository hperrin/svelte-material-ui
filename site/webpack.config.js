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
      '@svelte-material-ui/button': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'button'),
      '@svelte-material-ui/card': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'card'),
      '@svelte-material-ui/checkbox': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'checkbox'),
      '@svelte-material-ui/chips': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'chips'),
      '@svelte-material-ui/common': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'common'),
      '@svelte-material-ui/data-table': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'data-table'),
      '@svelte-material-ui/dialog': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'dialog'),
      '@svelte-material-ui/drawer': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'drawer'),
      '@svelte-material-ui/fab': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'fab'),
      '@svelte-material-ui/floating-label': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'floating-label'),
      '@svelte-material-ui/form-field': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'form-field'),
      '@svelte-material-ui/icon-button': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'icon-button'),
      '@svelte-material-ui/image-list': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'image-list'),
      '@svelte-material-ui/line-ripple': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'line-ripple'),
      '@svelte-material-ui/linear-progress': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'linear-progress'),
      '@svelte-material-ui/list': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'list'),
      '@svelte-material-ui/menu': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'menu'),
      '@svelte-material-ui/menu-surface': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'menu-surface'),
      '@svelte-material-ui/notched-outline': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'notched-outline'),
      '@svelte-material-ui/paper': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'paper'),
      '@svelte-material-ui/radio': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'radio'),
      '@svelte-material-ui/ripple': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'ripple'),
      '@svelte-material-ui/select': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'select'),
      '@svelte-material-ui/slider': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'slider'),
      '@svelte-material-ui/snackbar': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'snackbar'),
      '@svelte-material-ui/switch': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'switch'),
      '@svelte-material-ui/tab': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'tab'),
      '@svelte-material-ui/tab-bar': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'tab-bar'),
      '@svelte-material-ui/tab-indicator': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'tab-indicator'),
      '@svelte-material-ui/tab-scroller': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'tab-scroller'),
      '@svelte-material-ui/textfield': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'textfield'),
      '@svelte-material-ui/top-app-bar': path.resolve(__dirname, '..', 'svelte-material-ui', 'packages', 'top-app-bar'),
    },
  },
};