# Svelte Material UI

A library of Svelte 3 Material UI components, based on the [Material Design Web Components](https://material.io/develop/web/).

Here's the NPM package: https://www.npmjs.com/package/svelte-material-ui

## Demos

Check them out: https://hperrin.github.io/svelte-material-ui-demo/

## Installation

```sh
npm install --save svelte-material-ui
```

## Usage

To bundle this in your own code, use a Sass processor. This package includes Sass files in its JS.

You must also have a `_smui-theme.scss` file in one of the Sass include paths. That is where you set the MDC theme variables. If it's empty, it will use the default theme values. See the [webpack config](https://github.com/hperrin/svelte-material-ui-demo/blob/master/webpack.config.js) in the demo package for an example.

If you want the Material Icon, Roboto, and Roboto Mono fonts, be sure to include these:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
```

Here's some example code:

```html
<Button on:click="{() => alert('Clicked!')}">Just a Button</Button>
<Button variant="raised"><Label>Raised Button, Using a Label</Label></Button>
<Button some-arbitrary-prop="placed on the actual button">Button</Button>

<Fab on:click="{() => alert('Clicked!')}" extended>
  <Icon class="material-icons" style="margin-right: 12px;">favorite</Icon>
  <Label>Extended FAB</Label>
</Fab>

<Textfield
  bind:value={superText}
  label="Super Text"
  input$aria-controls="helper-text"
  input$aria-describedby="helper-text"
/>
<HelperText id="helper-text">What you put in this box will become super!</HelperText>

<script>
  import Button from 'svelte-material-ui/button';
  import Fab from 'svelte-material-ui/fab';
  import Textfield, {HelperText} from 'svelte-material-ui/textfield';
  import {Label, Icon} from 'svelte-material-ui/common';

  let superText = '';
</script>
```

You can check out the [demo pages' source](https://github.com/hperrin/svelte-material-ui-demo/tree/master/component-demos) to see usage, since most of the components aren't documented yet.

Here are some juicy features:

* You can add any arbitrary property to nearly all of the components.
* You can add actions to the components with `use={[Action1, [Action2, action2Props]]}`.
* You can add props to lower components and elements with things like `input$maxlength="15"`.
* Ripples are on by default on interactive components, and can be turned off with `ripple={false}`.
* You can also add ripples to things with the Ripple Svelte action.
* All standard UI events are forwarded on most components, input events are forwarded on input components, and all MDC events are forwarded.
* Things like labels and icons are named exports in each component, or you can use 'common/Label' and 'common/Icon'. (Except for textfield/select icons, because they are special snowflakes.)

## Components

I've only done components that need to/can be Svelte-ified. For some things, like RTL and layout grid, you can just use the MDC packages.

- [Buttons](https://github.com/hperrin/svelte-material-ui/blob/master/button/README.md)
  - Floating Action Buttons
  - Icon Buttons
- Cards
- Chips
- Data Tables
- Dialogs
- Drawers
- [Elevation](https://material.io/develop/web/components/elevation/)†
- Image List
- Inputs and Controls
  - [Checkboxes](https://github.com/hperrin/svelte-material-ui/blob/master/checkbox/README.md)
  - [Floating Label](https://github.com/hperrin/svelte-material-ui/blob/master/floating-label/README.md)
  - [Form Fields](https://github.com/hperrin/svelte-material-ui/blob/master/form-field/README.md)
  - Line Ripple
  - Notched Outline
  - Radio Buttons
  - Select Menus
    - Select Helper Text
    - Select Icon
  - Sliders
  - Switches
  - Text Field
    - Text Field Character Counter
    - Text Field Helper Text
    - Text Field Icon
- [Linear Progress](https://github.com/hperrin/svelte-material-ui/blob/master/linear-progress/README.md)
- Lists
- Menu Surface
- Menus
- [Paper](https://github.com/hperrin/svelte-material-ui/blob/master/paper/README.md)‡
- Ripples
- Snackbars
- Tabs
  - Tab
  - Tab Bar
  - Tab Indicator
  - Tab Scroller
- Theme
- Top App Bar
- [Typography](https://material.io/develop/web/components/typography/)†

<small>† This is Sass based, and therefore doesn't require Svelte components. I've included a demo showing how you can use it.</small>

<small>‡ This is not an MDC Web component. It is an addition that SMUI provides.</small>

## Other Svelte UI Projects

Svelte UI libraries are really starting to make good progress. Check out this Fomantic-UI component library:

https://github.com/titans-inc/sveltemantic

## License

Copyright 2019 Hunter Perrin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.