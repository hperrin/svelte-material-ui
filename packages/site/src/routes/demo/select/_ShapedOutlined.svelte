<div class="columns margins">
  <div>
    <Select class="shaped-outlined" variant="outlined" bind:value label="Fruit">
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {value}</pre>
  </div>

  <div>
    <Select
      class="shaped-outlined"
      variant="outlined"
      bind:value={valueHelperText}
      label="With Helper Text"
    >
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
      <svelte:fragment slot="helperText">Helper text.</svelte:fragment>
    </Select>

    <pre class="status">Selected: {valueHelperText}</pre>
  </div>

  <div>
    <Select
      class="shaped-outlined"
      variant="outlined"
      bind:value={valueLeadingIcon}
      label="Leading Icon"
    >
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueLeadingIcon}</pre>
  </div>

  <div>
    <Select
      class="shaped-outlined"
      variant="outlined"
      invalid
      bind:value={valueInvalid}
      label="Invalid"
    >
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueInvalid}</pre>
  </div>
</div>

<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Icon from '@smui/select/icon';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let value = '';
  let valueHelperText = '';
  let valueLeadingIcon = '';
  let valueInvalid = '';
</script>

<style>
  * :global(.shaped-outlined),
  * :global(.shaped-outlined .mdc-select__anchor) {
    border-radius: 28px;
  }
  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading
    ) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(
      .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing
    ) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  *
    :global(
      .shaped-outlined.mdc-select--with-leading-icon
        .mdc-notched-outline:not(.mdc-notched-outline--notched)
        .mdc-floating-label
    ) {
    left: 16px;
  }
</style>
