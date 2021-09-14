<div class="columns margins">
  <div>
    <Select bind:value label="Fruit">
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {value}</pre>
  </div>

  <div>
    <Select bind:value={valueHelperText} label="With Helper Text">
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
      <svelte:fragment slot="helperText">Helper text.</svelte:fragment>
    </Select>

    <pre class="status">Selected: {valueHelperText}</pre>
  </div>

  <div>
    <Select bind:value={valueLeadingIcon} label="Leading Icon">
      <Icon class="material-icons" slot="leadingIcon">event</Icon>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueLeadingIcon}</pre>
  </div>

  <div>
    <Select invalid bind:value={valueInvalid} label="Invalid">
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
