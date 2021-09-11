<!--
  Icons are normally discovered through their slot,
  but Svelte slots cannot be conditional, so you can
  use a fragment with a conditional icon inside and
  pass the `withLeadingIcon` prop to use a
  conditional icon.
-->
<div class="columns margins">
  <div>
    <Select
      withLeadingIcon={showLeadingIcons}
      bind:value={valueA}
      label="Standard"
    >
      <svelte:fragment slot="leadingIcon">
        {#if showLeadingIcons}
          <Icon class="material-icons">event</Icon>
        {/if}
      </svelte:fragment>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueA}</pre>
  </div>

  <div>
    <Select
      withLeadingIcon={showLeadingIcons}
      variant="filled"
      bind:value={valueB}
      label="Filled"
    >
      <svelte:fragment slot="leadingIcon">
        {#if showLeadingIcons}
          <Icon class="material-icons">event</Icon>
        {/if}
      </svelte:fragment>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueB}</pre>
  </div>

  <div>
    <Select
      withLeadingIcon={showLeadingIcons}
      variant="outlined"
      bind:value={valueC}
      label="Outlined"
    >
      <svelte:fragment slot="leadingIcon">
        {#if showLeadingIcons}
          <Icon class="material-icons">event</Icon>
        {/if}
      </svelte:fragment>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueC}</pre>
  </div>
</div>

<div>
  <Button on:click={() => (showLeadingIcons = !showLeadingIcons)}>
    Toggle Leading Icons
  </Button>
</div>

<script lang="ts">
  import Select, { Option } from '@smui/select';
  import Icon from '@smui/select/icon';
  import Button from '@smui/button';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valueA = '';
  let valueB = '';
  let valueC = '';

  let showLeadingIcons = true;
</script>
