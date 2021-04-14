<div class="columns margins" style="justify-content: flex-start;">
  <div>
    <Select bind:value label="Select Menu">
      {#each fruits as fruit}
        <Option value={fruit}>{fruit}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {value}</pre>
  </div>
</div>

<script>
  import Select, { Option } from '@smui/select';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let value = 'Orange';
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
