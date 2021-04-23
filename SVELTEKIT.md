# SvelteKit

Check out the [SvelteKit example repo](https://github.com/hperrin/smui-example-sveltekit).

You will need to install the packages you use individually as well as the main package.

```sh
npm install --save-dev svelte-material-ui
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# etc.
```

You will also need to add this in your Vite SSR config in `svelte.config.cjs`.

```js
noExternal: [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}).filter((name) =>
    name.startsWith("@smui")
  ),
],
```

You will need to use the Easy Styling Method for dark mode support.

And you will need to use one of these sets of prepare scripts.

- For the Default Theme

  ```
  "prepare": "npm run vite-workaround",
  "vite-workaround": "find node_modules/@material/ -name \"*.js.map\" -type f -delete"
  ```

- Without Dark Mode

  ```
  "prepare": "npm run vite-workaround && npm run smui-theme",
  "vite-workaround": "find node_modules/@material/ -name \"*.js.map\" -type f -delete",
  "smui-theme": "sass --no-source-map -I src/theme -I node_modules src/app.scss static/smui.css"
  ```

- With Dark Mode

  ```
  "prepare": "npm run vite-workaround && npm run smui-theme-light && npm run smui-theme-dark",
  "vite-workaround": "find node_modules/@material/ -name \"*.js.map\" -type f -delete",
  "smui-theme-light": "sass --no-source-map -I src/theme -I node_modules src/app.scss static/smui.css",
  "smui-theme-dark": "sass --no-source-map -I src/theme/dark -I node_modules src/app.scss static/smui-dark.css"
  ```

If you are on Windows, check out the [workaround script](https://github.com/hperrin/smui-example-sveltekit/blob/master/_helper/vite-workaround.js) and [how to use it](https://github.com/hperrin/smui-example-sveltekit/blob/master/package.json) in the [SvelteKit example repo](https://github.com/hperrin/smui-example-sveltekit) instead, because the `find` command in the `vite-workaround` script above won't work for you.
