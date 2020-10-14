# Svelte Material UI - Autocomplete

Autocompletes provide the user with suggestions wqhile tiping.

# Installation

```sh
npm install --save-dev @smui/autocomplete
```

# Basic Usage

```html
<script>
  import Autocomplete from '@smui/autocomplete';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
  let fruitChoice = '';
</script>

 <Autocomplete
  options={fruits}
  bind:value={fruitChoice}
  label="Fruit" />
```

# Demo

*in action:* https://sveltematerialui.com/demo/autocomplete

*demo code:* https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes/demo/autocomplete.svelte

# Exports

todo...