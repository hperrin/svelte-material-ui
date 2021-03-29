<svelte:head>
  <title>Select - SMUI</title>
</svelte:head>

<section>
  <h2>Select</h2>

  <div class="columns margins" style="justify-content: flex-start;">
    <div>
      <Select bind:value={valuePrefilled} label="Select Menu" anchor$class="demo-select-width" menu$class="demo-select-width">
        {#each fruits as fruit}
          <Option value={fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valuePrefilled}</pre>
    </div>
  </div>

  <div>
    Standard:<br />

    <div class="columns margins">
      <div>
        <Select bind:value={valueStandard} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueStandard}</pre>
      </div>

      <div>
        <Select bind:value={valueStandardHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>
        <HelperText>Helper text.</HelperText>

        <pre class="status">Selected: {valueStandardHelperText}</pre>
      </div>

      <div>
        <Select withLeadingIcon bind:value={valueStandardLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">
          <span slot="icon"><Icon class="material-icons">event</Icon></span>
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueStandardLeadingIcon}</pre>
      </div>

      <div>
        <Select invalid bind:value={valueStandardInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueStandardInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    Filled:<br />

    <div class="columns margins">
      <div>
        <Select variant="filled" bind:value={valueFilled} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueFilled}</pre>
      </div>

      <div>
        <Select variant="filled" bind:value={valueFilledHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>
        <HelperText>Helper text.</HelperText>

        <pre class="status">Selected: {valueFilledHelperText}</pre>
      </div>

      <div>
        <Select variant="filled" withLeadingIcon bind:value={valueFilledLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">
          <span slot="icon"><Icon class="material-icons">event</Icon></span>
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueFilledLeadingIcon}</pre>
      </div>

      <div>
        <Select variant="filled" invalid bind:value={valueFilledInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueFilledInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    Outlined:<br />

    <div class="columns margins">
      <div>
        <Select variant="outlined" bind:value={valueOutlined} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueOutlined}</pre>
      </div>

      <div>
        <Select variant="outlined" bind:value={valueOutlinedHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>
        <HelperText>Helper text.</HelperText>

        <pre class="status">Selected: {valueOutlinedHelperText}</pre>
      </div>

      <div>
        <Select variant="outlined" withLeadingIcon bind:value={valueOutlinedLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">
          <span slot="icon"><Icon class="material-icons">event</Icon></span>
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueOutlinedLeadingIcon}</pre>
      </div>

      <div>
        <Select variant="outlined" invalid bind:value={valueOutlinedInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueOutlinedInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    Shaped Filled:<br />

    <div class="columns margins">
      <div>
        <Select class="shaped" variant="filled" bind:value={valueShapedFilled} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedFilled}</pre>
      </div>

      <div>
        <Select class="shaped" variant="filled" bind:value={valueShapedFilledHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>
        <HelperText>Helper text.</HelperText>

        <pre class="status">Selected: {valueShapedFilledHelperText}</pre>
      </div>

      <div>
        <Select class="shaped" variant="filled" withLeadingIcon bind:value={valueShapedFilledLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">
          <span slot="icon"><Icon class="material-icons">event</Icon></span>
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedFilledLeadingIcon}</pre>
      </div>

      <div>
        <Select class="shaped" variant="filled" invalid bind:value={valueShapedFilledInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedFilledInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    Shaped Outlined:<br />

    <div class="columns margins">
      <div>
        <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlined} label="Fruit" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedOutlined}</pre>
      </div>

      <div>
        <Select class="shaped-outlined" variant="outlined" bind:value={valueShapedOutlinedHelperText} label="With Helper Text" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>
        <HelperText>Helper text.</HelperText>

        <pre class="status">Selected: {valueShapedOutlinedHelperText}</pre>
      </div>

      <div>
        <Select class="shaped-outlined" variant="outlined" withLeadingIcon bind:value={valueShapedOutlinedLeadingIcon} label="Leading Icon" anchor$class="demo-select-width" menu$class="demo-select-width">
          <span slot="icon"><Icon class="material-icons">event</Icon></span>
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedOutlinedLeadingIcon}</pre>
      </div>

      <div>
        <Select class="shaped-outlined" variant="outlined" invalid bind:value={valueShapedOutlinedInvalid} label="Invalid" anchor$class="demo-select-width" menu$class="demo-select-width">
          <Option value=""></Option>
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedOutlinedInvalid}</pre>
      </div>
    </div>
  </div>
</section>

<script>
  import Select, {Option} from '@smui/select';
  import Icon from '@smui/select/icon/index';
  import HelperText from '@smui/select/helper-text/index';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valuePrefilled = 'Orange';
  let valueStandard = '';
  let valueStandardHelperText = '';
  let valueStandardLeadingIcon = '';
  let valueStandardInvalid = '';
  let valueFilled = '';
  let valueFilledHelperText = '';
  let valueFilledLeadingIcon = '';
  let valueFilledInvalid = '';
  let valueOutlined = '';
  let valueOutlinedHelperText = '';
  let valueOutlinedLeadingIcon = '';
  let valueOutlinedInvalid = '';
  let valueShapedFilled = '';
  let valueShapedFilledHelperText = '';
  let valueShapedFilledLeadingIcon = '';
  let valueShapedFilledInvalid = '';
  let valueShapedOutlined = '';
  let valueShapedOutlinedHelperText = '';
  let valueShapedOutlinedLeadingIcon = '';
  let valueShapedOutlinedInvalid = '';
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

  * :global(.demo-select-width) {
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