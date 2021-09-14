# SvelteKit

Check out the [SvelteKit example repo](https://github.com/hperrin/smui-example-sveltekit).

You will need to install the packages you use individually as well as the theme package.

```sh
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# etc...

npm install --save-dev smui-theme
```

You need to use the Easy Styling Method. If you aren't using the default theme, you'll need one of these sets of prepare scripts.

- For the [Custom Theme](/THEMING.md), without Dark Mode

  ```
  "prepare": "npm run smui-theme",
  "smui-theme": "smui-theme compile static/smui.css -i src/theme"
  ```

- For the [Custom Theme](/THEMING.md), with Dark Mode

  ```
  "prepare": "npm run smui-theme-light && npm run smui-theme-dark",
  "smui-theme-light": "smui-theme compile static/smui.css -i src/theme",
  "smui-theme-dark": "smui-theme compile static/smui-dark.css -i src/theme/dark"
  ```
