<div class="columns margins">
  <div>
    Standard:<br />
    <Autocomplete
      options={fruits}
      bind:value={valueStandard}
      label="Fruit"
      class="demo-autocomplete-width"
    />

    <pre class="status">Selected: {valueStandard || ''}</pre>
  </div>

  <div>
    Filled:<br />
    <Autocomplete
      options={fruits}
      textfield$variant="filled"
      bind:value={valueFilled}
      label="Fruit"
      class="demo-autocomplete-width"
    />

    <pre class="status">Selected: {valueFilled || ''}</pre>
  </div>

  <div>
    Outlined:<br />
    <Autocomplete
      options={fruits}
      textfield$variant="outlined"
      bind:value={valueOutlined}
      label="Fruit"
      class="demo-autocomplete-width"
    />

    <pre class="status">Selected: {valueOutlined || ''}</pre>
  </div>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valueSimple: string | undefined = undefined;
  let valueStandard: string | undefined = undefined;
  let valueFilled: string | undefined = undefined;
  let valueOutlined: string | undefined = undefined;
</script>

<style>
  .margins {
    margin: 18px 0 24px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .columns > * {
    margin-left: 12px;
  }
  .columns > *:first-child {
    margin-left: 0;
  }

  * :global(.demo-autocomplete-width) {
    min-width: 200px;
  }
</style>
