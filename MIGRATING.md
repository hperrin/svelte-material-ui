# Migrating to Newer SMUI Versions

This doc contains information that will help you migrate your code from an older version of SMUI to a newer one. Things that you will need to change in your existing code will be written here. It would also be helpful to check the MDC changelog if the upstream MDC versions has changed between SMUI versions.

# SMUI 6 -> SMUI 7

SMUI 7 migrated to upstream MDC 14.0 from 13.0:
https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1400-2022-04-27

## Themes

I spent a day [flexing every graphic design muscle in my body](https://i.kym-cdn.com/entries/icons/original/000/018/929/graphic_design_is_my_passion.png), and made some THEMES! SMUI 7 can now be styled with a custom theme, the default theme, or [brand spanking new premade themes](https://sveltematerialui.com/INSTALL.md#a-premade-theme). This makes it much easier to get started with SMUI.

## Breaking Changes

- Tooling now **must** be Svelte-aware. This means adding conditional export names to Rollup and Webpack config. See installation docs.
- SMUI 7 (after v7.0.0-beta.9) is no longer compatible with Svelte 3. It now requires Svelte 4.
- If you had started using `component={Svg}`, you need to use `tag="svg"` after v7.0.0-beta.12.
- The `@smui/common/elements` components are gone. Just set the `tag` prop on components now (like `<Button tag="div">`).
  - Internally, they are replaced with the `SmuiElement` component exported from `@smui/common`. It takes a `tag` prop and creates an element dynamically with that tag name. You shouldn't ever need to use `SmuiElement` directly.
- The "\*ComponentDev" types (like `MenuComponentDev`) are gone. You can now use the component as its type. Components that can take a `component` or `tag` prop (like `Button`) have required generic arguments that you can use to tell it which tag you're using.
- If you're using `classAdderBuilder`, you need to use `keyof SmuiElementMap` instead of `string` as its generic argument.
- The `dispatch` function in `@smui/common` will now throw an error if either the `Event` object is not available or the `element` is not provided.
- The `Input` component from the `@smui/textfield` now sets `value` to `Number.NaN` when the input is empty.

## Changes

### Components

- Autocomplete
  - The `SMUIAutocomplete:selected` event is now cancelable.
- Banner
  - New `autoClose` prop.
  - New `SMUIBanner:actionClicked` event. It is fired when an action is clicked and `autoClose` is `false`.
- Bottom App Bar
  - A new component!
- Dialog
  - New `sheet` prop.
  - New `noContentPadding` prop.
- FAB
  - New `focusRing` prop. Use this to support rendering focused FABs in High Contrast Mode.
- List
  - New `disabledItemsFocusable` prop.
  - New `wrapper` prop on Item. This should be used for items that only act as the container of a nested list.
  - New `focusItemAtIndex` function.
- Menu
  - New `SMUIMenu:closedProgrammatically` event.
- Menu Surface
  - New `SMUIMenuSurface:opening` event.
  - New `openBottomBias` prop.
- Slider
  - `valueToAriaValueTextFn` now gets a `thumb` argument.
  - New `hideFocusStylesForPointerEvents` prop. Comes from [upstream](https://github.com/material-components/material-components-web/commit/ec54d904621360bcb27e6d3cd1f33112e2a54aac).
  - New `minRange` prop to limit selectable range.
- Switch
  - New `focusRing` prop. Use this to support rendering focused switches in High Contrast Mode.

# SMUI 5 -> SMUI 6

SMUI 6 migrated to upstream MDC 13.0 from 11.0:
https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1300-2021-09-24

## Breaking Changes

- For `@smui/common`, `@smui/textfield`, `@smui/select`, and `@smui/snackbar`, if you ever import something like `@smui/snackbar/kitchen/index` or `@smui/textfield/helper-text/index`, you need to remove the `/index` from the end of that import. (This does not apply to Sass imports.)
  - Here's a regex you can use in VS Code to search for these: @smui/(common|textfield|select|snackbar)/[\w-]+/index
- The '/styled' import endpoints have been removed. You will need to import the '/index' endpoint from Sass yourself if you were using the Advanced Styling Method.

### Components

- Switch
  - No longer emits "change" event, use "SMUISwitch:change" event instead.

## Changes

- MDC events are now dispatched with "SMUI" instead of "MDC" prefix. They are dispatched as both though, so your code shouldn't break. You should still update your code to use the new "SMUI" prefix anyway.
- There's no longer any required Vite config. Big thanks to [Ben McCann](https://github.com/benmccann) for [clearing up my misconceptions and helping me fix the package.json files](https://github.com/hperrin/svelte-material-ui/issues/375#issuecomment-994227865).

### Components

- Accordion
  - A new component!
- Autocomplete
  - A new component! Huge shoutout to [Lorenzo Fiore](https://github.com/fiorelorenzo/) who originally authored the component!
- Badge
  - A new component!
- Common
  - New announce function in the "internal" export.
- Paper
  - New variants!
- Switch
  - No longer needs `valueKey` prop.
  - Default color is now "primary".

# SMUI 4 -> SMUI 5

## Breaking Changes

- TypeScript!!! You don't need to use TypeScript, but you do need to use the [TypeScript preprocessor](https://github.com/sveltejs/svelte-preprocess) for Svelte.
- Events have been renamed from like "SMUI:component:sub-component:event" to "SMUIComponentSubComponent:event".
- Elemental components (from @smui/common) should be imported as named imports from `@smui/common/elements` instead, so that they have the right types.
- The `/bare` import paths have been removed. (The default import path has been unstyled since v4.)

# SMUI 4.0 -> SMUI 4.1

- Event modifiers have changed to use "$" instead of ":" (`on:click$capture={handler}`), so that all events, even MDC events, can be bound with modifiers.
  - The old ":" syntax will still work, it will just give a warning in the console.

# SMUI 3 -> SMUI 4

## Breaking Changes

Components no longer import styles from their "index.js" files. If you were using "/bare" before, you don't need to anymore. If you were relying on styles being imported, you now need to use the "/styled" endpoint for components.

Check out the new [smui-theme](https://github.com/hperrin/svelte-material-ui/tree/master/packages/smui-theme) package. It can help you with your themes.

# SMUI 3.0 -> SMUI 3.1

SMUI 3.1 migrated to upstream MDC 11.0 from 10.0:
https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1100-2021-04-15

You should update your MDC dependencies to 11.0 as well.

## Breaking Changes

### Theming, Sass

- MDC-Web chips trailing actions class changed.
- MDC-Web list classes changed.

## New Features

### Components

- Banner
  - Add focus trap on the banner.
- Dialog
  - New `fullscreen` prop.
  - New `over` slot.
- Menu Surface
  - New `maxHeight` prop.
  - New `horizontallyCenteredOnViewport` prop.
- Slider
  - Rounds values to correct decimal places based on `step` prop.
- Tooltip
  - New `attachScrollHandler` and `removeScrollHandler` functions for adding additional scrollable elements to handle. Both accept a function.

# SMUI 2 -> SMUI 3

You will need to migrate to Dart Sass. `node-sass` is no longer supported, as it is deprecated and too old now.

```sh
npm un -D node-sass
npm i -D sass
```

SMUI 3 migrated to upstream MDC 10.0 from 4.0:
https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1000-2021-02-05

There are newly updated instructiong for using SMUI in Sapper.

## Breaking Changes

### Theming, Sass

- MDC-Web migrated to the "@use" syntax, so mixins, functions, and variables are namespaced by the "@use" statement now instead of a prefix.
- Theming has changed, so you'll need to update your "\_smui-theme.scss" file. Follow [this guide](/THEMING.md).

### Components

- Chips
  - You now need to use `let:chip` on the set and pass it to the chip with `{chip}`.
  - Chips now export LeadingIcon, TrailingIcon, and TrailingAction, instead of Icon.
  - Removed `selected` prop on Chip. `selected` prop on Chips is now the only way to set the selected chip(s), and it/they should be identical to one/some of the entries in `chips` (pass objects by reference).
  - Don't provide any `tabindex` props to any of the Chips, Texts, or the Set. They will manage their own tabindex.
  - On TrailingAction, use `icon$class` to add classes to the icon element.
- Data Table
  - `numeric` prop on Cell should now also be set on Head Cells.
- Dialog
  - Open state is now controled by an `open` prop, instead of `open` and `close` functions. There are also `isOpen` and `setOpen` functions.
  - Lists should now be placed below `Content` element, rather than being the `Content` component. For selection from a list, use the new `selection` prop on the dialog.
  - Slider dialogs are styled a bit differently. See the [demo](https://sveltematerialui.com/demo/dialog/).
- Icon Button
  - No longer emit 'MDCIconButtonToggle:change' event without the `toggle` prop. Instead, listen for click event.
- Linear Progress
  - Removed `reversed` prop.
- List
  - `radiolist` and `checklist` props renamed to `radioList` and `checkList`.
- Menu Surface
  - Anchor action now takes `addClass` and `removeClass` instead of `classForward` (like Ripple).
- Ripple
  - [Ripple's options](https://github.com/hperrin/svelte-material-ui/blob/v3.0.0/packages/ripple/README.md#default) have changed considerably.
- Select
  - This is almost completely rewritten. You will need to migrate code for it. Check out the demo page.
  - Helper Text in no longer a component. Instead, a `svelte:fragment` with text now goes inside the component in the "helper" slot. Its ID and ARIA attributes are set automatically.
  - Removed `withLeadingIcon` and `selectedIndex` props.
  - You no longer need `withLeadingIcon`. Instead, put Icon into the "leadingIcon" slot.
  - You should now set `required` prop on the Select instead of `input$required`.
- Slider
  - `displayMarkers` prop renamed to `tickMarks`.
  - `step` now defaults to 1 (same as the range HTML input).
- Tab
  - Removed `active` and `focusOnActivate` props. (No longer needed, since TabBar controls them.)
- TabBar
  - Removed `activeIndex` prop. `active` prop is now the only way to set the active tab, and it should be identical to one of the entries in `tabs` (pass objects by reference).
- Textfield
  - This is almost completely rewritten. You will need to migrate code for it. Check out the demo page.
  - Helper Text and Character Counter now go inside the component in the "helper" slot. Their IDs and ARIA attributes are set automatically.
  - Character Counter in a `textarea` Textfield goes in the "internalCounter" slot.
  - Removed `fullwidth`, `dense`, `withLeadingIcon`, and `withTrailingIcon` props.
  - You no longer need `withLeadingIcon` or `withTrailingIcon`. Instead, put Icons into the "leadingIcon" and "trailingIcon" slots.
  - You should now set `required` prop on the Textfield instead of `input$required`.
  - Manual setup now requires passing the sub-components into Textfield with `input`, `floatingLabel`, `lineRipple`, and `notchedOutline` props.

## New Features.

### Theming, Sass

- Paper
  - New `paper-color` mixin.
- Switch
  - New `color` prop.

### Components

- All components have a `getElement` function that will return their top level DOM element.
- All components now forward **all** events, and only listen for them if bounded.
- They can also take event modifiers with the ":" syntax istead of "|" (`on:click:capture={handler}`).

New Components

- Banners
- Circular Progress
- Layout Grids
- Segmented Buttons
- Tooltips
- Touch Target Wrappers

New Features in Existing Components

- Chips
  - New `nonInteractive` prop on Set.
  - New `shouldFocusPrimaryActionOnClick` prop on Chip.
- Common
  - Icon now takes a `component` prop.
- Data Table
  - New `stickyHeader` prop.
  - New `columnId` prop on Cell (defaults to an automatic ID).
  - New `rowId` prop on Row (defaults to an automatic ID).
  - Pagination
  - Progress Indicator
  - Column Sort Buttons
- Dialog
  - New `selection` prop.
- Drawer
  - New `fixed` prop (defaults to true).
  - New `isOpen` function.
- FAB
  - New `touch` prop.
- Form Field
  - New `noWrap` prop.
- Icon Button
  - New `ariaLabelOn` and `ariaLabelOff` props for toggle buttons.
- Menu
  - New `isOpen` function.
  - New `setOpen` function.
  - New `setDefaultFocusState` function.
- Menu Surface
  - New `fullWidth` prop.
  - New `anchorMargin` prop.
  - New `MDCMenuSurface:closing` event.
- Select
  - New `hiddenInput` prop.
  - New `key` prop for using objects as options.
- Slider
  - New `range`, `start`, `end` props for range sliders.
  - New `valueToAriaValueTextFn` prop for updating the ARIA value attribute.
- TabBar
  - New `tabScroller$align` prop.
- Textfield
  - New `prefix` and `suffix` props.
  - New `validateOnValueChange` prop.
  - New `input$resizable={false}` prop to disable textarea resizing.
  - New `helperLine$` "$" props passed to the helper line.
- Top App Bar
  - New `scrollTarget` prop.

If you have trouble upgrading with these instructions, you can raise an issue on GitHub.

# SMUI 1 -> SMUI 2

SMUI 2 migrated to upstream MDC 4.0 from 3.0:
https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#400-2019-11-02-1

- Chips
  - Text component is now required.
  - Now use their own Text and Icon components. The common ones will not work.
  - Icon no longer requires `trailing` prop. That is the default.
  - Checkmark component is no longer required. It is added automatically.
- Menu and Menu Surface
  - hoistMenuToBody function removed.
- Select
  - `enchanced` prop is removed. All selects are enhanced now.
  - `selected` prop on Option is no longer required and probably should not be used.
  - You now need to pass a class into `anchor$class` and `menu$class` with a width value set.
- Button
  - No longer has a `dense` prop. Use the mixin from MDC.
