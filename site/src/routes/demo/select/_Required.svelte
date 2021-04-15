<div class="columns margins">
  <div>
    <Select bind:value={valueA} label="Standard" required>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueA}</pre>
  </div>

  <div>
    <Select variant="filled" bind:value={valueB} label="Filled" required>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueB}</pre>
  </div>

  <div>
    <Select variant="outlined" bind:value={valueC} label="Outlined" required>
      <Option value="" />
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueC}</pre>
  </div>
</div>

<script>
  import Select, { Option } from '@smui/select';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let valueA = '';
  let valueB = '';
  let valueC = '';
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
</style>
