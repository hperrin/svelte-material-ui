# Svelte Material UI - Chips

Chips are used to show discrete information, filter options, input tags, or actions.

# Installation

```sh
npm install --save-dev @smui/chips
```

# Demo

_in action:_ https://sveltematerialui.com/demo/chips

_demo code:_ https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/chips/

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

Input Chips:

```svelte
<Textfield bind:value={newTag} label="Tag" />
<Button
  on:click={addTag}
  disabled={newTag === '' || tags.indexOf(newTag) !== -1}
>
  <Label>Add</Label>
</Button>

<Set chips={tags} let:chip input>
  <Chip><Text>{chip}</Text><Icon class="material-icons">cancel</Icon></Chip>
</Set>

<script>
  import Chip, { Set, Icon, Text } from '@smui/chips';
  import Textfield from '@smui/textfield';
  import Button, { Label } from '@smui/button';

  let tags = [];
  let newTag = '';

  function addTag() {
    tags.push(newTag);
    tags = tags;
    newTag = '';
  }
</script>
```

# Exports

## (default)

A chip.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
- `touch`: `false` - The chip will have a larger touch target.
- `selected`: `false` - Whether the chip is selected. (You should only use this if you don't pass `selected` to the chip set.)
- `shouldRemoveOnTrailingIconClick`: `true` - Whether the chip should be removed upon clicking the trailing icon.

### Events

All standard UI events are forwarded.

- `MDCChip:interaction`
- `MDCChip:selection`
- `MDCChip:removal`
- `MDCChip:trailingIconInteraction`
- `MDCChip:navigation`

## Set

A set of chips. Chips should only be added onto the end of the set's chip array.

### Props / Defaults

- `use`: `[]` - An array of Svelte actions and/or arrays of an action and its options.
- `class`: `''` - A CSS class string.
- `chips` `[]` - An array containing the chips. New chips should only be pushed onto the end of this array.
- `key` `chip => chip` - A function used to get the key of the chip. Chip sets that have removable chips should always provide unique keys.
- `selected` `null` - The currently selected chip or chips.
- `choice` `false` - Whether to present the chips as a set of choices, allowing one to be chosen.
- `filter` `false` - Whether to present the chips as a set of options, allowing any number to be chosen.
- `input` `false` - Whether to present the chips as a set of values, allowing them to be removed.

### Events

All standard UI events are forwarded.

## Text

A text label.

todo...

## Icon

A graphic icon.

todo...

# More Information

See [Chips](https://material.io/components/chips) in the Material design spec.

See [Chips](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-chips) in MDC-Web for information about the upstream library's architecture.
