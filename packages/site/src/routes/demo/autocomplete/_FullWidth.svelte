<div>
  <Autocomplete
    options={fruits}
    bind:value
    label="Fruit"
    style="width: 100%;"
    textfield$style="width: 100%;"
  />
  <pre class="status">Selected: {value || ''}</pre>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let value: string | undefined = undefined;
</script>
