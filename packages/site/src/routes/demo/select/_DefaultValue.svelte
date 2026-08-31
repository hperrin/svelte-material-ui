<div class="columns margins">
  <div>
    <Select
      key={(value) => `${value == null ? '' : value}`}
      bind:value={valueA}
      label="Wood type"
    >
      <Option value="">All</Option>
      {#each woodTypes as type}
        <Option value={type}>{type}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueA}</pre>
  </div>
  <div>
    <Select
      key={(value) => `${value == null ? '' : value}`}
      bind:value={valueB}
      label="Wood type"
    >
      <Option value="all">All</Option>
      {#each woodTypes as type}
        <Option value={type}>{type}</Option>
      {/each}
    </Select>

    <pre class="status">Selected: {valueB}</pre>
  </div>
</div>

<script lang="ts">
  import Select, { Option } from '@smui/select';

  let woodTypes = ['Mahogany', 'Oak', 'Walnut', 'Pine'];

  let valueA: string;
  let valueB: string = 'all';
</script>
