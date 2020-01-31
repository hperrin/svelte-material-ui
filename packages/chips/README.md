# Svelte Material UI - Chips

Chips are used to show discrete information, filter options, input tags, or actions.

See [MDC Chips](https://material.io/develop/web/components/chips/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-chips/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/chips
```

# Basic Usage

Input Chips:

```html
<script>
  import Chip, {Set, Icon, Text} from '@smui/chips';
  import Textfield from '@smui/textfield';
  import Button, {Label} from '@smui/button';

  let tags = [];
  let newTag = '';

  function addTag() {
    tags.push(newTag);
    tags = tags;
    newTag = '';
  }
</script>

<Textfield bind:value={newTag} label="Tag" />
<Button on:click={addTag} disabled={newTag === '' || tags.indexOf(newTag) !== -1}><Label>Add</Label></Button>

<Set chips={tags} let:chip input>
  <Chip><Text>{chip}</Text><Icon class="material-icons" trailing tabindex="0">cancel</Icon></Chip>
</Set>
```

# Demo

*in action:* https://sveltematerialui.com/demo/chips

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/chips.svelte

# Exports

## (default)

A chip.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `ripple`: `true` - Whether to implement a ripple for when the component is interacted with.
* `selected`: `false` - Whether the chip is selected.
* `shouldRemoveOnTrailingIconClick`: `true` - Whether the chip should be removed upon clicking the trailing icon.

### Events

All standard UI events are forwarded.

* `MDCChip:interaction`
* `MDCChip:selection`
* `MDCChip:removal`
* `MDCChip:trailingIconInteraction`

## Set

A set of chips. Chips should only be added onto the end of the set's chip array.

### Props / Defaults

* `use`: `[]` - An array of actions and/or action/property arrays.
* `class`: `''` - A CSS class string.
* `chips` `[]` - An array containing the chips. New chips should only be pushed onto the end of this array.
* `key` `chip => chip` - A function used to get the key of the chip. Chip sets that have removable chips should always provide unique keys.
* `selected` `null` - The currently selected chip or chips.
* `choice` `false` - Whether to present the chips as a set of choices, allowing one to be chosen.
* `filter` `false` - Whether to present the chips as a set of options, allowing any number to be chosen.
* `input` `false` - Whether to present the chips as a set of values, allowing them to be removed.

### Events

All standard UI events are forwarded.

## Checkmark

## Text

A text label.

See the [common label readme](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#label).

## Icon

A graphic icon.

See the [common icon readme](https://github.com/hperrin/svelte-material-ui/blob/master/packages/common/README.md#icon).