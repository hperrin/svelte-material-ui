<section>
  <h2>Select</h2>

  <div class="columns margins">
    <div>
      Standard:<br />

      <Select bind:value={valueStandard} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueStandard === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueStandard}</pre>
    </div>

    <div>
      Standard with Helper Text:<br />

      <Select bind:value={valueStandardHelperText} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueStandardHelperText === fruit}>{fruit}</Option>
        {/each}
      </Select>
      <HelperText>Helper text.</HelperText>

      <pre class="status">Selected: {valueStandardHelperText}</pre>
    </div>

    <div>
      Standard Enhanced:<br />

      <Select enhanced bind:value={valueStandardEnhanced} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueStandardEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueStandardEnhanced}</pre>
    </div>

    <div>
      Standard Leading Icon:<br />

      <Select withLeadingIcon bind:value={valueStandardLeadingIcon} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <span slot="icon"><Icon class="material-icons">event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueStandardLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueStandardLeadingIcon}</pre>
    </div>

    <div>
      Standard Invalid:<br />

      <Select invalid bind:value={valueStandardInvalid} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueStandardInvalid === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueStandardInvalid}</pre>
    </div>
  </div>

  <div class="columns margins">
    <div>
      Filled:<br />

      <Select variant="filled" bind:value={valueFilled} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilled === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueFilled}</pre>
    </div>

    <div>
      Filled with Helper Text:<br />

      <Select variant="filled" bind:value={valueFilledHelperText} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilledHelperText === fruit}>{fruit}</Option>
        {/each}
      </Select>
      <HelperText>Helper text.</HelperText>

      <pre class="status">Selected: {valueFilledHelperText}</pre>
    </div>

    <div>
      Filled Enhanced:<br />

      <Select variant="filled" enhanced bind:value={valueFilledEnhanced} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilledEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueFilledEnhanced}</pre>
    </div>

    <div>
      Filled Leading Icon:<br />

      <Select variant="filled" withLeadingIcon bind:value={valueFilledLeadingIcon} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <span slot="icon"><Icon class="material-icons">event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilledLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueFilledLeadingIcon}</pre>
    </div>

    <div>
      Filled Invalid:<br />

      <Select variant="filled" invalid bind:value={valueFilledInvalid} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilledInvalid === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueFilledInvalid}</pre>
    </div>
  </div>

  <div class="columns margins">
    <div>
      Outlined:<br />

      <Select variant="outlined" bind:value={valueOutlined} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueOutlined === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueOutlined}</pre>
    </div>

    <div>
      Outlined with Helper Text:<br />

      <Select variant="outlined" bind:value={valueOutlinedHelperText} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueOutlinedHelperText === fruit}>{fruit}</Option>
        {/each}
      </Select>
      <HelperText>Helper text.</HelperText>

      <pre class="status">Selected: {valueOutlinedHelperText}</pre>
    </div>

    <div>
      Outlined Enhanced:<br />

      <Select variant="outlined" enhanced bind:value={valueOutlinedEnhanced} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueOutlinedEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueOutlinedEnhanced}</pre>
    </div>

    <div>
      Outlined Leading Icon:<br />

      <Select variant="outlined" withLeadingIcon bind:value={valueOutlinedLeadingIcon} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <span slot="icon"><Icon class="material-icons">event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueOutlinedLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueOutlinedLeadingIcon}</pre>
    </div>

    <div>
      Outlined Invalid:<br />

      <Select variant="outlined" invalid bind:value={valueOutlinedInvalid} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueOutlinedInvalid === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueOutlinedInvalid}</pre>
    </div>
  </div>

  <div class="columns margins">
    <div>
      Shaped Filled:<br />

      <Select class="shaped" variant="filled" bind:value={valueShapedFilled} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilled === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedFilled}</pre>
    </div>

    <div>
      Shaped Filled with Helper Text:<br />

      <Select class="shaped" variant="filled" bind:value={valueShapedFilledHelperText} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilledHelperText === fruit}>{fruit}</Option>
        {/each}
      </Select>
      <HelperText>Helper text.</HelperText>

      <pre class="status">Selected: {valueShapedFilledHelperText}</pre>
    </div>

    <div>
      Shaped Filled Enhanced:<br />

      <Select class="shaped demo-select-width" variant="filled" enhanced bind:value={valueShapedFilledEnhanced} label="Fruit" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilledEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedFilledEnhanced}</pre>
    </div>

    <div>
      Shaped Filled Leading Icon:<br />

      <Select class="shaped demo-select-width" variant="filled" withLeadingIcon bind:value={valueShapedFilledLeadingIcon} label="Fruit" menu$class="demo-select-width">
        <span slot="icon"><Icon class="material-icons">event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilledLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedFilledLeadingIcon}</pre>
    </div>

    <div>
      Shaped Filled Invalid:<br />

      <Select class="shaped" variant="filled" invalid bind:value={valueShapedFilledInvalid} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilledInvalid === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedFilledInvalid}</pre>
    </div>
  </div>

  <div class="columns margins">
    <div>
      Shaped Outlined:<br />

      <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlined} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedOutlined === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedOutlined}</pre>
    </div>

    <div>
      Shaped Outlined with Helper Text:<br />

      <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlinedHelperText} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedOutlinedHelperText === fruit}>{fruit}</Option>
        {/each}
      </Select>
      <HelperText>Helper text.</HelperText>

      <pre class="status">Selected: {valueShapedOutlinedHelperText}</pre>
    </div>

    <div>
      Shaped Outlined Enhanced:<br />

      <Select class="shaped-outlined demo-select-width" variant="outlined" enhanced bind:value={valueShapedOutlinedEnhanced} label="Fruit" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedOutlinedEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedOutlinedEnhanced}</pre>
    </div>

    <div>
      Shaped Outlined Leading Icon:<br />

      <Select class="shaped-outlined demo-select-width" variant="outlined" withLeadingIcon bind:value={valueShapedOutlinedLeadingIcon} label="Fruit" menu$class="demo-select-width">
        <span slot="icon"><Icon class="material-icons">event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedOutlinedLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedOutlinedLeadingIcon}</pre>
    </div>

    <div>
      Shaped Outlined Invalid:<br />

      <Select class="shaped-outlined" variant="outlined" invalid bind:value={valueShapedOutlinedInvalid} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedOutlinedInvalid === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valueShapedOutlinedInvalid}</pre>
    </div>
  </div>
