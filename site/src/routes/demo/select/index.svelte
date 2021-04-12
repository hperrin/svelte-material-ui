<svelte:head>
  <title>Select - SMUI</title>
</svelte:head>

<section>
  <h2>Select</h2>

  <div class="columns margins" style="justify-content: flex-start;">
    <div>
      <Select bind:value={valuePrefilled} label="Select Menu">
        {#each fruits as fruit}
          <Option value={fruit}>{fruit}</Option>
        {/each}
      </Select>

      <pre class="status">Selected: {valuePrefilled}</pre>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Standard</h6>

    <div class="columns margins">
      <div>
        <Select bind:value={valueStandard} label="Fruit">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueStandard}</pre>
      </div>

      <div>
        <Select bind:value={valueStandardHelperText} label="With Helper Text">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
          <svelte:fragment slot="helperText">Helper text.</svelte:fragment>
        </Select>

        <pre class="status">Selected: {valueStandardHelperText}</pre>
      </div>

      <div>
        <Select bind:value={valueStandardLeadingIcon} label="Leading Icon">
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueStandardLeadingIcon}</pre>
      </div>

      <div>
        <Select invalid bind:value={valueStandardInvalid} label="Invalid">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueStandardInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Filled</h6>

    <div class="columns margins">
      <div>
        <Select variant="filled" bind:value={valueFilled} label="Fruit">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueFilled}</pre>
      </div>

      <div>
        <Select
          variant="filled"
          bind:value={valueFilledHelperText}
          label="With Helper Text"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
          <svelte:fragment slot="helperText">Helper text.</svelte:fragment>
        </Select>

        <pre class="status">Selected: {valueFilledHelperText}</pre>
      </div>

      <div>
        <Select
          variant="filled"
          bind:value={valueFilledLeadingIcon}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueFilledLeadingIcon}</pre>
      </div>

      <div>
        <Select
          variant="filled"
          invalid
          bind:value={valueFilledInvalid}
          label="Invalid"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueFilledInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Outlined</h6>

    <div class="columns margins">
      <div>
        <Select variant="outlined" bind:value={valueOutlined} label="Fruit">
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueOutlined}</pre>
      </div>

      <div>
        <Select
          variant="outlined"
          bind:value={valueOutlinedHelperText}
          label="With Helper Text"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
          <svelte:fragment slot="helperText">Helper text.</svelte:fragment>
        </Select>

        <pre class="status">Selected: {valueOutlinedHelperText}</pre>
      </div>

      <div>
        <Select
          variant="outlined"
          bind:value={valueOutlinedLeadingIcon}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueOutlinedLeadingIcon}</pre>
      </div>

      <div>
        <Select
          variant="outlined"
          invalid
          bind:value={valueOutlinedInvalid}
          label="Invalid"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueOutlinedInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Shaped Filled (Styled with CSS)</h6>

    <div class="columns margins">
      <div>
        <Select
          class="shaped"
          variant="filled"
          bind:value={valueShapedFilled}
          label="Fruit"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedFilled}</pre>
      </div>

      <div>
        <Select
          class="shaped"
          variant="filled"
          bind:value={valueShapedFilledHelperText}
          label="With Helper Text"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
          <svelte:fragment slot="helperText">Helper text.</svelte:fragment>
        </Select>

        <pre class="status">Selected: {valueShapedFilledHelperText}</pre>
      </div>

      <div>
        <Select
          class="shaped"
          variant="filled"
          bind:value={valueShapedFilledLeadingIcon}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedFilledLeadingIcon}</pre>
      </div>

      <div>
        <Select
          class="shaped"
          variant="filled"
          invalid
          bind:value={valueShapedFilledInvalid}
          label="Invalid"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedFilledInvalid}</pre>
      </div>
    </div>
  </div>

  <div>
    <h6 class="demo-title">Shaped Outlined (Styled with CSS)</h6>

    <div class="columns margins">
      <div>
        <Select
          class="shaped-outlined"
          variant="outlined"
          bind:value={valueShapedOutlined}
          label="Fruit"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedOutlined}</pre>
      </div>

      <div>
        <Select
          class="shaped-outlined"
          variant="outlined"
          bind:value={valueShapedOutlinedHelperText}
          label="With Helper Text"
        >
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
          <svelte:fragment slot="helperText">Helper text.</svelte:fragment>
        </Select>

        <pre class="status">Selected: {valueShapedOutlinedHelperText}</pre>
      </div>

      <div>
        <Select
          class="shaped-outlined"
          variant="outlined"
          bind:value={valueShapedOutlinedLeadingIcon}
          label="Leading Icon"
        >
          <Icon class="material-icons" slot="leadingIcon">event</Icon>
          <Option value="" />
          {#each fruits as fruit}
            <Option value={fruit}>{fruit}</Option>
          {/each}
        </Select>

        <pre class="status">Selected: {valueShapedOutlinedLeadingIcon}</pre>
      </div>

      <div>
        <Select
          class="shaped-outlined"
          variant="outlined"
          invalid
          bind:value={valueShapedOutlinedInvalid}
          label="Invalid"
        >
          <Option value="" />
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
  import Select, { Option } from '@smui/select';
  import Icon from '@smui/select/icon/index';

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

  * :global(.shaped, .shaped .mdc-select__anchor) {
    border-radius: 16px 16px 0 0;
  }

  * :global(.shaped-outlined, .shaped-outlined .mdc-select__anchor) {
    border-radius: 28px;
  }
  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  *
    :global(.shaped-outlined.mdc-select--with-leading-icon
      .mdc-notched-outline:not(.mdc-notched-outline--notched)
      .mdc-floating-label) {
    left: 16px;
  }
</style>
