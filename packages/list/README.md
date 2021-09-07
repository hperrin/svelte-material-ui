# Svelte Material UI - List

Lists are vertical content sections.

# Installation

```sh
npm install --save-dev @smui/list
```

# Demo

[See it in action.](https://sveltematerialui.com/demo/list)

[See the demo code.](/site/src/routes/demo/list/)

# Whoa There, These Docs are Outdated

The latest SMUI v3 had a lot of changes, and these docs haven't been caught up yet. You should check out the demo page's code to see the latest usage.

# Basic Usage

```svelte
<List>
  {#each fruits as fruit}
    <Item>
      <Text>{fruit}</Text>
    </Item>
  {/each}
</List>

<script>
  import List, { Item, Text } from '@smui/list';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
</script>
```

# Exports

todo...

# More Information

See [Lists](https://material.io/components/lists) in the Material design spec.

See [List](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-list) in MDC-Web for information about the upstream library's architecture.
