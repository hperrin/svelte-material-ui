# SvelteKit

Check out the [SvelteKit example repo](https://github.com/hperrin/smui-example-sveltekit).

You will need to install the packages you use individually as well as the theme package.

```sh
npm install --save @smui/button
npm install --save @smui/card
# etc...

npm install --save-dev smui-theme
```

You will need to use the Easy Styling Method, and you will need to use one of these sets of prepare scripts.

- For the Default Theme

  ```
  "prepare": "npm run vite-workaround",
  "vite-workaround": "find node_modules/@material/ -name \"*.js.map\" -type f -delete"
  ```

- [Custom Theme](THEMING.md), without Dark Mode

  ```
  "prepare": "npm run vite-workaround && npm run smui-theme",
  "vite-workaround": "find node_modules/@material/ -name \"*.js.map\" -type f -delete",
  "smui-theme": "smui-theme compile static/smui.css -i src/theme"
  ```

- [Custom Theme](THEMING.md), with Dark Mode

  ```
  "prepare": "npm run vite-workaround && npm run smui-theme-light && npm run smui-theme-dark",
  "vite-workaround": "find node_modules/@material/ -name \"*.js.map\" -type f -delete",
  "smui-theme-light": "smui-theme compile static/smui.css -i src/theme",
  "smui-theme-dark": "smui-theme compile static/smui-dark.css -i src/theme/dark"
  ```

If you are on Windows, check out the [workaround script](https://github.com/hperrin/smui-example-sveltekit/blob/master/_helper/vite-workaround.js) and [how to use it](https://github.com/hperrin/smui-example-sveltekit/blob/master/package.json) in the [SvelteKit example repo](https://github.com/hperrin/smui-example-sveltekit) instead, because the `find` command in the `vite-workaround` scripts above won't work for you.
