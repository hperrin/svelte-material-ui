<div class="columns margins">
  <div>
    <Autocomplete
      options={fruits}
      bind:value={valueStandard}
      bind:text={textStandard}
      class="demo-autocomplete-width"
    >
      <Textfield bind:value={textStandard} />
    </Autocomplete>

    <pre class="status">Selected: {valueStandard || ''}</pre>
  </div>

  <div>
    <Autocomplete
      options={fruits}
      bind:value={valueFilled}
      bind:text={textFilled}
      class="demo-autocomplete-width"
    >
      <Textfield bind:value={textFilled} variant="filled" />
    </Autocomplete>

    <pre class="status">Selected: {valueFilled || ''}</pre>
  </div>

  <div>
    <Autocomplete
      options={fruits}
      bind:value={valueOutlined}
      bind:text={textOutlined}
      class="demo-autocomplete-width"
    >
      <Textfield bind:value={textOutlined} variant="outlined" />
    </Autocomplete>

    <pre class="status">Selected: {valueOutlined || ''}</pre>
  </div>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';
  import Textfield from '@smui/textfield';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valueStandard: string | undefined = undefined;
  let textStandard = '';
  let valueFilled: string | undefined = undefined;
  let textFilled = '';
  let valueOutlined: string | undefined = undefined;
  let textOutlined = '';
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
