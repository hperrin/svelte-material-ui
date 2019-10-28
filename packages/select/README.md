# Svelte Material UI - Select

Select menus provide the user with a choice between multiple items.

See [MDC Select](https://material.io/develop/web/components/input-controls/select-menus/) for more information on API and Sass mixins.

See [the Sass variable file](https://github.com/material-components/material-components-web/blob/v3.1.1/packages/mdc-select/_variables.scss) for styling variables.

# Installation

```sh
npm install --save-dev @smui/select
```

# Basic Usage

```html
<script>
  import Select, {Option} from '@smui/select';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
  let fruitChoice = '';
</script>

<Select bind:value={fruitChoice} label="Fruit">
  <Option value=""></Option>
  {#each fruits as fruit}
    <Option value={fruit} selected={fruitChoice === fruit}>{fruit}</Option>
  {/each}
</Select>
```

# Demo

*in action:* https://sveltematerialui.com/demo/select

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/select.svelte

# Exports

todo...