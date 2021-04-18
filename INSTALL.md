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

(From here there are [different instructions](INSTALL.md#integration-for-sapper) for Sapper.)

You also need [Dart Sass](https://www.npmjs.com/package/sass). (`node-sass` is deprecated, and SMUI uses features that it doesn't support.)

```sh
npm install --save-dev sass
```

For Rollup, you will need the PostCSS plugin. (Check out the [Rollup template](https://github.com/hperrin/smui-example-rollup).)

```sh
npm install --save-dev rollup-plugin-postcss
```

Or, for Webpack, you will need the Style, CSS, and Sass Loaders. (Check out the [Webpack template](https://github.com/hperrin/smui-example-webpack).)

```sh
npm install --save-dev style-loader css-loader sass-loader
```

If you're not using a bunbler, you can import components from the `bare.js` files, which don't include any styling. Then you can use the `bare.css` files which are precompiled (with the default theme) and packaged with components. Then you can skip the next step, but your [theming options](THEMING.md#theming-the-bare-css) are limited.

## Setting up Sass

You must have a `_smui-theme.scss` file in one of your Sass include paths to compile the Sass. That is where you [set the theme variables](THEMING.md). If it's empty, it will use the default theme values from MDC-Web. You can create a "theme" directory in your source directory, and create the file there.

```sh
mkdir src/theme
touch src/theme/_smui-theme.scss
```

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

## Using SMUI Components

You're now ready to use SMUI packages. Here's some example code.

```svelte
<Button on:click={() => alert('Clicked!')}>Just a Button</Button>
<Button variant="raised"><Label>Raised Button, Using a Label</Label></Button>
<Button some-arbitrary-prop="placed on the actual button">Button</Button>

<Fab on:click={() => alert('Clicked!')} extended>
  <Icon class="material-icons" style="margin-right: 12px;">favorite</Icon>
  <Label>Extended FAB</Label>
</Fab>

<Textfield bind:value={superText} label="Super Text">
  <HelperText slot="helper"
    >What you put in this box will become super!</HelperText
  >
</Textfield>

<script>
  import Button from '@smui/button';
  import Fab from '@smui/fab';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import { Label, Icon } from '@smui/common';

  let superText = '';
</script>
```

# Integration for Sapper

<sub>\* As of 2021-Apr-06, these instructions will now work without a flash of unstyled content!</sub>

Install the following packages as dev dependencies

```sh
npm i -D rollup-plugin-postcss sass
```

Create the `src/theme/_smui-theme.scss` file

```sh
mkdir src/theme
touch src/theme/_smui-theme.scss
```

Update `rollup.config.js` with the following configuration

```js
// ...
// Put this along with the other imports.
import postcss from "rollup-plugin-postcss";

// ...

// Insert the following right before the "export default {" line:
const postcssOptions = (extract) => ({
  extensions: ['.scss'],
  extract: extract ? 'smui.css' : false,
  minimize: true,
  use: [
    [
      'sass',
      {
        includePaths: ['./src/theme', './node_modules'],
      },
    ],
  ],
});

// Right after the "svelte" plugin in the "client:" section, paste the following plugin.
postcss(postcssOptions(true)),

// Right after the "svelte" plugin in the "server:" section, paste the following plugin.
postcss(postcssOptions(false)),

// Don't touch the "serviceworker:" section.
// ...
```

In the `template.html` file, in the `<head>` section right after `%sapper.base%`, paste the following

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="client/smui.css" />
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
```

You're now ready to use SMUI packages. Here's some example code.

```svelte
<Button on:click={() => alert('Clicked!')}>Click Me!</Button>

<script>
  import Button from '@smui/button';
</script>
```

You can also [set up a dark mode](THEMING.md#dark-mode) in your Sapper app.

# Using SMUI in the Svelte REPL

Check out an [example REPL](https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a?version=3.37.0).

SMUI components provide "bare.css" and "bare.js" files to use in the REPL. In a `<svelte:head>` section, load from a CDN like UNPKG the CSS files for the fonts, for Material typography, and for each SMUI component you are using:

```svelte
<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@10.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/@smui/button/bare.css" />
  <link rel="stylesheet" href="https://unpkg.com/@smui/card/bare.css" />
</svelte:head>
```

Now load the Components, remembering to use the `/bare` script, from within a `<script>` section, and you can use them:

```svelte
<Button on:click={() => alert('See, I told you.')}>This is a button!</Button>

<Card style="width: 360px; margin: 2em auto;">
  <Content class="mdc-typography--body2">This is a card!</Content>
</Card>

<script>
  import Button from '@smui/button/bare';
  import Card, { Content } from '@smui/card/bare';
</script>
```

If you import from `@smui/common`, you don't need the `/bare` portion, since it doesn't have any Sass, so it can use the index file.
