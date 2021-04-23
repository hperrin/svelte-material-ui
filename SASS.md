# Custom Theme with Sass

You will need [Dart Sass](https://www.npmjs.com/package/sass). (`node-sass` is deprecated, and SMUI uses features that it doesn't support.)

```sh
npm install --save-dev sass
```

You must have a `_smui-theme.scss` file in one of your Sass include paths to compile the Sass. That is where you [set the theme variables](THEMING.md). You can create a "theme" directory in your source directory, and create the file there.

```sh
mkdir src/theme
touch src/theme/_smui-theme.scss
```

## Easy Styling Method

The Easy Styling Method builds styles for all of the SMUI components with your theme into CSS that you can include on your page easily.

Be sure to install the `svelte-material-ui` package.

```sh
npm install --save-dev svelte-material-ui
```

In your package.json file, add this script in the "scripts" section, adjusting the destination file as desired.

```
"prepare": "sass --no-source-map -I src/theme -I node_modules node_modules/svelte-material-ui/_index.scss build/smui.css",
```

Now run `npm run prepare` to build the CSS file, and include it on your page.

**Remember to import components with the "/bare" endpoint.**

### Dark Mode

For dark mode, you can make a new `_smui-theme.scss` file in a new "dark" directory under your "theme" directory.

```sh
mkdir src/theme/dark
touch src/theme/dark/_smui-theme.scss
```

Replace the sript above with this.

```
"prepare": "npm run smui-theme-light && npm run smui-theme-dark",
"smui-theme-light": "sass --no-source-map -I src/theme -I node_modules node_modules/svelte-material-ui/_index.scss build/smui.css",
"smui-theme-dark": "sass --no-source-map -I src/theme/dark -I node_modules node_modules/svelte-material-ui/_index.scss build/smui-dark.css",
```

Now run `npm install` to build the CSS files, then include them on your page.

## Advanced Styling Method

The advanced method will only build the styles for the SMUI components that you use in your app. The website uses the advanced styling method.

(From here there are [different instructions](SAPPER.md) for Sapper.)

For Rollup, you will need the PostCSS plugin. (Check out the [Rollup template](https://github.com/hperrin/smui-example-rollup).)

```sh
npm install --save-dev rollup-plugin-postcss
```

Or, for Webpack, you will need the Style, CSS, and Sass Loaders. (Check out the [Webpack template](https://github.com/hperrin/smui-example-webpack).)

```sh
npm install --save-dev style-loader css-loader sass-loader
```

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
