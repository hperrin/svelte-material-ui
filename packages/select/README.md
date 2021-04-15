# Svelte Material UI - Select

Select menus provide the user with a choice between multiple items.

# Installation

```sh
npm install --save-dev @smui/select
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/select)

[See the demo code.](/site/src/routes/demo/select/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 beta had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<Select
  bind:value={fruitChoice}
  label="Fruit"
  anchor$class="select-width"
  menu$class="select-width"
>
  <Option value="" />
  {#each fruits as fruit}
    <Option value={fruit}>{fruit}</Option>
  {/each}
</Select>

<script>
  import Select, { Option } from '@smui/select';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
  let fruitChoice = '';
</script>

<style>
  * :global(.select-width) {
    min-width: 200px;
  }
</style>
```

# Exports

todo...

# More Information

See [Dropdown menu](https://material.io/components/menus#dropdown-menu) in the Material design spec.

See [Select](https://github.com/material-components/material-components-web/tree/v10.0.0/packages/mdc-select) in MDC-Web for information about the upstream library's architecture.
