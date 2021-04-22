# Installation

## Installing Packages

You _should_ install the packages individually. Alternatively, you can install all of them at once with the `svelte-material-ui` package.

```sh
# Install the packages individually.
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# ...

# Or, you can install this to get them all.
npm install --save-dev svelte-material-ui
```

You can also [use SMUI in the Svelte REPL](REPL.md).

## Importing Components

You will always import Svelte components from the individual packages.

This method will include Sass files as well. Use this for the Advanced Styling Method.

```svelte
<script>
  import Button from '@smui/button';
</script>
```

And this method will only include the components. Use this for the Easy Styling Method.

```svelte
<script>
  import Button from '@smui/button/bare';
</script>
```

Notice that adding "/bare" to your import path means no Sass files will be imported. Use this method if you use the Easy Styling Method or the Default Theme with "bare.css".

For SvelteKit, check out the [SvelteKit instructions](#sveltkit).

## Material Fonts

If you want the Material Icon, Roboto, and Roboto Mono fonts, be sure to include these stylesheets (or include them from a package).

```html
<!-- Material Icons -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>
```

# Using the Default Theme

If you don't care about theming, you can use the prebuilt "bare.css" file from the "svelte-material-ui" package. You can also use the "bare.css" files from the individual packages if you don't use many components and want smaller file sizes.

```sh
npm install --save svelte-material-ui
```

```html
<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
```

Remember to import components with the "/bare" endpoint. If you want to theme SMUI, follow the next section instead.

# Using a Custom Theme

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

Now run `npm run prepare` to build the CSS file, and include it on your page. Remember to import components with the "/bare" endpoint.

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

Now run `npm run prepare` to build the CSS files, and include them on your page how you see fit.

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

If you're not using a bunbler, you can import components from the `bare.js` files, which don't include any styling. Then you can use the `bare.css` files which are precompiled (with the default theme) and packaged with components. Then you can skip the next step, but your [theming options](THEMING.md#theming-the-bare-css) are limited.

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

# SvelteKit

Check out the [SvelteKit example repo](https://github.com/hperrin/smui-example-sveltekit).

You will need to use the Easy Styling Method for dark mode support. You will also need to add this in your Vite SSR config.

```js
noExternal: [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}).filter((name) =>
    name.startsWith("@smui")
  ),
],
```

And you will need to use this set of prepare scripts.

```
"prepare": "npm run vite-workaround && npm run smui-theme-light && npm run smui-theme-dark",
"vite-workaround": "find node_modules/@material/ -name \"*.js.map\" -type f -delete",
"smui-theme-light": "sass --no-source-map -I src/theme -I node_modules src/app.scss static/smui.css",
"smui-theme-dark": "sass --no-source-map -I src/theme/dark -I node_modules src/app.scss static/smui-dark.css"
```
