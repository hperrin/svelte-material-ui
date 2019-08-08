<section>
  <h2>Select</h2>

  <div class="columns margins">
    <div>
      Filled:<br />

      <Select bind:value={valueFilled} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilled === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueFilled}</div>
    </div>

    <div>
      Filled with Helper Text:<br />

      <Select bind:value={valueFilledHelperText} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilledHelperText === fruit}>{fruit}</Option>
        {/each}
      </Select>
      <HelperText>Helper text.</HelperText>

      <div class="status">Selected: {valueFilledHelperText}</div>
    </div>

    <div>
      Filled Enhanced:<br />

      <Select enhanced bind:value={valueFilledEnhanced} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilledEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueFilledEnhanced}</div>
    </div>

    <div>
      Filled Leading Icon:<br />

      <Select withLeadingIcon bind:value={valueFilledLeadingIcon} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <span slot="icon"><Icon>event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueFilledLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueFilledLeadingIcon}</div>
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

      <div class="status">Selected: {valueOutlined}</div>
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

      <div class="status">Selected: {valueOutlinedHelperText}</div>
    </div>

    <div>
      Outlined Enhanced:<br />

      <Select variant="outlined" enhanced bind:value={valueOutlinedEnhanced} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueOutlinedEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueOutlinedEnhanced}</div>
    </div>

    <div>
      Outlined Leading Icon:<br />

      <Select variant="outlined" withLeadingIcon bind:value={valueOutlinedLeadingIcon} label="Fruit" class="demo-select-width" menu$class="demo-select-width">
        <span slot="icon"><Icon>event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueOutlinedLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueOutlinedLeadingIcon}</div>
    </div>
  </div>

  <div class="columns margins">
    <div>
      Shaped Filled:<br />

      <Select class="shaped" bind:value={valueShapedFilled} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilled === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueShapedFilled}</div>
    </div>

    <div>
      Shaped Filled with Helper Text:<br />

      <Select class="shaped" bind:value={valueShapedFilledHelperText} label="Fruit">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilledHelperText === fruit}>{fruit}</Option>
        {/each}
      </Select>
      <HelperText>Helper text.</HelperText>

      <div class="status">Selected: {valueShapedFilledHelperText}</div>
    </div>

    <div>
      Shaped Filled Enhanced:<br />

      <Select class="shaped demo-select-width" enhanced bind:value={valueShapedFilledEnhanced} label="Fruit" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilledEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueShapedFilledEnhanced}</div>
    </div>

    <div>
      Shaped Filled Leading Icon:<br />

      <Select class="shaped demo-select-width" withLeadingIcon bind:value={valueShapedFilledLeadingIcon} label="Fruit" menu$class="demo-select-width">
        <span slot="icon"><Icon>event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedFilledLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueShapedFilledLeadingIcon}</div>
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

      <div class="status">Selected: {valueShapedOutlined}</div>
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

      <div class="status">Selected: {valueShapedOutlinedHelperText}</div>
    </div>

    <div>
      Shaped Outlined Enhanced:<br />

      <Select class="shaped-outlined demo-select-width" variant="outlined" enhanced bind:value={valueShapedOutlinedEnhanced} label="Fruit" menu$class="demo-select-width">
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedOutlinedEnhanced === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueShapedOutlinedEnhanced}</div>
    </div>

    <div>
      Shaped Outlined Leading Icon:<br />

      <Select class="shaped-outlined demo-select-width" variant="outlined" withLeadingIcon bind:value={valueShapedOutlinedLeadingIcon} label="Fruit" menu$class="demo-select-width">
        <span slot="icon"><Icon>event</Icon></span>
        <Option value=""></Option>
        {#each fruits as fruit}
          <Option value={fruit} selected={valueShapedOutlinedLeadingIcon === fruit}>{fruit}</Option>
        {/each}
      </Select>

      <div class="status">Selected: {valueShapedOutlinedLeadingIcon}</div>
    </div>
  </div>
</section>

<script>
  import Select, {Option} from 'svelte-material-ui/components/select';
  import Icon from 'svelte-material-ui/components/select/icon';
  import HelperText from 'svelte-material-ui/components/select/helper-text';

  let fruits = ['Apple', 'Orange', 'Banana'];

  let valueFilled = '';
  let valueFilledHelperText = '';
  let valueFilledEnhanced = '';
  let valueFilledLeadingIcon = '';
  let valueOutlined = '';
  let valueOutlinedHelperText = '';
  let valueOutlinedEnhanced = '';
  let valueOutlinedLeadingIcon = '';
  let valueShapedFilled = '';
  let valueShapedFilledHelperText = '';
  let valueShapedFilledEnhanced = '';
  let valueShapedFilledLeadingIcon = '';
  let valueShapedOutlined = '';
  let valueShapedOutlinedHelperText = '';
  let valueShapedOutlinedEnhanced = '';
  let valueShapedOutlinedLeadingIcon = '';
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