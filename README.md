# Svelte Material UI Components

A work in progress library of Svelte 3 components for Material UI.

## Demos

Check them out: https://hperrin.github.io/svelte-material-ui/demo/

## Usage

Here's some code showing what's possible:

```html
<Button>Just a Button</Button>
<Button raised><ButtonLabel>Raised Button, Using a Label</ButtonLabel></Button>
<Button some-arbitrary-prop="placed on the actual button">Button</Button>

<Fab on:click="{() => alert('Clicked!')}" extended>
  <FabIcon style="margin-right: 12px;">favorite</FabIcon>
  <FabLabel>Extended FAB</FabLabel>
</Fab>

<script>
  import Button, {Label as ButtonLabel} from 'svelte-material-ui/components/button';
  import Fab, {Label as FabLabel, Icon as FabIcon} from 'svelte-material-ui/components/fab';
</script>
```

* You can add any arbitrary property to elements.
* Ripples are on by default, and can be turned off with `ripple={false}`.
* All standard UI events are forwarded.
* Things like labels and icons are named exports in each component.

To bundle these in your own code, use the `svelte-preprocess` package.

## Progress

I'm only going to do things that need to/can be Svelte-ified. For some things, like RTL and DOM, you can just use the MDC packages.

- [x] Buttons
  - [x] Floating Action Buttons
  - [x] Icon Buttons
- [x] Cards
- [x] Chips
- [x] Dialogs
- [ ] Elevation
- [ ] Drawers
- [ ] Grid Lists
- [ ] Image Lists
- [ ] Inputs and Controls
  - [ ] Checkboxes
  - [ ] Floating Label
  - [ ] Form Fields
  - [ ] Line Ripple
  - [ ] Notched Outline
  - [ ] Radio Buttons
  - [ ] Select Menus
    - [ ] Select Helper Text
    - [ ] Select Icon
  - [ ] Sliders
  - [ ] Switches
  - [ ] Text Field
    - [ ] Text Field Character Counter
    - [ ] Text Field Helper Text
    - [ ] Text Field Icon
- [ ] Layout Grid
- [ ] Linear Progress
- [ ] Lists
- [ ] Menu Surface
- [ ] Menus
- [x] Ripples
- [ ] Snackbars
- [ ] Tabs
- [ ] Theme
- [ ] Toolbars (deprecated)
- [ ] Top App Bar
- [x] Typography

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