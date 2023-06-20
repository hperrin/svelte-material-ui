# SvelteKit Installation

You will need to install the packages you use individually as well as the theme package.

Note: After you install a new package, you will need to restart SvelteKit.

```sh
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# etc...

npm install --save-dev smui-theme
```

Create your theme files with `smui-theme`.

```sh
npx smui-theme template src/theme
```

You can [modify your theme variables](/THEMING.md#theme-variables) in the files now in `src/theme` and `src/theme/dark`. You can also add the [Material typography styles](/TYPOGRAPHY.md).

## Theme Build Scripts

You'll need one of these sets of prepare scripts in your `package.json` file.

With Dark Mode support.

```
"prepare": "npm run smui-theme-light && npm run smui-theme-dark",
"smui-theme-light": "smui-theme compile static/smui.css -i src/theme",
"smui-theme-dark": "smui-theme compile static/smui-dark.css -i src/theme/dark"
```

Or, without Dark Mode support.

```
"prepare": "npm run smui-theme",
"smui-theme": "smui-theme compile static/smui.css -i src/theme"
```

## Stylesheets

Now in your `src/app.html` file, add the following to the `head` section:

With Dark Mode support.

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
<link
  rel="stylesheet"
  href="/smui-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
```

Or, without Dark Mode support.

```html
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" />
```

### Fonts

Material uses the Roboto fonts, so include those as well. If you'd like to use the Material Icons font, include that as well.

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

## Finishing Up

After that, run `npm run prepare` to build your CSS file, then you can run `npm run dev` to start developing. Happy coding!

## Adding More SMUI Packages

Whenever you add a new SMUI package, run `npm run prepare` again to rebuild your CSS file with the new component's styles included.
