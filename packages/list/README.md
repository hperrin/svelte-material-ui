# Svelte Material UI - List

Lists are vertical content sections.

See [MDC List](https://material.io/develop/web/components/lists/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-list/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/list
```

# Basic Usage

```html
<script>
  import List, {Item, Text} from '@smui/list';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
</script>

<List>
  {#each fruits as fruit}
    <Item>
      <Text>{fruit}</Text>
    </Item>
  {/each}
</List>
```

# Demo

*in action:* https://sveltematerialui.com/demo/list

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/list.svelte

# Exports

todo...