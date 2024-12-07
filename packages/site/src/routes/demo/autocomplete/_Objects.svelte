<div>
  <Autocomplete
    {options}
    getOptionLabel={(option) =>
      option ? `${option.label} (${option.id})` : ''}
    bind:value
    label="Objects"
  />

  <pre class="status">Selected: {value ? JSON.stringify(value) : ''}</pre>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';

  type Item = {
    id: number;
    label: string;
  };

  // When options are objects, you need to wrap them in a $state rune, so that
  // Svelte can compare the objects properly.
  let options: Item[] = $state([
    {
      id: 0,
      label: 'One',
    },
    {
      id: 1,
      label: 'Two',
    },
    {
      id: 2,
      label: 'Three',
    },
    {
      id: 3,
      label: 'Four',
    },
    {
      id: 4,
      label: 'Five',
    },
  ]);

  let value: Item | undefined = $state();
</script>
