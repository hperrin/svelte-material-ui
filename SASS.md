# Custom Theme with Sass

To create a custom theme, install the SMUI Theme Builder.

```sh
npm install --save-dev smui-theme
```

You can use it to create your theme directory from a template. Adjust to your source directory if needed.

```sh
npx smui-theme template src/theme
```

This creates `_smui-theme.scss` files in `src/theme`. That is where you [set the theme variables](THEMING.md).

## Easy Styling Method

The Easy Styling Method builds styles into a CSS file that you can include on your page easily.

In your package.json file, add this script in the "scripts" section, adjusting the source/destination files as needed.

```
"prepare": "smui-theme compile build/smui.css -i src/theme",
```

Or for dark mode.

```
"prepare": "npm run smui-theme-light && npm run smui-theme-dark",
"smui-theme-light": "smui-theme compile build/smui.css -i src/theme",
"smui-theme-dark": "smui-theme compile build/smui-dark.css -i src/theme/dark",
```

Now run `npm run prepare` to build the CSS file(s), then add it/them on your page.

## Advanced Styling Method

The Advanced Styling Method bundles SMUI's CSS with your app's CSS.

(From here there are [different instructions](SAPPER.md) for Sapper.)

For Rollup, you will need the PostCSS plugin. (Check out the [Rollup template](https://github.com/hperrin/smui-example-rollup).)

```sh
npm install --save-dev sass rollup-plugin-postcss
```

Or, for Webpack, you will need the Style, CSS, and Sass Loaders. (Check out the [Webpack template](https://github.com/hperrin/smui-example-webpack).)

```sh
npm install --save-dev sass style-loader css-loader sass-loader
```

**Remember to import components with the "/styled" endpoint.**

### Setting up Sass

In your bundler's config, you'll need to tell your bundler to compile Sass files.

For Rollup, add the following plugin to your "rollup.config.js". (Adjusting the source path if needed.)

```js
import postcss from 'rollup-plugin-postcss';

// ...

module.exports = {
  // ...
  plugins: [
    // ...

    postcss({
      extract: true,
      minimize: true,
      use: [
        [
          'sass',
          {
            includePaths: ['./src/theme', './node_modules'],
          },
        ],
      ],
    }),

    // ...
  ],
};
```

Or, for Webpack, add the following module rule to your "webpack.config.js". (Adjusting the source path if needed.)

```js
// ...

module.exports = {
  // ...
  module: {
    rules: [
      // ...

      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sassOptions: {
                includePaths: ['./src/theme', './node_modules'],
              },
            },
          },
        ],
      },

      // ...
    ],
  },
};
```
