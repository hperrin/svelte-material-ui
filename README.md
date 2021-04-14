<div align="center">
  <img src="site/static/header-transparent.png" alt="Svelte Material UI" />
</div>

A library of Svelte 3 Material UI components, based on the [Material Design Components - Web](https://material.io/develop/web/).

# Demos

https://sveltematerialui.com

# Installation

You _should_ install the packages individually. Alternatively, you can install all of them at once with the `svelte-material-ui` package.

```sh
# Install the packages individually.
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# ...

# Or, you can install this to get them all.
npm install --save-dev svelte-material-ui
```

# MDC 10 Update!

The latest SMUI, v3 (beta), uses the latest upstream [Material Design Components for Web (MDC)](https://github.com/material-components/material-components-web), v10. I've done a lot more than upgrade the version, though! I rewrote SMUI to use the ["Advanced Approach"](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-advanced-approach-using-foundations-and-adapters) of integrating with the library, which should make updating to later upstream versions much easier. There should also be fewer bugs, because _Svelte_ is in charge of updating the DOM, instead of MDC.

<sub>I literally used a vacation week to do this.</sub>

## Migration

If you are upgrading from an older version of SMUI to a newer one, it might be worth checking out the [migration doc](MIGRATING.md).

# Usage

Check out the [Webpack template](https://github.com/hperrin/smui-example-webpack) and the [Rollup template](https://github.com/hperrin/smui-example-rollup) for examples.

1. To bundle this in your own code, use a Sass processor (not a Sass Svelte **preprocessor**, but a Sass **processor**). SMUI's `index.js` files import _.scss files_, and they need to be compiled by a Sass processor. SMUI's `*.svelte` files don't include any Sass or CSS, so a Svelte _preprocessor_ is not necessary.
   - Alternatively, you can import components from the `bare.js` files, which don't include any styling. Then you can either import the Sass yourself, or use the `bare.css` files which are precompiled (with the default theme) and packaged with components. Then you can skip the next step, but your [theming options](THEMING.md#theming-the-bare-css) are limited.
   - Note that `node-sass` is deprecated, and SMUI uses features that it doesn't support. You should use [Dart Sass](https://www.npmjs.com/package/sass) instead.
2. You must have a `_smui-theme.scss` file in one of your Sass include paths to compile the Sass. That is where you [set the theme variables](THEMING.md). If it's empty, it will use the default theme values from MDC-Web.
3. If you want the Material Icon, Roboto, and Roboto Mono fonts, be sure to include these stylesheets (or include them from a package):
   ```html
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/icon?family=Material+Icons"
   />
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
   />
   <link
     rel="stylesheet"
     href="https://fonts.googleapis.com/css?family=Roboto+Mono"
   />
   ```
4. You're now ready to install and use SMUI packages. Here's some example code:

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

Here are some features you should know about:

- You can add arbitrary properties to all of the components and many of the elements within them.
- You can add actions to the components with `use={[Action1, [Action2, action2Props], Action3]}`.
- You can add props to lower components and elements with "$" props, like `input$maxlength="15"`.
- All [standard UI and transition events](packages/common/forwardEventsBuilder.js#L4) are forwarded on components, input events ("input" and "change") are forwarded on input components, and all MDC events are forwarded.
- Labels and icons are named exports in the components that use them, or you can use the 'Label' and 'Icon' exports from '@smui/common'. (Except for chips labels and icons, textfield icons, and select icons, because they are special snowflakes.)
- SMUI [supports RTL languages](https://svelte.dev/repl/c2ff2d5dd5404eccb901ba04ef0161be?version=3.37.0).

## Integration for Sapper

<sub>\* As of 2021-Apr-06, these instructions will now work without a flash of unstyled content!</sub>

1. Install the following packages as dev dependencies
   - With yarn
     ```sh
     yarn add rollup-plugin-postcss sass --dev
     ```
   - With npm
     ```sh
     npm i -D rollup-plugin-postcss sass
     ```
2. Create the `src/theme/_smui-theme.scss` file

   ```sh
   mkdir src/theme && touch src/theme/_smui-theme.scss
   ```

3. Update `rollup.config.js` with the following configuration

   ```
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

4. In the `template.html` file, in the `<head>` section right after `%sapper.base%`, paste the following

   ```
   <!-- SMUI Styles -->
   <link rel="stylesheet" href="client/smui.css">
   ```

5. Install a SMUI package, and include it from your Svelte files like this

   ```svelte
   <Button on:click={() => alert('Clicked!')}>Click Me!</Button>

   <script>
     import Button from '@smui/button';
   </script>
   ```

6. Profit!

## Loading SMUI in the Svelte REPL

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

# Components

Click a component below to go to its documentation. (Note that this documentation is a work in progress. The demo code should be your main source of truth for how something works.)

- [Banner](packages/banner/README.md)
- [Button](packages/button/README.md)
  - [Floating Action Button](packages/fab/README.md)
  - [Icon Button](packages/icon-button/README.md)
- [Card](packages/card/README.md)
- [Chips](packages/chips/README.md)
- [Data Table](packages/data-table/README.md)
- [Dialog](packages/dialog/README.md)
- [Drawer](packages/drawer/README.md)
- [Elevation](https://sveltematerialui.com/demo/elevation/)†
- [Image List](packages/image-list/README.md)
- Inputs and Controls
  - [Checkbox](packages/checkbox/README.md)
  - [Floating Label](packages/floating-label/README.md)
  - [Form Field](packages/form-field/README.md)
  - [Line Ripple](packages/line-ripple/README.md)
  - [Notched Outline](packages/notched-outline/README.md)
  - [Radio Button](packages/radio/README.md)
  - [Select Menu](packages/select/README.md)
    - [Select Helper Text](packages/select/helper-text/README.md)
    - [Select Icon](packages/select/icon/README.md)
  - [Slider](packages/slider/README.md)
  - [Switch](packages/switch/README.md)
  - [Text Field](packages/textfield/README.md)
    - [Text Field Character Counter](packages/textfield/character-counter/README.md)
    - [Text Field Helper Text](packages/textfield/helper-text/README.md)
    - [Text Field Icon](packages/textfield/icon/README.md)
- [Layout Grid](packages/layout-grid/README.md)
- [List](packages/list/README.md)
- [Menu Surface](packages/menu-surface/README.md)
- [Menu](packages/menu/README.md)
- [Paper](packages/paper/README.md)‡
- Progress Indicators
  - [Circular Progress](packages/circular-progress/README.md)
  - [Linear Progress](packages/linear-progress/README.md)
- [Ripple](packages/ripple/README.md)
- [Snackbar](packages/snackbar/README.md)
  - [Kitchen](packages/snackbar/kitchen/README.md)‡
- Tabs
  - [Tab](packages/tab/README.md)
  - [Tab Bar](packages/tab-bar/README.md)
- [Theme](https://sveltematerialui.com/demo/theme/)†
- [Top App Bar](packages/top-app-bar/README.md)
- [Typography](https://sveltematerialui.com/demo/typography/)†

New components from the upstream library to build for SMUI v3:

- [x] Banners
- [x] Circular Progress
- [x] Layout Grids (Not new to MDC, but I haven't made a component for it.)
- [ ] Segmented Buttons (This is different than SMUI's button groups.)
- [ ] Tooltips
- [ ] Touch Target Wrappers
- [ ] Data Table Pagination
- [ ] Data Table Progress Indicator
- [ ] Data Table Column Sort Buttons

<sub>† This is Sass based, and therefore doesn't require Svelte components. I've included a demo showing how you can use it.</sub>

<sub>‡ This is not an MDC Web component. It is an addition that SMUI provides.</sub>

# Support

I'm a full time software engineer, and I work on this project in my free time. Unfortunately that means when I have to focus more on other things, I have less time to work on this project. I try to focus my time on whichever of my projects gets the most attention and community support. Right now, it's a toss up between PNotify and SMUI, but SMUI is consistently growing. If you want to see me focus on SMUI, star this repo. :)

You can support my work on this project through my other project, [Tunnelgram](https://tunnelgram.com). I have a [Patreon](https://www.patreon.com/tunnelgram) set up for it. I started this project in order to Materialize Tunnelgram.

# License

Copyright 2020-2021 Hunter Perrin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