</section>

<script>
  import Select, {Option} from '@svelte-material-ui/select';
  import Icon from '@svelte-material-ui/select/icon';
  import HelperText from '@svelte-material-ui/select/helper-text';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valueStandard = '';
  let valueStandardHelperText = '';
  let valueStandardEnhanced = '';
  let valueStandardLeadingIcon = '';
  let valueStandardInvalid = '';
  let valueFilled = '';
  let valueFilledHelperText = '';
  let valueFilledEnhanced = '';
  let valueFilledLeadingIcon = '';
  let valueFilledInvalid = '';
  let valueOutlined = '';
  let valueOutlinedHelperText = '';
  let valueOutlinedEnhanced = '';
  let valueOutlinedLeadingIcon = '';
  let valueOutlinedInvalid = '';
  let valueShapedFilled = '';
  let valueShapedFilledHelperText = '';
  let valueShapedFilledEnhanced = '';
  let valueShapedFilledLeadingIcon = '';
  let valueShapedFilledInvalid = '';
  let valueShapedOutlined = '';
  let valueShapedOutlinedHelperText = '';
  let valueShapedOutlinedEnhanced = '';
  let valueShapedOutlinedLeadingIcon = '';
  let valueShapedOutlinedInvalid = '';
</script>

<style>
  .margins {
    margin: 18px 0;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  * :global(select, .demo-select-width) {
    min-width: 200px;
  }

  * :global(.shaped) {
    border-radius: 16px 16px 0 0;
  }

  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }
</style>