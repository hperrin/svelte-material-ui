<div>
  <Autocomplete combobox options={fruits} bind:value label="Fruit" />
  <pre class="status">Selected: {value || ''}</pre>

  <div style="margin-top: 1em;">
    <div>Programmatically select:</div>
    <Button on:click={() => (value = 'Dragonfruit')}>
      <Label>Dragonfruit</Label>
    </Button>
    <Button on:click={() => (value = 'Elderberry')}>
      <Label>Elderberry</Label>
    </Button>
  </div>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';
  import Button, { Label } from '@smui/button';

  let fruits = [
    'Apple',
    'Orange',
    'Banana',
    'Mango',
    'Lemon',
    'Cherry',
    'Blueberry',
    'Grape',
    'Strawberry',
  ];
  let value: string | undefined = undefined;
</script>
