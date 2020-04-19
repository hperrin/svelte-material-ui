<div align="center">
  <img src="site/static/header.png" alt="Svelte Material UI" />
</div>

A library of Svelte 3 Material UI components, based on the [Material Design Web Components](https://material.io/develop/web/).

# Demos

https://sveltematerialui.com

# Installation

You *should* install the packages individually. Alternatively, you can install all of them at once with the `svelte-material-ui` package.

```sh
# Install the packages individually.
npm install --save-dev @smui/button
npm install --save-dev @smui/card
# ...

# Or, you can install this to get them all.
npm install --save-dev svelte-material-ui
```

# Usage

Check out the [Webpack template](https://github.com/hperrin/smui-example-webpack) and the [Rollup template](https://github.com/hperrin/smui-example-rollup) for examples.

1. To bundle this in your own code, use a Sass processor (not a Sass Svelte preprocessor, but a Sass processor). SMUI `index.js` files import Sass files, and they need to be compiled by a processor. The `*.svelte` files don't include any Sass or CSS, so a Svelte preprocessor is not necessary.
   * Alternatively, you can import from the `bare.js` files, which doesn't include any styling. Then you can either import the Sass yourself, or use the `bare.css` files which are precompiled and packaged with the default theme.
2. You must have a `_smui-theme.scss` file in one of your Sass include paths to compile the Sass. That is where you set the MDC theme variables. If it's empty, it will use the default theme values from MDC. See the [theme file](https://github.com/hperrin/svelte-material-ui/blob/master/site/src/theme/_smui-theme.scss) in the demo site for an example that uses Svelte colors.
3. If you want the Material Icon, Roboto, and Roboto Mono fonts, be sure to include these (or include them from a package):
    ```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
    ```
4. You're now ready to use SMUI. Here's some example code:
    ```html
    <Button on:click={() => alert('Clicked!')}>Just a Button</Button>
    <Button variant="raised"><Label>Raised Button, Using a Label</Label></Button>
    <Button some-arbitrary-prop="placed on the actual button">Button</Button>

    <Fab on:click={() => alert('Clicked!')} extended>
      <Icon class="material-icons" style="margin-right: 12px;">favorite</Icon>
      <Label>Extended FAB</Label>
    </Fab>

    <Textfield
      bind:value={superText}
      label="Super Text"
      input$aria-controls="super-helper"
      input$aria-describedby="super-helper"
    />
    <HelperText id="super-helper">What you put in this box will become super!</HelperText>

    <script>
      import Button from '@smui/button';
      import Fab from '@smui/fab';
      import Textfield from '@smui/textfield';
      import HelperText from '@smui/textfield/helper-text';
      import {Label, Icon} from '@smui/common';

      let superText = '';
    </script>
    ```

Here are some features you should know about:

* You can add arbitrary properties to all of the components and many of the elements within them.
* You can add actions to the components with `use={[Action1, [Action2, action2Props], Action3]}`.
* You can add props to lower components and elements with things like `input$maxlength="15"`.
* All [standard UI events](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/forwardEvents.js#L4) are forwarded on components, input events ("input" and "change") are forwarded on input components, and all MDC events are forwarded.
* Labels and icons are named exports in the components that use them, or you can use 'common/Label' and 'common/Icon'. (Except for textfield and select icons, because they are special snowflakes.)

# Components

I've only done components that need to/can be Svelte-ified. For some things, like RTL and layout grid, you can just use the MDC packages.

Click a component below to go to its documentation.

- [Buttons](https://github.com/hperrin/svelte-material-ui/blob/master/packages/button/README.md)
  - [Floating Action Buttons](https://github.com/hperrin/svelte-material-ui/blob/master/packages/fab/README.md)
  - [Icon Buttons](https://github.com/hperrin/svelte-material-ui/blob/master/packages/icon-button/README.md)
- [Cards](https://github.com/hperrin/svelte-material-ui/blob/master/packages/card/README.md)
- [Chips](https://github.com/hperrin/svelte-material-ui/blob/master/packages/chips/README.md)
- [Data Tables](https://github.com/hperrin/svelte-material-ui/blob/master/packages/data-table/README.md)
- [Dialogs](https://github.com/hperrin/svelte-material-ui/blob/master/packages/dialog/README.md)
- [Drawers](https://github.com/hperrin/svelte-material-ui/blob/master/packages/drawer/README.md)
- [Elevation](https://material.io/develop/web/components/elevation/)†
- [Image List](https://github.com/hperrin/svelte-material-ui/blob/master/packages/image-list/README.md)
- Inputs and Controls
  - [Checkboxes](https://github.com/hperrin/svelte-material-ui/blob/master/packages/checkbox/README.md)
  - [Floating Label](https://github.com/hperrin/svelte-material-ui/blob/master/packages/floating-label/README.md)
  - [Form Fields](https://github.com/hperrin/svelte-material-ui/blob/master/packages/form-field/README.md)
  - [Line Ripple](https://github.com/hperrin/svelte-material-ui/blob/master/packages/line-ripple/README.md)
  - [Notched Outline](https://github.com/hperrin/svelte-material-ui/blob/master/packages/notched-outline/README.md)
  - [Radio Buttons](https://github.com/hperrin/svelte-material-ui/blob/master/packages/radio/README.md)
  - [Select Menus](https://github.com/hperrin/svelte-material-ui/blob/master/packages/select/README.md)
    - [Select Helper Text](https://github.com/hperrin/svelte-material-ui/blob/master/packages/select/helper-text/README.md)
    - [Select Icon](https://github.com/hperrin/svelte-material-ui/blob/master/packages/select/icon/README.md)
  - [Sliders](https://github.com/hperrin/svelte-material-ui/blob/master/packages/slider/README.md)
  - [Switches](https://github.com/hperrin/svelte-material-ui/blob/master/packages/switch/README.md)
  - [Text Field](https://github.com/hperrin/svelte-material-ui/blob/master/packages/textfield/README.md)
    - [Text Field Character Counter](https://github.com/hperrin/svelte-material-ui/blob/master/packages/textfield/character-counter/README.md)
    - [Text Field Helper Text](https://github.com/hperrin/svelte-material-ui/blob/master/packages/textfield/helper-text/README.md)
    - [Text Field Icon](https://github.com/hperrin/svelte-material-ui/blob/master/packages/textfield/icon/README.md)
- [Linear Progress](https://github.com/hperrin/svelte-material-ui/blob/master/packages/linear-progress/README.md)
- [Lists](https://github.com/hperrin/svelte-material-ui/blob/master/packages/list/README.md)
- [Menu Surface](https://github.com/hperrin/svelte-material-ui/blob/master/packages/menu-surface/README.md)
- [Menus](https://github.com/hperrin/svelte-material-ui/blob/master/packages/menu/README.md)
- [Paper](https://github.com/hperrin/svelte-material-ui/blob/master/packages/paper/README.md)‡
- [Ripples](https://github.com/hperrin/svelte-material-ui/blob/master/packages/ripple/README.md)
- [Snackbars](https://github.com/hperrin/svelte-material-ui/blob/master/packages/snackbar/README.md)
  - [Kitchen](https://github.com/hperrin/svelte-material-ui/blob/master/packages/snackbar/kitchen/README.md)‡
- Tabs
  - [Tab](https://github.com/hperrin/svelte-material-ui/blob/master/packages/tab/README.md)
  - [Tab Bar](https://github.com/hperrin/svelte-material-ui/blob/master/packages/tab-bar/README.md)
  - [Tab Indicator](https://github.com/hperrin/svelte-material-ui/blob/master/packages/tab-indicator/README.md)
  - [Tab Scroller](https://github.com/hperrin/svelte-material-ui/blob/master/packages/tab-scroller/README.md)
- [Theme](https://material.io/develop/web/components/theme/)†
- [Top App Bar](https://github.com/hperrin/svelte-material-ui/blob/master/packages/top-app-bar/README.md)
- [Typography](https://material.io/develop/web/components/typography/)†

<small>† This is Sass based, and therefore doesn't require Svelte components. I've included a demo showing how you can use it.</small>

<small>‡ This is not an MDC Web component. It is an addition that SMUI provides.</small>

# Support

You can support my work on this project through my other project, [Tunnelgram](https://tunnelgram.com). I have a [Patreon](https://www.patreon.com/tunnelgram) set up for it. I started this project in order to Materialize Tunnelgram.

# License

Copyright 2020 Hunter Perrin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
