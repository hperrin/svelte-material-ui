<div class="columns margins">
  <div>
    <Autocomplete
      options={fruits}
      bind:value={valueStandard}
      label="Standard"
    />

    <pre class="status">Selected: {valueStandard || ''}</pre>
  </div>

  <div>
    <Autocomplete
      options={fruits}
      textfield$variant="filled"
      bind:value={valueFilled}
      label="Filled"
    />

    <pre class="status">Selected: {valueFilled || ''}</pre>
  </div>

  <div>
    <Autocomplete
      options={fruits}
      textfield$variant="outlined"
      bind:value={valueOutlined}
      label="Outlined"
    />

    <pre class="status">Selected: {valueOutlined || ''}</pre>
  </div>
</div>

<div>
  Disabled:
  <div class="columns margins">
    <div>
      <Autocomplete options={fruits} disabled label="Standard" />
    </div>

    <div>
      <Autocomplete
        options={fruits}
        textfield$variant="filled"
        disabled
        label="Filled"
      />
    </div>

    <div>
      <Autocomplete
        options={fruits}
        textfield$variant="outlined"
        disabled
        label="Outlined"
      />
    </div>
  </div>
</div>

<script lang="ts">
  import Autocomplete from '@smui-extra/autocomplete';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valueStandard: string | undefined = undefined;
  let valueFilled: string | undefined = undefined;
  let valueOutlined: string | undefined = undefined;
</script>
