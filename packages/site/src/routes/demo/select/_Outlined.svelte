<div class="columns margins">
  <div>
    <Select variant="outlined" bind:value label="Fruit">
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {value}</pre>
  </div>

  <div>
    <Select
      variant="outlined"
      bind:value={valueHelperText}
      label="With Helper Text"
    >
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
      {#snippet helperText()}
        Helper text.
      {/snippet}
    </Select>

    <pre class="status">Selected: {valueHelperText}</pre>
  </div>

  <div>
    <Select
      variant="outlined"
      bind:value={valueLeadingIcon}
      label="Leading Icon"
    >
      {#snippet leadingIcon()}
        <Icon class="material-icons">event</Icon>
      {/snippet}
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueLeadingIcon}</pre>
  </div>

  <div>
    <Select
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

  let value = $state('');
  let valueHelperText = $state('');
  let valueLeadingIcon = $state('');
  let valueInvalid = $state('');
</script>
