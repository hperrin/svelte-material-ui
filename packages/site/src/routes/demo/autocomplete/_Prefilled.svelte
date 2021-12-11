<div>
  <Autocomplete
    options={fruits}
    bind:value
    label="Fruit"
    class="demo-autocomplete-width"
  />
  <pre class="status">Selected: {value || ''}</pre>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let value = 'Orange';
</script>

<style>
  * :global(.demo-autocomplete-width) {
    min-width: 200px;
  }
</style>
