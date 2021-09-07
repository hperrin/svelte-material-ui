# Integration for Sapper

<sub>\* As of 2021-Apr-06, these instructions will now work without a flash of unstyled content!</sub>

These instructions are for the Advanced Styling Method. If you don't need the advantages of this method, it's much easier to use the [Easy Styling Method](SASS.md#easy-styling-method).

Install the following packages as dev dependencies.

```sh
npm install --save-dev rollup-plugin-postcss sass
```

Create the `src/theme/_smui-theme.scss` file.

```sh
npx smui-theme template src/theme
```

Update `rollup.config.js` with the following configuration.

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

In the `template.html` file, in the `<head>` section right after `%sapper.base%`, paste the following.

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

## Dark Mode

The best way to implement a dark mode is to recompile the Sass with a different theme. This involves running the same code through your bundler again with a different Sass configuration. The website accomplishes this within Sapper by using the following modified code from the Sapper installation instructions.

```js
import fs from 'fs';

// ...

const postcssOptions = (light) => ({
  extensions: ['.scss'],
  extract: 'smui.css',
  minimize: true,
  onExtract: light
    ? null
    : (getExtracted) => {
        let { code } = getExtracted();
        require('cssnano')
          .process(code, { from: undefined })
          .then(({ css }) => {
            const filename = `${config.client.output().dir}/smui-dark.css`;
            fs.writeFileSync(filename, css);
          });
        return false;
      },
  use: [
    [
      'sass',
      {
        includePaths: [`./src/theme${light ? '' : '/dark'}`, './node_modules'],
      },
    ],
  ],
});
```

This requires a separate "\_smui-theme.scss" file in a new directory under your "theme" directory named "dark". This file should contain your dark theme configuration.

If you followed the Sapper installation instructions, and modified the function above, you will now get an additional output file named "smui-dark.css". This is your compiled dark theme.

Now let's get it on your page. In your template, where you included the "smui.css" file, instead use the following.

```html
<!-- SMUI Styles -->
<link
  rel="stylesheet"
  href="client/smui.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="client/smui-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

This will get your dark theme working if the user has expressed a preference in their OS. To let the user choose which theme while on your site, you can do something like the following.

```js
let lightTheme =
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-color-scheme: light)').matches;
function switchTheme() {
  lightTheme = !lightTheme;
  let themeLink = document.head.querySelector('#theme');
  if (!themeLink) {
    themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.id = 'theme';
  }
  themeLink.href = `client/smui${lightTheme ? '' : '-dark'}.css`;
  document.head
    .querySelector('link[href="client/smui-dark.css"]')
    .insertAdjacentElement('afterend', themeLink);
}
```

Now just call `switchTheme()` from a toggle button or something, and the theme will be switched to the other one.
